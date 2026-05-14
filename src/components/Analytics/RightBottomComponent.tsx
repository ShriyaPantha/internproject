type UserCountry = {
  code: string; // ISO country code
  country: string;
  total: string;
  change: string;
  type: "up" | "down" | "neutral";
  newUser: string;
  sessions: string;
};

const users: UserCountry[] = [
  {
    code: "np",
    country: "Nepal",
    total: "84,694",
    change: "+2.90%",
    type: "up",
    newUser: "9,536",
    sessions: "19,536",
  },
  {
    code: "in",
    country: "India",
    total: "30,612",
    change: "-4.31%",
    type: "down",
    newUser: "7,700",
    sessions: "2,900",
  },
  {
    code: "au",
    country: "Australia",
    total: "22,112",
    change: "+0.05%",
    type: "neutral",
    newUser: "2,778",
    sessions: "21,778",
  },
  {
    code: "us",
    country: "USA",
    total: "9,928",
    change: "+11.31%",
    type: "up",
    newUser: "2,272",
    sessions: "29,272",
  },
  {
    code: "fr",
    country: "France",
    total: "5,357",
    change: "-1.94%",
    type: "down",
    newUser: "3,374",
    sessions: "3,374",
  },
];

const RightBottomComponent = () => {
  return (
    <div className="bg-white   h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">Users by Country</h3>
          <p className="text-sm text-gray-500">
            Detail informations of users
          </p>
        </div>

        <div className="flex bg-gray-100 rounded-lg p-1 text-sm">
          <button className="px-3 py-1 rounded-md bg-blue-100 text-blue-600">
            Weekly
          </button>
          <button className="px-3 py-1">Monthly</button>
          <button className="px-3 py-1">Yearly</button>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="py-3 px-2 text-left">#</th>
              <th className="py-3 px-2 text-left">Country</th>
              <th className="py-3 px-2 text-center">Total User</th>
              <th className="py-3 px-2 text-center">vs. Last week</th>
              <th className="py-3 px-2 text-center">New User</th>
              <th className="py-3 px-2 text-center">Engaged Sessions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-b last:border-none">
                <td className="py-3 px-2">{i + 1}</td>

                <td className="py-3 px-2 flex items-center gap-2">
                  <img
                    src={`https://flagcdn.com/w20/${u.code}.png`}
                    srcSet={`https://flagcdn.com/w40/${u.code}.png 2x`}
                    width="20"
                    height="15"
                    alt={u.country}
                    className="rounded-sm"
                  />
                  <span>{u.country}</span>
                </td>

                <td className="text-center">{u.total}</td>

                <td className="text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      u.type === "up"
                        ? "bg-green-100 text-green-600"
                        : u.type === "down"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {u.change}
                  </span>
                </td>

                <td className="text-center">{u.newUser}</td>
                <td className="text-center">{u.sessions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RightBottomComponent;
