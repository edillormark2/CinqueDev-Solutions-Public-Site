import React, { useRef } from "react";
import homepage from "../assets/homepage.png";
import codingillu from "../assets/codingillu.png";
import devteamillu from "../assets/devteamillu.png";
import Footer from "../components/Footer";

const Home = () => {
  const secondPartRef = useRef(null);

  const handleReadMoreClick = () => {
    if (secondPartRef.current) {
      secondPartRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Home page first part */}
      <div className="my-0 lg:my-20 mx-4 lg:mx-10 xl:mx-40">
        <div className="flex flex-col lg:flex-row w-full gap-10 xl:gap-20 mt-20 lg:mt-0">
          <div className="w-full lg:w-1/2 mt-4 md:mt-32">
            <p className="text-5xl sm:text-6xl text-center lg:text-start font-bold my-4">
              Empowering innovation, crafting solutions
            </p>
            <div className="h-0.5 w-32 flex mx-auto lg:mx-0 bg-gradient-to-r from-cyan-300 to-blue-500 my-8" />
            <p className="text-lg sm:text-xl text-center lg:text-start font-semibold text-gray-600">
              We can help you build and develop websites, web apps, mobile apps,
              desktop apps, and more.
            </p>
            <div className="flex flex-col md:flex-row justify-center lg:justify-start mt-10 gap-4">
              <div
                className={`mx-auto md:mx-0 flex items-center font-semibold cursor-pointer w-68 bg-gradient-to-r from-cyan-300 to-blue-500 hover:opacity-70 text-white py-2 px-4 rounded-full dark:text-black`}
              >
                Schedule a Free Consultation
              </div>
              <div
                className="mx-auto md:mx-0 max-w-32 py-2 px-4 bg-white rounded-full drop-shadow-lg cursor-pointer hover:bg-blue-50 font-semibold text-gray-500"
                onClick={handleReadMoreClick}
              >
                Read more
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={homepage}
              className="w-full h-1/2 lg:h-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* Home page second part */}
      <div ref={secondPartRef}>
        <div className="my-0 lg:my-20 mx-2 lg:mx-20">
          <div className="p-4 lg:p-8 xl:p-14 2xl:p-20 flex flex-col-reverse lg:flex-row gap-10">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="flex flex-col gap-16">
                <img
                  src={codingillu}
                  className="w-72 lg:w-72 h-60 lg:h-72 object-contain"
                />
                <div className="w-32 bg-blue-500 text-blue-800 bg-opacity-20 text-opacity-80 rounded-xl shadow-lg p-3 text-center mx-auto">
                  <p className="text-4xl font-bold">90%</p>
                  <p className="font-semibold">Success Score</p>
                </div>
              </div>
              <div className="flex flex-col gap-16">
                <div className="w-32 bg-blue-500 text-blue-800 bg-opacity-20 text-opacity-80 rounded-xl shadow-lg p-2 text-center mx-auto">
                  <p className="text-4xl font-bold">3+</p>
                  <p className="font-semibold">Years of Experience</p>
                </div>
                <img
                  src={devteamillu}
                  className="w-80 h-60 lg:h-72 drop-shadow-lg object-contain"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-3xl xl:text-4xl font-bold text-center lg:text-start">
                Why choose CinqueDev Solutions For Your Innovative Services?
              </p>
              <div className="h-0.5 w-24 flex mx-auto lg:mx-0 bg-gradient-to-r from-cyan-300 to-blue-500 my-6" />
              <p className="mr-0 xl:mr-20 text-center lg:text-justify my-4 text-lg text-gray-500">
                We, as a custom software and ready software development company
                process highly robust technological solutions for your business
                needs. The numbers here prove that we are a leading partner when
                it comes to shaping the future of technology in software
                development.
              </p>
              <div className="flex gap-4 mt-8 mb-0 lg:mb-36 justify-center lg:justify-start">
                <div className="bg-blue-500 text-blue-800 bg-opacity-10 text-opacity-80 rounded-lg drop-shadow-lg p-2">
                  <p className="text-2xl font-bold">120 +</p>
                  <p className="font-semibold">Projects Delivered</p>
                </div>
                <div className="bg-blue-500 text-blue-800 bg-opacity-10 text-opacity-80 rounded-lg drop-shadow-lg p-2">
                  <p className="text-2xl font-bold">100 +</p>
                  <p className="font-semibold">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
