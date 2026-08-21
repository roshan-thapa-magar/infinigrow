"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<"ja" | "en">("en")

  return (
    <div
      className="inline-flex items-center rounded-full border p-0.5"
      role="group"
      aria-label="Language selector"
    >
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("ja")}
        aria-pressed={language === "ja"}
        className={`h-7 rounded-full px-2.5 text-xs ${
          language === "ja"
            ? "bg-muted text-foreground shadow-sm hover:bg-muted"
            : "text-muted-foreground hover:bg-transparent"
        }`}
      >
        日本語
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`h-7 rounded-full px-2.5 text-xs ${
          language === "en"
            ? "bg-muted text-foreground shadow-sm hover:bg-muted"
            : "text-muted-foreground hover:bg-transparent"
        }`}
      >
        EN
      </Button>
    </div>
  )
}