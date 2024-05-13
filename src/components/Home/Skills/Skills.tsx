import SkillCard from "./SkillCard";
import {
  SiGithub,
  SiNetlify,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import ToolsCard from "./ToolsCard";

export interface MySkills {
  _id: string;
  name: string;
  image: string;
}
export interface MySkillsCardProps {
  item: MySkills;
}

const tools = [
  { icon: <SiVisualstudiocode size={50} />, title: "VS code" },
  { icon: <SiGithub size={50} />, title: "GitHub" },
  { icon: <SiVercel size={50} />, title: "Vercel" },
  { icon: <SiNetlify size={50} />, title: "Netlify" },
];

const Skills = async () => {
  const res = await fetch(
    `https://my-portfolio-server-pi.vercel.app/api/v1/skills`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data: MySkills[] = await res.json();

  return (
    <>
      <div id="skills" className="my-10 container text-[#ffffff] ">
        <div className="text-4xl text-white font-semibold text-center my-5">
          <span>S</span>
          <span className="text-[#5ee4ae]">KILL</span>
          <span>S</span>
        </div>
        <div className="mt-16 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 ">
          {/* skill */}

          {data?.map((skill) => (
            <SkillCard key={skill._id} item={skill} />
          ))}
        </div>
        <h4 className="text-4xl text-white text-center font-semibold mt-10 mb-4">
          <span className="primary-text font-semibold">T</span>
          <span className="text-[#5ee4ae]">OO</span>
          <span className="primary-text font-semibold">LS</span>
        </h4>

        <div className="text-white grid grid-cols-3 md:grid-cols-4 my-10">
          {tools.map((tech, index) => (
            <ToolsCard key={index} icon={tech.icon} name={tech.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
