import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const stats = [
  { name: "Total Exams Conducted", value: 1024 },
  { name: "Suspicious Cases Flagged", value: 23 },
  { name: "Active Users", value: 3720 },
]

const data = [
  { name: "Jan", exams: 65, flags: 4 },
  { name: "Feb", exams: 59, flags: 3 },
  { name: "Mar", exams: 80, flags: 5 },
  { name: "Apr", exams: 81, flags: 2 },
  { name: "May", exams: 56, flags: 1 },
  { name: "Jun", exams: 55, flags: 3 },
  { name: "Jul", exams: 40, flags: 5 },
]

export function OverviewDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Exam Activity Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="exams" fill="#8884d8" name="Exams Conducted" />
              <Bar yAxisId="right" dataKey="flags" fill="#82ca9d" name="Suspicious Flags" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

