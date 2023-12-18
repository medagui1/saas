import React from "react";
import Insight from "../components/Insight";
import Review from "../components/Review";
import { decision_making_list, reviews, selling_points } from "../constants";
import { insights } from "./BusinessInsights";
import Button from "../components/Button";
import SellingPoint from "../components/SellingPoint";
import Decision from "../components/Decision";

const DecisionMaking = () => {
  return (
    <section className="py-8 px-32 max-lg:px-4 max-sm:py-4 max-lg:py-16 flex flex-col justify-center items-center">
      <h2 className="text-5xl max-sm:text-2xl font-bold capitalize  mb-20 max-sm:mb-4 max-lg:mb-6">
        How to know if <span className="text-secondary">ADP</span> if right for your {" "}
        <span className="text-secondary">startup</span>
      </h2>
      <div className="flex flex-wrap gap-16 mx-20 justify-center items-start max-sm:mx-4 max-sm:gap-4 max-lg:gap-8">
        {decision_making_list.map((decision, index) => (
            <Decision key={decision} decision={decision} isLeft={index % 2 === 0 ? true : false}/>
        ))}
      </div>
    </section>
  );
};

export default DecisionMaking;
