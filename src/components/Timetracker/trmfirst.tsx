import React, { useState, useEffect } from "react";

const TrmFirst = () => {
  const [billable, setBillable] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Format seconds to HH:MM:SS
  const formatTime = (sec: number) => {
    const h = Math.floor(sec / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((sec % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="flex items-center bg-white p-3 rounded shadow w-full">
      {/* Left: Dropdown */}
      <select className="border border-gray-300 rounded px-3 py-1 flex-shrink-0">
        <option>What are you working on?</option>
        <option>Project A</option>
        <option>Project B</option>
      </select>

      {/* Right: Billable + Play + Timer */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Billable Toggle */}
        <label className="flex items-center gap-2 cursor-pointer">
          <span className="text-gray-700 font-medium">Billable</span>
          <div
            onClick={() => setBillable(!billable)}
            className={`w-11 h-6 flex items-center rounded-full p-1 ${
              billable ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow transform duration-300 ${
                billable ? "translate-x-5" : ""
              }`}
            ></div>
          </div>
        </label>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${
            isRunning ? "bg-red-500" : "bg-blue-500"
          }`}
        >
          {isRunning ? "❚❚" : "▶"}
        </button>

        {/* Timer */}
        <span className="font-mono text-lg">{formatTime(seconds)}</span>
      </div>
    </div>
  );
};

export default TrmFirst;
