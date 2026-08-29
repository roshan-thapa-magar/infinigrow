"use client";

import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useState,
  useEffect,
  useRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Check,
  Clock,
  Coffee,
  FileText,
  Rocket,
  Shield,
  Upload,
  Users,
  X,
  Send,
  MessageCircle,
  Phone,
  Mail,
  Building,
  Loader2,
  Eye,
  Edit,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

const softwareTypes = [
  "Web Application",
  "Mobile Application",
  "Desktop Application",
  "SaaS Platform",
  "E-commerce",
  "Business Management System",
  "AI / Machine Learning Solution",
  "API / Backend System",
  "Custom Software",
  "Other",
];

const featureCategories = {
  "Core Features": [
    "User Registration & Login",
    "Admin Dashboard",
    "User Dashboard",
    "Role & Permission Management",
  ],
  "Business Features": [
    "Payment Integration",
    "Booking / Appointment",
    "Chat / Messaging",
    "File Management",
  ],
  "Advanced Features": [
    "Reports & Analytics",
    "Search & Filtering",
    "API Integration",
    "Third-Party Integration",
  ],
  "Other": ["Notifications", "Other"],
};

const users = [
  "Customers",
  "Employees",
  "Administrators",
  "Students",
  "Teachers",
  "Patients",
  "Vendors",
  "General Public",
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
  "More than 6 months",
  "I'm not sure",
];

/* -------------------------------------------------------------------------- */
/* FORM TYPE                                                                  */
/* -------------------------------------------------------------------------- */

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  projectName: string;
  softwareType: string;
  description: string;
  features: string[];
  users: string[];
  budget: string;
  timeline: string;
  launchDate: string;
  referenceUrl: string;
  message: string;
  agreed: boolean;
}

interface QuickFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  preferredContact: "email" | "phone" | "whatsapp";
  agreed: boolean;
}

/* -------------------------------------------------------------------------- */
/* INITIAL FORM                                                               */
/* -------------------------------------------------------------------------- */

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  projectName: "",
  softwareType: "",
  description: "",
  features: [],
  users: [],
  budget: "",
  timeline: "",
  launchDate: "",
  referenceUrl: "",
  message: "",
  agreed: false,
};

const initialQuickFormData: QuickFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  preferredContact: "email",
  agreed: false,
};

/* -------------------------------------------------------------------------- */
/* ANIMATION VARIANTS                                                        */
/* -------------------------------------------------------------------------- */

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideIn = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.4 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3 },
};

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

export default function ProjectRequestForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [quickFormData, setQuickFormData] = useState<QuickFormData>(initialQuickFormData);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [quickErrors, setQuickErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isQuickMode, setIsQuickMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quickSubmitted, setQuickSubmitted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [submissionType, setSubmissionType] = useState<"quick" | "full" | null>(
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  const totalSteps = 5;

  /* ------------------------------------------------------------------------ */
  /* AUTO-SAVE                                                                */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const savedData = localStorage.getItem("projectRequestFormData");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(parsed);
      } catch (e) {
        console.error("Failed to parse saved data:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (formData !== initialFormData) {
      localStorage.setItem("projectRequestFormData", JSON.stringify(formData));
      setIsSaved(true);
      const timer = setTimeout(() => setIsSaved(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [formData]);

  /* ------------------------------------------------------------------------ */
  /* UPDATE FIELD - FULL FORM                                                 */
  /* ------------------------------------------------------------------------ */

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  /* ------------------------------------------------------------------------ */
  /* UPDATE FIELD - QUICK FORM                                                */
  /* ------------------------------------------------------------------------ */

  const updateQuickField = <K extends keyof QuickFormData>(
    field: K,
    value: QuickFormData[K]
  ) => {
    setQuickFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setQuickErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  /* ------------------------------------------------------------------------ */
  /* TOGGLE ARRAY                                                             */
  /* ------------------------------------------------------------------------ */

  const toggleArrayValue = (
    field: "features" | "users",
    value: string
  ) => {
    setFormData((previous) => {
      const currentValues = previous[field];
      const exists = currentValues.includes(value);

      return {
        ...previous,
        [field]: exists
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  };

  /* ------------------------------------------------------------------------ */
  /* FILE CHANGE                                                              */
  /* ------------------------------------------------------------------------ */

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedFiles = Array.from(event.target.files);
    setFiles((previous) => [...previous, ...selectedFiles]);
    event.target.value = "";
  };

  /* ------------------------------------------------------------------------ */
  /* REMOVE FILE                                                              */
  /* ------------------------------------------------------------------------ */

  const removeFile = (index: number) => {
    setFiles((previous) => previous.filter((_, fileIndex) => fileIndex !== index));
  };

  /* ------------------------------------------------------------------------ */
  /* VALIDATION - QUICK FORM                                                  */
  /* ------------------------------------------------------------------------ */

  const validateQuickForm = () => {
    const newErrors: Record<string, string> = {};

    if (!quickFormData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!quickFormData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(quickFormData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!quickFormData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!quickFormData.message.trim()) {
      newErrors.message = "Please tell us what you need help with.";
    }

    if (!quickFormData.agreed) {
      newErrors.agreed = "Please agree to continue.";
    }

    setQuickErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ------------------------------------------------------------------------ */
  /* VALIDATION - FULL FORM                                                   */
  /* ------------------------------------------------------------------------ */

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
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
    }

    if (step === 2) {
      if (!formData.projectName.trim()) {
        newErrors.projectName = "Please enter your project name.";
      }

      if (!formData.softwareType) {
        newErrors.softwareType = "Please select a software type.";
      }

      if (!formData.description.trim()) {
        newErrors.description = "Please describe your project.";
      }
    }

    if (step === 4) {
      if (!formData.budget) {
        newErrors.budget = "Please select your estimated budget.";
      }

      if (!formData.timeline) {
        newErrors.timeline = "Please select your expected timeline.";
      }
    }

    if (step === 5) {
      if (!formData.agreed) {
        newErrors.agreed = "Please agree before submitting the request.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ------------------------------------------------------------------------ */
  /* SHOW PREVIEW - FULL FORM                                                 */
  /* ------------------------------------------------------------------------ */

  const handleShowPreview = () => {
    if (validateStep(currentStep)) {
      setShowPreview(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /* ------------------------------------------------------------------------ */
  /* SUBMIT - QUICK FORM                                                      */
  /* ------------------------------------------------------------------------ */

  const handleQuickSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateQuickForm()) return;

    // Show preview first
    setShowPreview(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ------------------------------------------------------------------------ */
  /* CONFIRM QUICK SUBMIT                                                     */
  /* ------------------------------------------------------------------------ */

  const confirmQuickSubmit = async () => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Quick Contact Submitted:", quickFormData);

      setSubmissionType("quick");
      setQuickSubmitted(true);
      setShowPreview(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ------------------------------------------------------------------------ */
  /* SUBMIT - FULL FORM                                                       */
  /* ------------------------------------------------------------------------ */

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const valid = validateStep(currentStep);
    if (!valid) return;

    // Show preview first
    setShowPreview(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ------------------------------------------------------------------------ */
  /* CONFIRM FULL SUBMIT                                                      */
  /* ------------------------------------------------------------------------ */

  const confirmFullSubmit = async () => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Project Request:", formData);
      console.log("Uploaded Files:", files);

      setSubmissionType("full");
      setSubmitted(true);
      setShowPreview(false);
      localStorage.removeItem("projectRequestFormData");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ------------------------------------------------------------------------ */
  /* RESET FORM                                                               */
  /* ------------------------------------------------------------------------ */

  const resetForm = () => {
    setFormData(initialFormData);
    setQuickFormData(initialQuickFormData);
    setFiles([]);
    setErrors({});
    setQuickErrors({});
    setSubmitted(false);
    setQuickSubmitted(false);
    setShowPreview(false);
    setCurrentStep(1);
    setSubmissionType(null);
    localStorage.removeItem("projectRequestFormData");
  };

  /* ------------------------------------------------------------------------ */
  /* STEP INDICATOR                                                           */
  /* ------------------------------------------------------------------------ */

  const renderStepIndicator = () => {
    if (isQuickMode) return null;

    const steps = [
      { number: 1, label: "Contact" },
      { number: 2, label: "Project" },
      { number: 3, label: "Requirements" },
      { number: 4, label: "Budget" },
      { number: 5, label: "Review" },
    ];

    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b px-6 py-6 sm:px-10"
      >
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-2">
              <motion.button
                type="button"
                whileHover={{ scale: step.number <= currentStep ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (step.number <= currentStep) {
                    setCurrentStep(step.number);
                    setShowPreview(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-all ${
                  step.number === currentStep
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : step.number < currentStep
                    ? "bg-primary/20 text-primary hover:bg-primary/30"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                disabled={step.number > currentStep}
              >
                {step.number < currentStep ? (
                  <Check className="h-3 w-3" />
                ) : (
                  step.number
                )}
              </motion.button>
              <span
                className={`hidden text-xs font-medium sm:block ${
                  step.number === currentStep
                    ? "text-foreground"
                    : step.number < currentStep
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`hidden h-px w-8 sm:block ${
                    step.number < currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  /* ------------------------------------------------------------------------ */
  /* PREVIEW MODAL                                                            */
  /* ------------------------------------------------------------------------ */

  const renderPreview = () => {
    const isQuick = isQuickMode;

    return (
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Preview Header */}
              <div className="mb-6 flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Review Your Submission</h3>
                    <p className="text-sm text-muted-foreground">
                      Please verify all information before submitting
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPreview(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Preview Content */}
              <div className="space-y-4">
                {isQuick ? (
                  /* Quick Form Preview */
                  <motion.div {...staggerContainer} className="space-y-3">
                    <motion.div {...fadeInUp} className="rounded-lg bg-muted/30 p-4">
                      <div className="grid gap-3">
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-sm text-muted-foreground">Name</span>
                          <span className="text-sm font-medium">{quickFormData.name}</span>
                        </div>
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-sm text-muted-foreground">Email</span>
                          <span className="text-sm font-medium">{quickFormData.email}</span>
                        </div>
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-sm text-muted-foreground">Phone</span>
                          <span className="text-sm font-medium">{quickFormData.phone}</span>
                        </div>
                        {quickFormData.company && (
                          <div className="flex justify-between border-b border-border/50 pb-2">
                            <span className="text-sm text-muted-foreground">Company</span>
                            <span className="text-sm font-medium">{quickFormData.company}</span>
                          </div>
                        )}
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-sm text-muted-foreground">Preferred Contact</span>
                          <span className="text-sm font-medium capitalize">
                            {quickFormData.preferredContact}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Message</span>
                          <span className="text-sm font-medium max-w-[60%] truncate">
                            {quickFormData.message}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  /* Full Form Preview */
                  <motion.div {...staggerContainer} className="space-y-3">
                    <div className="rounded-lg bg-muted/30 p-4">
                      <h4 className="mb-3 text-sm font-semibold">Project Summary</h4>
                      <div className="grid gap-3">
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-sm text-muted-foreground">Project</span>
                          <span className="text-sm font-medium">
                            {formData.projectName || "Not specified"}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-sm text-muted-foreground">Type</span>
                          <span className="text-sm font-medium">
                            {formData.softwareType || "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-sm text-muted-foreground">Budget</span>
                          <span className="text-sm font-medium">
                            {formData.budget || "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-sm text-muted-foreground">Timeline</span>
                          <span className="text-sm font-medium">
                            {formData.timeline || "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-sm text-muted-foreground">Features</span>
                          <span className="text-sm font-medium">
                            {formData.features.length > 0
                              ? `${formData.features.length} selected`
                              : "None selected"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Files</span>
                          <span className="text-sm font-medium">
                            {files.length > 0 ? `${files.length} file(s)` : "None"}
                          </span>
                        </div>
                      </div>
                    </div>
                    {formData.description && (
                      <div className="rounded-lg bg-muted/20 p-4">
                        <p className="text-sm text-muted-foreground">Description</p>
                        <p className="mt-1 text-sm">{formData.description}</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Preview Actions */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowPreview(false)}
                    className="gap-2"
                  >
                    <Edit className="h-4 w-4" />
                    Edit Information
                  </Button>
                  <Button
                    type="button"
                    onClick={isQuick ? confirmQuickSubmit : confirmFullSubmit}
                    disabled={isSubmitting}
                    className="gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Confirm & Submit
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  /* ------------------------------------------------------------------------ */
  /* SUCCESS SCREEN                                                           */
  /* ------------------------------------------------------------------------ */

  if (submitted || quickSubmitted) {
    const isQuick = submissionType === "quick";

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <Card className="border shadow-sm">
          <CardContent className="flex min-h-[400px] flex-col items-center justify-center px-6 py-16 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, delay: 0.2 }}
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10"
            >
              <Check className="h-8 w-8 text-green-500" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              {isQuick ? "We'll reach out shortly!" : "Request submitted successfully"}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
            >
              {isQuick
                ? "Thank you for reaching out. Our team will contact you within 24 hours to understand your requirements better."
                : "Thank you for contacting infiniGrow. Our business analysis team will review your project requirements and contact you soon for the next discussion."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex flex-wrap justify-center gap-2"
            >
              <Badge variant="outline" className="gap-1">
                <Clock className="h-3 w-3" /> Response within 24 hours
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Users className="h-3 w-3" /> 100+ projects delivered
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Shield className="h-3 w-3" /> No-obligation consultation
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button className="mt-8" onClick={resetForm}>
                {isQuick ? "Start a New Conversation" : "Submit Another Request"}
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  /* ------------------------------------------------------------------------ */
  /* QUICK FORM - RENDER                                                      */
  /* ------------------------------------------------------------------------ */

  if (isQuickMode) {
    return (
      <>
        {renderPreview()}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {/* Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-lg border bg-muted/30 p-4"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Coffee className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Quick Question Mode</p>
                  <p className="text-xs text-muted-foreground">
                    Get a fast response - we'll reach out within 24 hours
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsQuickMode(false)}
              >
                Switch to Detailed Form
              </Button>
            </div>
          </motion.div>

          <Card className="overflow-hidden border shadow-sm">
            <CardContent className="p-0">
              <form ref={formRef} onSubmit={handleQuickSubmit}>
                {/* Quick Form Header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b bg-gradient-to-r from-primary/5 to-transparent px-6 py-6 sm:px-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold tracking-tight">
                        Let's Talk About Your Project
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Fill in the details below and we'll get back to you quickly
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="px-6 py-8 sm:px-10">
                  <motion.div {...staggerContainer} className="space-y-6">
                    {/* Name */}
                    <motion.div {...fadeInUp} className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Users className="h-4 w-4" />
                          </div>
                          <Input
                            className="pl-10"
                            placeholder="John Doe"
                            value={quickFormData.name}
                            onChange={(e) => updateQuickField("name", e.target.value)}
                          />
                        </div>
                        <AnimatePresence>
                          {quickErrors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="text-xs text-destructive"
                            >
                              {quickErrors.name}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label>
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Mail className="h-4 w-4" />
                          </div>
                          <Input
                            className="pl-10"
                            type="email"
                            placeholder="john@example.com"
                            value={quickFormData.email}
                            onChange={(e) => updateQuickField("email", e.target.value)}
                          />
                        </div>
                        <AnimatePresence>
                          {quickErrors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="text-xs text-destructive"
                            >
                              {quickErrors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <Label>
                          Phone Number <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Phone className="h-4 w-4" />
                          </div>
                          <Input
                            className="pl-10"
                            type="tel"
                            placeholder="+977 98XXXXXXXX"
                            value={quickFormData.phone}
                            onChange={(e) => updateQuickField("phone", e.target.value)}
                          />
                        </div>
                        <AnimatePresence>
                          {quickErrors.phone && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="text-xs text-destructive"
                            >
                              {quickErrors.phone}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Company */}
                      <div className="space-y-2">
                        <Label>Company (Optional)</Label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Building className="h-4 w-4" />
                          </div>
                          <Input
                            className="pl-10"
                            placeholder="Your company name"
                            value={quickFormData.company}
                            onChange={(e) => updateQuickField("company", e.target.value)}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Message */}
                    <motion.div {...fadeInUp} className="space-y-2">
                      <Label>
                        What can we help you with? <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        placeholder="Tell us about your project, idea, or question..."
                        className="min-h-[120px] resize-none"
                        value={quickFormData.message}
                        onChange={(e) => updateQuickField("message", e.target.value)}
                      />
                      <AnimatePresence>
                        {quickErrors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-xs text-destructive"
                          >
                            {quickErrors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Preferred Contact */}
                    <motion.div {...fadeInUp} className="space-y-2">
                      <Label>Preferred Contact Method</Label>
                      <div className="flex flex-wrap gap-3">
                        {["email", "phone", "whatsapp"].map((method) => (
                          <motion.button
                            key={method}
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              updateQuickField(
                                "preferredContact",
                                method as "email" | "phone" | "whatsapp"
                              )
                            }
                            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                              quickFormData.preferredContact === method
                                ? "border-primary bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }`}
                          >
                            {method === "email" && <Mail className="h-3 w-3" />}
                            {method === "phone" && <Phone className="h-3 w-3" />}
                            {method === "whatsapp" && (
                              <MessageCircle className="h-3 w-3" />
                            )}
                            {method.charAt(0).toUpperCase() + method.slice(1)}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    {/* Agreement */}
                    <motion.div {...fadeInUp} className="flex items-start gap-3">
                      <Checkbox
                        id="quick-agreement"
                        checked={quickFormData.agreed}
                        onCheckedChange={(checked) =>
                          updateQuickField("agreed", checked === true)
                        }
                      />
                      <div>
                        <Label
                          htmlFor="quick-agreement"
                          className="cursor-pointer text-sm font-normal leading-6"
                        >
                          I agree that infiniGrow may contact me regarding this
                          inquiry.
                        </Label>
                        <AnimatePresence>
                          {quickErrors.agreed && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="mt-1 text-xs text-destructive"
                            >
                              {quickErrors.agreed}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>

                    {/* Submit */}
                    <motion.div {...fadeInUp}>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Preview & Submit
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>

                    <motion.p
                      {...fadeInUp}
                      className="text-center text-xs text-muted-foreground"
                    >
                      We respect your privacy. Your information will only be used to
                      respond to your inquiry.
                    </motion.p>
                  </motion.div>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </>
    );
  }

  /* ------------------------------------------------------------------------ */
  /* FULL FORM - RENDER                                                       */
  /* ------------------------------------------------------------------------ */

  return (
    <>
      {renderPreview()}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        {/* Mode Selection */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-lg border bg-muted/30 p-4"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Rocket className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Detailed Project Form</p>
                <p className="text-xs text-muted-foreground">
                  For complex requirements that need detailed planning
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">Quick</span>
              <Switch checked={isQuickMode} onCheckedChange={setIsQuickMode} />
              <span className="text-xs text-muted-foreground">Detailed</span>
            </div>
          </div>
        </motion.div>


        <Card className="overflow-hidden border shadow-sm">
          <CardContent className="p-0">
            {/* Step Indicator */}
            {renderStepIndicator()}

            <form ref={formRef} onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* ============================================================ */}
                {/* STEP 1: CONTACT INFORMATION                                 */}
                {/* ============================================================ */}

                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FormSection
                      number="01"
                      title="Contact Information"
                      description="Tell us how we can contact you."
                    >
                      <motion.div {...staggerContainer} className="grid gap-6 sm:grid-cols-2">
                        <motion.div {...fadeInUp}>
                          <FormField
                            label="Full Name"
                            required
                            error={errors.fullName}
                          >
                            <Input
                              placeholder="Your full name"
                              value={formData.fullName}
                              onChange={(e) => updateField("fullName", e.target.value)}
                            />
                          </FormField>
                        </motion.div>

                        <motion.div {...fadeInUp}>
                          <FormField
                            label="Email Address"
                            required
                            error={errors.email}
                          >
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              value={formData.email}
                              onChange={(e) => updateField("email", e.target.value)}
                            />
                          </FormField>
                        </motion.div>

                        <motion.div {...fadeInUp}>
                          <FormField
                            label="Phone Number"
                            required
                            error={errors.phone}
                          >
                            <Input
                              type="tel"
                              placeholder="+977 98XXXXXXXX"
                              value={formData.phone}
                              onChange={(e) => updateField("phone", e.target.value)}
                            />
                          </FormField>
                        </motion.div>

                        <motion.div {...fadeInUp}>
                          <FormField label="Company / Organization" optional>
                            <Input
                              placeholder="Optional"
                              value={formData.company}
                              onChange={(e) => updateField("company", e.target.value)}
                            />
                          </FormField>
                        </motion.div>

                        <motion.div {...fadeInUp} className="sm:col-span-2">
                          <FormField label="Current Website" optional>
                            <Input
                              type="url"
                              placeholder="https://example.com"
                              value={formData.website}
                              onChange={(e) => updateField("website", e.target.value)}
                            />
                          </FormField>
                        </motion.div>
                      </motion.div>
                    </FormSection>
                  </motion.div>
                )}

                {/* ============================================================ */}
                {/* STEP 2: PROJECT OVERVIEW                                    */}
                {/* ============================================================ */}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FormSection
                      number="02"
                      title="Project Overview"
                      description="Give us an overview of what you want to build."
                    >
                      <motion.div {...staggerContainer} className="space-y-6">
                        <motion.div {...fadeInUp}>
                          <FormField
                            label="Project Name"
                            required
                            error={errors.projectName}
                          >
                            <Input
                              placeholder="e.g. Hospital Management System"
                              value={formData.projectName}
                              onChange={(e) => updateField("projectName", e.target.value)}
                            />
                          </FormField>
                        </motion.div>

                        <motion.div {...fadeInUp}>
                          <FormField
                            label="What would you like to build?"
                            required
                            error={errors.softwareType}
                          >
                            <Select
                              value={formData.softwareType}
                              onValueChange={(value) =>
                                updateField("softwareType", value ?? "")
                              }
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select software type" />
                              </SelectTrigger>
                              <SelectContent>
                                {softwareTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormField>
                        </motion.div>

                        <motion.div {...fadeInUp}>
                          <FormField
                            label="Tell us about your project"
                            required
                            error={errors.description}
                          >
                            <Textarea
                              placeholder="What problem are you trying to solve? What would you like the software to do?"
                              className="min-h-[160px] resize-none"
                              value={formData.description}
                              onChange={(e) => updateField("description", e.target.value)}
                            />
                            <p className="text-xs text-muted-foreground">
                              Don&apos;t worry about technical details. Explain your idea
                              in your own words.
                            </p>
                          </FormField>
                        </motion.div>
                      </motion.div>
                    </FormSection>
                  </motion.div>
                )}

                {/* ============================================================ */}
                {/* STEP 3: REQUIREMENTS                                        */}
                {/* ============================================================ */}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FormSection
                      number="03"
                      title="Requirements"
                      description="Tell us about the functionality you need."
                    >
                      <motion.div {...staggerContainer} className="space-y-8">
                        {/* Features */}
                        <motion.div {...fadeInUp}>
                          <Label className="text-sm font-semibold">
                            What features do you need?
                            <span className="ml-2 font-normal text-muted-foreground">
                              Optional
                            </span>
                          </Label>

                          {Object.entries(featureCategories).map(([category, features]) => (
                            <div key={category} className="mt-4">
                              <p className="mb-2 text-xs font-medium text-muted-foreground">
                                {category}
                              </p>
                              <div className="grid gap-3 sm:grid-cols-2">
                                {features.map((feature) => (
                                  <motion.label
                                    key={feature}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-muted/50"
                                  >
                                    <Checkbox
                                      checked={formData.features.includes(feature)}
                                      onCheckedChange={() =>
                                        toggleArrayValue("features", feature)
                                      }
                                    />
                                    <span className="text-sm">{feature}</span>
                                  </motion.label>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>

                        {/* Users */}
                        <motion.div {...fadeInUp}>
                          <Label className="text-sm font-semibold">
                            Who will use this software?
                            <span className="ml-2 font-normal text-muted-foreground">
                              Optional
                            </span>
                          </Label>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {users.map((user) => {
                              const selected = formData.users.includes(user);
                              return (
                                <motion.button
                                  key={user}
                                  type="button"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => toggleArrayValue("users", user)}
                                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                                    selected
                                      ? "border-primary bg-primary text-primary-foreground"
                                      : "hover:bg-muted"
                                  }`}
                                >
                                  {user}
                                </motion.button>
                              );
                            })}
                          </div>
                        </motion.div>
                      </motion.div>
                    </FormSection>
                  </motion.div>
                )}

                {/* ============================================================ */}
                {/* STEP 4: BUDGET & TIMELINE                                   */}
                {/* ============================================================ */}

                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FormSection
                      number="04"
                      title="Budget & Timeline"
                      description="This helps our team understand your project scope."
                    >
                      <motion.div {...staggerContainer} className="grid gap-6 sm:grid-cols-2">
                        <motion.div {...fadeInUp}>
                          <FormField
                            label="Estimated Budget"
                            required
                            error={errors.budget}
                          >
                            <Select
                              value={formData.budget}
                              onValueChange={(value) =>
                                updateField("budget", value ?? "")
                              }
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
                        </motion.div>

                        <motion.div {...fadeInUp}>
                          <FormField
                            label="Expected Timeline"
                            required
                            error={errors.timeline}
                          >
                            <Select
                              value={formData.timeline}
                              onValueChange={(value) =>
                                updateField("timeline", value ?? "")
                              }
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
                        </motion.div>

                        <motion.div {...fadeInUp}>
                          <FormField label="Target Launch Date" optional>
                            <Input
                              type="date"
                              value={formData.launchDate}
                              onChange={(e) => updateField("launchDate", e.target.value)}
                            />
                          </FormField>
                        </motion.div>
                      </motion.div>
                    </FormSection>
                  </motion.div>
                )}

                {/* ============================================================ */}
                {/* STEP 5: REVIEW & SUBMIT                                     */}
                {/* ============================================================ */}

                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FormSection
                      number="05"
                      title="Review & Submit"
                      description="Finalize your project request."
                    >
                      <motion.div {...staggerContainer} className="space-y-6">
                        {/* Review Summary */}
                        <motion.div {...fadeInUp} className="rounded-lg border bg-muted/20 p-4">
                          <h4 className="mb-3 text-sm font-semibold">Project Summary</h4>
                          <dl className="space-y-2 text-sm">
                            <div className="flex justify-between border-b border-border/50 pb-2">
                              <dt className="text-muted-foreground">Project</dt>
                              <dd className="font-medium">{formData.projectName || "Not specified"}</dd>
                            </div>
                            <div className="flex justify-between border-b border-border/50 pb-2">
                              <dt className="text-muted-foreground">Type</dt>
                              <dd className="font-medium">{formData.softwareType || "Not selected"}</dd>
                            </div>
                            <div className="flex justify-between border-b border-border/50 pb-2">
                              <dt className="text-muted-foreground">Budget</dt>
                              <dd className="font-medium">{formData.budget || "Not selected"}</dd>
                            </div>
                            <div className="flex justify-between border-b border-border/50 pb-2">
                              <dt className="text-muted-foreground">Timeline</dt>
                              <dd className="font-medium">{formData.timeline || "Not selected"}</dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">Features</dt>
                              <dd className="font-medium">
                                {formData.features.length > 0
                                  ? `${formData.features.length} selected`
                                  : "None selected"}
                              </dd>
                            </div>
                          </dl>
                        </motion.div>

                        <motion.div {...fadeInUp}>
                          <FormField label="Reference Website or Application" optional>
                            <Input
                              type="url"
                              placeholder="https://example.com"
                              value={formData.referenceUrl}
                              onChange={(e) => updateField("referenceUrl", e.target.value)}
                            />
                          </FormField>
                        </motion.div>

                        {/* File Upload */}
                        <motion.div {...fadeInUp}>
                          <Label className="text-sm font-medium">
                            Project Documents
                            <span className="ml-2 font-normal text-muted-foreground">
                              Optional
                            </span>
                          </Label>

                          <motion.label
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="mt-3 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center transition-colors hover:bg-muted/40"
                          >
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                              <Upload className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <p className="text-sm font-medium">Click to upload files</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              PDF, DOCX, PNG, JPG or other project documents
                            </p>
                            <input
                              type="file"
                              multiple
                              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.txt"
                              className="hidden"
                              onChange={handleFileChange}
                            />
                          </motion.label>

                          <AnimatePresence>
                            {files.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 space-y-2"
                              >
                                {files.map((file, index) => (
                                  <motion.div
                                    key={`${file.name}-${index}`}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    className="flex items-center justify-between rounded-lg border p-3"
                                  >
                                    <div className="flex min-w-0 items-center gap-3">
                                      <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />
                                      <div className="min-w-0">
                                        <p className="truncate text-sm font-medium">
                                          {file.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                          {formatFileSize(file.size)}
                                        </p>
                                      </div>
                                    </div>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => removeFile(index)}
                                    >
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>

                        <motion.div {...fadeInUp}>
                          <FormField label="Additional Message" optional>
                            <Textarea
                              placeholder="Anything else you'd like us to know?"
                              className="min-h-[120px] resize-none"
                              value={formData.message}
                              onChange={(e) => updateField("message", e.target.value)}
                            />
                          </FormField>
                        </motion.div>
                      </motion.div>
                    </FormSection>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ================================================================ */}
              {/* SUBMIT SECTION                                                  */}
              {/* ================================================================ */}

              <div className="bg-muted/20 px-6 py-8 sm:px-10">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreed}
                    onCheckedChange={(checked) =>
                      updateField("agreed", checked === true)
                    }
                  />
                  <div>
                    <Label
                      htmlFor="agreement"
                      className="cursor-pointer text-sm font-normal leading-6"
                    >
                      I agree that infiniGrow may contact me regarding this project.
                    </Label>
                    <AnimatePresence>
                      {errors.agreed && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="mt-1 text-xs text-destructive"
                        >
                          {errors.agreed}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mt-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <p className="max-w-md text-xs leading-5 text-muted-foreground">
                    Your information will be used only to understand your project and
                    contact you about your request.
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {currentStep > 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                      >
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setCurrentStep((prev) => prev - 1);
                            setShowPreview(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Previous
                        </Button>
                      </motion.div>
                    )}

                    {currentStep < totalSteps ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                      >
                        <Button
                          type="button"
                          onClick={() => {
                            if (validateStep(currentStep)) {
                              setCurrentStep((prev) => prev + 1);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }}
                        >
                          Next Step
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Button
                          type="button"
                          size="lg"
                          className="w-full sm:w-auto group"
                          onClick={handleShowPreview}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <Eye className="mr-2 h-4 w-4" />
                              Preview & Submit
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* FORM SECTION                                                               */
/* -------------------------------------------------------------------------- */

function FormSection({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b px-6 py-10 sm:px-10 sm:py-12">
      <div className="mb-8 flex gap-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
          {number}
        </div>
        <div>
          <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FORM FIELD                                                                 */
/* -------------------------------------------------------------------------- */

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
        {optional && (
          <span className="ml-2 font-normal text-muted-foreground">Optional</span>
        )}
      </Label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-xs text-destructive"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* FILE SIZE                                                                  */
/* -------------------------------------------------------------------------- */

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}