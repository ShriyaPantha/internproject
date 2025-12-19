import { Video, Bell, User, Clock } from "lucide-react";

const ScheduledMeetings = () => {
  return (
    <div className="bg-white h-[480px] flex flex-col overflow-hidden pt-4 rounded-xl">

      {/* ===== Header ===== */}
      <div className="px-4 pb-4 border-b">
        <h3 className="text-lg font-semibold">Scheduled meetings</h3>
        <p className="text-sm text-gray-500">
          Track progress for scheduled meetings
        </p>
      </div>

      {/* ===== Scrollable Body ===== */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

        {/* ===== Active Meeting ===== */}
        <div className="bg-orange-100 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-sm">
              Catching up on regular updates
            </h4>
            <span className="text-xs bg-orange-400 text-white px-2 py-0.5 rounded-full">
              Now
            </span>
          </div>

          <p className="text-sm text-gray-700 flex items-center gap-2">
            <Clock size={14} />
            11 March, 2023 | <span className="font-semibold">3:30 PM</span>
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <User size={18} />
              <User size={18} />
              <User size={18} />
              <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full ml-1">
                +2
              </span>
            </div>

            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              <Video size={16} />
              Join
            </button>
          </div>
        </div>

        {/* ===== Meeting with Project Lead ===== */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3 mt-8">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-sm">
              Meeting with project lead
            </h4>
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
              2 days
            </span>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <Clock size={14} />
            13 March, 2023 | <span className="font-semibold">9:30 PM</span>
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <User size={18} />
              <User size={18} />
            </div>

            <button className="flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
              <Bell size={16} />
              Notify Me
            </button>
          </div>
        </div>

        {/* ===== Discussion with Developer ===== */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-sm">
              Discussion with the developer...
            </h4>
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
              3 days
            </span>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <Clock size={14} />
            16 March, 2023 | <span className="font-semibold">7:30 PM</span>
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <User size={18} />
              <User size={18} />
              <User size={18} />
            </div>

            <button className="flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
              <Bell size={16} />
              Notify Me
            </button>
          </div>
        </div>

        {/* ===== Quick Idea Sharing ===== */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-sm">
              Quick idea sharing session.
            </h4>
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
              4 days
            </span>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <Clock size={14} />
            17 March, 2023 | <span className="font-semibold">12:00 PM</span>
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <User size={18} />
              <User size={18} />
              <User size={18} />
            </div>

            <button className="flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
              <Bell size={16} />
              Notify Me
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ScheduledMeetings;
