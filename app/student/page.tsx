import { StudentHeader } from "@/components/student/header"
import { StudentSidebar } from "@/components/student/sidebar"
import { UpcomingExams } from "@/components/student/upcoming-exams"
import { ExamResults } from "@/components/student/exam-results"
import { ActivityAlerts } from "@/components/student/activity-alerts"

export default function StudentDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <StudentSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <StudentHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Student Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UpcomingExams />
              <ExamResults />
            </div>
            <ActivityAlerts />
          </div>
        </main>
      </div>
    </div>
  )
}

