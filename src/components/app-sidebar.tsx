import {
  BellIcon, BookCopyIcon, CalendarCheck, CalendarRangeIcon, ChartBarIcon, ChartNoAxesCombinedIcon,
  CircleArrowOutDownLeft,
  CirclePlayIcon, CircleQuestionMarkIcon, CircleUserIcon, ClipboardClockIcon,
  ComponentIcon,
  DiamondPlusIcon, FileCheck2Icon, FileUpIcon, KanbanIcon, MailCheck,
  MonitorCheckIcon, Music2Icon, NewspaperIcon, PaperclipIcon, PersonStanding, PhoneCallIcon,
  PlaneLandingIcon, PresentationIcon, ShieldCloseIcon, ShoppingCart,
  SquareUserIcon, TimerResetIcon, TriangleAlertIcon
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { Link, useLocation } from "react-router-dom"
import { Search } from "lucide-react"
import { logo } from "@/constants/image";



// Helper component for rendering menu lists
function RenderMenu({ items }: { items: any[] }) {
  const location = useLocation();

  return (
    <SidebarMenu>

      {items.map((item) => {
        const isActive = location.pathname === item.url;

        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link
                to={item.url}
                className={`flex items-center gap-3 px-2 py-2 rounded-md transition-all
                  ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-50 text-gray-700"}
                `}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}

// Menu Lists
const menuItems = [
  { title: "E-commerce", url: "/", icon: ShoppingCart },
  { title: "Project", url: "/project", icon: ClipboardClockIcon },
  { title: "CRM", url: "/crm", icon: PhoneCallIcon },
  { title: "Analytics", url: "/analytics", icon: ChartNoAxesCombinedIcon },
  { title: "HRM", url: "/hrm", icon: PersonStanding },
  { title: "Time Tracker", url: "/timer", icon: TimerResetIcon },
  { title: "Hiring", url: "/hiring", icon: PresentationIcon },
]

const appItems = [
  { title: "E-commerce", url: "/apps/ecommerce", icon: ShoppingCart },
  { title: "CRM", url: "/apps/crm", icon: PhoneCallIcon },
  { title: "Invoice", url: "/apps/invoice", icon: NewspaperIcon },
  { title: "E-mail", url: "/apps/email", icon: MailCheck },
  { title: "Events", url: "/apps/events", icon: FileCheck2Icon },
  { title: "Kanban", url: "/apps/kanban", icon: KanbanIcon },
  { title: "Hiring", url: "/apps/hiring", icon: PaperclipIcon },
  { title: "Chat", url: "/apps/chat", icon: ChartBarIcon },
  { title: "Social", url: "/apps/social", icon: SquareUserIcon },
  { title: "Filemanager", url: "/apps/filemanager", icon: FileUpIcon },
  { title: "Calendar", url: "/apps/calendar", icon: CalendarRangeIcon },
  { title: "Scheduler", url: "/apps/scheduler", icon: CalendarCheck },
]

const pageitems = [
  { title: "Landing", url: "/pages/landing", icon: PlaneLandingIcon },
  { title: "Starter", url: "/pages/starter", icon: CirclePlayIcon },
  { title: "Account", url: "/pages/account", icon: CircleUserIcon },
  { title: "Notifications", url: "/pages/notifications", icon: BellIcon },
  { title: "Authentication", url: "/pages/auth", icon: ShieldCloseIcon },
  { title: "Error 404", url: "/pages/404", icon: TriangleAlertIcon },
]

const miscitems = [
  { title: "Pricing", url: "/pricing", icon: ShoppingCart },
  { title: "FAQ", url: "/faq", icon: CircleQuestionMarkIcon },
  { title: "Multi-level", url: "/multi-level", icon: DiamondPlusIcon },
  { title: "Showcase", url: "/showcase", icon: MonitorCheckIcon },
]
const DOCSitems = [
  { title: "Guide", url: "/pricing", icon: BookCopyIcon },
  { title: "Components", url: "/faq", icon: ComponentIcon },
  { title: "Changelog", url: "/multi-level", icon: CircleArrowOutDownLeft },
  { title: "Migration", url: "/showcase", icon:  Music2Icon },
]


// Sidebar Component
export function AppSidebar() {
  return (
    <>
    <Sidebar className="border-r bg-white p-4">
     <div className="flex items-center gap-2 px-4 py-4 ">
        <img src={logo} alt="Aurora" className="w-9 h-9 object-contain" />
        <h1 className="text-lg font-semibold tracking-wide brown opacity-70">aurora</h1>
      </div>



      {/* Logo Section */}
      <SidebarContent className="px-2 space-y-4">

        <SidebarGroup>
          <div>
            <img src="" alt="" />
          </div>

          <SidebarGroupLabel>HOMEPAGE</SidebarGroupLabel>
          <SidebarGroupContent>
            <RenderMenu items={menuItems} />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>APPS</SidebarGroupLabel>
          <SidebarGroupContent>
            <RenderMenu items={appItems} />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>PAGES</SidebarGroupLabel>
          <SidebarGroupContent>
            <RenderMenu items={pageitems} />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className=" border-b-2 border-l-black">
          <SidebarGroupLabel>MISC</SidebarGroupLabel>
          <SidebarGroupContent>
            <RenderMenu items={miscitems} />
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Search Docs Section */}
{/* Search Docs Section */}
<div className="px-3 pb-4 pt-4">
  <div className="relative mt-2">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
    <input
      type="text"
      placeholder="Search Docs"
      className="w-full pl-9 pr-3 py-1 rounded-full border border-gray-300 text-sm
      focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
  </div>
</div>
 <SidebarGroup className=" border-b-2 border-l-black">
          <SidebarGroupLabel>DOCS</SidebarGroupLabel>
          <SidebarGroupContent>
            <RenderMenu items={DOCSitems} />
          </SidebarGroupContent>
        </SidebarGroup>



      </SidebarContent>
    </Sidebar>
      </>
  )
}
