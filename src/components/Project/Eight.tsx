import { Clock } from "lucide-react";

const meetings = [
  {
    date: "Nov 19 - 21",
    title: "Redesign module",
    color: "bg-orange-500",
    avatars: ["/a1.png", "/a2.png", "/a3.png"],
  },
  {
    date: "Nov 30",
    title: "Monthly team meeting for Falcon React Project",
    color: "bg-green-500",
    avatars: ["/a1.png", "/a2.png", "/a3.png", "/a4.png"],
    extra: 2,
  },
  {
    date: "Dec 5",
    title: "GTA VI trailer release watch party",
    color: "bg-blue-500",
    avatars: ["/a2.png", "/a3.png", "/a4.png"],
  },
  {
    date: "Dec 8",
    title: "Celebration for GTA VI trailer release",
    color: "bg-green-500",
    avatars: ["/a1.png", "/a3.png", "/a4.png"],
  },
];

const Eighth = () => {
  return (
    <div className="h-[420px] flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b">
        <h3 className="font-semibold text-lg">Schedule</h3>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-6 scrollbar-thin">
        {meetings.map((item, index) => (
          <div key={index} className="flex gap-3">
            {/* Timeline Dot */}
            <div className="flex flex-col items-center">
              <span
                className={`w-3 h-3 rounded-full ${item.color}`}
              ></span>
              <span className="flex-1 w-px bg-gray-300"></span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm font-semibold">{item.date}</p>
              <p className="text-gray-600 text-sm mt-1">
                {item.title}
              </p>

              {/* Avatars */}
              <div className="flex items-center mt-2">
                {item.avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="-ml-2 w-7 h-7 rounded-full border-2 border-white"
                  />
                ))}

                {item.extra && (
                  <div className="-ml-2 w-7 h-7 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center border-2 border-white">
                    +{item.extra}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eighth;
