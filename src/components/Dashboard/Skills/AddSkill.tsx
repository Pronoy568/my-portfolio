"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateSkillsMutation } from "@/redux/features/skillsApi";

interface Inputs {
  name: string;
  image: string;
}

const AddSkill = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>(); // Correct import and usage of useForm

  const [createProduct, { isLoading, error }] = useCreateSkillsMutation();

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
          toast.success("Skill created successfully!");
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
          <h1>Add Skill</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-xl p-5 rounded-lg mt-3 dark:bg-slate-900 text-center"
        >
          {/* Input field for name nad image */}
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

export default AddSkill;