import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

function MultiLevelMenu({ item }: { item: any }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="space-y-1">
      {/* Parent */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm hover:bg-blue-50"
      >
        <div className="flex items-center gap-3">
          {item.icon && <item.icon className="w-4 h-4" />}
          <span>{item.title}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Children */}
      {open && (
        <div className="ml-6 space-y-1">
          {item.children.map((child: any) =>
            child.children ? (
              <MultiLevelMenu key={child.title} item={child} />
            ) : (
              <Link
                key={child.title}
                to={child.url}
                className={`block rounded-md px-2 py-1 text-sm ${
                  location.pathname === child.url
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-50 text-gray-700"
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
