import React from "react";
import homepage from "../assets/homepage.png";

const Home = () => {
  return (
    <div className="my-20 mx-40">
      <div className="flex flex-col md:flex-row w-full gap-20">
        <div className="w-1/2 mt-32">
          <p className="text-6xl font-bold my-4">
            Empowering innovation, crafting solutions
          </p>
          <div className="h-0.5 w-32 bg-gradient-to-r from-cyan-300 to-blue-500 my-8" />
          <p className="text-xl font-semibold text-gray-600">
            We can help you build and develop websites, web apps, mobile apps,
            desktop apps, and more.
          </p>
          <div className="flex mt-10 gap-4">
            <div
              className={`flex items-center font-semibold cursor-pointer w-68 bg-gradient-to-r from-cyan-300 to-blue-500 hover:opacity-70 text-white py-2 px-4 rounded-full dark:text-black`}
            >
              Schedule a Free Consultation
            </div>
            <div className="py-2 px-4 bg-white rounded-full drop-shadow-lg cursor-pointer hover:bg-blue-50 border hover:border-gray-300 font-semibold text-gray-500">
              Read more
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={homepage} className="w-auto h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
