import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pronoy | Dashboard",
  description: "This is my personal and private dashboard",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen w-full md:px-6 px-3">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;