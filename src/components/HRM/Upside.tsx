import React from "react";

const Upside = () => {
  return (
    <div className="grid grid-cols-12 overflow-hidden border bg-white">

      {/* LEFT IMAGE HEADER */}
      <div
        className="col-span-7 relative flex items-center px-6"
        style={{
          backgroundImage:
            "url('/mnt/data/3928d334-2d4d-4463-8304-7997c028586a.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Profile */}
        <div className="relative flex items-center gap-4">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>

          {/* Text */}
          <div className="text-white">
            <h2 className="text-xl font-semibold leading-tight">
              Yaga Masamichi
            </h2>
            <p className="text-sm text-gray-300">
              HR Manager (Sr)
            </p>
          </div>
        </div>

        {/* BAR GRAPH */}
        <div className="absolute right-6 bottom-4 flex items-end gap-1.5 h-20">
          {[20, 40, 30, 55, 35, 60, 45, 70, 50, 65, 40].map((h, i) => (
            <div
              key={i}
              className="w-1.5 bg-white/80 rounded-sm"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>

      {/* RIGHT INFO GRID */}
      <div className="col-span-5 grid grid-cols-3 border-l">
        {[
          { label: "Salary", value: "$100,000" },
          { label: "Recruiter", value: "Hugo Brook", blue: true },
          { label: "Application", value: "25" },
          { label: "Department", value: "Human reso..." },
          { label: "Location", value: "Remote" },
          { label: "Employment", value: "Full" },
        ].map((item, i) => (
          <div
            key={i}
            className="p-4 border-b border-r last:border-r-0"
          >
            <p className="text-sm font-medium text-black">
              {item.label}
            </p>
            <p
              className={`font-medium ${
                item.blue ? "text-blue-500" : "text-gray-600"
              }`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Upside;
