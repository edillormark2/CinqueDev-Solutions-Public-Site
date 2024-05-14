import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import simplifiedlogo from "../assets/cds-simplified-logo.png";
import { Divider } from "@mui/joy";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleClick = path => {
    navigate(path);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="bg-white w-full flex md:flex-row flex-col justify-between items-start py-8 lg:py-16 px-8 lg:px-40 border border-gray-300">
      <div className="w-full md:w-1/2 md:justify-center">
        <ul>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-gray-200 rounded-xl min-w-20 max-w-24 my-4 cursor-pointer shadow-xl hover:shadow-primary">
              <img
                src={simplifiedlogo}
                alt="logo"
                className="w-auto h-16 object-cover"
              />
            </div>
            <p className="text-gray-500 pb-6 w-full sm:w-4/6 dark:text-gray-300 md:text-md text-sm mt-4">
              © 2024 CinqueDev Solutions. All rights reserved. For inquiries or
              questions, feel free to contact us.
            </p>
          </div>
          <Divider />
          <div className="flex gap-6 pb-5 mt-4">
            <div className="p-2 drop-shadow-lg rounded-full bg-gray-200 hover:bg-primary hover:text-white cursor-pointer">
              <FaFacebook className="text-2xl" />
            </div>
            <div className="p-2 drop-shadow-lg rounded-full bg-gray-200 hover:bg-primary hover:text-white cursor-pointer">
              <FaGithub className="text-2xl" />
            </div>
            <div className="p-2 drop-shadow-lg rounded-full bg-gray-200 hover:bg-primary hover:text-white cursor-pointer">
              <MdEmail className="text-2xl" />
            </div>
            <div className="p-2 drop-shadow-lg rounded-full bg-gray-200 hover:bg-primary hover:text-white cursor-pointer">
              <IoLogoLinkedin className="text-2xl" />
            </div>
          </div>
        </ul>
      </div>

      <div className="flex justify-end gap-8 lg:gap-10">
        <div>
          <ul className="p-4">
            <p className="text-gray-800 font-bold text-md md:text-xl pb-4">
              Quick Links
            </p>
            <li
              className="text-gray-500 pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer text-sm"
              onClick={() => handleClick("/")}
            >
              Home
            </li>
            <li
              className="text-gray-500 text-sm pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer"
              onClick={() => handleClick("/services")}
            >
              Services
            </li>
            <li
              className="text-gray-500 text-sm pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer"
              onClick={() => handleClick("/about")}
            >
              About
            </li>
            <li
              className="text-gray-500 text-sm pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer"
              onClick={() => handleClick("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>
        <div>
          <ul className="p-4">
            <p className="text-gray-800 dark:text-gray-200 font-bold text-md md:text-xl pb-4">
              Information
            </p>
            <li className="text-gray-500 dark:text-gray-300 text-sm pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
              Features
            </li>
            <li className="text-gray-500 dark:text-gray-300 text-sm pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
              FAQ
            </li>
            <li className="text-gray-500 dark:text-gray-300 text-sm pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
              Privacy policy
            </li>
            <li className="text-gray-500 dark:text-gray-300 text-sm pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
              Terms and condition
            </li>
            <li className="text-gray-500 dark:text-gray-300 text-sm pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
              Developer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
