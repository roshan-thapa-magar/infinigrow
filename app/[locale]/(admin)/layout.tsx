import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/admin/app-sidebar"
import { DashboardHeader } from "@/components/admin/dashboard-header"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />

      {/*
        min-w-0 is required here: without it, a wide child (like the
        data table) forces this flex column wider instead of scrolling
        within its own container, causing the whole page — sidebar
        included — to scroll horizontally on small screens.
      */}
      <div className="flex min-h-screen w-full min-w-0 flex-col">
        <DashboardHeader />

        <main className="min-w-0 flex-1 overflow-x-hidden p-3 sm:p-6">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}