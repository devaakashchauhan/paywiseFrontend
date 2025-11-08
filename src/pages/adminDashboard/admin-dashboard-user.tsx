import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import UserTable from "./user-table";

const DashboardUsers = () => {
  return (
    <Card className="!shadow-none border-1 border-gray-100 dark:border-border">
      <CardHeader className="!pb-0">
        <CardTitle className="text-xl">Recent Users</CardTitle>
        <CardDescription>Showing all recent users </CardDescription>
        <CardAction>
          <Button
            asChild
            variant="link"
            className="!text-gray-700 dark:!text-gray-200 !font-normal"
          >
          </Button>
        </CardAction>
        <Separator className="mt-3 !bg-gray-100 dark:!bg-gray-800" />
      </CardHeader>
      <CardContent className="pt-0">
        <UserTable pageSize={10} isShowPagination={false} />
      </CardContent>
    </Card>
  );
};

export default DashboardUsers;
