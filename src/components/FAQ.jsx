import React, { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="text-start border-b-2 border-secondary py-4 mb-6 max-sm:py-1">
      <div
        className=" py-4  w-full  flex justify-between items-center"
        onClick={() => setIsShown(!isShown)}
      >
        <p className="font-bold text-2xl max-sm:text-sm"> {question} </p>
        <img
          src="icons/arrow_down.svg"
          alt=""
          className={`w-8 h-8 max-sm:w-4 max-sm:h-4 transition-transform transform ${
            isShown ? "rotate-180" : ""
          }`}
        />
      </div>
      <div className={`${!isShown && "hidden "}`}>
        <p className="text-xl max-sm:text-sm mb-4"> {answer} </p>
      </div>
    </div>
  );
};

export default FAQ;
