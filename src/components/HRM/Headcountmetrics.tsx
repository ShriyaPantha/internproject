import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", involuntary: 20, voluntary: 15, other: 10 },
  { month: "Feb", involuntary: 15, voluntary: 10, other: 8 },
  { month: "Mar", involuntary: 10, voluntary: 8, other: 5 },
  { month: "Apr", involuntary: 18, voluntary: 14, other: 7 },
  { month: "May", involuntary: 22, voluntary: 16, other: 9 },
  { month: "Jun", involuntary: 12, voluntary: 9, other: 4 },
  { month: "Jul", involuntary: 25, voluntary: 18, other: 6 },
  { month: "Aug", involuntary: 15, voluntary: 10, other: 5 },
  { month: "Sep", involuntary: 10, voluntary: 8, other: 4 },
  { month: "Oct", involuntary: 18, voluntary: 14, other: 6 },
  { month: "Nov", involuntary: 20, voluntary: 16, other: 7 },
  { month: "Dec", involuntary: 12, voluntary: 9, other: 5 },
];

export default function HeadcountMetrics() {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6">
        <div className="mb-5">
          <h2 className="text-lg font-semibold">Headcount Metrics</h2>
          <p className="text-sm text-muted-foreground">
            Key summaries of no. of employees
          </p>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={6}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="involuntary" stackId="a" radius={[6, 6, 0, 0]} />
              <Bar dataKey="voluntary" stackId="a" radius={[6, 6, 0, 0]} />
              <Bar dataKey="other" stackId="a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
