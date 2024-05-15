import React, { useState, useEffect } from "react";
import me from "../assets/me-bnw.png";
import aronbnw from "../assets/aron-bnw.png";
import pardibnws from "../assets/pardii-bnw.png";
import aldebnw from "../assets/alde-bnw.png";
import boneobnw from "../assets/boneo-bnw.jpg";
import goals from "../assets/goals.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";

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
    <div>
      <div className="my-8 md:my-16 mx-6 md:mx-10 lg:mx-16 xl:mx-20 2xl:mx-36">
        {/*About page First section */}
        <div className="flex flex-col xl:flex-row justify-center my-20 lg:my-36">
          <div className="w-full xl:w-1/2 mr-0 md:mr-20">
            <h1 className="text-center lg:text-start text-4xl md:text-6xl font-bold text-gray-800 mt-10">
              Discover
            </h1>
            <h1 className="text-center lg:text-start text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 hover:text-primary">
              CinqueDev Solutions
            </h1>
            <div className="h-0.5 w-24 flex mx-auto lg:mx-0 bg-gradient-to-r from-cyan-300 to-blue-500 my-6" />
            <div className="mt-8">
              <p className="text-base md:text-lg font-semibold text-gray-600">
                We're here to change how businesses and people use technology.
                Our goal is simple. to give you smart solutions that help you
                grow and make life better with technology.
              </p>
              <p className="mt-8 text-base md:text-lg font-semibold text-gray-600">
                We understand everyone's needs, whether you're a small business
                or a big company. Our solutions are flexible and affordable, so
                you can stay ahead in today's tough market. And we promise to
                give you great results that really make a difference.
              </p>
              <p className="mt-8 text-basemd:text-lg font-semibold text-gray-600">
                Our mission? To give you solutions that make your business
                better and make life easier for everyone. In short, at CinqueDev
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

        {/*About page 2nd section */}
        <div className="w-full mt-44">
          <div className="flex flex-col-reverse lg:flex-row my-10 gap-20 mx-2 lg:mx-16">
            <div className="flex justify-center w-full lg:w-2/5">
              <div className="">
                <div className="bg-white rounded-xl shadow-xl w-72 lg:w-80 h-auto">
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
            <div className="w-full lg:w-1/2">
              <div className="text-center lg:text-start text-3xl sm:text-5xl font-bold text-gray-800 my-4">
                Meet our dedicated team
              </div>
              <div className="h-0.5 w-24 flex mx-auto lg:mx-0 bg-gradient-to-r from-cyan-300 to-blue-500 my-6" />
              <p className="text-center lg:text-start  text-lg lg:text-xl text-gray-600">
                Together, our team brings a perfect blend of creativity,
                technical prowess, and project management expertise. We
                collaborate closely to turn visions into reality, delivering
                tailor-made digital solutions that exceed client expectations.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-10 gap-10 mx-8 lg:mx-16">
            <div className="flex flex-col sm:flex-row gap-8 mx-auto">
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
            </div>
            <div className="flex flex-col sm:flex-row gap-8 mx-auto">
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

        {/*About page 3rd section */}
        <div className="my-36 mx-0 lg:mx-20 w-full">
          <div className="flex flex-col lg:flex-row justify-center w-full gap-0 lg:gap-10">
            <div className="w-full lg:w-2/5">
              <p className="text-center lg:text-start text-3xl sm:text-5xl font-bold text-gray-800 my-4">
                How we work?
              </p>
              <div className="h-0.5 w-24 flex mx-auto lg:mx-0 bg-gradient-to-r from-cyan-300 to-blue-500 my-6" />
              <p className="text-center lg:text-start  my-2 text-lg text-slate-500">
                We have designed a streamlined process to design projects for
                maximum effectiveness and a smooth workflow.
              </p>
              <div className="flex justify-center">
                <img src={goals} className="w-5/6 h-auto object-contain" />
              </div>
            </div>
            <div className="w-full lg:w-2/5 mx-0 lg:mx-8 mt-16 lg:mt-0">
              <div className="relative flex gap-4 mb-8 md:mb-16 group">
                <div className="absolute w-0.5 bg-gray-300 h-40 top-4 left-6" />
                <div className="bg-primary rounded-full min-w-12 max-w-14 h-12 items-center justify-center shadow-lg text-3xl text-white text-center font-bold p-2 overflow-hidden transform transition-transform hover:scale-110 cursor-pointer hover:shadow-primary">
                  1
                </div>
                <div className="mx-4 md:mx-8 text-slate-400 group-hover:text-slate-700 group-hover:border group-hover:border-gray-500 p-3 rounded-md">
                  <p className="font-semibold text-xl">Plan</p>
                  <p>
                    Define the scope and objectives of the project or the
                    upcoming sprint.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-4 mb-8 md:mb-16 group">
                <div className="absolute w-0.5 bg-gray-300 h-40 top-4 left-6" />
                <div className="bg-primary rounded-full min-w-12 max-w-14 h-12 items-center justify-center shadow-lg text-3xl text-white text-center font-bold p-2 overflow-hidden transform transition-transform hover:scale-110 cursor-pointer hover:shadow-primary">
                  2
                </div>
                <div className="mx-4 md:mx-8 text-slate-400 group-hover:text-slate-700 group-hover:border group-hover:border-gray-500 p-3 rounded-md">
                  <p className="font-semibold text-xl">Design</p>
                  <p>
                    Create the architecture and design for the features to be
                    developed.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-4 mb-8 md:mb-16 group">
                <div className="absolute w-0.5 bg-gray-300 h-40 top-4 left-6" />
                <div className="bg-primary rounded-full min-w-12 max-w-14 h-12 items-center justify-center shadow-lg text-3xl text-white text-center font-bold p-2 overflow-hidden transform transition-transform hover:scale-110 cursor-pointer hover:shadow-primary">
                  3
                </div>
                <div className="mx-4 md:mx-8 text-slate-400 group-hover:text-slate-700 group-hover:border group-hover:border-gray-500 p-3 rounded-md">
                  <p className="font-semibold text-xl">Develop</p>
                  <p>
                    Write the code to implement the planned features and
                    functionality.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-4 mb-8 md:mb-16 group">
                <div className="absolute w-0.5 bg-gray-300 h-40 top-4 left-6" />
                <div className="bg-primary rounded-full min-w-12 max-w-14 h-12 items-center justify-center shadow-lg text-3xl text-white text-center font-bold p-2 overflow-hidden transform transition-transform hover:scale-110 cursor-pointer hover:shadow-primary">
                  4
                </div>
                <div className="mx-4 md:mx-8 text-slate-400 group-hover:text-slate-700 group-hover:border group-hover:border-gray-500 p-3 rounded-md">
                  <p className="font-semibold text-xl">Test</p>
                  <p>
                    Verify that the code works as intended and meets the
                    acceptance criteria.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-4 mb-8 md:mb-16 group">
                <div className="absolute w-0.5 bg-gray-300 h-40 top-4 left-6" />
                <div className="bg-primary rounded-full min-w-12 max-w-14 h-12 items-center justify-center shadow-lg text-3xl text-white text-center font-bold p-2 overflow-hidden transform transition-transform hover:scale-110 cursor-pointer hover:shadow-primary">
                  5
                </div>
                <div className="mx-4 md:mx-8 text-slate-400 group-hover:text-slate-700 group-hover:border group-hover:border-gray-500 p-3 rounded-md">
                  <p className="font-semibold text-xl">Deploy</p>
                  <p>
                    Release the developed and tested features to a production or
                    staging environment.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-4 mb-8 md:mb-16 group">
                <div className="bg-primary rounded-full min-w-12 max-w-14 h-12 items-center justify-center shadow-lg text-3xl text-white text-center font-bold p-2 overflow-hidden transform transition-transform hover:scale-110 cursor-pointer hover:shadow-primary">
                  6
                </div>
                <div className="mx-4 md:mx-8 text-slate-400 group-hover:text-slate-700 group-hover:border group-hover:border-gray-500 p-3 rounded-md">
                  <p className="font-semibold text-xl">Review</p>
                  <p>
                    Assess the completed work and identify areas for
                    improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*About page 4th section */}
        <div className="my-36 mx-0 lg:mx-16">
          <div className="flex justify-center  my-6 rounded-2xl p-6 bg-primary">
            <div className="w-full mx-0 md:mx-60">
              <p className="text-white text-5xl font-bold text-center">
                Our Mission
              </p>
              <div className="flex justify-center">
                <div className="h-0.5 w-24 flex mx-auto lg:mx-0 bg-white my-4" />
              </div>
              <p className="text-white text-lg my-2 text-center">
                To offer impactful and transformative solutions that propel
                businesses forward and enhance the lives of individuals through
                meaningful innovation.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 mt-20 mx-10">
                <div className="bg-white bg-opacity-60 py-2 px-4 rounded-full font-semibold text-xl text-gray-700 drop-shadow-lg text-center">
                  BUILD
                </div>
                <div className="bg-white bg-opacity-60 py-2 px-4 rounded-full font-semibold text-xl text-gray-700 drop-shadow-lg text-center">
                  INNOVATE
                </div>
                <div className="bg-white bg-opacity-60 py-2 px-4 rounded-full font-semibold text-xl text-gray-700 drop-shadow-lg text-center">
                  SUCCEED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
