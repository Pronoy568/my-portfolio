import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://my-portfolio-server-pi.vercel.app/api/v1`,
  }),
  endpoints: () => ({}),

  tagTypes: ["projects", "blogs", "skills"],
});
