"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="w-full z-50 fixed bg-[#000814]  text-[#ffffff] border-b border-gray-600 ">
        <div className="py-4 container  md:h-24 font-semibold flex justify-between items-center">
          <div>
            <div>
              <Link href="/home">
                <div className="md:text-4xl cursor-pointer text-xl font-bold mb-2">
                  <span className="text-[#ffdede]">P</span>r
                  <span className="text-[#c0bcff]">o</span>n
                  <span className="text-[#d7d5ff]">o</span>y
                  <span className="text-[#fcc7b5]"> </span>
                  <span className="text-[#d4ffee]">D</span>a
                  <span className="text-[#acd6ff]">s</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ul className="hidden cursor-pointer md:flex gap-8">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/skills">Skills</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div onClick={handleClick} className="md:hidden ">
            {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
          </div>
        </div>
        {/* mobile menu  */}

        <div>
          <div
            className={
              !nav
                ? "hidden"
                : "  dark:bg-white dark:text-black font-semibold w-full  h-screen md:hidden px-8"
            }
          >
            <li className="py-6 list-none">
              <Link
                onClick={handleClick}
                href="/home"
               
              >
                Home
              </Link>
            </li>
            <div className="border-b-2 border-[#34a578]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link
                onClick={handleClick}
                href="/about"
               
              >
                About
              </Link>
            </li>
            <div className="border-b-2 border-[#34a578]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link
                onClick={handleClick}
                href="/skills"
               
              >
                Skills
              </Link>
            </li>
            <div className="border-b-2 border-[#34a578]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link
                onClick={handleClick}
                href="/projects"
               
              >
                Projects
              </Link>
            </li>
            <div className="border-b-2 border-[#34a578]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link
                onClick={handleClick}
                href="/blogs"
               
              >
                Blogs
              </Link>
            </li>
            <div className="border-b-2 border-[#34a578]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link
                onClick={handleClick}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </div>
        </div>

        {/* Social icons */}
        <div className="hidden  lg:flex fixed flex-col hrefp-[35%] left-0">
          <ul>
            <li className="w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
              <a
                target="_new"
                className="flex pl-4 pr-2 justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/pronoydas/"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                target="_new"
                className="flex pl-4 pr-2 justify-between items-center w-full text-gray-300"
                href="https://github.com/Pronoy568"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1877F2]">
              <a
                target="_new"
                className="flex pl-4 pr-2 justify-between items-center w-full text-gray-300"
                href="https://www.facebook.com/pronoy.das.58511/"
              >
                Facebook <FaFacebookF size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
