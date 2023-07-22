import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `/api/v1` }),
  endpoints: (builder) => ({
    loadingUser: builder.query({
      query: () => "/me",
    }),
    getProducts: builder.query({
      query: () => "/products",
    }),
    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    createOrder: builder.mutation({
      query: (body) => ({
        url: "/order/new",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useLoginMutation,
  useLoadingUserQuery,
  useGetSingleProductQuery,
  useCreateOrderMutation,
} = appApi;
