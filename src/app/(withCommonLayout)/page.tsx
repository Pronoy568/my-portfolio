import About from "@/components/Home/About/About";
import Blog from "@/components/Home/Blogs/Blog";
import Contact from "@/components/Home/Contact/Contact";
import Education from "@/components/Home/Education/Education";
import Home from "@/components/Home/Home/Home";
import Projects from "@/components/Home/Projects/Projects";
import Services from "@/components/Home/Services/Services";
import Skills from "@/components/Home/Skills/Skills";

const HomePage = () => {
  return (
    <>
      <p>Pronoy</p>
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Services />
      <Blog />
      <Contact />
    </>
  );
};

export default HomePage;
