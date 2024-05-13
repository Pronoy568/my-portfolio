import { baseApi } from "../api/baseApi";

interface SkillsResponse {
  _id: string;
  name: string;
  image: string;
  acknowledged: boolean;
}

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillsResponse[], string>({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
      providesTags: ["skills"],
    }),

    getSingleSkills: builder.query<SkillsResponse, string>({
      query: (id) => ({
        url: `/skills/${id}`,
        method: "GET",
      }),
    }),

    createSkills: builder.mutation<SkillsResponse, Partial<SkillsResponse>>({
      query: (body) => ({
        url: "/skills",
        method: "POST",
        body,
      }),
      invalidatesTags: ["skills"],
    }),

    updateSkills: builder.mutation<
      SkillsResponse,
      { id: string; body: Partial<SkillsResponse> }
    >({
      query: ({ id, body }) => ({
        url: `/skills/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["skills"],
    }),

    deleteSkills: builder.mutation<SkillsResponse, string>({
      query: (id) => ({
        url: `/skills/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["skills"],
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useCreateSkillsMutation,
  useDeleteSkillsMutation,
  useUpdateSkillsMutation,
  useGetSingleSkillsQuery,
} = skillsApi;
