"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Maximize2, X } from "lucide-react"

type BlogImageProps = {
  src: string
  alt: string
  aspect?: string
  className?: string
}

/**
 * BlogImage
 * ---------------------------------------------------------
 * Renders the same image twice:
 *  1. A blurred, scaled-up copy as a backdrop (fills the
 *     whole box, no empty space, no harsh cropping feel)
 *  2. A sharp, fully-visible copy on top using object-contain
 *     so nothing gets cut off
 *
 * On hover, a centered expand icon appears. Clicking it opens
 * the image fullscreen in a lightbox rendered via a PORTAL
 * directly into document.body — this is required because the
 * card this component sits inside uses `hover:-translate-y-1`,
 * and any ancestor with a CSS transform creates a new
 * containing block for `position: fixed` descendants. Without
 * the portal, the "fullscreen" overlay gets trapped inside the
 * card instead of covering the viewport.
 * ---------------------------------------------------------
 */
export function BlogImage({
  src,
  alt,
  aspect = "aspect-[16/9]",
  className = "",
}: BlogImageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // portals need a browser document — guard for SSR
  useEffect(() => {
    setMounted(true)
  }, [])

  // lock page scroll while lightbox is open
  useEffect(() => {
    if (isOpen) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = previousOverflow
      }
    }
  }, [isOpen])

  // close on Escape
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  function handleExpandClick(event: React.MouseEvent) {
    event.preventDefault()
    event.stopPropagation()
    setIsOpen(true)
  }

  function handleClose(event: React.MouseEvent) {
    event.preventDefault()
    event.stopPropagation()
    setIsOpen(false)
  }

  return (
    <>
      <div
        className={`group/image relative isolate ${aspect} w-full overflow-hidden bg-muted ${className}`}
      >
        {/* BLURRED BACKGROUND (same image, static — never animates) */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="h-full w-full scale-125 object-cover blur-2xl opacity-70 saturate-150"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* FOREGROUND IMAGE — fully visible, expands on hover */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain transition-transform duration-500 ease-out will-change-transform group-hover/image:scale-110"
          />
        </div>

        {/* DIM OVERLAY on hover, behind the expand icon */}
        <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-300 group-hover/image:bg-black/20" />

        {/* EXPAND ICON — centered, fades in on hover */}
        <button
          type="button"
          onClick={handleExpandClick}
          aria-label={`View ${alt} fullscreen`}
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/image:opacity-100 focus-visible:opacity-100"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg backdrop-blur transition-transform duration-300 hover:scale-110">
            <Maximize2 className="h-5 w-5" />
          </span>
        </button>
      </div>

      {/* FULLSCREEN LIGHTBOX — portaled to <body>, escapes any
          transformed ancestor (e.g. the card's hover:-translate-y-1) */}
      {mounted &&
        isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-10"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close fullscreen image"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6 md:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={src}
              alt={alt}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
            />
          </div>,
          document.body
        )}
    </>
  )
}