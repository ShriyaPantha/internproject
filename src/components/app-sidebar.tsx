import { useState } from "react"
import {
  ChartNoAxesCombinedIcon,
  ClipboardClockIcon,
  PhoneCallIcon,
  PersonStanding,
  TimerResetIcon,
  PresentationIcon,
  ShoppingCart,
  CircleQuestionMarkIcon,
  DiamondPlusIcon,
  MonitorCheckIcon,
  ComponentIcon,
  CircleArrowOutDownLeft,
  Music2Icon,
  ChevronDown,
  Search,
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
} from "@/components/ui/sidebar"

import { Link, useLocation } from "react-router-dom"
import { logo } from "@/constants/image"

/* ---------- SIMPLE MENU ---------- */
function RenderMenu({ items }: { items: any[] }) {
  const location = useLocation()

  return (
    <SidebarMenu>
      {items.map((item) => {
        const isActive = location.pathname === item.url

        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link
                to={item.url}
                className={`flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition
                  ${
                    isActive
                      ? "bg-blue-500 text-white dark:bg-blue-500/20 dark:text-blue-400"
                      : "text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
              >
                <item.icon className="w-4 h-4" />
                {item.title}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  )
}

/* ---------- MULTI LEVEL MENU ---------- */
function MultiLevelMenu({ item }: { item: any }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="space-y-1">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm
        text-gray-700 hover:bg-blue-50
        dark:text-gray-300 dark:hover:bg-gray-800"
      >
        <div className="flex items-center gap-3">
          <item.icon className="w-4 h-4" />
          {item.title}
        </div>
        <ChevronDown className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="ml-6 space-y-1">
          {item.children.map((child: any) =>
            child.children ? (
              <MultiLevelMenu key={child.title} item={child} />
            ) : (
              <Link
                key={child.title}
                to={child.url}
                className={`block rounded-md px-2 py-1 text-sm transition
                  ${
                    location.pathname === child.url
                      ? "bg-blue-500 text-white dark:bg-blue-500/20 dark:text-blue-400"
                      : "text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
              >
                {child.title}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  )
}

/* ---------- MENU DATA ---------- */
const menuItems = [
  { title: "E-commerce", url: "/", icon: ShoppingCart },
  { title: "Project", url: "/project", icon: ClipboardClockIcon },
  { title: "CRM", url: "/crm", icon: PhoneCallIcon },
  { title: "Analytics", url: "/analytics", icon: ChartNoAxesCombinedIcon },
  { title: "HRM", url: "/hrm", icon: PersonStanding },
  { title: "Time Tracker", url: "/timer", icon: TimerResetIcon },
  { title: "Hiring", url: "/hiring", icon: PresentationIcon },
]

const miscItems = [
  {
    title: "Pricing",
    icon: ShoppingCart,
    children: [
      { title: "Pricing Column", url: "/pricing/column" },
      { title: "Pricing Table", url: "/pricing/table" },
    ],
  },
  {
    title: "FAQ",
    url: "/faq",
    icon: CircleQuestionMarkIcon,
  },
  {
    title: "Multi-level",
    icon: DiamondPlusIcon,
    children: [
      { title: "Level two (1)", url: "/multi/level-2-1" },
      {
        title: "Level two (2)",
        children: [
          { title: "Level three (3)", url: "/multi/level-3-3" },
          { title: "Level three (4)", url: "/multi/level-3-4" },
        ],
      },
    ],
  },
  { title: "Showcase", url: "/showcase", icon: MonitorCheckIcon },
]

const docsItems = [
  { title: "Guide", url: "/guide", icon: ShoppingCart },
  { title: "Components", url: "/components", icon: ComponentIcon },
  { title: "Changelog", url: "/changelog", icon: CircleArrowOutDownLeft },
  { title: "Migration", url: "/migration", icon: Music2Icon },
]

/* ---------- SIDEBAR ---------- */
export function AppSidebar() {
  return (
    <Sidebar className="border-r bg-white dark:bg-gray-900 dark:border-gray-800 p-4">
      {/* LOGO */}
      <div className="flex items-center gap-2 px-4 py-4">
        <img src={logo} alt="Aurora" className="w-9 h-9" />
        <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          aurora
        </h1>
      </div>

      <SidebarContent className="px-2 space-y-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 dark:text-gray-400">
            HOMEPAGE
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <RenderMenu items={menuItems} />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 dark:text-gray-400">
            MISC
          </SidebarGroupLabel>
          <SidebarGroupContent className="space-y-1">
            {miscItems.map((item) =>
              item.children ? (
                <MultiLevelMenu key={item.title} item={item} />
              ) : (
                <SidebarMenuButton asChild key={item.title}>
                  <Link
                    to={item.url}
                    className="flex items-center gap-3 rounded-md px-2 py-2 text-sm
                    text-gray-700 hover:bg-blue-50
                    dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.title}
                  </Link>
                </SidebarMenuButton>
              )
            )}
          </SidebarGroupContent>
        </SidebarGroup>

        {/* SEARCH */}
        <div className="px-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
            <input
              placeholder="Search Docs"
              className="w-full rounded-full border border-gray-300 bg-white px-9 py-1 text-sm
              dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 dark:text-gray-400">
            DOCS
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <RenderMenu items={docsItems} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
