"use client";
import React, { useState, useRef, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateBlogsMutation } from "@/redux/features/blogsApi";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

interface Inputs {
  title: string;
  image: string;
  description: string;
  content?: string;
  link: string;
}

const AddBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [createBlog, { isLoading, error }] = useCreateBlogsMutation();

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Typing here...",
    }),
    []
  );

  const handleEditorBlur = (newContent: string) => {
    setContent(newContent);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const { content, ...blogData } = data;
      const res = await createBlog(blogData);
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

  if (isLoading) {
    return <div className="text-gray-100 text-3xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-gray-100 text-3xl">Error...........</div>;
  }

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
            <label className="mb-1">Description</label>
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

          <div className="flex flex-col mb-3">
            <label className="mb-1">Content</label>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              className="text-gray-900"
              onBlur={handleEditorBlur}
            />
          </div>
          <button type="submit" className="btn text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
