import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const students = [
  { id: 1, name: "Alice Johnson", status: "normal" },
  { id: 2, name: "Bob Smith", status: "flagged" },
  { id: 3, name: "Charlie Brown", status: "normal" },
  { id: 4, name: "Diana Ross", status: "normal" },
  { id: 5, name: "Ethan Hunt", status: "flagged" },
  { id: 6, name: "Fiona Apple", status: "normal" },
]

export function LiveMonitoringGrid() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Live Monitoring</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {students.map((student) => (
            <div
              key={student.id}
              className={`p-4 rounded-lg ${student.status === "flagged" ? "bg-red-100" : "bg-gray-100"}`}
            >
              <div className="aspect-w-16 aspect-h-9 mb-2">
                <div className="w-full h-full bg-gray-300 rounded-lg"></div>
              </div>
              <p className="text-sm font-medium">{student.name}</p>
              <p className="text-xs text-gray-500 capitalize">{student.status}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

