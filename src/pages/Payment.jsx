import React, { useState, useEffect, useRef } from "react";
import countryList from "react-select-country-list";
import { useParams } from "react-router-dom";
import { softwaresDummyData } from "../data/software.js";
import { Divider } from "@mui/joy";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import visa from "../assets/visa.png";
import mc from "../assets/mastercard.png";
import ucb from "../assets/ucb.png";
import ae from "../assets/american-express.png";
import pp from "../assets/paypal.png";

const Payment = () => {
  const { id } = useParams();
  const countriesData = countryList().getData();
  const [dropdownCompanySizeOpen, setDropdownCompanySizeOpen] = useState(false);
  const [selectedCompanySize, setSelectedCompanySize] = useState("");

  const [dropdownCountryOpen, setDropdownCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchedCountry, setSearchedCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const getSoftwareById = id => {
    return softwaresDummyData.find(software => software.id === Number(id));
  };

  const software = getSoftwareById(id);

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

  const handleSubmit = () => {
    toast.success(
      "Purchase successful! A confirmation email has been sent to your email address. You can claim your software via the email."
    );
  };

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
        <div className="absolute top-24 flex w-full">
          <div className="bg-white drop-shadow-2xl mx-4 lg:mx-56 rounded-xl w-full py-8 px-3 lg:px-12 mb-36">
            <p className="text-center text-2xl lg:text-4xl font-bold mb-8">
              Get This Software Now!
            </p>
            <Divider />
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div className="rounded-lg">
                {software &&
                  <img
                    src={software.image}
                    alt={software.name}
                    className="w-72 h-72 object-contain mx-auto"
                  />}
              </div>
              <div className="text-center md:text-end mt-2 md:mt-10">
                <p className="font-semibold text-lg">
                  {software ? software.name : ""}
                </p>
                <p className="text-gray-500">
                  {software ? software.desc : ""}
                </p>
                <p className="text-green-500 font-semibold text-lg">
                  Total Price: {software ? software.price : ""}
                </p>
              </div>
            </div>
            <Divider />
            <div className="my-4">
              <p className="text-xl mb-8">Payment Information</p>{" "}
              <div>
                <div className="flex gap-2 mx-auto my-4 overflow-auto">
                  <img
                    src={visa}
                    className="w-24 h-12 object-contain border rounded-md"
                  />
                  <img
                    src={mc}
                    className="w-24 h-12 object-contain  border rounded-md"
                  />
                  <img
                    src={ucb}
                    className="w-24 h-12 object-contain border rounded-md"
                  />
                  <img
                    src={ae}
                    className="w-24 h-12 object-contain border rounded-md"
                  />
                  <img
                    src={pp}
                    className="w-24 h-12 object-contain  border rounded-md"
                  />
                </div>
              </div>
              <div className="flex gap-2 lg:gap-8">
                <div className="w-1/2">
                  <h1 className="mb-1 text-sm md:text-base">Full Name</h1>
                  <input
                    type="text"
                    id="name"
                    className="form-control-1 w-full bg-white p-3 rounded-lg border  text-sm sm:text-base mb-5"
                  />
                </div>
                <div className="w-1/2">
                  <h1 className="mb-1 text-sm md:text-base">Email</h1>
                  <input
                    type="email"
                    id="email"
                    className="form-control-1 w-full bg-white p-3 rounded-lg border  text-sm sm:text-base  mb-5"
                  />
                </div>
              </div>
              <div className="flex gap-2 lg:gap-8">
                <div className="w-1/2">
                  <h1 className="mb-1 text-sm md:text-base">Country</h1>
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
                  <h1 className="mb-1 text-sm md:text-base">Company Name</h1>
                  <input
                    type="text"
                    id="name"
                    className="form-control-1 w-full bg-white p-3 rounded-lg border  text-sm sm:text-base mb-5"
                  />
                </div>
              </div>
              <h1 className="mb-1 text-sm md:text-base">Card Number</h1>
              <input
                type="text"
                id="name"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                className="form-control-1 w-full bg-white p-4 rounded-lg border  text-sm sm:text-base mb-5"
              />
              <div className="flex gap-2 lg:gap-8">
                <div className="w-1/2">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <h1 className="mb-1 text-sm md:text-base">
                      Expiration Date
                    </h1>
                    <div className="w-full">
                      <MobileDatePicker sx={{ width: "100%" }} />
                    </div>
                  </LocalizationProvider>
                </div>
                <div className="w-1/2">
                  <h1 className="mb-1 text-sm md:text-base">Security Code</h1>
                  <input
                    type="text"
                    id="name"
                    className="form-control-1 w-full bg-white p-4 rounded-lg border  text-sm sm:text-base mb-5"
                  />
                </div>
              </div>
              <div className="text-xs md:text-sm text-justify md:text-center text-gray-400 my-8">
                Other information regarding the processing of personal data,
                including information on your rights, can be found in our
                Privacy Policy. By submitting this form, You acknowledge receipt
                of the Cinquedev's Privacy Policy
              </div>
              <div
                onClick={handleSubmit}
                className="select-none w-full mx-auto mt-8 bg-green-500 text-white p-3 rounded-full items-center flex justify-center font-semibold text-base cursor-pointer  hover:opacity-70"
              >
                Place Order
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
