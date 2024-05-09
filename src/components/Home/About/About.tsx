/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import image from "@/assets/images/about.svg";
import SocialIcons from "@/components/Shared/Icons/SocialsIcons";

const About = () => {
  return (
    <div id="about" className="bg-[#03202E] py-14 border-slate-600 border-b">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex flex-col md:flex-row gap-8 text-white">
          <Image
            className="w-full md:w-[53%] h-[404px] py-8 mt-2 px-12 pr-16 rounded bg-[#03202E]"
            src={image}
            height={400}
            width={400}
            alt="about me image"
          />
          <div className="px-8">
            <h1 className="font-bold text-4xl mb-3">
              <span className="text-[#5ee4ae]">ABOUT</span> ME
            </h1>
            <p className="text-lg text-justify text-gray-300">
              I am Pronoy Das, a passionate advocate for client satisfaction,
              diligently crafting websites that fulfill their vision. Amidst
              pursuing my BSc in CSE at Daffodil International University, I
              immerse myself in my passion. As a diligent web developer, I
              embrace every opportunity to delve into new technologies and
              languages, driven by an unwavering commitment to expand my
              expertise in web development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
              <div className="about-details-card">
                <h3 className="text-gray-300 font-semibold text-lg">Email</h3>
                <h3>pronoydas463@gmail.com</h3>
              </div>
              <div className="about-details-card">
                <h3 className="text-gray-300 font-semibold text-lg">Phone</h3>
                <h3>+88 01929524255</h3>
              </div>
              <div className="about-details-card">
                <h3 className="text-gray-300 font-semibold text-lg">Address</h3>
                <h3>Dhaka, Bangladesh</h3>
              </div>
              <div className="about-details-card">
                <h3 className="text-gray-300 font-semibold text-lg">Follow</h3>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
