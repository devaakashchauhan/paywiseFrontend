// import { useSummaryAnalyticsQuery } from "@/features/analytics/analyticsAPI";
import { useAdminAnalyticsQuery } from "@/features/admin/dashboard";
import SummaryCard from "./admin-summary-card";
import { DateRangeType } from "@/components/date-range-select";

const AdminDashboardStats = ({ dateRange }: { dateRange?: DateRangeType }) => {
  const { data, isFetching } = useAdminAnalyticsQuery();
  const summaryData = data?.data;
  return (
    <div className="flex flex-row items-center">
      <div className="flex-1 lg:flex-[1] grid grid-cols-1 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Total Users"
          value={summaryData?.users?.total}
          percentageChange={summaryData?.users?.percentageChange}
          dateRange={dateRange}
          isLoading={isFetching}
          cardType="other"
        />
         <SummaryCard
          title="Total Transactions"
          value={summaryData?.transactions?.total}
          percentageChange={summaryData?.transactions?.percentageChange}
          dateRange={dateRange}
          isLoading={isFetching}
          cardType="other"
        />
        <SummaryCard
          title="Total Income"
          value={summaryData?.income?.total}
          percentageChange={summaryData?.income?.percentageChange}
          dateRange={dateRange}
          isLoading={isFetching}
          cardType="other"
        />
        <SummaryCard
          title="Total Expenses"
          value={summaryData?.expense?.total}
          dateRange={dateRange}
          percentageChange={summaryData?.expense?.percentageChange}
          isLoading={isFetching}
          cardType="other"
        />
      </div>
    </div>
  );
};

export default AdminDashboardStats;
