"use client";

import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle,
  Clock,
  FileText,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Shield,
  Upload,
  Users,
  AlertCircle,
  Trash2,
  Eye,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CountryDropdown, type Country } from "@/components/ui/country-dropdown";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// ------------------------------------------------------------
// DATA
// ------------------------------------------------------------

const helpTypes = [
  "Web Application",
  "Mobile Application",
  "SaaS Platform",
  "E-commerce",
  "Business Management System",
  "Custom Software",
  "Other",
];

const budgets = [
  "I don't know yet",
  "Under NPR 100,000",
  "NPR 100,000 – 300,000",
  "NPR 300,000 – 500,000",
  "NPR 500,000 – 1,000,000",
  "Above NPR 1,000,000",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "I'm not sure",
];

const contactMethods = ["email", "phone", "whatsapp"] as const;

const hearAboutUsOptions = [
  "Google Search",
  "Social Media",
  "Referral from a Friend/Colleague",
  "LinkedIn",
  "Facebook",
  "Existing Client",
  "Event or Conference",
  "Other",
];

// ------------------------------------------------------------
// DRAFT STORAGE
// ------------------------------------------------------------

// The draft stores the form fields plus any files that finished
// uploading to Cloudinary (uploadedFiles is just name/url/publicId
// metadata, so it's plain JSON and safe to persist). A raw browser
// File object that's still mid-upload or only just picked can't be
// serialized/restored after a reload — the browser won't let a page
// rehydrate a File without the user re-selecting it — so those are
// left out on purpose.
const DRAFT_STORAGE_KEY = "project-request-form-draft";

interface DraftPayload {
  formData: FormData;
  uploadedFiles: UploadedFile[];
}

// ------------------------------------------------------------
// FORM TYPE
// ------------------------------------------------------------

interface FormData {
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
  preferredContact: (typeof contactMethods)[number];
  description: string;
  budget: string;
  timeline: string;
  agreed: boolean;
}

interface UploadedFile {
  name: string;
  url: string;
  publicId: string;
  size: number;
  type: string;
}

type PreviewKind = "image" | "pdf" | "other";

// The `type` an upload API reports isn't always a clean MIME string
// (it can be missing, or something generic like application/octet-stream),
// so fall back to the file extension before giving up and treating it
// as a non-previewable file.
function getPreviewKind(file: UploadedFile): PreviewKind {
  const mime = file.type?.toLowerCase() || "";
  if (mime.startsWith("image/")) return "image";
  if (mime === "application/pdf") return "pdf";

  const extension = file.name.split(".").pop()?.toLowerCase() || "";
  if (["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp"].includes(extension)) {
    return "image";
  }
  if (extension === "pdf") return "pdf";

  return "other";
}

// The in-app preview modal is only built for PDFs (it needs a blob
// fetch to bypass Cloudinary's raw-resource Content-Disposition
// header). Everything else — images included — just opens the
// Cloudinary URL directly in a new tab instead of trying to render
// inline.
function openFileDirectly(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

// ------------------------------------------------------------
// INITIAL DATA
// ------------------------------------------------------------

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  company: "",
  existingWebsite: "",
  hearAboutUs: "",
  otherHearAboutUs: "",
  helpType: "",
  otherHelpType: "",
  preferredContact: "email",
  description: "",
  budget: "",
  timeline: "",
  agreed: false,
};

type Step = 1 | 2 | "success";

// ------------------------------------------------------------
// COMPONENT
// ------------------------------------------------------------

export default function ProjectRequestForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [uploadingFiles, setUploadingFiles] = useState<string[]>([]);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [uploadErrors, setUploadErrors] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [deletingFiles, setDeletingFiles] = useState<string[]>([]);
  const [hasDraft, setHasDraft] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const hasLoadedDraft = useRef(false);

  // ----------------------------------------------------------
  // LOAD DRAFT ON MOUNT
  // ----------------------------------------------------------

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(DRAFT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<DraftPayload>;

        if (parsed.formData) {
          setFormData((previous) => ({ ...previous, ...parsed.formData }));
        }

        if (parsed.uploadedFiles && parsed.uploadedFiles.length > 0) {
          setUploadedFiles(parsed.uploadedFiles);
        }

        setHasDraft(true);
      }
    } catch (error) {
      console.error("Failed to load saved draft:", error);
    } finally {
      hasLoadedDraft.current = true;
    }
  }, []);

  // ----------------------------------------------------------
  // AUTO-SAVE DRAFT ON CHANGE
  // ----------------------------------------------------------

  useEffect(() => {
    // Don't run until the initial draft load above has completed,
    // otherwise the empty initial state would overwrite a saved draft.
    if (!hasLoadedDraft.current) return;

    // Don't keep auto-saving after a successful submission.
    if (step === "success") return;

    const isEmpty =
      JSON.stringify(formData) === JSON.stringify(initialFormData) &&
      uploadedFiles.length === 0;

    try {
      if (isEmpty) {
        window.localStorage.removeItem(DRAFT_STORAGE_KEY);
        setHasDraft(false);
      } else {
        const payload: DraftPayload = { formData, uploadedFiles };
        window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(payload));
        setHasDraft(true);
      }
    } catch (error) {
      console.error("Failed to save draft:", error);
    }
  }, [formData, uploadedFiles, step]);

  // ----------------------------------------------------------
  // CLEAR SAVED DRAFT
  // ----------------------------------------------------------

  const clearDraft = () => {
    try {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
    } catch (error) {
      console.error("Failed to clear saved draft:", error);
    }
    setFormData({ ...initialFormData });
    // Note: this only clears the restored *metadata* for files that were
    // already uploaded to Cloudinary — it does not delete them from
    // Cloudinary itself. Add a deleteFileFromCloudinary call per file here
    // if you want "Clear saved data" to also remove them from storage.
    setUploadedFiles([]);
    setFiles([]);
    setHasDraft(false);
  };

  // ----------------------------------------------------------
  // UPDATE FIELD
  // ----------------------------------------------------------

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
      submit: "",
    }));
  };

  // ----------------------------------------------------------
  // UPLOAD FILE TO CLOUDINARY
  // ----------------------------------------------------------

  const uploadFile = async (file: File): Promise<UploadedFile> => {
    const formData = new FormData();
    formData.append("files", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Upload failed");
    }

    if (!result.success || !result.files || !result.files.length) {
      throw new Error("Upload failed");
    }

    return result.files[0];
  };

  // ----------------------------------------------------------
  // DELETE FILE FROM CLOUDINARY
  // ----------------------------------------------------------

  const deleteFileFromCloudinary = async (publicId: string, resourceType: string = "raw") => {
    const response = await fetch("/api/delete-file", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ publicId, resourceType }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Delete failed");
    }

    return result;
  };

  // ----------------------------------------------------------
  // HANDLE FILE SELECTION
  // ----------------------------------------------------------

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const incomingFiles = Array.from(selectedFiles);

    // Check for duplicates
    const duplicateFiles = incomingFiles.filter((file) =>
      files.some((f) => f.name === file.name) ||
      uploadedFiles.some((f) => f.name === file.name)
    );

    if (duplicateFiles.length > 0) {
      setErrors((prev) => ({
        ...prev,
        files: `${duplicateFiles.map(f => f.name).join(", ")} already uploaded.`,
      }));
      event.target.value = "";
      return;
    }

    const totalFiles = files.length + incomingFiles.length;

    // Check max files
    if (totalFiles > 5) {
      setErrors((prev) => ({
        ...prev,
        files: "You can upload a maximum of 5 files.",
      }));
      event.target.value = "";
      return;
    }

    // Check file size
    const tooLarge = incomingFiles.find((file) => file.size > 10 * 1024 * 1024);
    if (tooLarge) {
      setErrors((prev) => ({
        ...prev,
        files: `${tooLarge.name} is larger than 10 MB.`,
      }));
      event.target.value = "";
      return;
    }

    // Clear errors
    setErrors((prev) => ({ ...prev, files: "" }));

    // Add files to list and start uploading
    setFiles((prev) => [...prev, ...incomingFiles]);
    setIsUploading(true);

    // Upload each file
    for (const file of incomingFiles) {
      const fileName = file.name;
      setUploadingFiles((prev) => [...prev, fileName]);
      setUploadProgress((prev) => ({ ...prev, [fileName]: 0 }));

      try {
        // Simulate progress
        let progress = 0;
        const progressInterval = setInterval(() => {
          progress += 10;
          if (progress >= 90) {
            clearInterval(progressInterval);
          }
          setUploadProgress((prev) => ({ ...prev, [fileName]: progress }));
        }, 200);

        const uploaded = await uploadFile(file);

        clearInterval(progressInterval);
        setUploadProgress((prev) => ({ ...prev, [fileName]: 100 }));

        // Store uploaded file info
        setUploadedFiles((prev) => [...prev, uploaded]);

        // Remove from uploading list after a short delay
        setTimeout(() => {
          setUploadingFiles((prev) => prev.filter((name) => name !== fileName));
          setUploadProgress((prev) => {
            const newProgress = { ...prev };
            delete newProgress[fileName];
            return newProgress;
          });
        }, 500);
      } catch (error) {
        // Remove from uploading list
        setUploadingFiles((prev) => prev.filter((name) => name !== fileName));
        setUploadProgress((prev) => {
          const newProgress = { ...prev };
          delete newProgress[fileName];
          return newProgress;
        });

        // Store error
        setUploadErrors((prev) => ({
          ...prev,
          [fileName]: error instanceof Error ? error.message : "Upload failed",
        }));
      }
    }

    // Check if all uploads are complete
    const checkUploadsComplete = setInterval(() => {
      if (uploadingFiles.length === 0) {
        setIsUploading(false);
        clearInterval(checkUploadsComplete);
      }
    }, 500);

    event.target.value = "";
  };

  // ----------------------------------------------------------
  // REMOVE FILE (WITH CLOUDINARY DELETE)
  // ----------------------------------------------------------

  const removeFile = async (fileName: string) => {
    // Check if file is in deleting state
    if (deletingFiles.includes(fileName)) return;

    // Find if file was uploaded to Cloudinary
    const uploadedFile = uploadedFiles.find((f) => f.name === fileName);

    // If uploaded, delete from Cloudinary
    if (uploadedFile) {
      setDeletingFiles((prev) => [...prev, fileName]);

      try {
        const resourceType = uploadedFile.type?.startsWith("image/") ? "image" : "raw";
        await deleteFileFromCloudinary(uploadedFile.publicId, resourceType);
        console.log(`✅ Deleted ${fileName} from Cloudinary`);
      } catch (error) {
        console.error(`❌ Failed to delete ${fileName} from Cloudinary:`, error);
        // Show error but still remove from UI
      } finally {
        // Remove from deleting list
        setDeletingFiles((prev) => prev.filter((name) => name !== fileName));
      }

      // Remove from uploaded files
      setUploadedFiles((prev) => prev.filter((f) => f.name !== fileName));
    }

    // Remove from files list
    setFiles((prev) => prev.filter((f) => f.name !== fileName));

    // Remove from upload errors if exists
    setUploadErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fileName];
      return newErrors;
    });

    // Remove from uploading list if still there
    setUploadingFiles((prev) => prev.filter((name) => name !== fileName));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
  };

  // ----------------------------------------------------------
  // EYE ICON: OPEN PREVIEW
  //
  // Images and other files: open the Cloudinary URL directly in a
  // new tab.
  // PDFs: open Google Docs Viewer (also in a new tab, not a modal) —
  // it fetches the file itself and renders it, no backend needed.
  // Note: this requires a publicly reachable URL, so it won't work
  // against localhost, only once deployed.
  // ----------------------------------------------------------

  const handlePreviewClick = (uploaded: UploadedFile) => {
    const kind = getPreviewKind(uploaded);
    if (kind === "pdf") {
      const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(
        uploaded.url
      )}&embedded=true`;
      openFileDirectly(viewerUrl);
    } else {
      openFileDirectly(uploaded.url);
    }
  };

  // ----------------------------------------------------------
  // STEP 1 VALIDATION
  // ----------------------------------------------------------

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!formData.country) {
      newErrors.country = "Please select your country.";
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));

    return Object.keys(newErrors).length === 0;
  };

  // ----------------------------------------------------------
  // STEP 2 VALIDATION
  // ----------------------------------------------------------

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.helpType) {
      newErrors.helpType = "Please select what we can help with.";
    }

    if (formData.helpType === "Other" && !formData.otherHelpType.trim()) {
      newErrors.otherHelpType = "Please specify what you need.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please tell us about your project.";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select your estimated budget.";
    }

    if (!formData.timeline) {
      newErrors.timeline = "Please select your expected timeline.";
    }

    if (!formData.agreed) {
      newErrors.agreed = "Please agree to the privacy policy to continue.";
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));

    return Object.keys(newErrors).length === 0;
  };

  // ----------------------------------------------------------
  // STEP 1 → STEP 2
  // ----------------------------------------------------------

  const goToStep2 = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateStep1()) {
      return;
    }

    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ----------------------------------------------------------
  // BACK
  // ----------------------------------------------------------

  const goBackToStep1 = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ----------------------------------------------------------
  // SUBMIT
  // ----------------------------------------------------------

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if files are still uploading
    if (isUploading || uploadingFiles.length > 0) {
      setErrors((prev) => ({
        ...prev,
        submit: "Please wait for all files to finish uploading.",
      }));
      return;
    }

    // Check for upload errors
    if (Object.keys(uploadErrors).length > 0) {
      setErrors((prev) => ({
        ...prev,
        submit: "Some files failed to upload. Please remove them and try again.",
      }));
      return;
    }

    if (!validateStep2()) {
      return;
    }

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, submit: "" }));

    try {
      const data = new FormData();

      // Append all fields
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("country", formData.country);
      data.append("company", formData.company);
      data.append("existingWebsite", formData.existingWebsite);
      data.append("hearAboutUs", formData.hearAboutUs);
      data.append("otherHearAboutUs", formData.otherHearAboutUs);
      data.append("helpType", formData.helpType);
      data.append("otherHelpType", formData.otherHelpType);
      data.append("preferredContact", formData.preferredContact);
      data.append("description", formData.description);
      data.append("budget", formData.budget);
      data.append("timeline", formData.timeline);
      data.append("agreed", String(formData.agreed));

      // Append uploaded file URLs instead of files
      data.append("uploadedFiles", JSON.stringify(uploadedFiles));

      const response = await fetch("/api/project-request", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit your request.");
      }

      // Submission succeeded — clear the saved draft.
      try {
        window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      } catch (error) {
        console.error("Failed to clear saved draft:", error);
      }
      setHasDraft(false);

      setStep("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Submit error:", error);
      setErrors({
        submit: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ----------------------------------------------------------
  // RESET
  // ----------------------------------------------------------

  const resetForm = () => {
    setFormData({ ...initialFormData });
    setFiles([]);
    setUploadedFiles([]);
    setUploadingFiles([]);
    setUploadProgress({});
    setUploadErrors({});
    setErrors({});
    setStep(1);
  };

  // ----------------------------------------------------------
  // RENDER FILE LIST
  // ----------------------------------------------------------

  const renderFileList = () => {
    if (files.length === 0 && uploadedFiles.length === 0) return null;

    // Combine files and show their status
    const fileItems = files.map((file) => {
      const fileName = file.name;
      const isUploading = uploadingFiles.includes(fileName);
      const isUploaded = uploadedFiles.some((f) => f.name === fileName);
      const hasError = uploadErrors[fileName];
      const isDeleting = deletingFiles.includes(fileName);
      const progress = uploadProgress[fileName] || 0;

      return {
        key: fileName,
        fileName,
        file,
        progress,
        isUploading,
        isUploaded,
        hasError: !!hasError,
        isDeleting,
        errorMessage: hasError,
      };
    });

    // Files that exist in uploadedFiles (i.e. already on Cloudinary,
    // whether from this session or restored from a saved draft) but
    // have no matching local File object — nothing above would ever
    // render these, since fileItems only walks `files`.
    const restoredItems = uploadedFiles.filter(
      (uploaded) => !files.some((f) => f.name === uploaded.name)
    );

    return (
      <div className="mt-3 space-y-2">
        {fileItems.map((item) => {
          const { key, fileName, file, progress, isUploading, isUploaded, hasError, isDeleting, errorMessage } = item;

          return (
            <div
              key={key}
              className={`flex items-center justify-between gap-2 rounded-lg border p-3 ${
                hasError ? "border-destructive/30 bg-destructive/5" : ""
              } ${isDeleting ? "opacity-50" : ""}`}
            >
              <div className="flex min-w-0 items-center gap-3 flex-1">
                {isUploading ? (
                  <Loader2 className="h-4 w-4 shrink-0 animate-spin text-primary" />
                ) : isDeleting ? (
                  <Loader2 className="h-4 w-4 shrink-0 animate-spin text-muted-foreground" />
                ) : isUploaded ? (
                  <Check className="h-4 w-4 shrink-0 text-green-500" />
                ) : hasError ? (
                  <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
                ) : (
                  <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />
                )}

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{fileName}</p>
                  {isUploading ? (
                    <div className="mt-1">
                      <div className="h-1.5 w-full rounded-full bg-muted">
                        <div
                          className="h-1.5 rounded-full bg-primary transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB · {progress}%
                      </p>
                    </div>
                  ) : (
                    <p className="truncate text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                      {isUploaded && " ✓ Uploaded"}
                      {hasError && ` ❌ ${errorMessage || "Failed"}`}
                      {isDeleting && " 🗑️ Deleting..."}
                    </p>
                  )}
                </div>
              </div>

              {!isUploading && !isDeleting && (
                <div className="flex shrink-0 items-center gap-1">
                  {isUploaded && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const uploaded = uploadedFiles.find((f) => f.name === fileName);
                        if (uploaded) handlePreviewClick(uploaded);
                      }}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile(fileName)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {isDeleting && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  disabled
                  className="shrink-0 text-muted-foreground"
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                </Button>
              )}
            </div>
          );
        })}

        {restoredItems.map((uploaded) => {
          const isDeleting = deletingFiles.includes(uploaded.name);

          return (
            <div
              key={uploaded.publicId}
              className={`flex items-center justify-between gap-2 rounded-lg border p-3 ${
                isDeleting ? "opacity-50" : ""
              }`}
            >
              <div className="flex min-w-0 items-center gap-3 flex-1">
                {isDeleting ? (
                  <Loader2 className="h-4 w-4 shrink-0 animate-spin text-muted-foreground" />
                ) : (
                  <Check className="h-4 w-4 shrink-0 text-green-500" />
                )}

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{uploaded.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {(uploaded.size / 1024 / 1024).toFixed(2)} MB · ✓ Uploaded (restored from draft)
                  </p>
                </div>
              </div>

              {!isDeleting ? (
                <div className="flex shrink-0 items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handlePreviewClick(uploaded)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile(uploaded.name)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button type="button" variant="ghost" size="icon" disabled className="shrink-0 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </Button>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // ----------------------------------------------------------
  // STEP INDICATOR (+ CLEAR SAVED DATA)
  // ----------------------------------------------------------

  const renderStepIndicator = () => {
    const currentStep = typeof step === "number" ? step : 1;

    return (
      <div className="flex items-center justify-between gap-2 border-b bg-gradient-to-r from-primary/5 to-transparent px-6 py-4 sm:gap-3 sm:px-10">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          {[
            { number: 1, label: "Contact Info" },
            { number: 2, label: "Project Details" },
          ].map((item, index) => (
            <div key={item.number} className="flex items-center gap-2 sm:gap-3">
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                  currentStep === item.number
                    ? "bg-primary text-primary-foreground"
                    : item.number < currentStep
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {item.number < currentStep ? <Check className="h-3 w-3" /> : item.number}
              </div>
              <span
                className={`hidden truncate text-xs font-medium sm:inline ${
                  currentStep === item.number ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
              {index === 0 && <div className="h-px w-4 shrink-0 bg-muted sm:w-8" />}
            </div>
          ))}
        </div>

        {/* Only shown when a draft is actually saved */}
        {hasDraft && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearDraft}
            className="shrink-0 gap-1.5 text-xs text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span className="hidden md:block">Clear draft</span>
          </Button>
        )}
      </div>
    );
  };

  // ----------------------------------------------------------
  // SUCCESS
  // ----------------------------------------------------------

  if (step === "success") {
    return (
      <Card className="border shadow-sm">
        <CardContent className="flex min-h-[400px] flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
            <Check className="h-8 w-8 text-green-500" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Request submitted successfully
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Thank you for reaching out. Our team will review your project details and get back to you soon.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="gap-1">
              <Clock className="h-3 w-3" />
              Response within 24 hours
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Users className="h-3 w-3" />
              100+ projects delivered
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Shield className="h-3 w-3" />
              No-obligation consultation
            </Badge>
          </div>

          <Button className="mt-8 w-full sm:w-auto" onClick={resetForm}>
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  // ----------------------------------------------------------
  // STEP 2
  // ----------------------------------------------------------

  if (step === 2) {
    return (
      <>
      <Card className="overflow-hidden border shadow-sm">
        <CardContent className="p-0">
          {renderStepIndicator()}

          <form onSubmit={handleSubmit}>
            <div className="px-6 py-8 sm:px-10">
              <div className="space-y-6">
                {/* HELP TYPE */}
                <FormField label="What can we help you with?" required error={errors.helpType}>
                  <div className="space-y-3">
                    <Select
                      value={formData.helpType}
                      onValueChange={(value) => {
                        updateField("helpType", value ?? "");
                        if (value !== "Other") {
                          updateField("otherHelpType", "");
                        }
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {helpTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {formData.helpType === "Other" && (
                      <Input
                        value={formData.otherHelpType}
                        onChange={(event) => updateField("otherHelpType", event.target.value)}
                        placeholder="Please specify what you need"
                      />
                    )}

                    {errors.otherHelpType && (
                      <p className="text-xs text-destructive">{errors.otherHelpType}</p>
                    )}
                  </div>
                </FormField>

                {/* PREFERRED CONTACT */}
                <div className="space-y-2">
                  <Label>Preferred Contact Method</Label>
                  <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                    {contactMethods.map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => updateField("preferredContact", method)}
                        className={`flex items-center justify-center gap-1.5 rounded-full border px-2 py-2 text-xs capitalize transition-colors sm:justify-start sm:px-4 sm:text-sm ${
                          formData.preferredContact === method
                            ? "border-primary bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        {method === "email" && <Mail className="h-3 w-3 shrink-0" />}
                        {method === "phone" && <Phone className="h-3 w-3 shrink-0" />}
                        {method === "whatsapp" && <MessageCircle className="h-3 w-3 shrink-0" />}
                        <span className="truncate">{method}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <FormField label="Tell us about your project" required error={errors.description}>
                  <Textarea
                    value={formData.description}
                    onChange={(event) => updateField("description", event.target.value)}
                    placeholder="What problem are you trying to solve? What would you like the software to do?"
                    className="min-h-[140px] resize-none"
                  />
                </FormField>

                {/* WEBSITE */}
                <FormField label="Existing Website URL" optional>
                  <Input
                    type="url"
                    value={formData.existingWebsite}
                    onChange={(event) => updateField("existingWebsite", event.target.value)}
                    placeholder="https://example.com"
                  />
                </FormField>

                {/* FILE UPLOAD */}
                <div>
                  <Label className="text-sm font-medium">
                    Attach a Brief or Reference File
                    <span className="ml-2 font-normal text-muted-foreground">Optional</span>
                  </Label>

                  <label
                    className={`mt-3 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed p-4 text-center transition-colors sm:p-6 ${
                      isUploading ? "opacity-50 cursor-not-allowed" : "hover:bg-muted/40"
                    }`}
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      {isUploading ? (
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                      ) : (
                        <Upload className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>

                    <p className="text-sm font-medium">
                      {isUploading ? "Uploading files..." : "Click to upload files"}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      PDF, DOCX, DOC, PNG, JPG · Max 10 MB each · Max 5 files
                    </p>

                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                      className="hidden"
                      onChange={handleFileChange}
                      disabled={isUploading || uploadingFiles.length > 0}
                    />
                  </label>

                  {errors.files && <p className="mt-2 text-xs text-destructive">{errors.files}</p>}

                  {/* Upload errors */}
                  {Object.keys(uploadErrors).length > 0 && (
                    <div className="mt-3 space-y-2">
                      {Object.entries(uploadErrors).map(([fileName, error]) => (
                        <div key={fileName} className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                          <span className="min-w-0 break-words">{fileName}: {error}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* File list - only show once */}
                  {renderFileList()}
                </div>

                {/* BUDGET + TIMELINE */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label="Estimated Budget" required error={errors.budget}>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => updateField("budget", value ?? "")}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgets.map((budget) => (
                          <SelectItem key={budget} value={budget}>
                            {budget}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>

                  <FormField label="Expected Timeline" required error={errors.timeline}>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) => updateField("timeline", value ?? "")}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        {timelines.map((timeline) => (
                          <SelectItem key={timeline} value={timeline}>
                            {timeline}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                </div>

                {/* AGREEMENT */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreed}
                    onCheckedChange={(checked) => updateField("agreed", checked === true)}
                    className="mt-0.5"
                  />
                  <div className="min-w-0">
                    <Label htmlFor="agreement" className="cursor-pointer text-sm font-normal leading-6">
                      I agree to the privacy policy and consent to being contacted regarding this project.
                      <span className="text-destructive"> *</span>
                    </Label>
                    {errors.agreed && <p className="mt-1 text-xs text-destructive">{errors.agreed}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* SUBMIT ERROR */}
            {errors.submit && (
              <div className="mx-6 mb-4 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive sm:mx-10">
                {errors.submit}
              </div>
            )}

            {/* FOOTER */}
            <div className="flex flex-col-reverse gap-3 border-t bg-muted/20 px-6 py-6 sm:flex-row sm:justify-between sm:px-10">
              <Button
                type="button"
                variant="outline"
                onClick={goBackToStep1}
                className="w-full gap-2 sm:w-auto"
                disabled={isSubmitting}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 sm:w-auto"
                disabled={isSubmitting || isUploading || uploadingFiles.length > 0}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : isUploading || uploadingFiles.length > 0 ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Uploading files...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Submit Request
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      </>
    );
  }

  // ----------------------------------------------------------
  // STEP 1
  // ----------------------------------------------------------

  return (
    <Card className="overflow-hidden border shadow-sm">
      <CardContent className="p-0">
        {renderStepIndicator()}

        <form onSubmit={goToStep2}>
          <div className="px-6 py-8 sm:px-10">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* FULL NAME */}
              <FormField label="Full Name" required error={errors.fullName}>
                <Input
                  value={formData.fullName}
                  onChange={(event) => updateField("fullName", event.target.value)}
                  placeholder="Your full name"
                />
              </FormField>

              {/* EMAIL */}
              <FormField label="Email Address" required error={errors.email}>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@example.com"
                />
              </FormField>

              {/* PHONE */}
              <FormField label="Phone Number" required error={errors.phone}>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="+977 98XXXXXXXX"
                />
              </FormField>

              {/* COUNTRY */}
              <FormField label="Country" required error={errors.country}>
                <CountryDropdown
                  placeholder="Select your country"
                  defaultValue={formData.country}
                  onChange={(country: Country) => updateField("country", country.alpha3)}
                />
              </FormField>

              {/* COMPANY */}
              <FormField label="Company Name" optional>
                <Input
                  value={formData.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  placeholder="Optional"
                />
              </FormField>

              {/* HEAR ABOUT US */}
              <FormField label="How Did You Hear About Us?" optional>
                <div className="space-y-3">
                  <Select
                    value={formData.hearAboutUs}
                    onValueChange={(value) => {
                      updateField("hearAboutUs", value ?? "");
                      if (value !== "Other") {
                        updateField("otherHearAboutUs", "");
                      }
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {hearAboutUsOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {formData.hearAboutUs === "Other" && (
                    <Input
                      value={formData.otherHearAboutUs}
                      onChange={(event) => updateField("otherHearAboutUs", event.target.value)}
                      placeholder="Please specify how you heard about us"
                    />
                  )}
                </div>
              </FormField>
            </div>
          </div>

          {/* NEXT */}
          <div className="flex justify-end border-t bg-muted/20 px-6 py-6 sm:px-10">
            <Button type="submit" size="lg" className="w-full gap-2 sm:w-auto">
              Next Step
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

// ------------------------------------------------------------
// FORM FIELD
// ------------------------------------------------------------

function FormField({
  label,
  required,
  optional,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
        {optional && <span className="ml-2 font-normal text-muted-foreground">Optional</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}