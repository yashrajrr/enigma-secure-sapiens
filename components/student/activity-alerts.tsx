import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

const activityAlerts = [
  { id: 1, message: "Multiple devices detected during Physics 202 exam", date: "2023-07-05" },
  { id: 2, message: "Suspicious gaze movement detected in Mathematics 101 exam", date: "2023-07-10" },
]

export function ActivityAlerts() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
          Activity Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        {activityAlerts.length > 0 ? (
          <ul className="space-y-4">
            {activityAlerts.map((alert) => (
              <li key={alert.id} className="flex items-start">
                <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">{alert.message}</p>
                  <p className="text-sm text-gray-500">{alert.date}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No activity alerts at this time.</p>
        )}
      </CardContent>
    </Card>
  )
}

