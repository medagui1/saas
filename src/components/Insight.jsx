import React from "react";

const Insight = ({ image, content }) => {
  return (
    <div
      className="lg:min-h-[600px]  w-full bg-cover py-40 px-8 mt-20 max-sm:mt-4 max-sm:p-4"
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundPositionX: "right" }}
    >
      {content}
    </div>
  );
};

export default Insight;
