import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import { logo } from "@/constants/image"
import Downpart from "./downpart"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      {/* <div className="flex h-screen w-full overflow-hidden"> */}
      <div className="flex min-h-screen w-full bg-background text-foreground overflow-hidden">


        {/* Sidebar */}
        <AppSidebar />

        {/* Main Area */}
        {/* <div className="flex flex-col flex-1"> */}
        <div className="flex flex-col flex-1 bg-background">


          {/* 🔹 Navbar (VISIBLE on mobile + desktop) */}
          <Navbar />

          {/* 🔹 Mobile hamburger bar (navbar stays) */}
          {/* <div className="flex items-center gap-3 px-4 h-12 border-b md:hidden"> */}
          <div className="flex items-center gap-3  h-12 border-b border-border bg-background md:hidden">

            {/* <SidebarTrigger className="p-2 rounded-md border"> */}
            <SidebarTrigger className="p-2 rounded-md border border-border">

              ☰
            </SidebarTrigger>
            <img src={logo} className="w-7 h-7" />
            <span className="font-semibold opacity-70">aurora</span>
          </div>

          {/* Content */}
          {/* <main className="flex-1 overflow-y-auto p-4"> */}
          <main className="flex-1 overflow-y-auto bg-background">

            {children}
            <Outlet />
          </main>

          <Downpart />
        </div>
      </div>
    </SidebarProvider>
  )
}
