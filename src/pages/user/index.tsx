import PageLayout from "@/components/page-layout";
import ScheduleReportDrawer from "./_component/schedule-report-drawer";
import { Card, CardContent } from "@/components/ui/card";
import ReportTable from "./_component/report-table";

const Users = () => {

    return (
       <PageLayout
      title="User Management"
      subtitle="View and manage your users"
      addMarginTop
      rightAction={
        <ScheduleReportDrawer />
      }
    >
        <Card className="border shadow-none">
          <CardContent>
           <ReportTable />
          </CardContent>
        </Card>
    </PageLayout>
    );
};

export default Users;
