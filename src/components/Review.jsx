import React from "react";

const Review = ({ name, image, review, role }) => {
  return (
    <div className="max-w-[1000px] text-white" data-aos='fade-down'>
      <div className="relative">
        <p className="absolute top-0 left-0 text-secondary text-[160px] font-bold mt-[-100px] ml-[-20px] max-sm:text-[60px] max-sm:mt-[-30px] max-sm:ml-[-16px]">“</p>
        <p className="text-4xl text-white font-bold max-sm:text-xl"> {review} </p>
        <p className="absolute bottom-0 right-0 text-secondary text-[160px] font-bold mb-[-160px] max-sm:text-[60px] max-sm:mb-[-50px] ">”</p>
      </div>
      <div className="flex gap-8 justify-center items-center mt-12 max-sm:gap-4 max-sm:mt-8">
        <div className="rounded-full">
          <img src={image} alt={name} className="rounded-full" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-secondary font-bold text-2xl max-sm:text-xl"> {name} </p>
          <p className="max-sm:text-sm"> {role} </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
