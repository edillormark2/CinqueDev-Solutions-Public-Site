import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Divider from "@mui/material/Divider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "@mui/material";

const BuySoftwarePopup = props => {
  const { openCreatePopup, setOpenCreatePopup } = props;

  const handleClosePopup = () => {
    setOpenCreatePopup(false);
  };

  const handleSubmit = () => {
    toast.success(
      "Your inquiry has been successfully submitted. We will respond to your email or phone within 8 hours."
    );
    setOpenCreatePopup(false);
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  const dynamicPopupStyle = {
    position: "absolute",
    top: isMobile ? "53%" : "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    p: isMobile ? 2 : 4,
    width: "auto",
    width: "min(90%, 600px)",
    maxHeight: isMobile ? "90vh" : "calc(100vh - 100px)"
  };

  return (
    <div>
      <Modal open={openCreatePopup} onClose={handleClosePopup}>
        <Box
          className="bg-white rounded-xl"
          sx={dynamicPopupStyle}
          style={
            isMobile || window.innerWidth <= window.innerHeight * 2
              ? dynamicPopupStyle
              : null
          }
        >
          <div className="flex justify-between">
            <ModalClose
              variant="outlined"
              onClick={() => setOpenCreatePopup(false)}
            />
            <div className="flex justify-center mx-auto text-lg font-semibold mb-2 text-center mt-8 md:mt-0">
              Get This Software Now!
            </div>
          </div>
          <Divider />
          <div className="mx-0 md:mx-auto text-xs md:text-sm text-gray-500 text-center my-2 md:my-4">
            Let's get you started! Fill in the form below with your contact
            details, and our team will reach out to assist you further.
          </div>
          <div className="mt-4">
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex w-full gap-2">
                  <div className="w-1/2">
                    <p className="text-xs md:text-sm font-semibold mb-2">
                      Full Name
                    </p>
                    <input
                      type="text"
                      placeholder=""
                      id="full-name"
                      autoComplete="off"
                      className="w-full form-control bg-white p-2 sm:p-3 rounded-lg border border-gray-300 text-sm sm:text-base"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="text-xs md:text-sm font-semibold mb-2">
                      Email
                    </p>
                    <input
                      type="text"
                      placeholder=""
                      id="email"
                      autoComplete="off"
                      className="w-full form-control bg-white p-2 sm:p-3 rounded-lg border border-gray-300 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-2">
                  <div className="w-1/2">
                    <p className="text-xs md:text-sm font-semibold mb-2">
                      Company Name
                    </p>
                    <input
                      type="text"
                      placeholder=""
                      id="company-name"
                      autoComplete="off"
                      className="w-full form-control bg-white p-2 sm:p-3 rounded-lg border border-gray-300 text-sm sm:text-base"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="text-xs md:text-sm font-semibold mb-2">
                      Phone
                    </p>
                    <input
                      type="text"
                      placeholder=""
                      id="phone"
                      autoComplete="off"
                      className="w-full form-control bg-white p-2 sm:p-3 rounded-lg border border-gray-300 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <p className="text-xs md:text-sm font-semibold">Message</p>
                <textarea
                  placeholder=""
                  autoComplete="off"
                  className="form-control bg-white p-3 rounded-lg border border-gray-300 text-sm sm:text-base overflow-scroll"
                  rows="2"
                  style={{
                    minHeight: "4rem",
                    maxHeight: isMobile ? "18rem" : "26rem"
                  }}
                />
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    className="bg-primary w-full text-white p-3 rounded-lg hover:opacity-85 disabled:opacity-80 text-sm sm:text-base"
                    onClick={handleSubmit}
                  >
                    Submit Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default BuySoftwarePopup;
