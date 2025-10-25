export const isAuthRoute = (pathname: string): boolean => {
    return Object.values(AUTH_ROUTES).includes(pathname);
  };
  
  export const AUTH_ROUTES = {
    SIGN_IN: "/",
    SIGN_UP: "/sign-up",
  };
  
  export const PROTECTED_ROUTES = {
    OVERVIEW: "/overview",
    TRANSACTIONS: "/transactions",
    REPORTS: "/reports",
    SETTINGS: "/settings",
    SETTINGS_APPEARANCE: "/settings/appearance",
    SETTINGS_BILLING: "/settings/billing",
    ADMIN_DASHBOARD: "/admin",
    ADMIN_DASHBOARD_USERS: "/admin/users",
    ADMIN_DASHBOARD_TRANSACTIONS: "/admin/transactions",
    ADMIN_DASHBOARD_ANALYTICS: "/admin/analytics",
    ADMIN_DASHBOARD_SETTINGS: "/admin/settings",
    ADMIN_DASHBOARD_APPEARANCE: "/admin/appearance",
  };
