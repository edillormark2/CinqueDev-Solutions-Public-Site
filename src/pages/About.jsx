import React, { useState, useEffect } from "react";
import me from "../assets/me-bnw.png";
import aronbnw from "../assets/aron-bnw.png";
import pardibnws from "../assets/pardii-bnw.png";
import aldebnw from "../assets/alde-bnw.png";
import boneobnw from "../assets/boneo-bnw.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const About = () => {
  const [videoHeight, setVideoHeight] = useState(450);
  useEffect(() => {
    const handleResize = () => {
      setVideoHeight(window.innerWidth < 640 ? 350 : 450);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="my-8 md:my-16 mx-6 md:mx-10 lg:mx-16 xl:mx-20 2xl:mx-36">
      <div className="flex flex-col xl:flex-row justify-center my-36">
        <div className="w-full xl:w-1/2 mr-0 md:mr-20">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mt-10">
            Discover
          </h1>
          <h1 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 hover:text-primary">
            CinqueDev Solutions
          </h1>
          <div className="h-0.5 w-24 flex mx-auto lg:mx-0 bg-gradient-to-r from-cyan-300 to-blue-500 my-6" />
          <div className="mt-8">
            <p className="text-base md:text-lg font-semibold text-gray-600">
              We're here to change how businesses and people use technology. Our
              goal is simple. to give you smart solutions that help you grow and
              make life better with technology.
            </p>
            <p className="mt-8 text-base md:text-lg font-semibold text-gray-600">
              We understand everyone's needs, whether you're a small business or
              a big company. Our solutions are flexible and affordable, so you
              can stay ahead in today's tough market. And we promise to give you
              great results that really make a difference.
            </p>
            <p className="mt-8 text-basemd:text-lg font-semibold text-gray-600">
              Our mission? To give you solutions that make your business better
              and make life easier for everyone. In short, at CinqueDev
              Solutions, we're not just developers, we're problem solvers who
              use technology to make things better for you.
            </p>
          </div>
        </div>
        <div className="w-full xl:w-2/3">
          <iframe
            className="drop-shadow-xl rounded-xl w-full aspect-video mt-16 md:mt-24"
            height={videoHeight}
            src="https://www.youtube.com/embed/TkrqfPkvy88?si=3GHywfO4g3vqUWu3"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>

      <div className="w-full mt-44">
        <div className="flex my-10 gap-20 mx-16">
          <div className="flex justify-center w-2/5">
            <div>
              <div className="bg-white rounded-xl shadow-xl w-80 h-auto">
                <img src={me} className=" object-contain" />
              </div>
              <p className="text-start mt-4 font-semibold text-xl">
                Mark Daniel Edillor
              </p>
              <p className="text-start font-semibold text-gray-600">
                Project Manager & Tech Lead
              </p>
              <div className="flex gap-2 my-2">
                <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                  <FaFacebookF className="text-blue-500" />
                </div>
                <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                  <FaLinkedinIn className="text-blue-500" />
                </div>
                <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                  <MdEmail className="text-blue-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="text-start text-3xl sm:text-5xl font-bold text-gray-800 my-4">
              Meet our dedicated team
            </div>
            <div className="h-0.5 w-24 flex mx-auto lg:mx-0 bg-gradient-to-r from-cyan-300 to-blue-500 my-6" />
            <p className="text-xl text-gray-600">
              Together, our team brings a perfect blend of creativity, technical
              prowess, and project management expertise. We collaborate closely
              to turn visions into reality, delivering tailor-made digital
              solutions that exceed client expectations.
            </p>
          </div>
        </div>
        <div className="flex my-10 gap-10 mx-16">
          <div>
            <img
              src={aronbnw}
              className="rounded-xl shadow-xl w-80 h-auto object-contain"
            />
            <p className="text-start mt-4 font-semibold text-xl">
              Ricardo Aron III
            </p>
            <p className="text-start font-semibold text-gray-600">
              Software Developer
            </p>
            <div className="flex gap-2 my-2">
              <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                <FaFacebookF className="text-blue-500" />
              </div>
              <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                <FaLinkedinIn className="text-blue-500" />
              </div>
              <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                <MdEmail className="text-blue-500" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={aldebnw}
              className="rounded-xl shadow-xl w-80 h-auto object-contain"
            />
            <p className="text-start mt-4 font-semibold text-xl">
              Mark Angelo Alde
            </p>
            <p className="text-start font-semibold text-gray-600">
              Quality Assurance
            </p>
            <div className="flex gap-2 my-2">
              <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                <FaFacebookF className="text-blue-500" />
              </div>
              <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                <FaLinkedinIn className="text-blue-500" />
              </div>
              <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                <MdEmail className="text-blue-500" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={boneobnw}
              className="rounded-xl shadow-xl w-80 h-auto object-contain"
            />
            <p className="text-start mt-4 font-semibold text-xl">
              Matt Franky Boneo
            </p>
            <p className="text-start font-semibold text-gray-600">
              System Administrator
            </p>
            <div className="flex gap-2 my-2">
              <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                <FaFacebookF className="text-blue-500" />
              </div>
              <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                <FaLinkedinIn className="text-blue-500" />
              </div>
              <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                <MdEmail className="text-blue-500" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={pardibnws}
              className="rounded-xl shadow-xl w-80 h-auto object-contain"
            />
            <p className="text-start mt-4 font-semibold text-xl">
              Julian Jules Pardi
            </p>
            <p className="text-start font-semibold text-gray-600">
              Sales & Marketing Specialist
            </p>
            <div className="flex gap-2 my-2">
              <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                <FaFacebookF className="text-blue-500" />
              </div>
              <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                <FaLinkedinIn className="text-blue-500" />
              </div>
              <div className="bg-white rounded-full drop-shadow-lg p-3 w-10 cursor-pointer">
                <MdEmail className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
