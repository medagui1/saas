import React from "react";
import { selling_points } from "../constants";
import SellingPoint from "../components/SellingPoint";

const SellingPoints = () => {
  return (
    <section className="py-24 px-32 max-lg:px-4 max-sm:py-4 max-lg:py-16 flex flex-col justify-center items-center">
      <h2 className="text-5xl max-sm:text-2xl font-bold capitalize  mb-8 max-sm:mb-4 max-lg:mb-6">
        A diverse team of <span className="text-secondary">passionate</span> UX
        nerds who are here to help your{" "}
        <span className="text-secondary">startup succeed</span>
      </h2>
      <p className="max-w-[800px] max-sm:my-4">
        From ideation to expansion, TDP understands the unique demands of your
        startup—providing you with optimized design strategies and fast
        turnarounds for an affordable monthly subscription.
      </p>
      <div className="flex gap-16 flex-wrap justify-center items-start my-12  w-full">
        {selling_points.map(point => (
            <SellingPoint key={point.title} image={point.image} title={point.title} description={point.description}/>
        ))}
      </div>
    </section>
  );
};

export default SellingPoints;
