import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const upcomingExams = [
  { id: 1, name: "Mathematics 101", date: "2023-07-15", time: "10:00 AM" },
  { id: 2, name: "Physics 202", date: "2023-07-18", time: "2:00 PM" },
  { id: 3, name: "Chemistry 301", date: "2023-07-20", time: "11:30 AM" },
]

export function UpcomingExams() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Exams</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {upcomingExams.map((exam) => (
            <li key={exam.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{exam.name}</p>
                <p className="text-sm text-gray-500">
                  {exam.date} at {exam.time}
                </p>
              </div>
              <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm">Prepare</button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

