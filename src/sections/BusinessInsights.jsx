import React from "react";
import InsightCard from "../components/InsightCard";
import Insight from "../components/Insight";
import { reviews } from "../constants";
import Review from "../components/Review";
import Button from "../components/Button";


export const insights = [
  {
    image : 'images/insight_1.webp',
    content : <InsightCard />
  },
  {
    image : 'images/insight_2.webp',
  },
  {
    image : 'images/insight_3.webp',
  },
]

const BusinessInsights = () => {
  return (
    <section className="bg-[#292526] py-24 px-32 max-lg:px-4 max-sm:py-4 max-lg:py-16 flex flex-col justify-center items-center">
      <h2 className="text-5xl max-sm:text-2xl font-bold capitalize  mb-8 max-sm:mb-4 max-lg:mb-6 text-white lg:mx-24">
        How <span className="text-secondary">accessible</span> UX design is
        changing the <span className="text-secondary">businesses</span> for the
        better
      </h2>
      {insights.map((insight, index) => (
        <Insight key={index} {...insight}/>
      ))}

      {/* <InsightCard /> */}
      <div className="my-20 max-sm:my-12">
        {reviews.map((review, index) => (
          <Review key={index} {...review}/>
        ))}
      </div>
      <Button text='See our case studies'/>
    </section>
  );
};

export default BusinessInsights;
