"use client"

import { useLocale } from "next-intl"

import { Button } from "@/components/ui/button"

import {
  usePathname,
  useRouter,
} from "@/i18n/navigation"

export function LanguageSwitcher() {
  const locale = useLocale()

  const router = useRouter()

  const pathname = usePathname()

  const changeLanguage = (
    newLocale: "en" | "ja"
  ) => {
    router.replace(pathname, {
      locale: newLocale,
    })
  }

  return (
    <div
      className="
        inline-flex
        items-center
        rounded-full
        border
        p-0.5
      "
      role="group"
      aria-label="Language selector"
    >
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() =>
          changeLanguage("ja")
        }
        aria-pressed={
          locale === "ja"
        }
        className={`
          h-7
          rounded-full
          px-2.5
          text-xs
          ${
            locale === "ja"
              ? "bg-muted text-foreground shadow-sm hover:bg-muted"
              : "text-muted-foreground hover:bg-transparent"
          }
        `}
      >
        日本語
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() =>
          changeLanguage("en")
        }
        aria-pressed={
          locale === "en"
        }
        className={`
          h-7
          rounded-full
          px-2.5
          text-xs
          ${
            locale === "en"
              ? "bg-muted text-foreground shadow-sm hover:bg-muted"
              : "text-muted-foreground hover:bg-transparent"
          }
        `}
      >
        EN
      </Button>
    </div>
  )
}
