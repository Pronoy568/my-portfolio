import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";

interface SkillsCardProps {
  icon: React.ReactNode;
  title: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ icon, title }) => {
  return (
    <Tilt>
      <JackInTheBox className="h-25 w-25 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48 flex items-center justify-center border-2 border-blue-500 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="flex flex-col items-center">
          <div>{icon}</div>
          <p className="text-lg text-gray-300">{title}</p>
        </div>
      </JackInTheBox>
    </Tilt>
  );
};

export default SkillsCard;
