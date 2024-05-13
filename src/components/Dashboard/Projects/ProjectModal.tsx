"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  useGetSingleProjectsQuery,
  useUpdateProjectsMutation,
} from "@/redux/features/projectsApi";

type Inputs = {
  name: string;
  category: string;
  tec1: string;
  tec2: string;
  tec3: string;
  tec4: string;
  tec5: string;
  tec6: string;
};

const ProjectModal = ({
  onClose,
  projectId,
}: {
  onClose: () => void;
  projectId: string | null;
}) => {
  const { data, isLoading, error } = useGetSingleProjectsQuery(projectId ?? "");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [updateProduct] = useUpdateProjectsMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await updateProduct({
        id: projectId || "",
        body: data,
      });
      if ("error" in res) {
        // Handle error
        console.error("Error updating product:", res.error);
      } else {
        // Handle success
        if (res?.data?.acknowledged) {
          toast.success("Project Updated successfully!");
          onClose();
        } else {
          // Handle invalid response
          console.error("Invalid response:", res);
        }
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error updating Project:", error);
    }
  };

  if (isLoading) {
    return <div className="text-gray-100 text-3xl text-center mt-2">Loading...</div>;
  }

  if (error) {
    return <div className="text-gray-100 text-3xl text-center mt-2">Error...........</div>;
  }

  return (
    <>
      <div role="dialog" aria-modal="true">
        <section className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
          <div className="absolute md:w-6/12 w-3/4 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg pl-2 text-slate-400 my-2">
                Update Project
              </h3>
              <button onClick={onClose} className="text-white">
                Close
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-xl p-5 rounded-lg"
            >
              {/* Input fields for the form */}
              <div className="flex flex-col mb-3">
                <label className="mb-1 text-slate-400 text-lg">name</label>
                <input
                  defaultValue={data?.name || ""}
                  {...register("name", { required: true })}
                  type="text"
                  className="border border-gray-400 dark:bg-slate-900 rounded-md px-3 py-2"
                />
                {errors.name && (
                  <span className="text-red-500">name is required</span>
                )}
              </div>
              <div className="flex flex-col mb-3">
                <label className="mb-1 text-slate-400 text-lg">Category</label>
                <input
                  defaultValue={data?.category || ""}
                  {...register("category", { required: true })}
                  type="text"
                  className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                />
                {errors.category && (
                  <span className="text-red-500">Category is required</span>
                )}
              </div>
              <div className="flex space-x-3">
                <div className="flex flex-col mb-3">
                  <label className="mb-1 text-slate-400 text-lg">Tech1</label>
                  <input
                    defaultValue={data?.tec1?.toString() || ""}
                    {...register("tec1", { required: true })}
                    type="text"
                    className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                  />
                  {errors.tec1 && (
                    <span className="text-red-500">Tech1 is required</span>
                  )}
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1 text-slate-400 text-lg">Tech2</label>
                  <input
                    defaultValue={data?.tec2?.toString() || ""}
                    {...register("tec2", { required: true })}
                    type="text"
                    className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                  />
                  {errors.tec2 && (
                    <span className="text-red-500">Tech2 is required</span>
                  )}
                </div>
              </div>

              <div className="flex space-x-3">
                <div className="flex flex-col mb-3">
                  <label className="mb-1 text-slate-400 text-lg">Tech3</label>
                  <input
                    defaultValue={data?.tec3?.toString() || ""}
                    {...register("tec3", { required: true })}
                    type="text"
                    className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                  />
                  {errors.tec3 && (
                    <span className="text-red-500">Tech3 is required</span>
                  )}
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1 text-slate-400 text-lg">Tech4</label>
                  <input
                    defaultValue={data?.tec4?.toString() || ""}
                    {...register("tec4", { required: true })}
                    type="text"
                    className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                  />
                  {errors.tec4 && (
                    <span className="text-red-500">Tech4 is required</span>
                  )}
                </div>
              </div>

              <div className="flex space-x-3">
                <div className="flex flex-col mb-3">
                  <label className="mb-1 text-slate-400 text-lg">Tech5</label>
                  <input
                    defaultValue={data?.tec5?.toString() || ""}
                    {...register("tec5", { required: true })}
                    type="text"
                    className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                  />
                  {errors.tec5 && (
                    <span className="text-red-500">Tech5 is required</span>
                  )}
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1 text-slate-400 text-lg">Tech6</label>
                  <input
                    defaultValue={data?.tec6?.toString() || ""}
                    {...register("tec6", { required: true })}
                    type="text"
                    className="border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
                  />
                  {errors.tec6 && (
                    <span className="text-red-500">Tech6 is required</span>
                  )}
                </div>
              </div>

              {/* Submit button */}
              <button type="submit" className="btn text-white">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectModal;
