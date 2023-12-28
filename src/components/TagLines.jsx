import React from "react";
import { taglines } from "../constants";
import Button from "./Button";
import { animate } from "../constants/animate";

const TagLines = () => {
  return (
    <>
      <div className="flex w-full justify-between max-lg:justify-center items-center px-24 my-12 flex-wrap max-lg:px-4 max-lg:gap-8 lg:px-[450px] ">
        {taglines.map((tagline, index) => (
          <div className="flex gap-2 items-center" key={tagline} data-aos={animate(index)}>
            <img src="icons/tagline_icon.png" alt="" />
            <p className="font-bold text-xl max-sm:text-sm"> {tagline} </p>
          </div>
        ))}
      </div>
      <Button text='Start your risk free trial' data_aos='fade-down'/>
    </>
  );
};

export default TagLines;
