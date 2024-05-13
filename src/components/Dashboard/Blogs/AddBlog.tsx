"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateBlogsMutation } from "@/redux/features/blogsApi";

interface Inputs {
  title: string;
  image: string;
  description: string;
  link: string;
}

const AddBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>(); // Correct import and usage of useForm

  const [createBlog, { isLoading, error }] = useCreateBlogsMutation();

  if (isLoading) {
    return <div className="text-gray-100 text-3xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-gray-100 text-3xl">Error...........</div>;
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createBlog(data);
      if ("error" in res) {
        console.error("Error during Register:", res.error);
      } else {
        if (res?.data?.acknowledged) {
          toast.success("Blog created successfully!");
          reset();
        } else {
          console.error("Invalid response:", res);
        }
      }
    } catch (error) {
      console.error("Error during Product created:", error);
    }
  };

  return (
    <div className="w-full mx-auto flex justify-center items-center">
      <div className="text-gray-100">
        <div className="text-4xl font-bold text-center mt-10">
          <h1>Add Blog</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-xl p-5 rounded-lg mt-3 dark:bg-slate-900 text-center"
        >
          {/* Input field for title nad image */}

          <div className="flex flex-col mb-3">
            <label className="mb-1">Image</label>
            <input
              {...register("image", { required: true })}
              type="text"
              className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.image && (
              <span className="text-red-500">image is required</span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">Title</label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.title && (
              <span className="text-red-500">title is required</span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1">Descrition</label>
            <input
              {...register("description", { required: true })}
              type="text"
              className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.description && (
              <span className="text-red-500">description is required</span>
            )}
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">Link</label>
            <input
              {...register("link", { required: true })}
              type="text"
              className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
            {errors.link && (
              <span className="text-red-500">link is required</span>
            )}
          </div>

          {/* Submit button */}
          <button type="submit" className="btn text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
