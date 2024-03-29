import React from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import TagLines from "../components/TagLines";

const Hero = () => {
  return (
    <section className="pt-12  max-lg:px-8 max-sm:px-0 max-sm:pt-4">
      <NavBar />
      <Title />
      <TagLines />
      <div className="w-full flex justify-center items-center relative top-[-15px]">
        <img src="images/hero.webp" alt="" width={770} height={434}/>
      </div>
    </section>
  );
};

export default Hero;
