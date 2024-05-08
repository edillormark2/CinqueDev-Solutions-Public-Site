import React, { useState } from "react";
import customsoftware from "../assets/custom-software.png";
import readysoftware from "../assets/ready-software.png";
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <div className="flex flex-col mt-10 justify-center h-auto w-full items-center">
      <div className="mt-8 text-3xl font-semibold">Our Services & Product</div>
      <div className="flex flex-col lg:flex-row gap-16 md:gap-8 lg:gap-16 w-10/12 md:w-1/2 lg:w-11/12 xl:w-8/12 justify-center mt-10">
        <div className="relative flex flex-col p-4 bg-white border hover:border-primary rounded-lg drop-shadow-xl w-full lg:w-2/5 overflow-hidden transform transition-transform hover:scale-105">
          <p className="flex justify-center text-2xl font-bold">
            Custom Software
          </p>

          <div className="flex justify-center">
            <img src={customsoftware} className="object-cover w-80 h-80" />
          </div>
          <div className="mt-4 mx-10">
            <div className="mt-4">
              <div className="flex items-center gap-4 my-3 ">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-lg font-semibold text-gray-500">
                  Tailored Solutions
                </p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-lg font-semibold text-gray-500">
                  Competitive Advantage
                </p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-lg font-semibold text-gray-500">
                  Scalable and Flexible
                </p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-lg font-semibold text-gray-500">
                  Full Control
                </p>
              </div>
            </div>
          </div>
          <div className="p-2  rounded-full text-white flex justify-center m-4 cursor-pointer bg-gradient-to-r from-cyan-300 to-blue-500 hover:opacity-85 ">
            Select Plan
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white border hover:border-primary rounded-lg drop-shadow-xl w-full lg:w-2/5 overflow-hidden transform transition-transform hover:scale-105">
          <p className="flex justify-center text-2xl font-bold">
            Ready Software
          </p>
          <div className="flex justify-center">
            <img src={readysoftware} className="object-cover w-80 h-80" />
          </div>
          <div className="mt-4 mx-10">
            <div className="mt-4">
              <div className="flex items-center gap-4 my-3 ">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-lg font-semibold text-gray-500">
                  Cost-Effectiveness
                </p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-lg font-semibold text-gray-500">
                  Industry Best Practices
                </p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-lg font-semibold text-gray-500">
                  Scalability
                </p>
              </div>
              <div className="flex items-center gap-4 my-3">
                <div className="p-2 bg-green-100 rounded-full border border-green-300">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-lg font-semibold text-gray-500">
                  Quick Deployment
                </p>
              </div>
            </div>
          </div>
          <div className="flex m-4 gap-4">
            <div className="p-2 w-full rounded-full text-white flex justify-center  cursor-pointer bg-gradient-to-r from-cyan-300 to-blue-500 hover:opacity-85 ">
              Select Plan
            </div>
            <div className="p-2 w-full rounded-full text-black border border-gray-300 flex justify-center  cursor-pointer bg-gray-200 hover:bg-gray-300">
              View Our Softwares
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
