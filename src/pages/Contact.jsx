import React from "react";
import { FormControl,FormLabel, Input, Select, Option, Textarea, Button, Typography } from "@mui/joy";
import countryList from 'react-select-country-list'

const Contact = () => {
  const countries = countryList().getData();

  return (
    <div className="flex flex-col md:flex-row mt-10 justify-around h-auto w-full items-center">
      <div className="md:w-2/5 w-full flex flex-col items-center mt-10">
        <Typography level="h1">Contact our team</Typography>
      </div>
      <div className="md:w-2/5 w-4/5 h-auto p-4 mt-10">
        <form action="" className="flex flex-col gap-2">
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
            <Select placeholder="Choose one…">
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
