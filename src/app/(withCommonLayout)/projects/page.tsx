import ProjectCard from "@/components/Home/Projects/ProjectCard";
import React from "react";

export interface MyProjects {
  _id: string;
  name: string;
  image: string;
  live_link: string;
  rating: string;
  review: string;
  category: string;
  gitHub_link: string;
  video_showcasing: string;
  gitHub_link_server: string;
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
export interface MyProjectsCardProps {
  item: MyProjects;
}

const Projects = async () => {
  const res = await fetch(`${process.env.BACKEND_API}/projects`, {
    next: {
      revalidate: 30,
    },
  });
  const data: MyProjects[] = await res.json();
  return (
    <>
      <div id="projects" className="container pt-40 pb-14 text-[#ffffff]">
        <div className="text-4xl font-semibold justify-center item-center flex space-x-2">
          <span>MY</span>
          <span className="text-[#5ee4ae]">PROJECTS</span>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-10">
          {data?.map((project: MyProjects) => (
            <ProjectCard item={project} key={project._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
