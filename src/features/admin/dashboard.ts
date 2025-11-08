import { apiClient } from "@/app/api-client";
import { AdminAnalyticsResponse } from "./dashboardType";
import { GetAllUserParams, GetAllUserResponse } from "../user/userType";

export const adminApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    adminAnalytics: builder.query<AdminAnalyticsResponse, void>({
      query: () => ({
        url: "/admin/dashboard",
        method: "GET",
      }),
    }),
    getAllUsers: builder.query<GetAllUserResponse, GetAllUserParams>({
      query: (params) => {
        const { pageNumber = 1, pageSize = 10 } = params;

        return {
          url: "/admin/users/all",
          method: "GET",
          params: {
            pageNumber,
            pageSize,
          },
        };
      },
      providesTags: ["admin"],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/admin/user/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admin"],
    }),
    bulkDeleteUser: builder.mutation<void, string[]>({
      query: (userIds) => ({
        url: "/admin/users/bulk-delete",
        method: "DELETE",
        body: {
          userIds,
        },
      }),
      invalidatesTags: ["admin"],
    }),
  }),
});

export const {
  useAdminAnalyticsQuery,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useBulkDeleteUserMutation,
} = adminApi;
