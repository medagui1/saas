import React from "react";
import SellingPoint from "../components/SellingPoint";
import PromotionCard from "../components/PromotionCard";
import { promotions } from "../constants";
// import { promotions, selling_points } from "../constants";

const Promotion = () => {
  return (
    <section className="py-24 px-32 max-lg:px-4 max-sm:py-4 max-lg:py-16 flex flex-col justify-center items-center">
      <h2 className="text-5xl max-sm:text-2xl font-bold capitalize  mb-8 max-sm:mb-4 max-lg:mb-6">
        How <span className="text-secondary"> signing up </span>
        with the design project <span className="text-secondary">works</span>!?
      </h2>
      <p className="max-w-[1000px] max-sm:my-4">
        Take a minute to imagine how you’d feel watching your user count grow,
        and retention rates stay consistently high. When you prioritize
        effective UX, better retention and growth are natural consequences.
        Backed by countless hours of research and testing, TDP blends UX, UI,
        and Product design into a deliciously smooth process that fuels
        productivity and success.
      </p>
      <div className="flex gap-24 max-sm:gap-12 flex-wrap justify-center items-start my-12  w-full">
        {promotions.map((promotion) => (
          <PromotionCard
            key={promotion.id}
            image={promotion.image}
            title={promotion.title}
            description={promotion.description}
            id={promotion.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Promotion;
