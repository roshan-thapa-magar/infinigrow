import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/mongodb";

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

// The frontend uploads files to Cloudinary *before* submitting the
// form (via /api/upload), then sends the resulting metadata here as
// a JSON string under "uploadedFiles" — it never sends raw File
// objects under a "files" field, so this route must read that field
// instead of trying to re-upload anything itself.
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

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const fields = extractFields(formData);
    const uploadedFiles = extractUploadedFiles(formData);

    const collection = await getCollection("projectRequests");

    const result = await collection.insertOne({
      ...fields,
      files: uploadedFiles,
      status: "completed",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

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