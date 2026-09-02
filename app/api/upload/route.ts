import { NextRequest, NextResponse } from "next/server";
import { UploadApiResponse } from "cloudinary";
import cloudinary from "@/lib/cloudinary";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files").filter((f): f is File => 
      f instanceof File && f.size > 0
    );

    if (!files.length) {
      return NextResponse.json(
        { success: false, message: "No files provided" },
        { status: 400 }
      );
    }

    const uploadedFiles = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const isImage = file.type.startsWith("image/");

      const result = await new Promise<UploadApiResponse>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "infiniGrow/project-requests",
            resource_type: isImage ? "image" : "raw",
            use_filename: true,
            unique_filename: true,
            ...(isImage && { quality: "auto", fetch_format: "auto" }),
          },
          (error, result) => {
            if (error) reject(error);
            else if (!result) reject(new Error("Upload failed"));
            else resolve(result);
          }
        );
        uploadStream.end(buffer);
      });

      uploadedFiles.push({
        name: file.name,
        url: result.secure_url,
        publicId: result.public_id,
        size: file.size,
        type: file.type,
      });
    }

    return NextResponse.json({
      success: true,
      files: uploadedFiles,
      count: uploadedFiles.length,
    }, { status: 200 });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : "Upload failed",
    }, { status: 500 });
  }
}