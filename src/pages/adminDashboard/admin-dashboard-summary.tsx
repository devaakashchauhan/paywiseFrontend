import { useTypedSelector } from "@/app/hook";
import { DateRangeType } from "@/components/date-range-select";
import DashboardHeader from "./_components/admin-dashboard-header";
import DashboardStats from "./_components/admin-dashboard-stats";

const DashboardSummary = ({
  dateRange,
  setDateRange,
}: {
  dateRange?: DateRangeType;
  setDateRange?: (range: DateRangeType) => void;
}) => {
  const { user } = useTypedSelector((state) => state.auth);

  return (
    <div className="w-full">
      <DashboardHeader
        title={`Welcome back, ${user?.name || "Unknow"}`}
        subtitle="This is your overview report for the selected period"
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
      <DashboardStats dateRange={dateRange} />
    </div>
  );
};

export default DashboardSummary;
