import React, { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="text-start border-b-2 border-secondary py-4 mb-6">
      <div className=" py-4 w-full  flex justify-between items-center">
        <p className="font-bold text-2xl "> {question} </p>
        <img
          src="icons/arrow_down.svg"
          alt=""
          className={`w-8 h-8 transition-transform transform ${
            isShown ? "rotate-180" : ""
          }`}
          onClick={() => setIsShown(!isShown)}
        />
      </div>
      <div className={`${!isShown && "hidden"}`}>
        <p className="text-xl"> {answer} </p>
      </div>
    </div>
  );
};

export default FAQ;
