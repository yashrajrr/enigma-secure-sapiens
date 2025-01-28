import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { LiveMonitoringGrid } from "@/components/dashboard/live-monitoring-grid"
import { ExamStats } from "@/components/dashboard/exam-stats"
import { SuspiciousActivityLogs } from "@/components/dashboard/suspicious-activity-logs"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
            <ExamStats />
            <LiveMonitoringGrid />
            <SuspiciousActivityLogs />
          </div>
        </main>
      </div>
    </div>
  )
}

