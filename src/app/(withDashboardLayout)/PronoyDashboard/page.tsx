import AllProjects from "@/components/Dashboard/Projects/AllProjects";
import AllBlogs from "@/components/Dashboard/Blogs/AllBlogs";
import AllSkills from "@/components/Dashboard/Skills/AllSkills";

const DashboardPage = () => {
  return (
    <div className="py-12">
      <h1 className="text-4xl text-white text-center mb-6 font-bold">
        Dashboard
      </h1>
      <AllProjects />
      <AllBlogs />
      <AllSkills />
    </div>
  );
};

export default DashboardPage;
