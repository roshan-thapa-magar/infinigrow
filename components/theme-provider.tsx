"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// next-themes injects an inline script to prevent theme flickering.
// React 19 + Next.js 16 reports this script in development.
// This is a known false-positive warning.

if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development"
) {
  const originalConsoleError = console.error;

  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes(
        "Encountered a script tag while rendering React component"
      )
    ) {
      return;
    }

    originalConsoleError(...args);
  };
}

type ThemeProviderProps = React.ComponentProps<
  typeof NextThemesProvider
>;

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}