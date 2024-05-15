import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import hhrms from "../assets/hhrms-pic.png";
import lms from "../assets/lms-dashboard.png";
import { FaArrowRightLong } from "react-icons/fa6";

const OurSoftwares = () => {
  const [dropdownIndustryOpen, setDropdownIndustryOpen] = useState(false);
  const [dropdownServicesOpen, setDropdownServicesOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedServices, setSelectedServices] = useState("");

  const handleSelectIndustry = size => {
    setSelectedIndustry(size);
    setDropdownIndustryOpen(false);
  };

  const handleSelectServices = size => {
    setSelectedServices(size);
    setDropdownServicesOpen(false);
  };

  const industrydropdownRef = useRef(null);
  const servicesdropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        (industrydropdownRef.current &&
          !industrydropdownRef.current.contains(event.target) &&
          !event.target.closest(".industry-dropdown-button")) ||
        (servicesdropdownRef.current &&
          !servicesdropdownRef.current.contains(event.target) &&
          !event.target.closest(".services-dropdown-button"))
      ) {
        setDropdownIndustryOpen(false);
        setDropdownServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-l from-cyan-400 from-20% via-sky-400 via-30% to-blue-600 to-80% w-full h-96 flex justify-center items-center relative">
        <div className="text-2xl lg:text-4xl font-semibold w-3/4 text-center text-white z-10">
          Explore software development case studies from companies with similar
          challenges
        </div>
        <div className="absolute -bottom-20 lg:-bottom-8 flex w-full">
          <div className="flex flex-col lg:flex-row  bg-white drop-shadow-2xl mx-8 lg:mx-28 rounded-xl w-full">
            <div className="flex flex-col lg:flex-row w-full">
              <div className="w-full lg:w-1/2 ">
                <div
                  className="industry-dropdown-button relative flex justify-between p-4 font-semibold pr-4 cursor-pointer  "
                  onClick={() => {
                    setDropdownIndustryOpen(!dropdownIndustryOpen);
                  }}
                >
                  {selectedIndustry || "All Industries"}
                  <IoIosArrowDown className="self-center" />

                  {dropdownIndustryOpen &&
                    <div
                      ref={industrydropdownRef}
                      className="absolute left-0 mt-12 bg-white rounded-md w-full hadow-xl z-50"
                    >
                      <button
                        onClick={() => handleSelectIndustry("All Industries")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        All Industries
                      </button>
                      <button
                        onClick={() => handleSelectIndustry("Real Estate")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Real Estate
                      </button>
                      <button
                        onClick={() => handleSelectIndustry("Ecommerce")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Ecommerce
                      </button>
                      <button
                        onClick={() => handleSelectIndustry("E-Learning")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        E-Learning
                      </button>
                      <button
                        onClick={() => handleSelectIndustry("Healthcare")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Healthcare
                      </button>
                      <button
                        onClick={() => handleSelectIndustry("logistics")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Logistics
                      </button>
                      <button
                        onClick={() => handleSelectIndustry("Retail")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Retail
                      </button>
                      <button
                        onClick={() => handleSelectIndustry("Lifestyle")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Lifestyle
                      </button>
                    </div>}
                </div>
              </div>
              <div className="bg-gray-200 w-0.5" />
              <div className="w-full lg:w-1/2 ">
                <div
                  className="services-dropdown-button relative flex justify-between p-4 font-semibold  border-gray-200 lg:border-none border-r-2 pr-4 cursor-pointer"
                  onClick={() => {
                    setDropdownServicesOpen(!dropdownServicesOpen);
                  }}
                >
                  {selectedServices || "All Services"}
                  <IoIosArrowDown className="self-center" />
                  {dropdownServicesOpen &&
                    <div
                      ref={servicesdropdownRef}
                      className="absolute left-0 mt-12 bg-white  w-full  rounded-md shadow-xl z-50"
                    >
                      <button
                        onClick={() => handleSelectServices("All Industries")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        All Services
                      </button>
                      <button
                        onClick={() => handleSelectServices("Website")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Website
                      </button>
                      <button
                        onClick={() => handleSelectServices("Web App")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Web App
                      </button>
                      <button
                        onClick={() => handleSelectServices("Desktop App")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Desktop App
                      </button>
                      <button
                        onClick={() => handleSelectServices("Mobile App")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Mobile App
                      </button>
                    </div>}
                </div>
              </div>
              <div className="bg-gray-200 w-0.5" />
            </div>
            <div className="flex justify-between w-full mx-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-4 text-sm sm:text-base border-none outline-none"
              />
              <div className="self-center p-3 hover:bg-blue-50  rounded-full cursor-pointer mr-4">
                <FaSearch size={20} className="self-center text-gray-500 " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-40 mx-8 lg:mx-10 xl:mx-40">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16">
          <div className="w-full lg:w-2/5 mt-4">
            <p className="text-2xl font-semibold">
              Hospital HR Management System
            </p>
            <p className="text-justify text-sm md:text-base tracking-wide leading-loose my-2 text-gray-500">
              Specialized software solution tailored to meet the unique needs of
              managing human resources within healthcare facilities such as
              hospitals, clinics, and medical centers. It typically encompasses
              various functions such as employee data management, payroll
              processing, scheduling, performance evaluation, training tracking,
              and compliance management.
            </p>
            <div className="flex gap-4 my-4">
              <div className="bg-gray-200 shadow-md bg-opacity-60 rounded-full p-1 text-xs text-blue-500 w-20 text-center cursor-default">
                Healthcare
              </div>
              <div className="bg-gray-200 shadow-md bg-opacity-60 rounded-full p-1 text-xs text-blue-500 w-20 text-center cursor-default">
                Web App
              </div>
            </div>
            <div className="flex gap-4 my-8 cursor-pointer text-blue-500 font-semibold p-2 bg-white rounded-full w-40 text-center group ">
              Visit Website
              <FaArrowRightLong className="self-center transition-transform group-hover:translate-x-2 translate-x-0" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="drop-shadow-2xl overflow-hidden transition-transform duration-300 transform hover:scale-110">
              <img
                src={hhrms}
                className="object-cover w-full h-full rounded-xl cursor-pointer"
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
              a software solution designed to efficiently manage the operations
              of a library. It encompasses a range of functionalities including
              cataloging and organizing library resources (such as books,
              journals, and multimedia), managing member accounts, tracking
              borrowing and returning of items, handling fines and fees, and
              generating reports on library usage and inventory.
            </p>
            <div className="flex gap-4 my-4">
              <div className="bg-gray-200 shadow-md bg-opacity-60 rounded-full p-1 text-xs text-blue-500 w-20 text-center cursor-default">
                E-Learning
              </div>
              <div className="bg-gray-200 shadow-md bg-opacity-60 rounded-full p-1 text-xs text-blue-500 w-20 text-center cursor-default">
                Desktop App
              </div>
            </div>
            <div className="flex gap-4 my-8 cursor-pointer text-blue-500 font-semibold p-2 bg-white rounded-full w-44 text-center group ">
              View Case Study
              <FaArrowRightLong className="self-center transition-transform group-hover:translate-x-2 translate-x-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSoftwares;
