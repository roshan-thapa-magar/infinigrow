"use client";

import { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";

import DataTable, {
  ColumnDefinition,
} from "@/components/admin/data-table";

import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Download,
  Eye,
  FileDown,
  FileText,
  Paperclip,
} from "lucide-react";

import { cn } from "@/lib/utils";

// ============================================================
// TYPES
// ============================================================

interface ProjectFile {
  name: string;
  url: string;
  publicId: string;
  size: number;
  type: string;
}

interface ProjectRequest {
  _id: string;
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
  files: ProjectFile[];
  status: string;
  createdAt: string;
  updatedAt: string;
}

type PreviewKind = "image" | "pdf" | "other";

// ============================================================
// COLUMN CONFIGURATION
// ============================================================

const initialColumnVisibility: Record<string, boolean> = {
  fullName: true,
  phone: true,
  country: true,
  company: true,
  helpType: true,
  budget: true,
  timeline: true,
  preferredContact: true,
  files: true,
  status: true,
  createdAt: true,
  download: true,
};

// ============================================================
// FILE HELPERS
// ============================================================

function getPreviewKind(
  file: ProjectFile
): PreviewKind {
  const mime =
    file.type?.toLowerCase() || "";

  if (mime.startsWith("image/")) {
    return "image";
  }

  if (mime === "application/pdf") {
    return "pdf";
  }

  const extension =
    file.name
      ?.split(".")
      .pop()
      ?.toLowerCase() || "";

  const imageExtensions = [
    "png",
    "jpg",
    "jpeg",
    "gif",
    "webp",
    "svg",
    "bmp",
  ];

  if (
    imageExtensions.includes(extension)
  ) {
    return "image";
  }

  if (extension === "pdf") {
    return "pdf";
  }

  return "other";
}

function formatFileSize(
  bytes: number
): string {
  if (!bytes || bytes <= 0) {
    return "";
  }

  const mb =
    bytes / 1024 / 1024;

  if (mb >= 0.1) {
    return `${mb.toFixed(2)} MB`;
  }

  return `${Math.max(
    1,
    Math.round(bytes / 1024)
  )} KB`;
}

function openFileDirectly(
  url: string
) {
  if (!url) {
    console.error(
      "File URL is missing"
    );
    return;
  }

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}

// ============================================================
// FILE PREVIEW
// ============================================================

function handleFileOpen(
  file: ProjectFile
) {
  if (!file.url) {
    console.error(
      "File URL is missing:",
      file
    );
    return;
  }

  const kind =
    getPreviewKind(file);

  if (kind === "pdf") {
    const viewerUrl =
      `https://docs.google.com/viewer?url=${encodeURIComponent(
        file.url
      )}&embedded=true`;

    openFileDirectly(viewerUrl);
    return;
  }

  openFileDirectly(file.url);
}

// ============================================================
// FILE DOWNLOAD
// ============================================================

async function handleFileDownload(
  file: ProjectFile
) {
  if (!file.url) {
    console.error(
      "File URL is missing:",
      file
    );
    return;
  }

  try {
    const response =
      await fetch(file.url, {
        mode: "cors",
      });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch file: ${response.status}`
      );
    }

    const blob =
      await response.blob();

    const blobUrl =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = blobUrl;

    link.download =
      file.name || "download";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error(
      "Download failed:",
      error
    );

    openFileDirectly(file.url);
  }
}

// ============================================================
// PDF HELPERS
// ============================================================

function sanitizeFileName(
  name: string
): string {
  return name
    .replace(/[^a-z0-9]/gi, "_")
    .replace(/_+/g, "_")
    .toLowerCase();
}

// ============================================================
// DOWNLOAD USER DETAILS PDF
// ============================================================

function downloadUserDetailsPDF(
  user: ProjectRequest
) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth =
    doc.internal.pageSize.getWidth();

  const pageHeight =
    doc.internal.pageSize.getHeight();

  const margin = 14;
  const contentWidth =
    pageWidth - margin * 2;

  // ==========================================================
  // COLORS
  // ==========================================================

  const colors = {
    // Emerald Theme
    primary: [6, 78, 59] as [number, number, number], // Emerald 900
    accent: [16, 185, 129] as [number, number, number], // Emerald 500

    // Text
    text: [20, 83, 45] as [number, number, number], // Dark green
    muted: [100, 116, 139] as [number, number, number],

    // Backgrounds
    light: [236, 253, 245] as [number, number, number], // Emerald 50
    border: [167, 243, 208] as [number, number, number], // Emerald 200

    // White
    white: [255, 255, 255] as [number, number, number],
  };

  // ==========================================================
  // TEXT HELPERS
  // ==========================================================

  const getValue = (
    value: string | undefined | null
  ) => {
    return value?.trim()
      ? value
      : "Not provided";
  };

  const truncateText = (
    text: string,
    maxLength: number
  ) => {
    if (text.length <= maxLength) {
      return text;
    }

    return `${text.slice(
      0,
      maxLength
    )}...`;
  };

  // ==========================================================
  // HEADER
  // ==========================================================

  doc.setFillColor(...colors.primary);

  doc.rect(
    0,
    0,
    pageWidth,
    38,
    "F"
  );

  // Accent line

  doc.setFillColor(...colors.accent);

  doc.rect(
    0,
    36,
    pageWidth,
    2,
    "F"
  );

  // Small title

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(8);

  doc.setTextColor(...colors.accent);

  doc.text(
    "PROJECT REQUEST",
    margin,
    13
  );

  // Main title

  doc.setFontSize(19);

  doc.setTextColor(...colors.white);

  doc.text(
    "Client Details",
    margin,
    24
  );

  // Generated date

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(7);

  doc.setTextColor(
    203,
    213,
    225
  );

  doc.text(
    `Generated: ${new Date().toLocaleDateString()}`,
    margin,
    31
  );

  // ==========================================================
  // CLIENT PROFILE CARD
  // ==========================================================

  let y = 46;

  doc.setFillColor(...colors.light);
  doc.setDrawColor(...colors.border);

  doc.roundedRect(
    margin,
    y,
    contentWidth,
    24,
    3,
    3,
    "FD"
  );

  // Avatar

  doc.setFillColor(...colors.accent);

  doc.circle(
    margin + 12,
    y + 12,
    7,
    "F"
  );

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(11);

  doc.setTextColor(...colors.white);

  doc.text(
    (user.fullName || "U")
      .charAt(0)
      .toUpperCase(),
    margin + 12,
    y + 15,
    {
      align: "center",
    }
  );

  // Name

  doc.setTextColor(...colors.text);

  doc.setFontSize(13);

  doc.text(
    truncateText(
      user.fullName ||
      "Unknown Client",
      35
    ),
    margin + 24,
    y + 10
  );

  // Email

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(8);

  doc.setTextColor(...colors.muted);

  doc.text(
    truncateText(
      user.email ||
      "No email provided",
      50
    ),
    margin + 24,
    y + 17
  );

  y += 32;

  // ==========================================================
  // SECTION FUNCTION
  // ==========================================================

  const addSection = (
    title: string
  ) => {
    doc.setFillColor(...colors.accent);

    doc.roundedRect(
      margin,
      y,
      2.5,
      6,
      1,
      1,
      "F"
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(10);

    doc.setTextColor(...colors.text);

    doc.text(
      title,
      margin + 6,
      y + 4.5
    );

    y += 10;
  };

  // ==========================================================
  // TWO COLUMN FIELD
  // ==========================================================

  const columnGap = 6;

  const columnWidth =
    (contentWidth - columnGap) / 2;

  const addTwoColumnFields = (
    fields: {
      label: string;
      value: string;
    }[]
  ) => {
    for (
      let i = 0;
      i < fields.length;
      i += 2
    ) {
      const left =
        fields[i];

      const right =
        fields[i + 1];

      const rowHeight = 16;

      // Left box

      if (left) {
        doc.setFillColor(
          ...colors.light
        );

        doc.roundedRect(
          margin,
          y,
          columnWidth,
          rowHeight,
          2,
          2,
          "F"
        );

        doc.setFont(
          "helvetica",
          "bold"
        );

        doc.setFontSize(6.5);

        doc.setTextColor(
          ...colors.muted
        );

        doc.text(
          left.label.toUpperCase(),
          margin + 4,
          y + 5
        );

        doc.setFont(
          "helvetica",
          "normal"
        );

        doc.setFontSize(8.5);

        doc.setTextColor(
          ...colors.text
        );

        const leftText =
          truncateText(
            getValue(left.value),
            38
          );

        const leftLines =
          doc.splitTextToSize(
            leftText,
            columnWidth - 8
          );

        doc.text(
          leftLines.slice(0, 2),
          margin + 4,
          y + 10
        );
      }

      // Right box

      if (right) {
        const rightX =
          margin +
          columnWidth +
          columnGap;

        doc.setFillColor(
          ...colors.light
        );

        doc.roundedRect(
          rightX,
          y,
          columnWidth,
          rowHeight,
          2,
          2,
          "F"
        );

        doc.setFont(
          "helvetica",
          "bold"
        );

        doc.setFontSize(6.5);

        doc.setTextColor(
          ...colors.muted
        );

        doc.text(
          right.label.toUpperCase(),
          rightX + 4,
          y + 5
        );

        doc.setFont(
          "helvetica",
          "normal"
        );

        doc.setFontSize(8.5);

        doc.setTextColor(
          ...colors.text
        );

        const rightText =
          truncateText(
            getValue(right.value),
            38
          );

        const rightLines =
          doc.splitTextToSize(
            rightText,
            columnWidth - 8
          );

        doc.text(
          rightLines.slice(0, 2),
          rightX + 4,
          y + 10
        );
      }

      y += rowHeight + 4;
    }
  };

  // ==========================================================
  // PERSONAL INFORMATION
  // ==========================================================

  addSection(
    "Personal Information"
  );

  addTwoColumnFields([
    {
      label: "Full Name",
      value: user.fullName,
    },
    {
      label: "Phone Number",
      value: user.phone,
    },
    {
      label: "Email Address",
      value: user.email,
    },
    {
      label: "Country",
      value: user.country,
    },
    {
      label: "Company",
      value: user.company,
    },
  ]);

  // ==========================================================
  // PROJECT INFORMATION
  // ==========================================================

  addSection(
    "Project Information"
  );

  const helpType =
    user.helpType === "Other"
      ? user.otherHelpType ||
      "Other"
      : user.helpType;

  addTwoColumnFields([
    {
      label: "Service Required",
      value: helpType,
    },
    {
      label: "Budget",
      value: user.budget,
    },
    {
      label: "Timeline",
      value: user.timeline,
    },
    {
      label: "Contact Via",
      value: user.preferredContact,
    },
    {
      label: "Existing Website",
      value: user.existingWebsite,
    },
    {
      label: "Discovery Source",
      value:
        user.hearAboutUs === "Other"
          ? user.otherHearAboutUs
          : user.hearAboutUs,
    },
  ]);

  // ==========================================================
  // PROJECT DESCRIPTION
  // ==========================================================

  addSection(
    "Project Description"
  );

  const description =
    user.description ||
    "No project description provided.";

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(8.5);

  const descriptionLines =
    doc.splitTextToSize(
      truncateText(
        description,
        900
      ),
      contentWidth - 10
    );

  const maxDescriptionLines = 10;

  const visibleLines =
    descriptionLines.slice(
      0,
      maxDescriptionLines
    );

  const descriptionHeight =
    Math.max(
      35,
      visibleLines.length * 5 + 14
    );

  doc.setFillColor(
    248,
    250,
    252
  );

  doc.setDrawColor(
    ...colors.border
  );

  doc.roundedRect(
    margin,
    y,
    contentWidth,
    descriptionHeight,
    3,
    3,
    "FD"
  );

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(8.5);

  doc.setTextColor(
    ...colors.text
  );

  doc.text(
    visibleLines,
    margin + 5,
    y + 9
  );

  y += descriptionHeight;

  // ==========================================================
  // FOOTER
  // ==========================================================

  const footerY =
    pageHeight - 12;

  doc.setDrawColor(
    ...colors.border
  );

  doc.line(
    margin,
    footerY - 5,
    pageWidth - margin,
    footerY - 5
  );

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(7);

  doc.setTextColor(
    ...colors.muted
  );

  doc.text(
    "Confidential Project Request",
    margin,
    footerY
  );

  doc.text(
    "Generated by Project Management System",
    pageWidth - margin,
    footerY,
    {
      align: "right",
    }
  );

  // ==========================================================
  // SAVE PDF
  // ==========================================================

  const safeName =
    sanitizeFileName(
      user.fullName || "client"
    );

  doc.save(
    `${safeName}_project_details.pdf`
  );
}

// ============================================================
// FILE PREVIEW MENU
// ============================================================

function FilePreviewMenu({
  files,
}: {
  files: ProjectFile[];
}) {
  if (
    !files ||
    files.length === 0
  ) {
    return (
      <span className="text-sm text-muted-foreground">
        -
      </span>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "inline-flex h-8 items-center gap-1.5",
          "rounded-md border",
          "border-muted-foreground/20",
          "bg-background px-2.5",
          "text-xs font-medium shadow-sm",
          "outline-none transition-colors",
          "hover:bg-muted/50",
          "focus-visible:ring-2",
          "focus-visible:ring-ring"
        )}
      >
        <Paperclip className="h-3.5 w-3.5" />

        <span>
          {files.length}
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-80"
      >
        {/* Header */}

        <div className="px-2 py-2 text-xs text-muted-foreground">
          {files.length} file
          {files.length > 1
            ? "s"
            : ""}
        </div>

        <DropdownMenuSeparator />

        {/* File List */}

        {files.map(
          (file, index) => {
            const kind =
              getPreviewKind(file);

            return (
              <div
                key={
                  file.publicId ||
                  `${file.name}-${index}`
                }
                className={cn(
                  "flex w-full items-center",
                  "justify-between gap-2",
                  "rounded-sm px-2 py-2",
                  "hover:bg-muted"
                )}
              >
                {/* File Information */}

                <button
                  type="button"
                  onClick={() =>
                    handleFileOpen(file)
                  }
                  className={cn(
                    "flex min-w-0 flex-1",
                    "items-center gap-2 text-left",
                    "focus:outline-none"
                  )}
                >
                  <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />

                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">
                      {file.name ||
                        "Unnamed file"}
                    </span>

                    <span className="block text-xs text-muted-foreground">
                      {kind === "image"
                        ? "Image"
                        : kind === "pdf"
                          ? "PDF"
                          : "File"}

                      {file.size > 0 &&
                        ` • ${formatFileSize(
                          file.size
                        )}`}
                    </span>
                  </span>
                </button>

                {/* File Actions */}

                <div className="flex shrink-0 items-center gap-1">
                  {/* Preview */}

                  <button
                    type="button"
                    title="Preview"
                    onClick={(
                      event
                    ) => {
                      event.stopPropagation();

                      handleFileOpen(
                        file
                      );
                    }}
                    className={cn(
                      "rounded p-1.5",
                      "hover:bg-muted-foreground/10",
                      "focus:outline-none",
                      "focus-visible:ring-2",
                      "focus-visible:ring-ring"
                    )}
                  >
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </button>

                  {/* Download */}

                  <button
                    type="button"
                    title="Download"
                    onClick={(
                      event
                    ) => {
                      event.stopPropagation();

                      handleFileDownload(
                        file
                      );
                    }}
                    className={cn(
                      "rounded p-1.5",
                      "hover:bg-muted-foreground/10",
                      "focus:outline-none",
                      "focus-visible:ring-2",
                      "focus-visible:ring-ring"
                    )}
                  >
                    <Download className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function Page() {
  // ==========================================================
  // STATE
  // ==========================================================

  const [
    requests,
    setRequests,
  ] = useState<
    ProjectRequest[]
  >([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState<
    string | null
  >(null);

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const [
    rowsPerPage,
    setRowsPerPage,
  ] = useState(10);

  // ==========================================================
  // FETCH PROJECT REQUESTS
  // ==========================================================

  useEffect(() => {
    let cancelled = false;

    async function fetchRequests() {
      try {
        setLoading(true);
        setError(null);

        const response =
          await fetch(
            "/api/project-request"
          );

        const result =
          await response.json();

        if (
          !response.ok ||
          !result.success
        ) {
          throw new Error(
            result.message ||
            "Failed to load project requests"
          );
        }

        if (!cancelled) {
          setRequests(
            Array.isArray(
              result.data
            )
              ? result.data
              : []
          );
        }
      } catch (error) {
        console.error(
          "Failed to fetch project requests:",
          error
        );

        if (!cancelled) {
          setError(
            error instanceof Error
              ? error.message
              : "Failed to load project requests"
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchRequests();

    return () => {
      cancelled = true;
    };
  }, []);

  // ==========================================================
  // PAGINATION
  // ==========================================================

  const paginatedData =
    useMemo(() => {
      const start =
        (currentPage - 1) *
        rowsPerPage;

      return requests.slice(
        start,
        start + rowsPerPage
      );
    }, [
      requests,
      currentPage,
      rowsPerPage,
    ]);

  const handlePageChange = (
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (
    limit: number
  ) => {
    setRowsPerPage(limit);
    setCurrentPage(1);
  };

  // ==========================================================
  // TABLE COLUMNS
  // ==========================================================

  const columns: ColumnDefinition<ProjectRequest>[] =
    useMemo(
      () => [
        // NAME

        {
          id: "fullName",
          name: "Name",

          render: (item) => (
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                {item.fullName || "-"}
              </p>

              <p className="truncate text-xs text-muted-foreground">
                {item.email || "-"}
              </p>
            </div>
          ),
        },

        // PHONE

        {
          id: "phone",
          name: "Phone",
        },

        // COUNTRY

        {
          id: "country",
          name: "Country",
        },

        // COMPANY

        {
          id: "company",
          name: "Company",

          render: (item) => (
            <span className="text-sm">
              {item.company || "-"}
            </span>
          ),
        },

        // HELP TYPE

        {
          id: "helpType",
          name: "Help Type",

          render: (item) => (
            <span className="text-sm">
              {item.helpType ===
                "Other"
                ? item.otherHelpType ||
                "Other"
                : item.helpType ||
                "-"}
            </span>
          ),
        },

        // BUDGET

        {
          id: "budget",
          name: "Budget",

          render: (item) => (
            <span className="text-sm">
              {item.budget || "-"}
            </span>
          ),
        },

        // TIMELINE

        {
          id: "timeline",
          name: "Timeline",

          render: (item) => (
            <span className="text-sm">
              {item.timeline || "-"}
            </span>
          ),
        },

        // CONTACT VIA

        {
          id: "preferredContact",
          name: "Contact Via",
          align: "center",

          render: (item) => (
            <Badge
              variant="outline"
              className="capitalize"
            >
              {item.preferredContact ||
                "-"}
            </Badge>
          ),
        },

        // FILES

        {
          id: "files",
          name: "Files",
          align: "center",

          render: (item) => (
            <div className="flex justify-center">
              <FilePreviewMenu
                files={
                  Array.isArray(
                    item.files
                  )
                    ? item.files
                    : []
                }
              />
            </div>
          ),
        },

        // STATUS

        {
          id: "status",
          name: "Status",
          align: "center",

          render: (item) => (
            <Badge
              variant={
                item.status ===
                  "completed"
                  ? "default"
                  : "secondary"
              }
              className="capitalize"
            >
              {item.status ||
                "pending"}
            </Badge>
          ),
        },

        // SUBMITTED

        {
          id: "createdAt",
          name: "Submitted",

          render: (item) => {
            if (!item.createdAt) {
              return "-";
            }

            return new Date(
              item.createdAt
            ).toLocaleDateString(
              undefined,
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            );
          },
        },

        // DOWNLOAD PDF

        {
          id: "download",
          name: "Details",
          align: "center",

          render: (item) => (
            <button
              type="button"
              title="Download Full Details PDF"
              onClick={() =>
                downloadUserDetailsPDF(
                  item
                )
              }
              className={cn(
                "inline-flex h-8 items-center",
                "gap-1.5 rounded-md border",
                "border-border bg-background",
                "px-2.5 text-xs font-medium",
                "transition-colors",
                "hover:bg-muted",
                "focus:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-ring"
              )}
            >
              <FileDown className="h-3.5 w-3.5" />

              PDF
            </button>
          ),
        },
      ],
      []
    );

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div className="flex h-full min-w-0 flex-col">
      {/* ERROR MESSAGE */}

      {error && (
        <div className="m-4 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* DATA TABLE */}

      <DataTable<ProjectRequest>
        data={paginatedData}
        columns={columns}
        initialColumnVisibility={
          initialColumnVisibility
        }
        searchPlaceholder="Search by name..."
        searchKey="fullName"
        onAddClick={() => { }}
        loading={loading}
        pagination={{
          currentPage,
          rowsPerPage,
          totalCount:
            requests.length,
          onPageChange:
            handlePageChange,
          onRowsPerPageChange:
            handleRowsPerPageChange,
        }}
      />
    </div>
  );
}