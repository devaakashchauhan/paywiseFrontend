import { apiClient } from "@/app/api-client";

export const authApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: "/auth/admin/login",
        method: "POST",
        body: credentials,
      }),
    }),

    sendOTP: builder.mutation({
      query: (email) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: { email },
      }),
    }),
    verifyOTP: builder.mutation({
      query: ({ email, otp, newPassword }) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body: { email, otp, newPassword },
      }),
    }),

    //skip
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh-token",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRefreshMutation,
  useLogoutMutation,
  useAdminLoginMutation,
  useSendOTPMutation,
  useVerifyOTPMutation,
} = authApi;
