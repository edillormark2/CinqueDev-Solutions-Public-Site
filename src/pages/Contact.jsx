import React, { useState, useEffect, useRef } from "react";
import { Divider, Typography } from "@mui/joy";
import countryList from "react-select-country-list";
import contactUsImage from "../assets/5124558.svg";

import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { MdKeyboardArrowDown } from "react-icons/md";

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
    <div className="flex flex-col-reverse md:flex-row mt-10 justify-around h-auto w-full items-center">
      <div className="md:w-1/2 w-4/5 flex-col">
        <Typography level="h1" className="text-center hidden md:block">
          Contact our team
        </Typography>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-1/2 w-full flex flex-col justify-center gap-10">
            <div className="p-4 flex rounded-md shadow-md item-center gap-1 flex-wrap justify-center md:justify-start">
              <FiMail size={22} />
              <p className=" font-semibold">Email</p>
              <p className="font-medium text-gray-600">sales@cinquedev.com</p>
            </div>
            <div className="p-4 flex rounded-md shadow-md item-center gap-1 flex-wrap justify-center md:justify-start">
              <FiPhone size={22} />
              <p className=" font-semibold">Phone</p>
              <p className="font-medium text-gray-600">+63 912 3456 789</p>
            </div>
            <div className="p-4 flex rounded-md shadow-md item-center gap-1 flex-wrap justify-center md:justify-start">
              <FaRegBuilding size={22} />
              <p className=" font-semibold">Address</p>
              <p className="font-medium text-gray-600">
                Novaliches, Quezon city, 1123
              </p>
            </div>
          </div>

          <img src={contactUsImage} className="md:w-1/2 w-full" />
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <Typography level="h3" className="md:text-left text-center">
            Follow us
          </Typography>
          <div className="flex md: gap-6 md:justify-start justify-center">
            <FaFacebook
              color="#0866FF"
              size={42}
              className="hover:cursor-pointer"
            />
            <FaInstagram
              color="#E4405F"
              size={42}
              className="hover:cursor-pointer"
            />
            <FaYoutube
              color="#FF0000"
              size={42}
              className="hover:cursor-pointer"
            />
            <SiX color="#000000" size={42} className="hover:cursor-pointer" />
          </div>
        </div>

        <p className=" text-sm my-4 md:text-left text-center">
          {"Looking for support or help? "}
          <a href="" className=" font-semibold">
            {"Visit our Help Center"}
          </a>
        </p>
      </div>

      <div className="md:w-2/5 w-full h-auto p-4 flex flex-col gap-4">
        <Typography level="h1" className="text-center md:hidden block">
          Contact our team
        </Typography>
        <div className="flex flex-col mt-10">
          <div className="mb-2">
            <h1 className="text-4xl font-bold">Let's Talk</h1>
            <p className="font-semibold text-gray-500 text-base my-2">
              Have questions? We're here to help. Fill out the form below, and we'll
              respond Within 24 hours
            </p>
          </div>
          <Divider/>
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
                            onClick={() => handleSelectCountry(country.label)}
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
            <p className="text-sm ml-1 font-semibold ">
              Cinquedev's Private Policy
            </p>
          </div>

          <div className="w-full mt-2 bg-primary text-white p-3 rounded-full flex justify-center font-semibold text-base cursor-pointer  hover:opacity-70">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
