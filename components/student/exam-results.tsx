import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const examResults = [
  { id: 1, name: "Biology 101", score: 85, date: "2023-06-10" },
  { id: 2, name: "History 202", score: 92, date: "2023-06-15" },
  { id: 3, name: "Literature 301", score: 78, date: "2023-06-20" },
]

export function ExamResults() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exam Results</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {examResults.map((result) => (
            <li key={result.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{result.name}</p>
                <p className="text-sm text-gray-500">Score: {result.score}%</p>
                <p className="text-xs text-gray-400">{result.date}</p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

