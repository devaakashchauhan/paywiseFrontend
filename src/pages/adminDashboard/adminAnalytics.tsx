import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import DashboardStats from './_components/admin-dashboard-stats'
import { DateRangeType } from '@/components/date-range-select'

const AdminAnalytics = () => {
    const [dateRange, _setDateRange] = useState<DateRangeType>(null);
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Analytics</h3>
        <p className="text-sm text-muted-foreground">
         Detailed insights and reports on system activity.
        </p>
      </div>
      <Separator />
      <DashboardStats dateRange={dateRange} />
    </div>
  )
}

export default AdminAnalytics