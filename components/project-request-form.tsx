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
import { useTranslations } from "next-intl";

// ------------------------------------------------------------
// DATA
// ------------------------------------------------------------

const getHelpTypes = (t: any) => [
  t("helpTypes.webApplication"),
  t("helpTypes.mobileApplication"),
  t("helpTypes.saasPlatform"),
  t("helpTypes.ecommerce"),
  t("helpTypes.businessManagement"),
  t("helpTypes.customSoftware"),
  t("helpTypes.other"),
];

const getBudgets = (t: any) => [
  t("budgets.dontKnow"),
  t("budgets.under100k"),
  t("budgets.100kTo300k"),
  t("budgets.300kTo500k"),
  t("budgets.500kTo1M"),
  t("budgets.above1M"),
];

const getTimelines = (t: any) => [
  t("timelines.asap"),
  t("timelines.within1Month"),
  t("timelines.oneToThreeMonths"),
  t("timelines.threeToSixMonths"),
  t("timelines.notSure"),
];

const getHearAboutUsOptions = (t: any) => [
  t("hearAboutUsOptions.google"),
  t("hearAboutUsOptions.socialMedia"),
  t("hearAboutUsOptions.referral"),
  t("hearAboutUsOptions.linkedin"),
  t("hearAboutUsOptions.facebook"),
  t("hearAboutUsOptions.existingClient"),
  t("hearAboutUsOptions.event"),
  t("hearAboutUsOptions.other"),
];

const contactMethods = ["email", "phone", "whatsapp"] as const;

// ------------------------------------------------------------
// DRAFT STORAGE
// ------------------------------------------------------------

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
  const t = useTranslations("ProjectRequest");
  
  const helpTypes = getHelpTypes(t);
  const budgets = getBudgets(t);
  const timelines = getTimelines(t);
  const hearAboutUsOptions = getHearAboutUsOptions(t);

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
    if (!hasLoadedDraft.current) return;
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

    const duplicateFiles = incomingFiles.filter((file) =>
      files.some((f) => f.name === file.name) ||
      uploadedFiles.some((f) => f.name === file.name)
    );

    if (duplicateFiles.length > 0) {
      setErrors((prev) => ({
        ...prev,
        files: `${duplicateFiles.map(f => f.name).join(", ")} ${t("errors.filesDuplicate")}`,
      }));
      event.target.value = "";
      return;
    }

    const totalFiles = files.length + incomingFiles.length;

    if (totalFiles > 5) {
      setErrors((prev) => ({
        ...prev,
        files: t("errors.filesMax"),
      }));
      event.target.value = "";
      return;
    }

    const tooLarge = incomingFiles.find((file) => file.size > 10 * 1024 * 1024);
    if (tooLarge) {
      setErrors((prev) => ({
        ...prev,
        files: `${tooLarge.name} ${t("errors.filesSize")}`,
      }));
      event.target.value = "";
      return;
    }

    setErrors((prev) => ({ ...prev, files: "" }));

    setFiles((prev) => [...prev, ...incomingFiles]);
    setIsUploading(true);

    for (const file of incomingFiles) {
      const fileName = file.name;
      setUploadingFiles((prev) => [...prev, fileName]);
      setUploadProgress((prev) => ({ ...prev, [fileName]: 0 }));

      try {
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

        setUploadedFiles((prev) => [...prev, uploaded]);

        setTimeout(() => {
          setUploadingFiles((prev) => prev.filter((name) => name !== fileName));
          setUploadProgress((prev) => {
            const newProgress = { ...prev };
            delete newProgress[fileName];
            return newProgress;
          });
        }, 500);
      } catch (error) {
        setUploadingFiles((prev) => prev.filter((name) => name !== fileName));
        setUploadProgress((prev) => {
          const newProgress = { ...prev };
          delete newProgress[fileName];
          return newProgress;
        });

        setUploadErrors((prev) => ({
          ...prev,
          [fileName]: error instanceof Error ? error.message : "Upload failed",
        }));
      }
    }

    const checkUploadsComplete = setInterval(() => {
      if (uploadingFiles.length === 0) {
        setIsUploading(false);
        clearInterval(checkUploadsComplete);
      }
    }, 500);

    event.target.value = "";
  };

  // ----------------------------------------------------------
  // REMOVE FILE
  // ----------------------------------------------------------

  const removeFile = async (fileName: string) => {
    if (deletingFiles.includes(fileName)) return;

    const uploadedFile = uploadedFiles.find((f) => f.name === fileName);

    if (uploadedFile) {
      setDeletingFiles((prev) => [...prev, fileName]);

      try {
        const resourceType = uploadedFile.type?.startsWith("image/") ? "image" : "raw";
        await deleteFileFromCloudinary(uploadedFile.publicId, resourceType);
      } catch (error) {
        console.error(`Failed to delete ${fileName} from Cloudinary:`, error);
      } finally {
        setDeletingFiles((prev) => prev.filter((name) => name !== fileName));
      }

      setUploadedFiles((prev) => prev.filter((f) => f.name !== fileName));
    }

    setFiles((prev) => prev.filter((f) => f.name !== fileName));

    setUploadErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fileName];
      return newErrors;
    });

    setUploadingFiles((prev) => prev.filter((name) => name !== fileName));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
  };

  // ----------------------------------------------------------
  // PREVIEW
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
  // VALIDATION
  // ----------------------------------------------------------

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t("errors.fullName");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("errors.email");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("errors.emailInvalid");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("errors.phone");
    }

    if (!formData.country) {
      newErrors.country = t("errors.country");
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));

    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.helpType) {
      newErrors.helpType = t("errors.helpType");
    }

    if (formData.helpType === t("helpTypes.other") && !formData.otherHelpType.trim()) {
      newErrors.otherHelpType = t("errors.otherHelpType");
    }

    if (!formData.description.trim()) {
      newErrors.description = t("errors.description");
    }

    if (!formData.budget) {
      newErrors.budget = t("errors.budget");
    }

    if (!formData.timeline) {
      newErrors.timeline = t("errors.timeline");
    }

    if (!formData.agreed) {
      newErrors.agreed = t("errors.agreement");
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));

    return Object.keys(newErrors).length === 0;
  };

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------

  const goToStep2 = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateStep1()) {
      return;
    }

    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBackToStep1 = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ----------------------------------------------------------
  // SUBMIT
  // ----------------------------------------------------------

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isUploading || uploadingFiles.length > 0) {
      setErrors((prev) => ({
        ...prev,
        submit: t("errors.uploadWait"),
      }));
      return;
    }

    if (Object.keys(uploadErrors).length > 0) {
      setErrors((prev) => ({
        ...prev,
        submit: t("errors.uploadFailed"),
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
      data.append("uploadedFiles", JSON.stringify(uploadedFiles));

      const response = await fetch("/api/project-request", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit your request.");
      }

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
        submit: error instanceof Error ? error.message : t("errors.submit"),
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
                        {(file.size / 1024 / 1024).toFixed(2)} {t("fileStatus.size")} · {progress}%
                      </p>
                    </div>
                  ) : (
                    <p className="truncate text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} {t("fileStatus.size")}
                      {isUploaded && ` ✓ ${t("fileStatus.uploaded")}`}
                      {hasError && ` ❌ ${errorMessage || t("fileStatus.failed")}`}
                      {isDeleting && ` 🗑️ ${t("fileStatus.deleting")}`}
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
                    {(uploaded.size / 1024 / 1024).toFixed(2)} {t("fileStatus.size")} · ✓ {t("fileStatus.uploaded")} ({t("fileStatus.restored")})
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
  // STEP INDICATOR
  // ----------------------------------------------------------

  const renderStepIndicator = () => {
    const currentStep = typeof step === "number" ? step : 1;

    return (
      <div className="flex items-center justify-between gap-2 border-b bg-gradient-to-r from-primary/5 to-transparent px-6 py-4 sm:gap-3 sm:px-10">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          {[
            { number: 1, label: t("stepIndicator.step1") },
            { number: 2, label: t("stepIndicator.step2") },
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

        {hasDraft && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearDraft}
            className="shrink-0 gap-1.5 text-xs text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span className="hidden md:block">{t("draft.clear")}</span>
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
            {t("success.title")}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            {t("success.description")}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="gap-1">
              <Clock className="h-3 w-3" />
              {t("success.badges.response")}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Users className="h-3 w-3" />
              {t("success.badges.delivered")}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Shield className="h-3 w-3" />
              {t("success.badges.consultation")}
            </Badge>
          </div>

          <Button className="mt-8 w-full sm:w-auto" onClick={resetForm}>
            {t("success.resetButton")}
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
      <Card className="overflow-hidden border shadow-sm">
        <CardContent className="p-0">
          {renderStepIndicator()}

          <form onSubmit={handleSubmit}>
            <div className="px-6 py-8 sm:px-10">
              <div className="space-y-6">
                {/* HELP TYPE */}
                <FormField label={t("step2.helpType")} required error={errors.helpType}>
                  <div className="space-y-3">
                    <Select
                      value={formData.helpType}
                      onValueChange={(value) => {
                        updateField("helpType", value ?? "");
                        if (value !== t("helpTypes.other")) {
                          updateField("otherHelpType", "");
                        }
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t("step2.helpTypePlaceholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        {helpTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {formData.helpType === t("helpTypes.other") && (
                      <Input
                        value={formData.otherHelpType}
                        onChange={(event) => updateField("otherHelpType", event.target.value)}
                        placeholder={t("step2.helpTypeOther")}
                      />
                    )}

                    {errors.otherHelpType && (
                      <p className="text-xs text-destructive">{errors.otherHelpType}</p>
                    )}
                  </div>
                </FormField>

                {/* PREFERRED CONTACT */}
                <div className="space-y-2">
                  <Label>{t("step2.preferredContact")}</Label>
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
                        <span className="truncate">{t(`step2.contactMethods.${method}`)}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <FormField label={t("step2.projectDescription")} required error={errors.description}>
                  <Textarea
                    value={formData.description}
                    onChange={(event) => updateField("description", event.target.value)}
                    placeholder={t("step2.projectDescriptionPlaceholder")}
                    className="min-h-[140px] resize-none"
                  />
                </FormField>

                {/* WEBSITE */}
                <FormField label={t("step2.existingWebsite")} optional>
                  <Input
                    type="url"
                    value={formData.existingWebsite}
                    onChange={(event) => updateField("existingWebsite", event.target.value)}
                    placeholder={t("step2.existingWebsitePlaceholder")}
                  />
                </FormField>

                {/* FILE UPLOAD */}
                <div>
                  <Label className="text-sm font-medium">
                    {t("step2.fileUpload")}
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
                      {isUploading ? t("step2.fileUploading") : t("step2.fileUploadClick")}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {t("step2.fileUploadHint")}
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

                  {renderFileList()}
                </div>

                {/* BUDGET + TIMELINE */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label={t("step2.budget")} required error={errors.budget}>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => updateField("budget", value ?? "")}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t("step2.budgetPlaceholder")} />
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

                  <FormField label={t("step2.timeline")} required error={errors.timeline}>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) => updateField("timeline", value ?? "")}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t("step2.timelinePlaceholder")} />
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
                      {t("step2.agreement")}
                      <span className="text-destructive"> *</span>
                    </Label>
                    {errors.agreed && <p className="mt-1 text-xs text-destructive">{errors.agreed}</p>}
                  </div>
                </div>
              </div>
            </div>

            {errors.submit && (
              <div className="mx-6 mb-4 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive sm:mx-10">
                {errors.submit}
              </div>
            )}

            <div className="flex flex-col-reverse gap-3 border-t bg-muted/20 px-6 py-6 sm:flex-row sm:justify-between sm:px-10">
              <Button
                type="button"
                variant="outline"
                onClick={goBackToStep1}
                className="w-full gap-2 sm:w-auto"
                disabled={isSubmitting}
              >
                <ArrowLeft className="h-4 w-4" />
                {t("step2.backButton")}
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
                    {t("step2.submitting")}
                  </>
                ) : isUploading || uploadingFiles.length > 0 ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("step2.uploadingFiles")}
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    {t("step2.submitButton")}
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
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
              <FormField label={t("step1.fullName")} required error={errors.fullName}>
                <Input
                  value={formData.fullName}
                  onChange={(event) => updateField("fullName", event.target.value)}
                  placeholder={t("step1.fullNamePlaceholder")}
                />
              </FormField>

              <FormField label={t("step1.email")} required error={errors.email}>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder={t("step1.emailPlaceholder")}
                />
              </FormField>

              <FormField label={t("step1.phone")} required error={errors.phone}>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder={t("step1.phonePlaceholder")}
                />
              </FormField>

              <FormField label={t("step1.country")} required error={errors.country}>
                <CountryDropdown
                  placeholder={t("step1.countryPlaceholder")}
                  defaultValue={formData.country}
                  onChange={(country: Country) => updateField("country", country.alpha3)}
                />
              </FormField>

              <FormField label={t("step1.company")} optional>
                <Input
                  value={formData.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  placeholder={t("step1.companyPlaceholder")}
                />
              </FormField>

              <FormField label={t("step1.hearAboutUs")} optional>
                <div className="space-y-3">
                  <Select
                    value={formData.hearAboutUs}
                    onValueChange={(value) => {
                      updateField("hearAboutUs", value ?? "");
                      if (value !== t("hearAboutUsOptions.other")) {
                        updateField("otherHearAboutUs", "");
                      }
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t("step1.hearAboutUsPlaceholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      {hearAboutUsOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {formData.hearAboutUs === t("hearAboutUsOptions.other") && (
                    <Input
                      value={formData.otherHearAboutUs}
                      onChange={(event) => updateField("otherHearAboutUs", event.target.value)}
                      placeholder={t("step1.hearAboutUsOther")}
                    />
                  )}
                </div>
              </FormField>
            </div>
          </div>

          <div className="flex justify-end border-t bg-muted/20 px-6 py-6 sm:px-10">
            <Button type="submit" size="lg" className="w-full gap-2 sm:w-auto">
              {t("step1.nextButton")}
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