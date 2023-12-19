import React from "react";

const PlanCard = ({ plan, planInterval, middle }) => {
  console.log(plan.price[`${planInterval}`]);
  console.log(planInterval.duration);
  return (
    <div className={` rounded-xl border-[1px] py-16 px-12 w-[500px] max-sm:max-w-[300px] max-sm:py-6 max-sm:px-4 relative ${middle ? "border-[#292526]  bg-secondary text-white" : "border-secondary"}`}>
      <h4 className="font-bold text-2xl mb-2"> {plan.name} </h4>
      <p> {plan.description} </p>
      <h5 className={`${middle ? 'text-[#292526]' : 'text-secondary'} font-bold text-4xl mt-12 mb-2`}>
        {" "}
        {plan.price[`${planInterval.time}`]}{" "}
      </h5>
      <p className={`${middle ? 'text-[#292526] ' : 'text-secondary'}  font-bold uppercase`}>
        {" "}
        {planInterval.duration}{" "}
      </p>
      <hr className="h-[2px] bg-secondary my-8 mx-12 " />
      <h3 className="font-bold uppercase text-start text-sm mb-2">
        What's included:{" "}
      </h3>
      <div className="ml-8 flex flex-col gap-2 ">
        {plan.including.map((including) => (
          <p key={including} className="text-start text-sm">
            {" "}
            {including}{" "}
          </p>
        ))}
      </div>
      <h3 className="font-bold uppercase text-start text-sm mb-2 mt-32 max-sm:mt-8">
        Design team{" "}
      </h3>
      <div className="ml-8 flex flex-col gap-2 mb-32">
        {plan.design_team.map((team) => (
          <p key={team} className="text-start text-sm">
            {" "}
            {team}{" "}
          </p>
        ))}
      </div>
      <button className={`${middle ? "border-white" : "border-[#292526] "} rounded-xl  border-2 px-20 max-sm:px-12 py-2 mb-8  uppercase flex gap-4 justify-center items-center absolute bottom-0 left-0 right-0  m-auto max-sm:mx-9 `}>
        <p className="font-bold text-sm">Try free </p>
        <p className="text-4xl font-bold">&#x2192;</p>
      </button>
    </div>
  );
};

export default PlanCard;
