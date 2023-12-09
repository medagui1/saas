import React from "react";
import { taglines } from "../constants";
import Button from "./Button";

const TagLines = () => {
  return (
    <>
      <div className="flex w-full justify-center gap-20 items-center px-24 my-12 ">
        {taglines.map((tagline) => (
          <div className="flex gap-2 items-center" key={tagline}>
            <img src="icons/tagline_icon.png" alt="" />
            <p className="font-bold text-xl"> {tagline} </p>
          </div>
        ))}
      </div>
      <Button text='Start your risk free trial'/>
    </>
  );
};

export default TagLines;
