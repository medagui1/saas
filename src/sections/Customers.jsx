import React from "react";
import { clients } from "../constants";

const Customers = () => {

  const transition = (index) => {
    if (index === 0) {
      return "fade-down-right";
    } else if (index % 4 === 1) {
      return "fade-down";
    } else if (index % 4 === 2) {
      return "fade-down";
    } else if (index % 4 === 3) {
      return "fade-down-left";
    } else if (index % 4 === 0) {
      return "fade-down-right";
    } else {
      return "fade-down-left";
    }
  };

  return (
    <section className="bg-[#292526] py-24 px-32 text-white font-bold text-5xl capitalize top-[-25px] relative max-lg:px-4 max-sm:py-4 max-lg:py-16 max-sm:text-2xl">
      <h2 className="mb-12 max-sm:mb-4 max-lg:mb-6" data-aos='fade-down'>
        We helped our customers raise{" "}
        <span className="text-secondary">$1B+</span>
      </h2>
      <div className="flex items-center justify-center px-12 flex-wrap w-full max-sm:px-4">
        {clients.map((client, index) => (
          <img
          data-aos={transition(index)}
            src={client.image}
            alt={client.name}
            key={client.name}
            className={`${
              index !== clients.length - 1 &&
              "lg:border-r-secondary lg:border-r-2 lg:px-12"
            } max-sm:w-[122px] `}
          />
        ))}
      </div>
    </section>
  );
};

export default Customers;
