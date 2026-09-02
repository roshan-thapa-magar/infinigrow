"use client"

import Link from "next/link"

import {
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { ThemeToggle } from "@/components/theme-toggle"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Separator } from "@/components/ui/separator"

export function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background px-3 sm:px-4">
      {/* Left side */}
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <SidebarTrigger />

        <Separator
          orientation="vertical"
          className="hidden h-6 sm:block"
        />

        <div className="min-w-0">
          <h1 className="truncate text-sm font-semibold">
            Admin Dashboard
          </h1>

          {/* Subtitle only shows once there's room for it */}
          <p className="hidden truncate text-xs text-muted-foreground sm:block">
            Manage your infiniGrow platform
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <ThemeToggle />

        {/* Profile */}
        <Link
          href="/profile"
          className="rounded-full outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Open profile"
        >
          <Avatar className="h-8 w-8 cursor-pointer sm:h-9 sm:w-9">
            <AvatarImage
              src="https://github.com/maxleiter.png"
              alt="Admin"
            />

            <AvatarFallback>
              AD
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  )
}