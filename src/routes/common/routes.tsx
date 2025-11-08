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
import AdminUsersList from "@/pages/adminDashboard/adminUsers";
import AdminSignIn from "@/pages/auth/admin-sign-in";
import PasswordForget from "@/pages/auth/password-forget";
import RecreatePassword from "@/pages/auth/recreate-password";
import VerifyOtp from "@/pages/auth/verify-otp";
import AdminGuard from "@/pages/adminDashboard/_components/guard";
// import Billing from "@/pages/settings/billing";

export const authenticationRoutePaths = [
  { path: AUTH_ROUTES.SIGN_IN, element: <SignIn /> },
  { path: AUTH_ROUTES.SIGN_UP, element: <SignUp /> },
  { path: AUTH_ROUTES.ADMIN_SIGN_IN, element: <AdminSignIn /> },
  { path: AUTH_ROUTES.FORGOT_PASSWORD, element: <PasswordForget /> },
  { path: AUTH_ROUTES.OTP_VERIFY, element: <VerifyOtp /> },
  { path: AUTH_ROUTES.RECREATE_PASSWORD, element: <RecreatePassword /> },

];

export const protectedRoutePaths = [
  { path: PROTECTED_ROUTES.OVERVIEW, element: <Dashboard /> },
  { path: PROTECTED_ROUTES.TRANSACTIONS, element: <Transactions /> },
  { path: PROTECTED_ROUTES.REPORTS, element: <Reports /> },
  { path: PROTECTED_ROUTES.ADMIN_DASHBOARD, element: <Admin /> ,
    children: [
      { index: true, element: <AdminGuard><AdminMainDashboard /></AdminGuard> },
      { path: PROTECTED_ROUTES.ADMIN_DASHBOARD, element: <AdminGuard><AdminMainDashboard /></AdminGuard> },
      { path: PROTECTED_ROUTES.ADMIN_DASHBOARD_USERS, element: <AdminGuard><AdminUsersList /></AdminGuard> },
      { path: PROTECTED_ROUTES.ADMIN_DASHBOARD_TRANSACTIONS, element: <AdminGuard><AdminTransactions /></AdminGuard> },
      { path: PROTECTED_ROUTES.ADMIN_DASHBOARD_ANALYTICS, element: <AdminGuard><AdminAnalytics /></AdminGuard> },
      { path: PROTECTED_ROUTES.ADMIN_DASHBOARD_SETTINGS, element: <AdminGuard><Account /></AdminGuard> },
      { path: PROTECTED_ROUTES.ADMIN_DASHBOARD_APPEARANCE, element: <AdminGuard><Appearance /></AdminGuard> },
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
