"use client"

import { ClerkProvider as OriginalClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export function ClerkProvider({ children }: { children: React.ReactNode }) {

    const isDarkMode = useIsDarkMode();

  return (
    <OriginalClerkProvider appearance={isDarkMode ? { baseTheme: [dark]} : undefined }>
        {children}
    </OriginalClerkProvider>
  )
}