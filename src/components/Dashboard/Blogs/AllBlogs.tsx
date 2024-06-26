"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";
import Image from "next/image";
import BlogModal from "./BlogModal";
import {
  useGetBlogsQuery,
  useDeleteBlogsMutation,
} from "@/redux/features/blogsApi";

const AllBlogs = () => {
  const { data, error, isLoading } = useGetBlogsQuery("");
  const [deleteBlog] = useDeleteBlogsMutation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editBlogById, setEditBlogById] = useState<string | null>(null);

  if (isLoading) {
    return <div className="text-gray-100 text-3xl text-center mt-2">Loading...</div>;
  }

  if (error) {
    return <div className="text-gray-100 text-3xl text-center mt-2">Error...........</div>;
  }

  const handleDelete = async (_id: string) => {
    try {
      const res = await deleteBlog(_id).unwrap();
      if (res?._id) {
        toast.success("Blog deleted successfully!!!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="md:mt-10  mt-9 md:px-8 text-gray-100">
        <div className="md:flex justify-between items-center">
          <div className=" md:text-3xl text-2xl font-bold ">All Blog</div>
          {/* Link to add new event item */}
          <div>
            <Link href="/PronoyDashboard/Blogs">
              <button className="btn text-white">
                Add-Blog
              </button>
            </Link>
          </div>
        </div>
        {/* Event items table */}
        <div className="pt-3 ">
          <table className="table-auto border-collapse border border-gray-300  w-full">
            <thead className="overflow-x-scroll">
              <tr className="border border-gray-300 ">
                <th className="border border-gray-300 ">Index</th>
                <th className="border border-gray-300 ">Image</th>
                <th className="border border-gray-300 ">Title</th>
                <th className="border border-gray-300 ">Description</th>
                <th className="border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody className="overflow-x-scroll">
              {/* Render each event item */}
              {data?.map((item: any, index: number) => (
                <tr key={item._id} className="border border-gray-300">
                  <td className="border border-gray-300 text-center px-2">
                    {index + 1}
                  </td>

                  <td className="flex justify-center items-center border border-gray-300 px-2">
                    <Image
                      className="h-12 w-12"
                      height={12}
                      width={12}
                      src={item?.image}
                      alt="image"
                    />
                  </td>

                  <td className="border border-gray-300 px-2">{item?.title}</td>
                  <td className="border border-gray-300 px-2">
                    {item?.description}
                  </td>

                  {/* Buttons for editing and deleting an event item */}
                  <td className="border border-gray-300 px-3">
                    <div className="flex justify-between items-center gap-4 p-1">
                      <div>
                        <button onClick={() => handleDelete(item?._id)}>
                          <MdDelete className="text-red-700 text-[20px]" />
                        </button>
                      </div>
                      <div>
                        {/* Button to edit an event item */}
                        <button
                          onClick={() => {
                            // e.stopPropagation()
                            setEditBlogById(item?._id);
                            handleShowModal();
                          }}
                        >
                          <FaEdit className="text-blue-700 text-[20px]" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* modal  */}
      {showModal && (
        <BlogModal
          onClose={() => {
            setShowModal(false);
          }}
          BlogId={editBlogById}
        />
      )}
    </>
  );
};

export default AllBlogs;