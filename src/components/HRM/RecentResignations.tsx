import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resignations = [
  {
    id: "160102",
    name: "Rubeus Hagrid",
    role: "UX Designer",
    branch: "Azkaban Branch",
    reason: "Salary",
    status: "UNSATISFIED",
    statusColor: "text-orange-500",
  },
  {
    id: "140129",
    name: "Sirius Black",
    role: "Project Manager",
    branch: "Quillmark Tower",
    reason: "Career Growth",
    status: "UPSET",
    statusColor: "text-red-500",
  },
  {
    id: "720101",
    name: "Neville Longbottom",
    role: "IT Support",
    branch: "Shrieking Shack",
    reason: "Career Growth",
    status: "SATISFIED",
    statusColor: "text-green-600",
  },
];

export default function RecentResignations() {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Resignations</h2>
          <Button variant="secondary" size="sm">
            Exit-interview Records
          </Button>
        </div>

        {/* Horizontal scroll wrapper */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <table className="w-full text-sm">
              <thead className="text-muted-foreground bg-muted/40">
                <tr className="border-b">
                  <th className="py-3 px-2 text-left">ID no.</th>
                  <th className="py-3 px-2 text-left">Name</th>
                  <th className="py-3 px-2 text-left">Reason</th>
                  <th className="py-3 px-2 text-left">JSS Response</th>
                </tr>
              </thead>
              <tbody>
                {resignations.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b last:border-none hover:bg-muted/30 transition"
                  >
                    <td className="py-4 px-2">{item.id}</td>
                    <td className="py-4 px-2">
                      <div className="font-medium text-primary">
                        {item.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.role} · {item.branch}
                      </div>
                    </td>
                    <td className="py-4 px-2">{item.reason}</td>
                    <td className="py-4 px-2">
                      <span
                        className={`text-xs font-semibold ${item.statusColor}`}
                      >
                        {item.status}
                      </span>
                      <div className="mt-1 h-1.5 w-24 rounded-full bg-muted">
                        <div className="h-full w-2/3 rounded-full bg-primary" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
