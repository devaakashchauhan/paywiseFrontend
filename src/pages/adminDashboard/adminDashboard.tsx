//import ExpenseBreakDown from "./expense-breakdown";
import { useState } from "react";
import { DateRangeType } from "@/components/date-range-select";
import DashboardDataChart from "./admin-dashboard-data-chart";
import { Separator } from "@/components/ui/separator";
import { RecentTransactions } from "./_components/admin-recent-transactions";
import { AdminKeyMetrics } from "./_components/admin-key-metrics";

const AdminMainDashboard = () => {
  const [dateRange, _setDateRange] = useState<DateRangeType>(null);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Dashboard</h3>
        <p className="text-sm text-muted-foreground">
          Welcome back! Here's your system overview.
        </p>
      </div>
      <Separator />

      {/* <DashboardStats dateRange={dateRange} /> */}
      <AdminKeyMetrics />
      <div className="w-full flex flex-col">
        {/* Dashboard Summary Overview */}

        {/* Dashboard Main Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-4">
            <DashboardDataChart dateRange={dateRange} />
          </div>
          <div className="lg:col-span-2">
            {/* <ExpensePieChart dateRange={dateRange} /> */}
            <RecentTransactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMainDashboard;
