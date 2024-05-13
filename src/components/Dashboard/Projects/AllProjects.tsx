"use client";
import {
  useDeleteProjectsMutation,
  useGetProjectsQuery,
} from "@/redux/features/projectsApi";
import Link from "next/link";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";
import ProjectModal from "./ProjectModal";

const AllProjects = () => {
  const { data, error, isLoading } = useGetProjectsQuery("");
  const [deleteProject] = useDeleteProjectsMutation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editProjectById, setEditProjectById] = useState(null);

  if (isLoading) {
    return <div className="text-gray-100 text-3xl text-center mt-2">Loading...</div>;
  }

  if (error) {
    return <div className="text-gray-100 text-3xl text-center mt-2">Error...........</div>;
  }

  const handleDelete = async (_id: string) => {
    try {
      const res = await deleteProject(_id).unwrap();
      if (res?._id) {
        toast.success("Project deleted successfully!!!");
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
          <div className=" md:text-3xl text-2xl font-bold ">All Project</div>
          {/* Link to add new event item */}
          <div>
            <Link href="/PronoyDashboard/Projects">
              <button className="btn text-white">
                Add-project
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
                <th className="border border-gray-300 ">Project Name</th>
                <th className="border border-gray-300 ">Category</th>
                <th className="border border-gray-300 ">Tech</th>
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

                  <td className="border border-gray-300 px-2">{item?.name}</td>
                  <td className="border border-gray-300 px-2">
                    {item?.category}
                  </td>
                  <td className="border text-center border-gray-300 p-2">
                    {item?.tec1}, {item?.tec2}, {item?.tec3}, {item?.tec4}, {item?.tec5}, {item?.tec6}
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
                            setEditProjectById(item?._id);
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
        <ProjectModal
          onClose={() => {
            setShowModal(false);
          }}
          projectId={editProjectById}
        />
      )}
    </>
  );
};

export default AllProjects;
