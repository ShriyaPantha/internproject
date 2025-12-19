import { Rnd } from "react-rnd";

const days = [
  "01 M", "02 T", "03 W", "04 T", "05 F", "06 S",
  "07 S", "08 M", "09 T", "10 W", "11 T",
];

const projects = [
  {
    name: "Design new app",
    color: "bg-blue-200",
    tasks: [
      { title: "Research User Needs", start: 0, span: 6 },
      { title: "Create Wireframes", start: 7, span: 2 },
    ],
  },
  {
    name: "New dashboard",
    color: "bg-blue-200",
    tasks: [
      { title: "Finish designing", start: 1, span: 3 },
      { title: "System Deployment", start: 5, span: 4 },
    ],
  },
  {
    name: "Falcon Development",
    color: "bg-orange-200",
    tasks: [
      { title: "Analyze Competitor Apps", start: 0, span: 6 },
      { title: "Design Database", start: 7, span: 2 },
    ],
  },
  {
    name: "Phoenix Travel App",
    color: "bg-green-200",
    tasks: [
      { title: "Develop Backend", start: 0, span: 2 },
      { title: "Gather User Requirements", start: 3, span: 5 },
    ],
  },
  {
    name: "Design Finance App",
    color: "bg-green-200",
    tasks: [
      { title: "Implement Authentication and Authorization", start: 1, span: 6 },
    ],
  },
  {
    name: "Update Figma File",
    color: "bg-green-200",
    tasks: [
      { title: "Develop Initial Prototype", start: 0, span: 3 },
      { title: "Identify Elements to be Updated", start: 4, span: 4 },
    ],
  },
];

const DAY_WIDTH = 64;

export default function ProjectTimeline() {
  return (
    <div className="bg-white p-6 w-full rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold">Project timeline</h2>
          <p className="text-sm text-gray-500">
            Status of completion for all projects
          </p>
        </div>
        <select className="border rounded-lg px-3 py-2 text-sm bg-gray-50">
          <option>December</option>
        </select>
      </div>

      {/* Timeline Container */}
      <div className="border rounded-lg overflow-hidden">
        <div className="flex">

          {/* Left Column */}
          <div className="w-64 border-r bg-white">
            <div className="px-5 py-4 text-sm font-semibold text-gray-800 border-b">
              All Projects
            </div>

            {projects.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-5 py-4 border-b hover:bg-gray-50 transition"
              >
                <span className={`w-[3px] h-8 rounded-full ${p.color}`} />
                <span className="text-sm text-gray-700 truncate">
                  {p.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Timeline */}
          <div className="flex-1 overflow-x-auto">
            <div className="min-w-[720px] relative">

              {/* Days Row */}
              <div className="grid grid-cols-11 text-xs text-gray-500 border-b bg-gray-50">
                {days.map((d, i) => (
                  <div
                    key={i}
                    className="p-2 border-l text-center whitespace-nowrap"
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Task Rows */}
              {projects.map((p, rowIdx) => (
                <div key={rowIdx} className="relative h-14 border-b">
                  {p.tasks.map((t, idx) => (
                    <Rnd
                      key={idx}
                      bounds="parent"
                      dragAxis="x"
                      enableResizing={{ left: true, right: true }}
                      default={{
                        x: t.start * DAY_WIDTH,
                        y: 8,
                        width: t.span * DAY_WIDTH,
                        height: 36,
                      }}
                      className={`${p.color} rounded-md text-xs px-3 flex items-center shadow-sm cursor-move text-gray-800`}
                    >
                      {t.title}
                    </Rnd>
                  ))}
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
