"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Inbox,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "User Requests",
    url: "/user-requests",
    icon: Inbox,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { isMobile, setOpenMobile } = useSidebar()

  const handleNavigation = () => {
    if (isMobile) {
      setOpenMobile(false)
    }
  }

  return (
    <Sidebar>
      {/* Logo / Header */}
      <SidebarHeader>
        <Link
          href="/dashboard"
          onClick={handleNavigation}
          className="flex items-center gap-3 p-2"
        >
          {/* Logo */}
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg">
            <Image
              src="/images/logo5.png"
              alt="infiniGrow"
              fill
              priority
              className="object-contain"
              sizes="40px"
            />
          </div>

          {/* Company name */}
          <div className="flex flex-col">
            <span
              className="
                            text-[19px]
                            font-extrabold
                            tracking-[-0.04em]
                          "
            >
              <span className="text-foreground">
                Infini
              </span>

              <span className="text-emerald-500">
                Grow
              </span>
            </span>

          </div>
        </Link>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent>
        <SidebarGroup>
          <div className="space-y-1 px-2">
            {items.map((item) => {
              const Icon = item.icon

              const isActive =
                pathname === item.url ||
                pathname.startsWith(`${item.url}/`)

              return (
                <Link
                  key={item.title}
                  href={item.url}
                  onClick={handleNavigation}
                  className={`
                    flex items-center gap-3 rounded-md px-3 py-2.5
                    text-sm font-medium
                    transition-all duration-200
                    ${isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }
                  `}
                >
                  <Icon className="h-4 w-4 shrink-0" />

                  <span>{item.title}</span>
                </Link>
              )
            })}
          </div>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <div className="px-4 py-3">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} infiniGrow
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
