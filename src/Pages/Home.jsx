import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import First from "../Demos/First";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden  flex flex-col gap-8 overflow-x-auto">
      <div className="w-full h-[40%]  ">
        <Navbar />
      </div>
      <div
        className="w-[80%] mx-auto mt-12 floating"
        style={{
          transform: `translate(${position.x * 0.02}px, ${
            position.y * 0.02
          }px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <HeroSection />
        <div className=" p-4 my-12 text-center">
          <p className="text-4xl font-semibold">Component Demos</p>
          <p className="text-sm text-gray-600">
            Here are some of the components that you can use to build your
            Website.
          </p>
          <First/>
        </div>
      </div>
    </div>
  );
};

export default Home;
