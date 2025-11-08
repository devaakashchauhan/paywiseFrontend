import { Separator } from '@/components/ui/separator'
import DashboardUsers from './admin-dashboard-user'

const AdminUsersList = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Users</h3>
        <p className="text-sm text-muted-foreground">
          Monitor all user.
        </p>
      </div>
      <Separator />
      <div className="w-full mt-0">
        <DashboardUsers />
      </div>
    </div>
  )
}

export default AdminUsersList