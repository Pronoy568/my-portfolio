/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_jfx6j3d",
        "template_5in8odq",
        form.current,
        "JvunNQuoGhjIj6Rt-"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="mt-12 container text-[#ffffff] pb-10">
      <h1 className="text-4xl text-center font-semibold">
        CO
        <span className="text-[#5ee4ae]">NTA</span>
        CT
      </h1>
      <div className="grid md:grid-cols-3 md:gap-8 gap-2 mt-16">
        <div>
          <div className="shadow-2xl bg-[#11152c] rounded-lg p-4">
            <h1 className="text-2xl font-semibold">GET IN TOUCH</h1>
            <p className="mt-4 text-justify">
              I'm eager to collaborate and discuss any new projects or creative
              ideas that align with my expertise. Together, we can turn visions
              into reality and achieve remarkable results. Feel free to reach
              out anytime; I'm here to listen and contribute to meaningful
              endeavors.
            </p>
            <div className="flex items-center mt-4 gap-4">
              <div className="bg-[#34a578]  text-white h-12 w-12 rounded-full flex items-center justify-center">
                <AiOutlineMail size={30} className="" />
              </div>
              <div>
                <p className="font-semibold">Mail Me</p>
                <p>pronoydas463@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center mt-4 gap-4">
              <div className="bg-[#34a578]  text-white h-12 w-12 rounded-full flex items-center justify-center">
                <BsWhatsapp size={30} className="" />
              </div>
              <div>
                <p className="font-semibold">Whatsapp || Phone</p>
                <p>+88 01929524255</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex md:gap-4 gap-2">
                <p className="font-semibold text-lg">Follow us on:</p>

                <div className="hover:scale-110 duration-500 transition-all bg-[#28589c] text-white h-8 w-8 rounded-full flex items-center justify-center">
                  <a
                    href="https://www.facebook.com/pronoy.das.58511/"
                    target="_new"
                  >
                    <FaFacebookF />
                  </a>
                </div>
                <div className="hover:scale-110 duration-500 transition-all bg-blue-600 text-white h-8 w-8 rounded-full flex items-center justify-center">
                  <a
                    href="https://www.linkedin.com/in/pronoydas/"
                    target="_new"
                  >
                    <BsLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 px-6 md:px-20  shadow-2xl mb-4 bg-[#11152c]  rounded-xl">
          <form ref={form} onSubmit={sendEmail} className="py-8">
            <div className="md:flex gap-6 ">
              <input
                type="text"
                name="from_name"
                placeholder="First Name"
                className="input  bg-[#11152c] border border-violet-500  rounded-lg p-2 w-full md:mt-2"
              />
              <input
                type="text"
                name="from_name"
                placeholder="Last Name"
                className="input bg-[#11152c] border border-violet-500 rounded-lg  p-2 w-full md:mt-2 mt-4"
              />
            </div>
            <div className="md:flex gap-6 mt-4">
              <input
                type="number"
                name="from_phone"
                placeholder="Phone"
                className="input bg-[#11152c] border border-violet-500 rounded-lg p-2 w-full md:mt-2"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                className="input bg-[#11152c] border border-violet-500 rounded-lg p-2 w-full md:mt-2 mt-4"
              />
            </div>
            <div className="mt-6">
              <input
                type="text"
                name="from_address"
                placeholder="Adress"
                className="input bg-[#11152c] border border-violet-500  rounded-lg p-2 input-bordered w-full "
              />
            </div>

            <div className="mt-6">
              <textarea
                name="message"
                className="textarea bg-[#11152c] border border-violet-500 rounded-lg p-2 textarea-bordered h-36 w-full"
                placeholder="Message or description"
              ></textarea>
            </div>
            <div className="mt-4 flex justify-end">
              <input type="submit" value="Send message" className="btn"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
