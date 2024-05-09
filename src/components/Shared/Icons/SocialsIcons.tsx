import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-2 text-lg">
      <a
        className="social-icon text-[#1877F2] hover:text-green-500"
        href="https://www.facebook.com/pronoy.das.58511/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </a>
      <a
        className="social-icon text-[#0077b5]  hover:text-green-500"
        href="https://www.linkedin.com/in/pronoydas/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        className="social-icon text-[#f2f5f8] hover:text-green-500"
        href="https://github.com/Pronoy568"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialIcons;
