import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

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
        <div className="text-4xl font-semibold w-3/4 text-center text-white z-10">
          Explore software development case studies from companies with similar
          challenges
        </div>
        <div className="absolute bottom-0 flex justify-center w-full">
          <div className="flex gap-0 bg-white drop-shadow-2xl mx-28 rounded-xl w-full">
            <div
              className="industry-dropdown-button  flex justify-between p-4 w-1/4 font-semibold  border-gray-200 border-r-2 pr-4 cursor-pointer relative"
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

            <div
              className="services-dropdown-button relative flex justify-between p-4 w-1/4 font-semibold  border-gray-200 border-r-2 pr-4 cursor-pointer"
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
            <div className="flex w-full mx-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-4 text-sm sm:text-base border-none outline-none"
              />
              <div className="self-center p-3 hover:bg-blue-50  rounded-full cursor-pointer">
                <FaSearch
                  size={20}
                  className="items-end self-center text-gray-500 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSoftwares;
