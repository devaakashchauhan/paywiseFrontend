import { DataTable } from "@/components/data-table";
import {  userColumns } from "./column";
import { useState } from "react";
import useDebouncedSearch from "@/hooks/use-debounce-search";
import { toast } from "sonner";
import { useBulkDeleteUserMutation, useGetAllUsersQuery } from "@/features/admin/dashboard";
import { useAppDispatch } from "@/app/hook";
import { useNavigate } from "react-router-dom";
import { logout } from "@/features/auth/authSlice";
import { AUTH_ROUTES } from "@/routes/common/routePath";

type FilterType = {
 
  pageNumber?: number;
  pageSize?: number;
};

const UserTable = (props: {
  pageSize?: number;
  isShowPagination?: boolean;
}) => {
  const [filter, setFilter] = useState<FilterType>({
    
    pageNumber: 1,
    pageSize: props.pageSize || 10,
  });

  const { debouncedTerm, setSearchTerm } = useDebouncedSearch("", {
    delay: 500,
  });

  const [bulkDeleteUser, { isLoading: isBulkDeleting }] =
    useBulkDeleteUserMutation();

  const { data, isError, isFetching } = useGetAllUsersQuery({
    pageNumber: filter.pageNumber,
    pageSize: filter.pageSize,
  });

  const checkAdmin = isError ? false : true;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  if (!checkAdmin) {
        dispatch(logout());
        navigate(AUTH_ROUTES.SIGN_IN);
  }

  const users = data?.users || [];
  const pagination = {
    totalItems: data?.pagination?.totalCount || 0,
    totalPages: data?.pagination?.totalPages || 0,
    pageNumber: filter.pageNumber,
    pageSize: filter.pageSize,
  };

  const handleSearch = (value: string) => {
    console.log(debouncedTerm);
    setSearchTerm(value);
  };

  const handlePageChange = (pageNumber: number) => {
    setFilter((prev) => ({ ...prev, pageNumber }));
  };

  const handlePageSizeChange = (pageSize: number) => {
    setFilter((prev) => ({ ...prev, pageSize }));
  };

  const handleBulkDelete = (userIds: string[]) => {
    bulkDeleteUser(userIds)
      .unwrap()
      .then(() => {
        toast.success("Users deleted successfully");
      })
      .catch((error) => {
        toast.error(error.data?.message || "Failed to delete users");
      });
  };

  return (
    <DataTable
      data={users} //users
      columns={userColumns}
      searchPlaceholder="Search users..."
      isLoading={isFetching}
      isBulkDeleting={isBulkDeleting}
      isShowPagination={props.isShowPagination}
      pagination={pagination}
      onSearch={handleSearch}
      onPageChange={(pageNumber) => handlePageChange(pageNumber)}
      onPageSizeChange={(pageSize) => handlePageSizeChange(pageSize)}
      onBulkDelete={handleBulkDelete}
    />
  );
};
export default UserTable;
