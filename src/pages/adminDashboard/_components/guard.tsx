import { useAppDispatch, useTypedSelector } from "@/app/hook";
import { logout } from "@/features/auth/authSlice";
import { AUTH_ROUTES } from "@/routes/common/routePath";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const role = useTypedSelector((state) => state.auth.user?.role);
  const isAdmin = role === "ADMIN";
  if (!isAdmin) {
    dispatch(logout());
    navigate(AUTH_ROUTES.SIGN_IN);
  }
  return <>{children}</>;
};

export default AdminGuard;
