import { baseApi } from "../api/baseApi";

interface BlogsResponse {
  _id: string;
  title: string;
  image: string;
  description: string;
  link: string;
  acknowledged: boolean;
}

export const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query<BlogsResponse[], string>({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),

    getSingleBlogs: builder.query<BlogsResponse, string>({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
    }),

    createBlogs: builder.mutation<BlogsResponse, Partial<BlogsResponse>>({
      query: (body) => ({
        url: "/blogs",
        method: "POST",
        body,
      }),
      invalidatesTags: ["blogs"],
    }),

    updateBlogs: builder.mutation<
      BlogsResponse,
      { id: string; body: Partial<BlogsResponse> }
    >({
      query: ({ id, body }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["blogs"],
    }),

    deleteBlogs: builder.mutation<BlogsResponse, string>({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useCreateBlogsMutation,
  useDeleteBlogsMutation,
  useUpdateBlogsMutation,
  useGetSingleBlogsQuery,
} = blogsApi;
