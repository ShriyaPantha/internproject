const RoadmapTable = () => {
  return (
    <div className="bg-white p-4 rounded-lg h-[500px] overflow-y-auto">
      {/* ↑ HEIGHT + VERTICAL SCROLL */}

      <h2 className="text-2xl font-semibold mb-1">Product roadmap</h2>
      <p className="text-gray-500 mb-4">Status of completion for all tasks</p>

      {/* ===== Aurora Section ===== */}
      <div className="mb-6">
        <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg sticky top-0 z-10">
          <h3 className="font-semibold text-lg">Aurora</h3>
        </div>

        {/* Horizontal scroll */}
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-3 w-10">
                  <input type="checkbox" />
                </th>
                <th>Name</th>
                <th>ETA</th>
                <th>Lead</th>
                <th>Members</th>
                <th>Progress</th>
                <th className="text-right pr-4">State</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-4">
                  <input type="checkbox" />
                </td>
                <td className="font-medium">Design new app</td>
                <td>16 Nov, 2023</td>
                <td>👩‍💻</td>
                <td className="flex gap-1">
                  <span>👨‍💻</span>
                  <span>👩‍💻</span>
                  <span>🧑‍💻</span>
                </td>
                <td>
                  <div className="w-40 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full w-[90%]" />
                  </div>
                </td>
                <td className="text-right pr-4 text-green-600 font-medium">
                  ✔ Done
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== Falcon Section ===== */}
      <div>
        <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg sticky top-0 z-10">
          <h3 className="font-semibold text-lg">Falcon</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-3 w-10">
                  <input type="checkbox" />
                </th>
                <th>Name</th>
                <th>ETA</th>
                <th>Lead</th>
                <th>Members</th>
                <th>Progress</th>
                <th className="text-right pr-4">State</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-4">
                  <input type="checkbox" />
                </td>
                <td>Create Detailed Project Plan</td>
                <td>25 Nov, 2023</td>
                <td>👨‍💼</td>
                <td className="flex gap-1">
                  <span>👩‍💻</span>
                  <span>👨‍💻</span>
                  <span className="text-blue-600">+2</span>
                </td>
                <td>
                  <div className="w-40 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-orange-400 rounded-full w-[50%]" />
                  </div>
                </td>
                <td className="text-right pr-4 text-orange-500 font-medium">
                  ⚠ Overdue
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-4">
                  <input type="checkbox" />
                </td>
                <td>Develop Initial Prototype</td>
                <td>29 Nov, 2023</td>
                <td>👨‍💼</td>
                <td className="flex gap-1">
                  <span>👩‍💻</span>
                  <span>👨‍💻</span>
                  <span className="text-blue-600">+2</span>
                </td>
                <td>
                  <div className="w-40 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-orange-400 rounded-full w-[50%]" />
                  </div>
                </td>
                <td className="text-right pr-4 text-orange-500 font-medium">
                  ⚠ Delayed
                </td>
              </tr>

              <tr>
                <td className="py-4">
                  <input type="checkbox" />
                </td>
                <td>Perform Quality Assurance</td>
                <td>02 Dec, 2023</td>
                <td>👩‍🔬</td>
                <td className="flex gap-1">
                  <span>👨‍💻</span>
                  <span>👩‍💻</span>
                </td>
                <td>
                  <div className="w-40 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full w-[75%]" />
                  </div>
                </td>
                <td className="text-right pr-4 text-green-600 font-medium">
                  ✔ On Track
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoadmapTable;
