import React, { useState } from "react";
import PlanIntervals from "../components/PlanIntervals";
import { plan_time_intervals, plans } from "../constants";
import PlanCard from "../components/PlanCard";
import ContactUs from "../components/ContactUs";

const Plans = () => {
  const [planInterval, setPlanInterval] = useState(plan_time_intervals[0]);

  return (
    <section className="w-full flex flex-col justify-center items-center py-32 max-sm:py-8">
      <PlanIntervals plan={planInterval} setPlan={setPlanInterval} />
      <div className="flex gap-8 my-24 flex-wrap mx-20 items-stretch justify-center">
        {plans.map((plan, index) => (
            
          <PlanCard plan={plan} key={plan.name} planInterval={planInterval} middle={index === 1 ? true : false} />
        ))}
      </div>
      <ContactUs />
    </section>
  );
};

export default Plans;
