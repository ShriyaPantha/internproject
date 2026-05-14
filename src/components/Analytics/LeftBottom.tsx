import React from "react";

const data = [
  { label: "May 12 - May 18", users: 142, weeks: [100, 84.5, 72.5, 56.3, 28.2] },
  { label: "May 19 - May 25", users: 185, weeks: [100, 82, 68, 52, 24] },
  { label: "May 26 - Jun 01", users: 112, weeks: [100, 78, 64, 48, 20] },
  { label: "Jun 02 - Jun 08", users: 56, weeks: [100, 65, 50, 30, 15] },
];

const CohortTableCard = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-semibold text-lg">User activity by Cohort</h3>
          <p className="text-sm text-gray-500">
            Detail information of the products
          </p>
        </div>

        <select className="border px-2 py-1 text-sm rounded">
          <option>Count Per User</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-2">
          <thead>
            <tr className="text-gray-500">
              <th align="left">Acquisition</th>
              <th>Users</th>
              <th>Week 1</th>
              <th>Week 2</th>
              <th>Week 3</th>
              <th>Week 4</th>
              <th>Week 5</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>{row.label}</td>
                <td align="center">{row.users}</td>
                {row.weeks.map((w, j) => (
                  <td
                    key={j}
                    className="rounded text-center"
                    style={{
                      backgroundColor: `rgba(59,130,246,${w / 120})`,
                      color: "#000",
                    }}
                  >
                    {w}%
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CohortTableCard;
