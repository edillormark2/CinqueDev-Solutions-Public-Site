import React, { useState, useEffect, useRef } from "react";
import countryList from "react-select-country-list";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import Footer from "../components/Footer";

const CustomSoftwarePlan = () => {
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
      <div className="bg-gradient-to-l from-cyan-400 from-20% via-sky-400 via-30% to-blue-600 to-80% w-full h-96 flex justify-center items-center relative">
        <div className="absolute top-40 flex w-full">
          <div className="bg-white drop-shadow-2xl mx-8 lg:mx-36 rounded-xl w-full py-8 px-12">
            <div className="">
              <p className="text-center text-5xl font-bold">
                What would you like to do?
              </p>
              <div className="h-0.5 w-20 flex mx-auto bg-gradient-to-r from-cyan-300 to-blue-500 my-6" />
              <p className="mx-36 text-lg font-semibold text-gray-500 text-center">
                Tell us about your business goals and we will contact you. Feel
                free to contact us if you need some help, consultation or you
                have some other question.
              </p>
            </div>
            <div className="mt-10">
              <div className="flex gap-8">
                <div className="w-1/2">
                  <h1 className="mb-1 dark:text-gray-200">Full Name</h1>
                  <input
                    type="text"
                    id="name"
                    className="form-control-1 w-full bg-white p-3 rounded-lg border  text-sm sm:text-base mb-5"
                  />
                </div>
                <div className="w-1/2">
                  <h1 className="mb-1 dark:text-gray-200">Email</h1>
                  <input
                    type="email"
                    id="email"
                    className="form-control-1 w-full bg-white p-3 rounded-lg border  text-sm sm:text-base  mb-5"
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-1/2">
                  <h1 className="mb-1 dark:text-gray-200">Country</h1>
                  <div className="mb-5 relative">
                    <input
                      type="text"
                      placeholder="Search for a country..."
                      className="country-dropdown-button p-3 cursor-pointer form-control-1 w-full bg-white rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-1"
                      value={searchedCountry}
                      onChange={handleSearchCountry}
                      onClick={() =>
                        setDropdownCountryOpen(!dropdownCountryOpen)}
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

                <div className="w-1/2">
                  <h1 className="mb-1 dark:text-gray-200">Estimated Budget</h1>
                  <div className="mb-5 relative ">
                    <div classname="box">
                      <button
                        className="company-dropdown-button relative p-3 form-control-1 cursor-pointer w-full bg-white rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-1"
                        onClick={() => {
                          setDropdownCompanySizeOpen(!dropdownCompanySizeOpen);
                        }}
                      >
                        <p className="flex justify-start">
                          {selectedCompanySize || "Select your estimated"}
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
                            handleSelectCompanySize("₱ 10,000 - ₱ 20,000")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                        >
                          ₱ 10,000 - ₱ 20,000
                        </button>
                        <button
                          onClick={() =>
                            handleSelectCompanySize("₱ 20,000 - ₱ 50,000")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                        >
                          ₱ 20,000 - ₱ 50,000
                        </button>
                        <button
                          onClick={() =>
                            handleSelectCompanySize("₱ 50,000 - ₱ 100,000")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                        >
                          ₱ 50,000 - ₱ 100,000
                        </button>
                        <button
                          onClick={() =>
                            handleSelectCompanySize("₱ 100,000 - ₱ 1,000,000")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                        >
                          ₱ 100,000 - ₱ 1,000,000
                        </button>
                        <button
                          onClick={() => handleSelectCompanySize("Discuss")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                        >
                          Discuss
                        </button>
                      </div>}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="mb-1 dark:text-gray-200">Message</h1>
              <textarea
                id="message"
                className="form-control-1 w-full bg-white p-3 rounded-lg border  text-sm sm:text-base 0 mb-5"
                rows="4"
                placeholder="Tell us a little bit about your project..."
              />
            </div>

            <div className="mt-8">
              <h1 className="mb-2 dark:text-gray-200">Expected Services</h1>
              <div className="flex flex-row gap-4">
                <label className="w-1/5 inline-flex items-center mt-3">
                  <input type="checkbox" className=" h-5 w-5 text-primary " />
                  <span className="ml-2 text-sm text-gray-700">
                    Website Development
                  </span>
                </label>
                <label className="w-1/5 inline-flex items-center mt-3">
                  <input type="checkbox" className="h-5 w-5 text-primary" />
                  <span className="ml-2 text-sm text-gray-700">
                    Web App Development
                  </span>
                </label>
                <label className=" inline-flex items-center mt-3">
                  <input type="checkbox" className="h-5 w-5 text-primary" />
                  <span className="ml-2 text-sm text-gray-700">
                    Cross-platform Development
                  </span>
                </label>
              </div>
              <div className="flex flex-row gap-4">
                <label className="w-1/5 inline-flex items-center mt-3">
                  <input type="checkbox" className="h-5 w-5 text-primary" />
                  <span className="ml-2 text-sm text-gray-700">
                    Mobile App Development
                  </span>
                </label>
                <label className="w-1/5 inline-flex items-center mt-3">
                  <input type="checkbox" className="h-5 w-5 text-primary" />
                  <span className="ml-2 text-sm text-gray-700">
                    Desktop App Development
                  </span>
                </label>

                <label className=" inline-flex items-center mt-3">
                  <input type="checkbox" className="h-5 w-5 text-primary" />
                  <span className="ml-2 text-sm text-gray-700">Other</span>
                </label>
              </div>
            </div>
            <div className="text-sm text-gray-400 my-8">
              Your personal data will be processed in order to handle your
              question. Other information regarding the processing of personal
              data, including information on your rights, can be found in our
              Privacy Policy. By submitting this form, You acknowledge receipt
              of the Cinquedev's Privacy Policy
            </div>
            <div className="w-60 mx-auto mt-8 bg-primary text-white p-3 rounded-full items-center flex justify-center font-semibold text-base cursor-pointer  hover:opacity-70">
              Submit <IoIosSend size={22} className="ml-2 " />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-screen">
        <div className="w-full absolute -bottom-96 lg:-bottom-60">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CustomSoftwarePlan;
