import React from "react";
import { plan_time_intervals } from "../constants";

const PlanIntervals = ({ plan, setPlan }) => {
  return (
    <div className="flex max-sm:text-sm max-sm:flex-col max-sm:gap-2 ">
      {plan_time_intervals.map((planInterval, index) => (
        <div key={planInterval.time} className="flex flex-col max-sm:flex-row-reverse justify-between items-center">
          {planInterval.saving ? <p className="text-secondary font-bold uppercase text-sm mb-2"> {planInterval.saving} </p> : <p className="invisible mb-2 text-sm font-bold">Hidden Text</p>}
          <button
            onClick={() => {
              setPlan(plan_time_intervals[index]);
            }}
            className={` border-secondary border-[1px] sm:px-8 py-2 max-sm:w-[160px] font-bold max-sm:rounded-xl ${
              index === 0 && "rounded-l-xl max-sm:rounded-xl"
            } ${index === plan_time_intervals.length - 1 && "rounded-r-xl max-sm:rounded-xl"} ${
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
