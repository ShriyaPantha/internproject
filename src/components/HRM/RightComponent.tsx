import React from "react";
import {
  User,
  PenTool,
  FileText,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

const RightComponent = () => {
  return (
    <div className="w-full h-[800px] bg-white border flex flex-col">

      {/* HEADER (fixed) */}
      <div className="flex justify-between items-start p-4 border-b shrink-0">
        <div>
          <h3 className="text-sm font-semibold">Thu, 19/09/24</h3>
          <p className="text-xs text-gray-500">
            Here's some issues needing your attention
          </p>
        </div>

        <select className="text-xs px-2 py-1 rounded-md border bg-gray-50">
          <option>Sort by</option>
        </select>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
        <Item icon={<User />} title="Albus Dumbledore" text="requested a meeting" time="in 1 month" />
        <Item icon={<PenTool />} title="W-8ben" text="is waiting for your signature" badge="Due" badgeColor="yellow" />

        <Item
          icon={<ChevronRight />}
          title="Credence Barebone"
          text="applied for 3 days leave (Oct 30 - Nov 1)"
          link="See application"
          time="in 1 month"
          actions
        />

        <Item
          icon={<FileText />}
          title="Performance review"
          text="of Queenie Goldstein is ready for you"
          badge="Past Due"
          badgeColor="red"
        />

        <Item
          icon={<ChevronRight />}
          title="Gellert Grindelwald"
          text="applied for sabbatical"
          link="See application"
          time="in 1 month"
          actions
        />

        <Item
          icon={<User />}
          title="Albus Dumbledore"
          text="requested a meeting"
          badge="Cancelled"
          badgeColor="gray"
        />

        <Item
          icon={<FileText />}
          title="Half Yearly Self Assessment"
          text="is ready for you"
          badge="Past Due"
          badgeColor="red"
        />

        <Item
          icon={<PenTool />}
          title="Redrafted Benefit Form"
          text="of Jacob Kowalski is waiting for your signature"
          badge="Due"
          badgeColor="yellow"
        />

        <Item
          icon={<ChevronRight />}
          title="Sirius Black"
          text="applied for 1 day leave (Nov 1)"
          link="See application"
          time="in 1 month"
          actions
        />

        <Item
          icon={<FileText />}
          title="Performance review"
          text="of Arthur Weasley is ready for you"
          badge="Due"
          badgeColor="yellow"
        />
      </div>

      {/* FOOTER BUTTON (fixed) */}
      <div className="p-4 border-t shrink-0 bg-white">
        <button className="w-full py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default RightComponent;

/* ---------- ITEM ---------- */

type ItemProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
  time?: string;
  link?: string;
  badge?: string;
  badgeColor?: "red" | "yellow" | "gray";
  actions?: boolean;
};

const Item = ({
  icon,
  title,
  text,
  time,
  link,
  badge,
  badgeColor,
  actions,
}: ItemProps) => {
  return (
    <div className="flex justify-between items-start bg-gray-50 hover:bg-gray-100 rounded-lg p-3">
      <div className="flex gap-3">
        <div className="p-2 bg-white rounded-md border text-blue-600">
          {icon}
        </div>

        <div>
          <p className="text-sm">
            <span className="font-medium">{title}</span>{" "}
            <span className="text-gray-600">{text}</span>
            {link && (
              <span className="text-blue-600 ml-1 cursor-pointer">
                {link}
              </span>
            )}
          </p>

          {time && <p className="text-xs text-gray-400 mt-1">{time}</p>}

          {actions && (
            <div className="flex gap-4 mt-2 text-sm">
              <button className="text-blue-600">Accept</button>
              <button className="text-red-500">Reject</button>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {badge && (
          <span
            className={`text-xs px-2 py-0.5 rounded-full
              ${
                badgeColor === "red"
                  ? "bg-red-100 text-red-600"
                  : badgeColor === "yellow"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-200 text-gray-600"
              }`}
          >
            {badge}
          </span>
        )}
        <MoreHorizontal className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};
