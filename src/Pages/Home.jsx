import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";

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
    <div className="w-screen flex flex-col gap-12">
      <div className="w-screen h-[40%]  ">
        <Navbar />
      </div>
      <div
        className="w-[80%] mx-auto mt-12 floating"
        style={{
          transform: `translate(${position.x * 0.02}px, ${position.y * 0.02}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;