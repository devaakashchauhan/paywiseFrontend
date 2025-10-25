import { AUTH_ROUTES, PROTECTED_ROUTES } from "./routePath";
import SignIn from "@/pages/auth/sign-in";
import SignUp from "@/pages/auth/sign-up";
import Dashboard from "@/pages/dashboard";
import Transactions from "@/pages/transactions";
import Reports from "@/pages/reports";
import Settings from "@/pages/settings";
import Account from "@/pages/settings/account";
import Appearance from "@/pages/settings/appearance";
import AdminTransactions from "@/pages/adminDashboard/adminTransactions";
import AdminAnalytics from "@/pages/adminDashboard/adminAnalytics";
// import AdminSettings from "@/pages/adminDashboard/settings";
import AdminMainDashboard from "@/pages/adminDashboard/adminDashboard";
import Admin from "@/pages/adminDashboard";
import AdminUsers from "@/pages/adminDashboard/adminUsers";
// import Billing from "@/pages/settings/billing";

export const authenticationRoutePaths = [
  { path: AUTH_ROUTES.SIGN_IN, element: <SignIn /> },
  { path: AUTH_ROUTES.SIGN_UP, element: <SignUp /> },
];

export const protectedRoutePaths = [
  { path: PROTECTED_ROUTES.OVERVIEW, element: <Dashboard /> },
  { path: PROTECTED_ROUTES.TRANSACTIONS, element: <Transactions /> },
  { path: PROTECTED_ROUTES.REPORTS, element: <Reports /> },
  { path: PROTECTED_ROUTES.ADMIN_DASHBOARD, element: <Admin /> ,
    children: [
      { index: true, element: <AdminMainDashboard /> },
      { path: PROTECTED_ROUTES.ADMIN_DASHBOARD_USERS, element: <AdminMainDashboard /> },
      { path: PROTECTED_ROUTES.ADMIN_DASHBOARD_USERS, element: <AdminUsers /> },
      { path: PROTECTED_ROUTES.ADMIN_DASHBOARD_TRANSACTIONS, element: <AdminTransactions /> },
      { path: PROTECTED_ROUTES.ADMIN_DASHBOARD_ANALYTICS, element: <AdminAnalytics /> },
      { path: PROTECTED_ROUTES.ADMIN_DASHBOARD_SETTINGS, element: <Account /> },
      { path: PROTECTED_ROUTES.ADMIN_DASHBOARD_APPEARANCE, element: <Appearance /> },
    ]
  },
  { path: PROTECTED_ROUTES.SETTINGS,
    element: <Settings />,
    children: [
      { index: true, element: <Account /> }, // Default route
      { path: PROTECTED_ROUTES.SETTINGS, element: <Account /> },
      { path: PROTECTED_ROUTES.SETTINGS_APPEARANCE, element: <Appearance /> },
      // { path: PROTECTED_ROUTES.SETTINGS_BILLING, element: <Billing /> },
    ]
  },
];
