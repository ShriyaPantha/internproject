import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router-dom"
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />

        <div className="flex flex-col w-full h-screen overflow-x-visible overflow-y-auto">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>
        </div>
      </SidebarProvider>

      <Outlet />
    </>
  )
}
