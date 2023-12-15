import React from "react";
import { plan_time_intervals } from "../constants";

const PlanIntervals = ({ plan, setPlan }) => {
  return (
    <div className="flex max-sm:text-sm max-sm:flex-col">
      {plan_time_intervals.map((planInterval, index) => (
        <div key={planInterval.time} className="">
          {planInterval.saving ? <p className="text-secondary font-bold uppercase text-sm mb-2"> {planInterval.saving} </p> : <p className="invisible mb-2 text-sm font-bold">Hidden Text</p>}
          <button
            onClick={() => {
              setPlan(plan_time_intervals[index]);
              console.log("the plan has changed to ", index);
            }}
            className={` border-secondary border-[1px] px-8 py-2 font-bold ${
              index === 0 && "rounded-l-xl"
            } ${index === plan_time_intervals.length - 1 && "rounded-r-xl"} ${
              planInterval === plan && "bg-black text-white border-black"
            }`}
          >
            <p className="uppercase"> {planInterval.time} </p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default PlanIntervals;
