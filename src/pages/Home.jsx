import React, { useRef, useState, useEffect } from "react";
import homepage from "../assets/homepage.png";
import codingillu from "../assets/codingillu.png";
import devteamillu from "../assets/devteamillu.png";
import website from "../assets/website01.png";
import webapp from "../assets/webapp.png";
import mobileapp from "../assets/mobileapp.png";
import desktopapp from "../assets/desktopapp.png";
import Footer from "../components/Footer";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp, SiFirebase, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoFigma } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import BuySoftwarePopup from "../components/BuySoftwarePopup";
import hhrms from "../assets/hhrms-pic.png";
import lms from "../assets/lmsapp.png";
import { FaArrowRightLong } from "react-icons/fa6";
import {} from "react-router-dom";

const Home = () => {
  const secondPartRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [shouldPause, setShouldPause] = useState(false);

  const navigate = useNavigate();
  const handleClick = path => {
    navigate(path);
    window.scrollTo({ top: 0 });
  };

  const handleReadMoreClick = () => {
    if (secondPartRef.current) {
      secondPartRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tools = [
    { icon: <FaReact size={40} className="mx-auto" />, name: "React JS" },
    { icon: <FaNodeJs size={40} className="mx-auto" />, name: "Node JS" },
    { icon: <FaGitAlt size={40} className="mx-auto" />, name: "Git" },
    {
      icon: <RiTailwindCssFill size={40} className="mx-auto" />,
      name: "Tailwind"
    },
    { icon: <SiPhp size={40} className="mx-auto" />, name: "PHP" },
    { icon: <SiFirebase size={40} className="mx-auto" />, name: "Firebase" },
    { icon: <SiMongodb size={40} className="mx-auto" />, name: "MongoDB" },
    { icon: <GrMysql size={40} className="mx-auto" />, name: "MySQL" },
    { icon: <IoLogoFigma size={40} className="mx-auto" />, name: "Figma" },
    { icon: <FaHtml5 size={40} className="mx-auto" />, name: "HTML5" },
    { icon: <FaCss3Alt size={40} className="mx-auto" />, name: "CSS3" },
    { icon: <FaJs size={40} className="mx-auto" />, name: "JavaScript" }
  ];
  useEffect(
    () => {
      let timer;
      if (isHovered) {
        timer = setTimeout(() => setShouldPause(true), 900);
      } else {
        setShouldPause(false);
        if (timer) {
          clearTimeout(timer);
        }
      }
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    },
    [isHovered]
  );

  return (
    <div>
      {/* Home page first part */}
      <div className="my-0 lg:my-20 mx-4 lg:mx-10 xl:mx-40">
        <div className="flex flex-col lg:flex-row w-full gap-10 xl:gap-20 mt-20 lg:mt-0">
          <div className="w-full lg:w-1/2 mt-4 md:mt-32">
            <p className="text-5xl sm:text-6xl text-center lg:text-start font-bold my-4">
              Empowering innovation, crafting solutions
            </p>
            <div className="h-0.5 w-32 flex mx-auto lg:mx-0 bg-gradient-to-r from-cyan-300 to-blue-500 my-8" />
            <p className="text-lg sm:text-xl text-center lg:text-start font-semibold text-gray-600">
              We can help you build and develop websites, web apps, mobile apps,
              desktop apps, and more.
            </p>
            <div className="flex flex-col md:flex-row justify-center lg:justify-start mt-10 gap-4">
              <div
                onClick={() => handleClick("/schedule-a-free-consultation")}
                className={`mx-auto md:mx-0 flex items-center font-semibold cursor-pointer w-68 bg-gradient-to-r from-cyan-300 to-blue-500 hover:opacity-70 text-white py-2 px-4 rounded-full dark:text-black`}
              >
                Schedule a Free Consultation
              </div>
              <div
                className="mx-auto md:mx-0 max-w-32 py-2 px-4 bg-white rounded-full drop-shadow-lg cursor-pointer hover:bg-blue-50 font-semibold text-gray-500"
                onClick={handleReadMoreClick}
              >
                Read more
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={homepage}
              className="w-full h-1/2 lg:h-full object-contain"
            />
          </div>
        </div>
        <div ref={secondPartRef} />
      </div>
      {/* Home page second part */}
      <div>
        <div className="my-0 lg:my-20 mx-2 lg:mx-20">
          <div className="p-4 lg:p-8 xl:p-14 2xl:p-20 flex flex-col-reverse lg:flex-row gap-10">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="flex flex-col gap-16">
                <img
                  src={codingillu}
                  className="w-72 lg:w-72 h-60 lg:h-72 object-contain"
                />
                <div className="w-32 bg-blue-500 text-blue-800 bg-opacity-20 text-opacity-80 rounded-xl shadow-lg p-3 text-center mx-auto">
                  <p className="text-4xl font-bold">90%</p>
                  <p className="font-semibold">Success Score</p>
                </div>
              </div>
              <div className="flex flex-col gap-16">
                <div className="w-32 bg-blue-500 text-blue-800 bg-opacity-20 text-opacity-80 rounded-xl shadow-lg p-2 text-center mx-auto">
                  <p className="text-4xl font-bold">3+</p>
                  <p className="font-semibold">Years of Experience</p>
                </div>
                <img
                  src={devteamillu}
                  className="w-80 h-60 lg:h-72 drop-shadow-lg object-contain"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-3xl xl:text-4xl font-bold text-center lg:text-start">
                Why choose CinqueDev Solutions For Your Innovative Services?
              </p>
              <div className="h-0.5 w-24 flex mx-auto lg:mx-0 bg-gradient-to-r from-cyan-300 to-blue-500 my-6" />
              <p className="mr-0 xl:mr-20 text-center lg:text-justify my-4 text-lg text-gray-500">
                We, as a custom software and ready software development company
                process highly robust technological solutions for your business
                needs. The numbers here prove that we are a leading partner when
                it comes to shaping the future of technology in software
                development.
              </p>
              <div className="flex gap-4 mt-8 mb-0 lg:mb-36 justify-center lg:justify-start">
                <div className="bg-blue-500 text-blue-800 bg-opacity-10 text-opacity-80 rounded-lg drop-shadow-lg p-2">
                  <p className="text-2xl font-bold">120 +</p>
                  <p className="font-semibold">Projects Delivered</p>
                </div>
                <div className="bg-blue-500 text-blue-800 bg-opacity-10 text-opacity-80 rounded-lg drop-shadow-lg p-2">
                  <p className="text-2xl font-bold">100 +</p>
                  <p className="font-semibold">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Home page third part */}
      <div className="mx-4 md:mx-10 mt-20 mb-60">
        <div className="mx-0 md:mx-10 mt-10 text-3xl xl:text-4xl font-bold text-center">
          Our software solution services
        </div>
        <div className="flex justify-center mt-2 mb-2">
          <div className="h-0.5 w-24 mx-auto lg:mx-0 bg-gradient-to-r from-cyan-300 to-blue-500 " />
        </div>
        <div className="mx-auto w-full md:w-1/2 text-base text-center mb-16 text-gray-600">
          We help businesses to swiftly adapt to change and scale rapidly to
          meet the evolving demands of the market, ensuring they maintain a
          competitive edge.
        </div>
        <div className="flex flex-col lg:flex-row mx-2 xl:mx-20 gap-4 xl:gap-8">
          <div className="flex flex-col md:flex-row gap-4 xl:gap-8 ">
            <div className="bg-white p-6 drop-shadow-lg rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-95">
              <div className="my-2">
                <img src={website} className="w-16 h-16 bject-contain" />
              </div>
              <p className="text-base font-bold">Website Development</p>
              <p className="text-sm my-2 text-slate-500">
                Create stunning, responsive websites tailored to your business
                needs. Engage your audience with a seamless, user-friendly
                experience on any device.
              </p>
            </div>
            <div className="bg-white p-6 drop-shadow-lg rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-95">
              <div className="my-2">
                <img src={webapp} className="w-16 h-16 bject-contain" />
              </div>
              <p className="text-base font-bold">Web App Development</p>
              <p className="text-sm my-2 text-slate-500">
                Develop powerful, scalable web applications that streamline
                operations and enhance productivity. Custom solutions for your
                unique business requirements.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 xl:gap-8">
            <div className="bg-white p-6 drop-shadow-lg rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-95">
              <div className="my-4">
                <img src={mobileapp} className="w-16 h-16 bject-contain" />
              </div>
              <p className="text-base font-bold">Mobile App Development</p>
              <p className="text-sm my-2 text-slate-500">
                Build intuitive, high-performance mobile apps for iOS and
                Android. Deliver a seamless user experience and stay ahead in
                the mobile-first world.
              </p>
            </div>
            <div className="bg-white p-6 drop-shadow-lg rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-95">
              <div className="my-2">
                <img src={desktopapp} className="w-16 h-16 bject-contain" />
              </div>
              <p className="text-base font-bold">Desktop App Development</p>
              <p className="text-sm my-2 text-slate-500">
                Create robust desktop applications for Windows, macOS, and
                Linux. Enhance productivity with efficient, user-friendly
                software tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Home page fourth part */}
      <div className="mx-4 md:mx-10 my-20">
        <div className="mx-0 md:mx-10 mt-10 text-3xl xl:text-4xl font-bold text-center">
          The tools and technologies we use
        </div>
        <div className="flex justify-center mt-4 mb-16">
          <div className="h-0.5 w-24 mx-auto lg:mx-0 bg-gradient-to-r from-cyan-300 to-blue-500" />
        </div>
        <div
          className="marquee-container "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`marquee-content ${shouldPause ? "paused" : ""}`}>
            {tools.map((tool, index) =>
              <div
                key={index}
                className="bg-white rounded-lg drop-shadow-md p-4 m-2 w-40 items-center hover:bg-blue-50 border hover:border-blue-500 cursor-pointer overflow-hidden transform transition-transform hover:scale-110"
              >
                {tool.icon}
                <p className="text-center my-2 font-semibold text-gray-600">
                  {tool.name}
                </p>
              </div>
            )}
            {tools.map((tool, index) =>
              <div
                key={index + tools.length}
                className="bg-white rounded-lg drop-shadow-md p-4 m-2 w-40 items-center hover:bg-blue-50 border hover:border-blue-500 cursor-pointer overflow-hidden transform transition-transform hover:scale-110"
              >
                {tool.icon}
                <p className="text-center my-2 font-semibold text-gray-600">
                  {tool.name}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="my-28 mx-2 lg:mx-10 xl:mx-40">
          <div className="mx-0 md:mx-10 mt-10 text-3xl xl:text-4xl font-bold text-center">
            Check out our latest work
          </div>
          <div className="flex justify-center mt-2 mb-2">
            <div className="h-0.5 w-24 mx-auto lg:mx-0 bg-gradient-to-r from-cyan-300 to-blue-500 " />
          </div>
          <div className="mx-auto w-full md:w-1/2 text-base text-center mb-16 text-gray-600">
            We grow businesses and individual through our impactful digital
            solutions. to deliver a powerful and cheaper solutions without
            mistakes and bugs.
          </div>
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-16">
            <div className="w-full lg:w-2/5 mt-4">
              <p className="text-2xl font-semibold">
                Hospital HR Management System
              </p>
              <p className="text-justify text-sm md:text-base tracking-wide leading-loose my-2 text-gray-500">
                Specialized software solution tailored to meet the unique needs
                of managing human resources within healthcare facilities such as
                hospitals, clinics, and medical centers. It typically
                encompasses various functions such as employee data management,
                payroll processing, scheduling, performance evaluation, training
                tracking, and compliance management.
              </p>
              <div className="flex gap-4 my-4">
                <div className="bg-gray-200 shadow-md bg-opacity-60 rounded-full p-1 text-xs text-blue-500 w-20 text-center cursor-default">
                  Healthcare
                </div>
                <div className="bg-gray-200 shadow-md bg-opacity-60 rounded-full p-1 text-xs text-blue-500 w-20 text-center cursor-default">
                  Web App
                </div>
              </div>
              <div className="flex gap-4">
                <Link target="blank" to="https://bcp-hhrms.onrender.com/">
                  <div className="flex gap-4 my-8 cursor-pointer text-blue-500 font-semibold p-2 bg-white rounded-full w-40 text-center group ">
                    Visit Website
                    <FaArrowRightLong className="self-center transition-transform group-hover:translate-x-2 translate-x-0" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 ">
              <div className="drop-shadow-2xl overflow-hidden transition-transform duration-300 transform hover:scale-110">
                <img
                  src={hhrms}
                  className="object-cover w-full h-full rounded-xl cursor-pointer z-10"
                  alt="Web image"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-0 lg:gap-16 my-36">
            <div className="w-full lg:w-1/2">
              <div className="drop-shadow-2xl overflow-hidden transition-transform duration-300 transform hover:scale-110">
                <img
                  src={lms}
                  className="object-cover w-full h-full rounded-xl cursor-pointer"
                  alt="Web image"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/5 mt-4">
              <p className="text-2xl font-semibold">
                Library Management System (LMS)
              </p>
              <p className="text-justify text-sm md:text-base tracking-wide leading-loose my-2 text-gray-500">
                A software solution designed to efficiently manage the
                operations of a library. It encompasses a range of
                functionalities including cataloging and organizing library
                resources (such as books, journals, and multimedia), managing
                member accounts, tracking borrowing and returning of items,
                handling fines and fees, and generating reports on library usage
                and inventory.
              </p>
              <div className="flex gap-4 my-4">
                <div className="bg-gray-200 shadow-md bg-opacity-60 rounded-full p-1 text-xs text-blue-500 w-20 text-center cursor-default">
                  E-Learning
                </div>
                <div className="bg-gray-200 shadow-md bg-opacity-60 rounded-full p-1 text-xs text-blue-500 w-20 text-center cursor-default">
                  Desktop App
                </div>
              </div>
              <div className="flex gap-4">
                <Link
                  target="blank"
                  to="https://github.com/edillormark2/Library-Management-System"
                >
                  <div className="flex gap-4 my-8 cursor-pointer text-blue-500 font-semibold p-2 bg-white rounded-full w-48 text-center group ">
                    View Case Study
                    <FaArrowRightLong className="self-center transition-transform group-hover:translate-x-2 translate-x-0" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("/services/ready-softwares")}
            className="font-semibold text-blue-500 cursor-pointer hover:text-black text-center"
          >
            View more
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
