import React from "react";
import Button from "./Button";

const InsightCard = () => {
  return (
    <div className="flex justify-start flex-col px-12 py-16 bg-[#292526] rounded-3xl gap-4 max-w-[600px] max-sm:p-8">
      <Button text="Secure" />
      <p className="text-start font-bold text-white capitalize text-3xl max-sm:text-xl">
        A predictive analytics platform for consumers digital identity
        verification
      </p>
      <button className="border-secondary border-[1px] rounded-xl max-w-[300px] ">
        <p className="uppercase text-white font-bold px-8 py-4 max-sm:text-[10px] max-sm:px-4 max-sm:py-3 text-start">
          Read case study
        </p>
      </button>
    </div>
  );
};

export default InsightCard;
