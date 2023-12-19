import React from "react";

const Insight = ({ image, content }) => {
  return (
    <div
      className="lg:min-h-[600px] max-sm:min-h-[400px] w-full bg-cover py-40 px-16 mt-20 max-sm:mt-4 max-sm:p-4 flex max-sm:justify-center items-center"
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundPositionX: "right" }}
    >
      {content}
    </div>
  );
};

export default Insight;
