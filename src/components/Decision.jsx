import React from "react";

const Decision = ({ decision, isLeft }) => {
  return (
    <div
      className={`${
        isLeft
          ? "rounded-r-[40px] rounded-tl-[40px] max-sm:rounded-r-[20px] max-sm:rounded-tl-[20px]"
          : "rounded-l-[40px] rounded-tr-[40px] max-sm:rounded-l-[20px] max-sm:rounded-tr-[20px]"
      } bg-[#292526] text-white pr-16 pl-8 py-8 max-sm:pr-8 max-sm:pl-4 max-sm:py-4 max-w-[500px] hover:bg-secondary transition `}
    >
      <p className="font-bold text-start text-xl max-sm:text-sm"> {decision} </p>
    </div>
  );
};

export default Decision;
