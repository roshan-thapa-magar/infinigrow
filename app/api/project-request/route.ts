import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/mongodb";
import { sendEmail } from "@/lib/email";

export const runtime = "nodejs";

type RequestFields = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  existingWebsite: string;
  hearAboutUs: string;
  otherHearAboutUs: string;
  helpType: string;
  otherHelpType: string;
  preferredContact: string;
  description: string;
  budget: string;
  timeline: string;
  agreed: boolean;
};

interface UploadedFile {
  name: string;
  url: string;
  publicId: string;
  size: number;
  type: string;
}

function extractFields(formData: FormData): RequestFields {
  return {
    fullName: String(formData.get("fullName") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    country: String(formData.get("country") || "").trim(),
    company: String(formData.get("company") || "").trim(),
    existingWebsite: String(formData.get("existingWebsite") || "").trim(),
    hearAboutUs: String(formData.get("hearAboutUs") || "").trim(),
    otherHearAboutUs: String(formData.get("otherHearAboutUs") || "").trim(),
    helpType: String(formData.get("helpType") || "").trim(),
    otherHelpType: String(formData.get("otherHelpType") || "").trim(),
    preferredContact: String(formData.get("preferredContact") || "email").trim(),
    description: String(formData.get("description") || "").trim(),
    budget: String(formData.get("budget") || "").trim(),
    timeline: String(formData.get("timeline") || "").trim(),
    agreed: String(formData.get("agreed") || "false") === "true",
  };
}

function extractUploadedFiles(formData: FormData): UploadedFile[] {
  const raw = formData.get("uploadedFiles");
  if (!raw) return [];

  try {
    const parsed = JSON.parse(String(raw));
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is UploadedFile =>
        item &&
        typeof item.name === "string" &&
        typeof item.url === "string" &&
        typeof item.publicId === "string"
    );
  } catch (error) {
    console.error("Failed to parse uploadedFiles field:", error);
    return [];
  }
}

// Simple confirmation message (Plain text only)
function generateConfirmationMessage(fields: RequestFields): string {
  return `
Dear ${fields.fullName},

Thank you for submitting your request to Infinigrow. We have received your submission successfully.

Our team will review your requirements and get back to you within 24 hours.

If you have any questions, please feel free to reply to this email.

Best regards,
Infinigrow Team
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const fields = extractFields(formData);
    const uploadedFiles = extractUploadedFiles(formData);

    console.log("📝 Processing project request for:", fields.email);

    // Save to MongoDB
    const collection = await getCollection("projectRequests");
    const result = await collection.insertOne({
      ...fields,
      files: uploadedFiles,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log("✅ Data saved to MongoDB");

    // Send confirmation email to the requestor
    if (fields.email) {
      console.log(`📧 Attempting to send confirmation email to: ${fields.email}`);
      
      try {
        const message = generateConfirmationMessage(fields);
        
        const emailResult = await sendEmail({
          to: fields.email,
          subject: `Thank you for your submission - Infinigrow`,
          text: message,
          html: message.replace(/\n/g, '<br>'),
        });
        
        console.log(`✅ Confirmation email sent successfully to ${fields.email}`);
        console.log(`📧 Email message ID: ${emailResult.messageId}`);
      } catch (emailError) {
        console.error("❌ Failed to send confirmation email:", emailError);
        if (emailError instanceof Error) {
          console.error("Error details:", {
            message: emailError.message,
            stack: emailError.stack,
          });
        }
      }
    } else {
      console.warn("⚠️ No email provided, skipping email send");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Request submitted successfully",
        requestId: result.insertedId.toString(),
        status: "completed",
        fileCount: uploadedFiles.length,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Project request error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const collection = await getCollection("projectRequests");

    const requests = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const formattedRequests = requests.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));

    return NextResponse.json(
      {
        success: true,
        message: "Project requests fetched successfully",
        count: formattedRequests.length,
        data: formattedRequests,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Fetch project requests error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to fetch project requests.",
      },
      { status: 500 }
    );
  }
}