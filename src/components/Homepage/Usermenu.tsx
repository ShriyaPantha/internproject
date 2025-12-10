import { useState } from "react";
import { ChevronRight, Moon, User, LogOut, HelpCircle, Settings } from "lucide-react";

export default function UserMenu() {
  const [openUser, setOpenUser] = useState(false);

  return (
    <div className="relative">
      {/* Avatar Button */}
      <div
        onClick={() => setOpenUser(!openUser)}
        className="cursor-pointer relative"
      >
        <img
          src="https://i.pravatar.cc/100"
          className="w-9 h-9 rounded-full border shadow"
        />

        {/* Green active dot */}
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>

      {/* Dropdown */}
      {openUser && (
        <div className="absolute right-0 mt-3 w-75 bg-white shadow-xl rounded-2xl border py-2 z-50">

          {/* USER HEADER */}
          <div className="flex items-center gap-3 px-4 py-3">
            <img
              src="https://i.pravatar.cc/100"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <p className="font-semibold">Guest</p>
              <p className="text-sm text-amber-600 flex items-center gap-1">
                Merchant Captain <span>💎</span>
              </p>
            </div>
          </div>

          <div className="border-b my-2" />

          {/* MENU ITEMS */}
          {/* Accessibility */}
          <MenuItem label="Accessibility" icon={<User className="w-4 h-4" />} />

          {/* Preferences */}
          <MenuItem label="Preferences" icon={<Settings className="w-4 h-4" />} />

          {/* Dark mode */}
          <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <div className="flex items-center gap-3">
              <Moon className="w-4 h-4" />
              Dark Mode
            </div>

            {/* Toggle */}
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer
                             peer-checked:bg-blue-600"></div>
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-all 
                              peer-checked:translate-x-5"></div>
            </label>
          </div>

          <div className="border-b my-2" />

          {/* Account Settings */}
          <MenuItem label="Account Settings" icon={<Settings className="w-4 h-4" />} />

          {/* Help */}
          <MenuItem label="Help Center" icon={<HelpCircle className="w-4 h-4" />} />

          <div className="border-b my-2" />

          {/* Sign Out */}
          <MenuItem label="Sign In" icon={<LogOut className="w-4 h-4" />} />
        </div>
      )}
    </div>
  );
}

const MenuItem = ({ label, icon }: any) => (
  <div className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100">
    {icon}
    <span>{label}</span>
  </div>
);
