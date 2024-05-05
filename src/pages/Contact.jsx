import React from "react";
import { FormControl,FormLabel, Input, Select, Option, Textarea, Button, Typography } from "@mui/joy";
import countryList from 'react-select-country-list'
import contactUsImage from '../assets/5124558.svg'

import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";



const Contact = () => {
  const countries = countryList().getData();

  return (
    <div className="flex flex-col-reverse md:flex-row mt-10 justify-around h-auto w-full items-center">
      <div className="md:w-1/2 w-4/5 flex-col">
        <Typography level="h1" className="text-center hidden md:block">Contact our team</Typography>
        <div className="flex flex-col-reverse md:flex-row">
          
          <div className="md:w-1/2 w-full flex flex-col justify-center gap-10">
            <div className="p-4 flex rounded-md shadow-md item-center gap-1 flex-wrap justify-center md:justify-start">
              <FiMail size={22}/>
              <p className=" font-semibold">Email</p>
              <p className="font-medium text-gray-600">sales@cinquedev.com</p>
            </div>
            <div className="p-4 flex rounded-md shadow-md item-center gap-1 flex-wrap justify-center md:justify-start">
              <FiPhone size={22}/>
              <p className=" font-semibold">Phone</p>
              <p className="font-medium text-gray-600">+63 912 3456 789</p>
            </div>
            <div className="p-4 flex rounded-md shadow-md item-center gap-1 flex-wrap justify-center md:justify-start">
              <FaRegBuilding size={22}/>
              <p className=" font-semibold">Address</p>
              <p className="font-medium text-gray-600">Novaliches, Quezon city, 1123</p>
            </div>
          </div>

          <img src={contactUsImage} className="md:w-1/2 w-full" />
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <Typography level="h3" className="md:text-left text-center">Follow us</Typography>
          <div className="flex md: gap-6 md:justify-start justify-center">
            <FaFacebook color="#0866FF" size={42} className="hover:cursor-pointer"/>
            <FaInstagram color="#E4405F" size={42} className="hover:cursor-pointer"/>
            <FaYoutube color="#FF0000" size={42} className="hover:cursor-pointer"/>
            <SiX color="#000000" size={42} className="hover:cursor-pointer"/>
          </div>
        </div>

        <p className=" text-sm my-4 md:text-left text-center">{"Looking for support or help? "}
            <a href="" className=" font-semibold">{"Visit our Help Center"}</a>
          </p>
      </div>

      <div className="md:w-2/5 w-full h-auto p-4 flex flex-col gap-4">
        <Typography level="h1" className="text-center md:hidden block">Contact our team</Typography>
        <form action="" className="flex flex-col gap-2 ">
          <div className="flex justify-between">
            <FormControl className="w-48p">
              <FormLabel>First name *</FormLabel>
              <Input placeholder="Ada" />
            </FormControl>
            <FormControl className="w-48p">
              <FormLabel >Last name *</FormLabel>
              <Input placeholder="Lovelace" />
            </FormControl>
          </div>
          <FormControl className="w-full">
            <FormLabel>Email *</FormLabel>
            <Input type="email" placeholder="ada@lovelace.app"></Input>
          </FormControl>
          <FormControl className="w-full">
            <FormLabel>Company size *</FormLabel>
            <Select placeholder="Choose one…">
              <Option value="small">Small business (fewer than 100 employees)</Option>
              <Option value="medium">Medium-sized (between 100 and 999 employees)</Option>
              <Option value="large">Large business (1000 or more employees)</Option>
            </Select>
          </FormControl>
          <FormControl className="w-full">
            <FormLabel>Country *</FormLabel>
            <Select className=" z-50" placeholder="Choose one…">
              {countries.map((country, index) => (
                <Option key={index} value={country.value}>
                  {country.label}
                </Option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Message *</FormLabel>
            <Textarea minRows={3} maxRows={3} placeholder="How can we help your company..."/>
          </FormControl>

          <p className=" text-sm">{"By submitting this form, I acknowledge receipt of the "}
            <a href="" className=" font-semibold">{"Cinquedev's Private Policy"}</a>
          </p>

          <Button className="w-28">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
