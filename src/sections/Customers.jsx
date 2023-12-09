import React from "react";
import { clients } from "../constants";

const Customers = () => {
  return (
    <section className="bg-[#292526] py-24 px-32 text-white font-bold text-5xl capitalize top-[-25px] relative">
      <h2 className="mb-12">
        We helped our customers raise{" "}
        <span className="text-secondary">$1B+</span>
      </h2>
      <div className="flex items-center justify-center px-40">
        {clients.map((client, index) => (
          <img src={client.image} alt={client.name} key={client.name} className={`${index !== clients.length - 1 && 'border-r-secondary border-r-2 px-12'}`}/>
        ))}
      </div>
    </section>
  );
};

export default Customers;
