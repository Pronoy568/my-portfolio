import { baseApi } from "../api/baseApi";

interface ProjectsResponse {
  _id: string;
  name: string;
  image: string;
  live_link: string;
  rating: number;
  review: number;
  category: string;
  gitHub_link: string;
  gitHub_link_server: string;
  video_showcasing: string;
  tec1: string;
  tec2: string;
  tec3: string;
  tec4: string;
  tec5: string;
  tec6: string;
  tec7: string;
  tec8: string;
  Des1: string;
  Des2: string;
  Des3: string;
  Des4: string;
  acknowledged: boolean;
}

export const projectsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectsResponse[], string>({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    getSingleProjects: builder.query<ProjectsResponse, string>({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "GET",
      }),
    }),

    createProjects: builder.mutation<
      ProjectsResponse,
      Partial<ProjectsResponse>
    >({
      query: (body) => ({
        url: "/projects",
        method: "POST",
        body,
      }),
      invalidatesTags: ["projects"],
    }),

    updateProjects: builder.mutation<
      ProjectsResponse,
      { id: string; body: Partial<ProjectsResponse> }
    >({
      query: ({ id, body }) => ({
        url: `/projects/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["projects"],
    }),

    deleteProjects: builder.mutation<ProjectsResponse, string>({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["projects"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useCreateProjectsMutation,
  useDeleteProjectsMutation,
  useUpdateProjectsMutation,
  useGetSingleProjectsQuery,
} = projectsApi;
