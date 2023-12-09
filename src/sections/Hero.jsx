import React from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import TagLines from "../components/TagLines";

const Hero = () => {
  return (
    <section className="px-60 pt-12 bg-[#E0EAF3] ">
      <NavBar />
      <Title />
      <TagLines />
      <div className="w-full flex justify-center items-center relative top-[-15px]">
        <img src="images/hero.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
