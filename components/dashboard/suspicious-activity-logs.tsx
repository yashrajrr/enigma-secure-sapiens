import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const logs = [
  { id: 1, student: "Alice Johnson", alertType: "Multiple Devices", time: "10:30 AM", actionTaken: "Warning Issued" },
  { id: 2, student: "Bob Smith", alertType: "Suspicious Gaze", time: "11:15 AM", actionTaken: "Under Review" },
  { id: 3, student: "Charlie Brown", alertType: "Screen Sharing", time: "12:00 PM", actionTaken: "Exam Terminated" },
]

export function SuspiciousActivityLogs() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Suspicious Activity Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Alert Type</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Action Taken</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.student}</TableCell>
                <TableCell>{log.alertType}</TableCell>
                <TableCell>{log.time}</TableCell>
                <TableCell>{log.actionTaken}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

