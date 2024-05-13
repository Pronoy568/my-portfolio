"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateProjectsMutation } from "@/redux/features/projectsApi";
import { toast } from "sonner";

interface Inputs {
  name: string;
  image: string;
  rating: number;
  review: number;
  category: string;
  live_link: string;
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
}

const AddProject = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [createProduct, { isLoading, error }] = useCreateProjectsMutation();

  if (isLoading) {
    return <div className="text-gray-100 text-3xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-gray-100 text-3xl">Error...........</div>;
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createProduct(data);
      if ("error" in res) {
        console.error("Error during Register:", res.error);
      } else {
        if (res?.data?.acknowledged) {
          toast.success("Project created successfully!");
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
          <h1>Add Project</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-xl p-5 rounded-lg mt-3 dark:bg-slate-900 text-center"
        >
          {/* Input field for name & image */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
              {errors.name && (
                <span className="text-red-500">name is required</span>
              )}
            </div>
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
          </div>
          {/* Input field for rating & review */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">Rating</label>
              <input
                {...register("rating", { required: true })}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
              {errors.rating && (
                <span className="text-red-500">rating is required</span>
              )}
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">Review</label>
              <input
                {...register("review", { required: true })}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
              {errors.review && (
                <span className="text-red-500">review is required</span>
              )}
            </div>
          </div>
          {/* Input field for live_link & category */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">Category</label>
              <input
                {...register("category", { required: true })}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
              {errors.category && (
                <span className="text-red-500">category is required</span>
              )}
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">Live_link</label>
              <input
                {...register("live_link", { required: true })}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
              {errors.live_link && (
                <span className="text-red-500">live_link is required</span>
              )}
            </div>
          </div>
          {/* Input field for gitHub_link & gitHub_link_server */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">GitHub_link</label>
              <input
                {...register("gitHub_link", { required: true })}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
              {errors.gitHub_link && (
                <span className="text-red-500">gitHub_link is required</span>
              )}
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">GitHub_link_server</label>
              <input
                {...register("gitHub_link_server")}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>
          {/* Input field for video_showcasing & tec1 */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">Video_showcasing</label>
              <input
                {...register("video_showcasing")}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">Tec1</label>
              <input
                {...register("tec1", { required: true })}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>
          {/* Input field for tec2 & tec3 */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">Tec2</label>
              <input
                {...register("tec2")}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">Tec3</label>
              <input
                {...register("tec3", { required: true })}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>
          {/* Input field for tec4 & tec5 */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">Tec4</label>
              <input
                {...register("tec4")}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">Tec5</label>
              <input
                {...register("tec5", { required: true })}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>
          {/* Input field for tec6 & tec7 */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">Tec6</label>
              <input
                {...register("tec6")}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">Tec7</label>
              <input
                {...register("tec7", { required: true })}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>
          {/* Input field for tec8 & Des1 */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">Tec8</label>
              <input
                {...register("tec8")}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">Des1</label>
              <input
                {...register("Des1", { required: true })}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>
          {/* Input field for Des2 & Des3 */}
          <div className="flex space-x-3">
            <div className="flex flex-col mb-3">
              <label className="mb-1">Des2</label>
              <input
                {...register("Des2")}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1">Des3</label>
              <input
                {...register("Des3", { required: true })}
                type="text"
                className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
              ></input>
            </div>
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1">Des4</label>
            <input
              {...register("Des4", { required: true })}
              type="text"
              className="text-black border dark:bg-slate-900 border-gray-400 rounded-md px-3 py-2"
            ></input>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="btn text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
