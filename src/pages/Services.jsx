import React, { useState } from "react";
import customsoftware from "../assets/custom-software.png";
import readysoftware from "../assets/ready-software.png";
import update from "../assets/update.png";
import security from "../assets/security-icon.png";
import performance from "../assets/performance.png";
import adaptability from "../assets/adaptability.png";
import { FaCheck } from "react-icons/fa";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="flex flex-col mt-10 justify-center w-full items-center">
      {/*First Part */}
      <div className="mt-8 text-2xl md:text-3xl font-semibold">
        Our Services & Product
      </div>
      <div className="flex flex-col lg:flex-row gap-16 md:gap-8 lg:gap-16 w-11/12 md:w-1/2 lg:w-11/12 xl:w-8/12 justify-center mt-10">
        <div className="relative flex flex-col p-4 bg-white border hover:border-primary rounded-lg drop-shadow-xl w-full lg:w-2/5 overflow-hidden transform transition-transform hover:scale-105">
          <p className="flex justify-center text-xl md:text-2xl font-bold">
            Custom Software
          </p>

          <div className="flex justify-center">
            <img
              src={customsoftware}
              className="object-cover w-72 md:w-80 h-72 md:h-80"
            />
          </div>
          <div className="mt-4 mx-4 md:mx-10">
            <div className="mt-4">
              <div className="flex items-center gap-4 my-3 ">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-base md:text-lg font-semibold text-gray-500">
                  Tailored Solutions
                </p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-base md:text-lg font-semibold text-gray-500">
                  Competitive Advantage
                </p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-base md:text-lg font-semibold text-gray-500">
                  Scalable and Flexible
                </p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-base md:text-lg font-semibold text-gray-500">
                  Full Control
                </p>
              </div>
            </div>
          </div>
          <div className="p-2  rounded-full text-sm font-semibold text-white flex justify-center m-4 cursor-pointer bg-gradient-to-r from-cyan-300 to-blue-500 hover:opacity-85 ">
            Select Plan
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white border hover:border-primary rounded-lg drop-shadow-xl w-full lg:w-2/5 overflow-hidden transform transition-transform hover:scale-105">
          <p className="flex justify-center text-xl md:text-2xl font-bold">
            Ready Software
          </p>
          <div className="flex justify-center">
            <img
              src={readysoftware}
              className="object-cover w-72 md:w-80 h-72 md:h-80"
            />
          </div>
          <div className="mt-4 mx-4 md:mx-10">
            <div className="mt-4">
              <div className="flex items-center gap-4 my-3 ">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-base md:text-lg font-semibold text-gray-500">
                  Cost-Effectiveness
                </p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-base md:text-lg font-semibold text-gray-500">
                  Industry Best Practices
                </p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-base md:text-lg font-semibold text-gray-500">
                  Scalability
                </p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-base md:text-lg font-semibold text-gray-500">
                  Quick Deployment
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row m-4 gap-2 xl:gap-4 ">
            <div className="p-2 w-full text-sm font-semibold rounded-full text-white flex justify-center  cursor-pointer bg-gradient-to-r from-cyan-300 to-blue-500 hover:opacity-85 items-center ">
              Select Plan
            </div>
            <div className="p-2 w-full text-sm text-center font-semibold rounded-full text-gray-600 border border-gray-300 flex justify-center  cursor-pointer bg-gray-200 hover:bg-gray-300">
              View Our Softwares
            </div>
          </div>
        </div>
      </div>

      {/*Second Part */}
      <div className="mt-20 mb-40 mx-4 md:mx-10 lg:mx-16 xl:mx-40">
        <div className="flex justify-center text-2xl font-semibold my-10">
          Add-Ons
        </div>
        <div className="flex flex-col  gap-8 lg:flex-row w-full">
          <div className="text-center md:text-start  text-3xl md:text-5xl font-bold w-full lg:w-1/2 text-gray-800 ">
            Ongoing support and updates?
          </div>

          <div className="w-full lg:w-5/12">
            <div className="bg-blue-500 text-center md:text-justify bg-opacity-20 text-opacity-80 p-4 rounded-lg drop-shadow-xl font-semibold text-blue-800">
              When we develop solutions, you have the option for ongoing support
              and updates to your developed solution. We provide regular updates
              on project progress to make adjustments.
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full mt-10">
          <div className="w-full lg:w-5/12 ">
            <div className="relative flex flex-row items-center w-full p-0 md:p-2  gap-8 mx-0 md:mx-4 my-6 sm:my-10 md:my-8">
              <div className="absolute w-0.5 bg-gray-300 h-60 top-10 left-10 md:left-12" />
              <div className="flex p-2 bg-primary rounded-full min-w-20 max-w-20 h-20 items-center justify-center drop-shadow-lg">
                <img src={security} className="object-cover w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-semibold ">Security</p>
                <p className="text-sm sm:text-base text-gray-500 mt-2">
                  Continuous updates protect against cyber threats. by fixing
                  vulnerabilities and patching loopholes, ensuring data safety
                  and system integrity.
                </p>
              </div>
            </div>
            <div className="relative flex flex-row items-center  w-full p-0 md:p-2 gap-8 mx-0 md:mx-4 my-6 sm:my-10 md:my-8 z-10">
              <div className="absolute w-0.5 bg-gray-300 h-40 lg:h-52 top-10 left-10 md:left-12" />
              <div className="flex p-2 bg-primary rounded-full min-w-20 max-w-20 h-20 items-center justify-center drop-shadow-lg">
                <img src={performance} className="object-cover w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-semibold ">Performance</p>
                <p className="text-sm sm:text-base text-gray-500 mt-2">
                  Regular updates squash bugs, enhance performance, and minimize
                  crashes, resulting in smoother operation and increased
                  reliability.
                </p>
              </div>
            </div>
            <div className="relative flex flex-row items-center  w-full p-0 md:p-2 gap-8 mx-0 md:mx-4 my-10 sm:my-10 md:my-8 z-10">
              <div className="absolute w-0.5 bg-gray-300 h-10 md:h-20 bottom-14 left-10 md:left-12" />
              <div className="flex p-2 bg-primary rounded-full min-w-20 max-w-20 h-20 items-center justify-center drop-shadow-lg">
                <img src={adaptability} className="object-cover w-10 h-10" />
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-semibold ">Adaptability</p>
                <p className="text-sm sm:text-base text-gray-500 mt-2">
                  Updates introduce new features, empowering users to innovate
                  and stay competitive by adapting to evolving needs and
                  technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mx-auto flex justify-center">
            <img src={update} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      {/*Footer Section */}
      <Footer />
    </div>
  );
};

export default Services;
