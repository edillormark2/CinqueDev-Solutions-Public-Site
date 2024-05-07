import React from "react";

const About = () => {
  return (
    <div className="my-8 md:my-16 mx-6 md:mx-10 lg:mx-20 xl:mx-36">
      <div className="flex flex-col xl:flex-row justify-center mx-auto">
        <div className="w-full xl:w-1/2 mr-0 md:mr-24">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mt-10">
            Discover
          </h1>
          <h1 className="text-2xl md:text-5xl font-bold text-gray-800 hover:text-primary">
            CinqueDev Solutions
          </h1>
          <div className="mt-8">
            <p className="text-base md:text-lg font-semibold text-gray-600">
              We're here to change how businesses and people use technology. Our
              goal is simple. to give you smart solutions that help you grow and
              make life better with technology.
            </p>
            <p className="mt-8 text-base md:text-lg font-semibold text-gray-600">
              We understand everyone's needs, whether you're a small business or
              a big company. Our solutions are flexible and affordable, so you
              can stay ahead in today's tough market. And we promise to give you
              great results that really make a difference.
            </p>
            <p className="mt-8 text-basemd:text-lg font-semibold text-gray-600">
              Our mission? To give you solutions that make your business better
              and make life easier for everyone. In short, at CinqueDev
              Solutions, we're not just developers, we're problem solvers who
              use technology to make things better for you.
            </p>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="w-full">
            <iframe
              className="drop-shadow-xl rounded-xl w-full h-80 md:h-96 mt-20 "
              src="https://www.youtube.com/embed/TkrqfPkvy88?si=3GHywfO4g3vqUWu3"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
