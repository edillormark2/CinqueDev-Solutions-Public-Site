import React, { useState } from "react";
import consultation from "../assets/consultation.png";
import dayjs from "dayjs";
import { StaticDatePicker, MobileTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ScheduleConsultation = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs());
  const [showDateTimePicker, setShowDateTimePicker] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = () => {
    toast.success(
      "Thank you for scheduling a free consultation! We will be in touch shortly."
    );
  };

  const handleDateChange = newDate => {
    setSelectedDate(newDate);
  };

  const handleTimeChange = newTime => {
    setSelectedTime(newTime);
  };

  const handleNextClick = () => {
    setShowDateTimePicker(false);
    setShowForm(true);
  };

  const handleBackClick = () => {
    setShowDateTimePicker(true);
    setShowForm(false);
  };

  return (
    <div>
      <div className="bg-gradient-to-l from-cyan-400 from-20% via-sky-400 via-30% to-blue-600 to-80% w-full h-96 flex justify-center items-center relative">
        <div className="absolute top-24 flex ">
          <div className="flex flex-col lg:flex-row bg-white drop-shadow-2xl mx-4 lg:mx-28 xl:mx-48 rounded-xl w-full py-6 px-3 lg:px-12 mb-40">
            <div className="w-full lg:w-2/5 mx-4">
              <p className="text-3xl font-bold text-center mt-8">
                Free Consultation
              </p>
              <div className="h-0.5 w-20 flex mx-auto bg-gradient-to-r from-cyan-300 to-blue-500 my-4" />
              <p className="text-base text-gray-500 text-center">
                A member of our team will discuss with you on how we can build a
                solution together.
              </p>
              <div className="flex justify-center mt-10">
                <img
                  src={consultation}
                  className="w-80 h-80 object-contain"
                  alt="Consultation"
                />
              </div>
              <div className="my-8">
                <p className="flex gap-4 my-3 text-gray-500 font-semibold">
                  <MdAccessTime size={20} className="self-center" />
                  Selected Date: {selectedDate.format("MMMM D, YYYY")}
                </p>
                <p className="flex gap-4 my-3 text-gray-500 font-semibold">
                  <FaRegCalendar size={20} className="self-center" />
                  Selected Time: {selectedTime.format("h:mm A")}
                </p>
              </div>
            </div>
            <div className="w-0.5 h-full bg-gray-100" />
            <div className="w-full lg:w-1/2 mx-auto">
              {showDateTimePicker &&
                <div className="flex flex-col">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                    <div className="my-2">Select Time</div>
                    <MobileTimePicker
                      value={selectedTime}
                      onChange={handleTimeChange}
                    />
                  </LocalizationProvider>
                </div>}
              {showForm &&
                <div className="w-full mx-auto">
                  <div>
                    <div
                      className="bg-blue-500 w-10 text-white rounded-full p-3 drop-shadow-lg cursor-pointer hover:opacity-70"
                      onClick={handleBackClick}
                    >
                      <FaArrowLeft />
                    </div>
                    <div className="w-11/12 mx-auto">
                      <div className="w-full">
                        <h1 className="mb-1 dark:text-gray-200 mt-4">Name</h1>
                        <input
                          type="text"
                          id="name"
                          className="form-control-1 w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
                        />
                      </div>
                      <div className="w-full">
                        <h1 className="mb-1 dark:text-gray-200">Email</h1>
                        <input
                          type="email"
                          id="email"
                          className="form-control-1 w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
                        />
                      </div>
                      <div className="w-full">
                        <h1 className="mb-1 dark:text-gray-200">Phone</h1>
                        <input
                          type="email"
                          id="email"
                          className="form-control-1 w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
                        />
                      </div>
                      <div>
                        <h1 className="mb-1 dark:text-gray-200">Message</h1>
                        <textarea
                          id="message"
                          className="form-control-1 w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
                          rows="4"
                          placeholder="Tell us a little bit about your project..."
                        />
                      </div>
                    </div>
                  </div>
                </div>}
              <div className="flex justify-end my-8">
                {showForm
                  ? <button
                      className="flex gap-3 bg-primary rounded-md text-white py-2 px-3 cursor-pointer group w-28 hover:opacity-70"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                      <FaArrowRightLong className="self-center transition-transform group-hover:translate-x-2 translate-x-0" />
                    </button>
                  : <div
                      className="flex gap-3 bg-primary rounded-md text-white py-2 px-3 cursor-pointer group w-24 hover:opacity-70"
                      onClick={handleNextClick}
                    >
                      Next
                      <FaArrowRightLong className="self-center transition-transform group-hover:translate-x-2 translate-x-0" />
                    </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleConsultation;
