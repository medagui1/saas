import React from "react";

const PromotionCard = ({ id, image, title, description, data_aos }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[350px]" data-aos={data_aos}>
      <div className="flex justify-center items-center bg-secondary w-16 h-16 rounded-full">
        <p className="text-3xl text-white font-bold"> {id} </p>
      </div>
      <div className="max-w-[250px] my-4">
        <p className="text-secondary font-semibold capitalize text-xl leading-[24px] ">
          {" "}
          {title}{" "}
        </p>
      </div>
      <img src={image} alt={title} className="h-[163px] "/>
      <p className="mt-4"> {description} </p>
    </div>
  );
};

export default PromotionCard;
