import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import DashboardStats from './_components/admin-dashboard-stats'
import DashboardRecentTransactions from './admin-dashboard-recent-transactions'
import { DateRangeType } from '@/components/date-range-select'

const AdminTransactions = () => {
    const [dateRange, _setDateRange] = useState<DateRangeType>(null);
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Transactions</h3>
        <p className="text-sm text-muted-foreground">
          Monitor all income and expense transactions.
        </p>
      </div>
      <Separator />
      <DashboardStats dateRange={dateRange} />
      {/* Dashboard Recent Transactions */}
      <div className="w-full mt-0">
        <DashboardRecentTransactions />
      </div>
    </div>
  )
}

export default AdminTransactions