

export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture: string;
}
export interface UpdateUserResponse {
    data: User
}

export interface GetAllUserParams {
  pageNumber?: number;
  pageSize?: number;
}
export interface GetAllUserResponse {
  message: string;
  users: UserType[];
  pagination: {
    pageSize: number;
    pageNumber: number;
    totalCount: number;
    totalPages: number;
    skip: number;
  };
}


export interface UserType {
    _id: string;
    name: string;
    email: string;
    profilePicture: string | null;
    password: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
