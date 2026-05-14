import { useState } from "react";
import { Moon, User, LogOut, HelpCircle, Settings } from "lucide-react";
import { ModeToggle } from "../Toggle";
import Auth from "../Auth";

export default function UserMenu() {

  // dropdown open
  const [openUser, setOpenUser] = useState(false);

  // auth modal open
  const [openAuth, setOpenAuth] = useState(false);

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
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
      </div>

      {/* Dropdown */}
      {openUser && (
        <div className="absolute right-0 mt-3 w-72 bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 py-2 z-50 text-gray-900 dark:text-gray-100">

          {/* USER HEADER */}
          <div className="flex items-center gap-3 px-4 py-3">
            <img
              src="https://i.pravatar.cc/100"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Guest
              </p>
              <p className="text-sm text-amber-400 flex items-center gap-1">
                Merchant Captain <span>💎</span>
              </p>
            </div>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700 my-2" />

          {/* MENU ITEMS */}
          <MenuItem label="Accessibility" icon={<User className="w-4 h-4" />} />
          <MenuItem label="Preferences" icon={<Settings className="w-4 h-4" />} />

          {/* Dark mode */}
          <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-lg">
            <div className="flex items-center gap-3">
              <Moon className="w-4 h-4" />
              Dark Mode
            </div>
            <ModeToggle />
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700 my-2" />

          <MenuItem label="Account Settings" icon={<Settings className="w-4 h-4" />} />
          <MenuItem label="Help Center" icon={<HelpCircle className="w-4 h-4" />} />

          <div className="border-b border-gray-200 dark:border-gray-700 my-2" />

          {/* SIGN IN BUTTON (IMPORTANT PART) */}
          <div
            onClick={() => {
              setOpenUser(false);   // close dropdown
              setOpenAuth(true);    // open modal
            }}
          >
            <MenuItem label="Sign In" icon={<LogOut className="w-4 h-4" />} />
          </div>

        </div>
      )}

      {/* AUTH MODAL (VERY IMPORTANT) */}
      <Auth open={openAuth} onClose={() => setOpenAuth(false)} />

    </div>
  );
}

const MenuItem = ({ label, icon }: any) => (
  <div className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
    {icon}
    <span>{label}</span>
  </div>
);
