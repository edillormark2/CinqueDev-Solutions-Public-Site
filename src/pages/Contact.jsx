import React, { useState, useEffect, useRef } from "react";
import { Divider } from "@mui/joy";
import countryList from "react-select-country-list";
import getintouch from "../assets/get-in-touch.png";


import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { PiBuildingsBold } from "react-icons/pi";
import Footer from "../components/Footer";

const Contact = () => {
  const countriesData = countryList().getData();
  const [dropdownCompanySizeOpen, setDropdownCompanySizeOpen] = useState(false);
  const [selectedCompanySize, setSelectedCompanySize] = useState("");

  const [dropdownCountryOpen, setDropdownCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchedCountry, setSearchedCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSelectCompanySize = size => {
    setSelectedCompanySize(size);
    setDropdownCompanySizeOpen(false);
  };

  const handleSelectCountry = country => {
    setSelectedCountry(country);
    setSearchedCountry(country);
    setDropdownCountryOpen(false);
  };

  const handleSearchCountry = e => {
    const searchQuery = e.target.value;
    setSearchedCountry(searchQuery);

    if (searchQuery.trim() === "") {
      setFilteredCountries([]);
      return;
    }

    const filtered = countriesData.filter(country =>
      country.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCountries(filtered);
    setDropdownCountryOpen(true);
  };

  const companydropdownRef = useRef(null);
  const countrydropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        (companydropdownRef.current &&
          !companydropdownRef.current.contains(event.target) &&
          !event.target.closest(".company-dropdown-button")) ||
        (countrydropdownRef.current &&
          !countrydropdownRef.current.contains(event.target) &&
          !event.target.closest(".country-dropdown-button"))
      ) {
        setDropdownCompanySizeOpen(false);
        setDropdownCountryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div className="my-8 md:my-16 mx-6 md:mx-28 lg:mx-16 xl:mx-20 2xl:mx-36">
        <div className="flex flex-col lg:flex-row justify-center gap-20">
          {/*Left side*/}
          <div className="w-full lg:w-1/2 flex flex-col mt-8">
            <img
              src={getintouch}
              className="object-cover w-full h-2/3 lg:h-1/2  xl:h-3/5"
            />
            <div className="items-center mx-auto md:mx-0 mt-8">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="flex flex-row gap-4 items-center hover:bg-gray-200 w-full p-2 cursor-pointer rounded-md">
                  <div className="p-2 bg-blue-100 rounded-full ">
                    <MdOutlineMailOutline size={28} className="text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-gray-500">sales@cinquedev.com</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center hover:bg-gray-200 w-full p-2 cursor-pointer rounded-md">
                  <div className="p-2 bg-blue-100 rounded-full ">
                    <FiPhone size={28} className="text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-lg">Phone</p>
                    <p className="text-gray-500">+63 912 3456 789</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center mt-8 hover:bg-gray-200 w-full md:w-1/2 p-2 cursor-pointer rounded-md">
                <div className="p-2 bg-blue-100 rounded-full ">
                  <PiBuildingsBold size={28} className="text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Address</p>
                  <p className="text-gray-500">Novaliches, Quezon city, 1123</p>
                </div>
              </div>
            </div>
          </div>

          {/*Right side*/}
          <div className="w-full lg:w-2/5 h-auto p-0 md:p-2 flex flex-col gap-4">
            <div className="flex flex-col mt-10">
              <div className="mb-2">
                <h1 className="text-4xl font-bold">Let's Talk</h1>
                <p className="font-semibold text-gray-500 text-sm md:text-base my-2">
                  Have questions? We're here to help. Fill out the form below,
                  and we'll respond Within 24 hours
                </p>
              </div>
              <Divider />
              <div>
                <h1 className="mb-1 dark:text-gray-200 mt-4">Name</h1>
                <input
                  type="text"
                  id="name"
                  className="form-control-1 w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
                />
                <h1 className="mb-1 dark:text-gray-200">Email</h1>
                <input
                  type="email"
                  id="email"
                  className="form-control-1 w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
                />
              </div>

              <div>
                <h1 className="mb-1 dark:text-gray-200">Company size</h1>
                <div className="mb-5 relative ">
                  <div classname="box">
                    <button
                      className="company-dropdown-button relative p-3 form-control-1 cursor-pointer w-full bg-gray-100 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-1"
                      onClick={() => {
                        setDropdownCompanySizeOpen(!dropdownCompanySizeOpen);
                      }}
                    >
                      <p className="flex justify-start">
                        {selectedCompanySize || "Select company size"}
                      </p>
                      <MdKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                    </button>
                  </div>
                  {dropdownCompanySizeOpen &&
                    <div
                      ref={companydropdownRef}
                      className="absolute w-full bg-white rounded-md shadow-xl z-50"
                    >
                      <button
                        onClick={() =>
                          handleSelectCompanySize(
                            "Small business (fewer than 100 employees)"
                          )}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Small business (fewer than 100 employees)
                      </button>
                      <button
                        onClick={() =>
                          handleSelectCompanySize(
                            "Medium-sized (between 100 and 999 employees)"
                          )}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Medium-sized (between 100 and 999 employees)
                      </button>
                      <button
                        onClick={() =>
                          handleSelectCompanySize(
                            "Large business (1000 or more employees)"
                          )}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                      >
                        Large business (1000 or more employees)
                      </button>
                    </div>}
                </div>
              </div>

              <div>
                <h1 className="mb-1 dark:text-gray-200">Country</h1>
                <div className="mb-5 relative">
                  <input
                    type="text"
                    placeholder="Search for a country..."
                    className="country-dropdown-button p-3 cursor-pointer form-control-1 w-full bg-gray-100 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-1"
                    value={searchedCountry}
                    onChange={handleSearchCountry}
                    onClick={() => setDropdownCountryOpen(!dropdownCountryOpen)}
                  />

                  {dropdownCountryOpen &&
                    <div
                      ref={countrydropdownRef}
                      className="absolute w-full bg-white max-h-60 overflow-y-auto rounded-md shadow-xl z-50"
                    >
                      {searchedCountry.trim() === ""
                        ? <p className="p-4 text-sm text-gray-700">
                            Search your country
                          </p>
                        : filteredCountries.length > 0
                          ? filteredCountries.map((country, index) =>
                              <button
                                key={index}
                                onClick={() =>
                                  handleSelectCountry(country.label)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                              >
                                {country.label}
                              </button>
                            )
                          : <p className="p-4 text-sm text-gray-700">
                              Country doesn't exist
                            </p>}
                    </div>}
                </div>
              </div>

              <h1 className="mb-1 dark:text-gray-200">Message</h1>
              <textarea
                id="message"
                className="form-control-1 w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
                rows="4"
                placeholder="Tell us a little bit about your project..."
              />
              <div>
                <h1 className="mb-2 dark:text-gray-200">Expected Services</h1>
                <div className="flex flex-col">
                  <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className=" h-5 w-5 text-primary " />
                    <span className="ml-2 text-sm text-gray-700">
                      Custom made software
                    </span>
                  </label>
                  <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="h-5 w-5 text-primary" />
                    <span className="ml-2 text-sm text-gray-700">
                      Ready-made software
                    </span>
                  </label>
                  <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="h-5 w-5 text-primary" />
                    <span className="ml-2 text-sm text-gray-700">Other</span>
                  </label>
                </div>
              </div>
              <div className="flex text-sm text-gray-500 mt-8">
                By submitting this form, I acknowledge receipt of the
                Cinquedev's Privacy Policy
              </div>

              <div className="w-full mt-2 bg-primary text-white p-3 rounded-full items-center flex justify-center font-semibold text-base cursor-pointer  hover:opacity-70">
                Submit <IoIosSend size={22} className="ml-2 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
