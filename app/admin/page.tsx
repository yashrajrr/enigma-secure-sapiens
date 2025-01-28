import { AdminHeader } from "@/components/admin/header"
import { AdminSidebar } from "@/components/admin/sidebar"
import { OverviewDashboard } from "@/components/admin/overview-dashboard"
import { ManageExams } from "@/components/admin/manage-exams"

export default function AdminPanel() {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Panel</h1>
            <OverviewDashboard />
            <ManageExams />
          </div>
        </main>
      </div>
    </div>
  )
}

