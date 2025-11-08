import PageLayout from "@/components/page-layout";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PROTECTED_ROUTES } from "@/routes/common/routePath";
import { Link, Outlet, useLocation } from "react-router-dom";
// import { Separator } from "@/components/ui/separator"

interface ItemPropsType {
  items: {
    title: string;
    href: string;
  }[];
}

const Admin = () => {
  const sidebarNavItems = [
    { title: "Dashboard", href: PROTECTED_ROUTES.ADMIN_DASHBOARD },
    { title: "Transactions", href: PROTECTED_ROUTES.ADMIN_DASHBOARD_TRANSACTIONS },
    { title: "Users", href: PROTECTED_ROUTES.ADMIN_DASHBOARD_USERS },
    // { title: "Analytics", href: PROTECTED_ROUTES.ADMIN_DASHBOARD_ANALYTICS },
    { title: "Appearance", href: PROTECTED_ROUTES.ADMIN_DASHBOARD_APPEARANCE },
    { title: "Account", href: PROTECTED_ROUTES.ADMIN_DASHBOARD_SETTINGS },
  ];
  return (
    <PageLayout
      title="Admin Dashboard"
      subtitle="Manage your account settings and set e-mail preferences."
      addMarginTop
    >
      <Card className="border shadow-none">
        <CardContent>
          <div
            className="flex flex-col space-y-8 lg:flex-row lg:space-x-12
         lg:space-y-0 pb-10 pt-2"
          >
            <aside className="mr-4 lg:max-w-36">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            {/* <Separator orientation="vertical" className=" !h-[500px] !border-gray-200" /> */}
            <div className="w-full">
              <Outlet />
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  );
};

function SidebarNav({ items }: ItemPropsType) {
  const { pathname } = useLocation();
  return (
    <nav className={"flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1"}>
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export default Admin;
