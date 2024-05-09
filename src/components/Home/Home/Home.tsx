/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Home = () => {
  return (
    <div
      className="mt-10 md:mt-[36px] border-slate-600 border-b"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/kQtp5bY/Black-Back-Ground-5.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-70"></div>

      <div id="home" className="max-w-7xl mx-auto px-8 relative">
        {" "}
        <div className="flex justify-between text-secondary bg-opacity-40 relative">
          {" "}
          <div className="mt-[18%] md:mt-[12%] pb-16 relative">
            {" "}
            <h1 className="text-4xl font-bold mb-2 text-gray-300">
              Hello I'm Pronoy Das
            </h1>
            <h2 className="text-2xl font-semibold text-slate-400">
              <span className="text-primary">FRONT END</span> Developer
            </h2>
            <p className="md:w-[500px] text-xl text-justify font-medium  my-4 text-stone-300">
              I am an adept self-learner in web development, proficient in
              ReactJS & Next.js, poised to bring invaluable contributions to
              team with my relentless dedication and creative prowess. Eager to
              further expand my horizons and undertake new challenges in the
              ever-evolving realm of web development.
            </p>
            <a href="/PronoyDas_Resume.pdf" download="Pronoy_resume.pdf">
              <button className="btn text-white">Download Resume</button>
            </a>
          </div>
          <Image
            className="hidden md:block h-[593px] w-full "
            src="https://i.ibb.co/Lh2yvy4/removebg.png"
            height={400}
            width={400}
            alt="picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
