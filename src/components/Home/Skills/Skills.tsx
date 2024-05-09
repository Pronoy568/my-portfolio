"use client";
import { DiJavascript1, DiMongodb, DiNodejs, DiReact } from "react-icons/di";
import {
  SiExpress,
  SiFramer,
  SiGithub,
  SiMaterialdesign,
  SiMongoose,
  SiNetlify,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import SkillsCard from "./SkillCard";

const technologies = [
  { icon: <DiJavascript1 size={50} />, title: "JavaScript" },
  { icon: <SiTypescript size={50} />, title: "TypeScript" },
  { icon: <DiReact size={50} />, title: "React" },
  { icon: <SiNextdotjs size={50} />, title: "Next.js" },
  { icon: <SiFramer size={50} />, title: "Framer motion" },
  { icon: <SiRedux size={50} />, title: "Redux" },
  { icon: <SiMaterialdesign size={50} />, title: "Material ui" },
  { icon: <DiNodejs size={50} />, title: "NodeJs" },
  { icon: <SiExpress size={50} />, title: "Express" },
  { icon: <DiMongodb size={50} />, title: "MongoDB" },
  { icon: <SiMongoose size={50} />, title: "Mongoose" },
  { icon: <SiTailwindcss size={50} />, title: "Tailwind" },
];

const tools = [
  { icon: <SiVisualstudiocode size={50} />, title: "VS code" },
  { icon: <SiGithub size={50} />, title: "GitHub" },
  { icon: <SiVercel size={50} />, title: "Vercel" },
  { icon: <SiNetlify size={50} />, title: "Netlify" },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="my-12 container pt-8 pb-20 bg-[#03202E] border-slate-600 border-b "
    >
      <div className="text-4xl text-white font-semibold text-center my-5">
        <span>S</span>
        <span className="text-[#5ee4ae]">KILL</span>
        <span>S</span>
      </div>

      <div className="text-white grid grid-cols-3 md:grid-cols-4 space-y-5">
        {technologies.map((tech, index) => (
          <SkillsCard key={index} icon={tech.icon} title={tech.title} />
        ))}
      </div>

      <h4 className="text-4xl text-white text-center font-semibold mt-8 mb-4">
        <span className="primary-text font-semibold">T</span>
        <span className="text-[#5ee4ae]">OO</span>
        <span className="primary-text font-semibold">LS</span>
      </h4>

      <div className="text-white grid grid-cols-3 md:grid-cols-4 mt-4">
        {tools.map((tech, index) => (
          <SkillsCard key={index} icon={tech.icon} title={tech.title} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
