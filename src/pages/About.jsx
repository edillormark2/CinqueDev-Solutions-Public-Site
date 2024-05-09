import React, { useState, useEffect } from "react";

const About = () => {
  const [videoHeight, setVideoHeight] = useState(450);
  useEffect(() => {
    const handleResize = () => {
      setVideoHeight(window.innerWidth < 640 ? 350 : 450);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="my-8 md:my-16 mx-6 md:mx-10 lg:mx-16 xl:mx-20 2xl:mx-36">
      <div className="flex flex-col xl:flex-row justify-center">
        <div className="w-full xl:w-1/2 mr-0 md:mr-20">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mt-10">
            Discover
          </h1>
          <h1 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 hover:text-primary">
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
        <div className="w-full xl:w-2/3">
          <iframe
            className="drop-shadow-xl rounded-xl w-full aspect-video mt-16 md:mt-24"
            height={videoHeight}
            src="https://www.youtube.com/embed/TkrqfPkvy88?si=3GHywfO4g3vqUWu3"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>
      <div className="w-full flex justify-center mt-16">
        <div>
          <div className="text-4xl font-semibold text-gray-800">
            Meet our dedicated team
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
