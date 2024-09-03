import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://campers-shop-backend-psi.vercel.app/api/v1/",
  }),
  tagTypes: ["product"],
  endpoints: () => ({}),
});
