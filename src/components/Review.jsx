import React from "react";

const Review = ({ name, image, review, role }) => {
  return (
    <div className="max-w-[1000px] text-white">
      <div>
        <p className="text-4xl text-white font-bold"> {review} </p>
      </div>
      <div className="flex gap-8 justify-center items-center mt-12">
        <div className="rounded-full">
          <img src={image} alt={name} className="rounded-full" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-secondary font-bold text-2xl"> {name} </p>
          <p> {role} </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
