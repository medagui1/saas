import React, { useState } from "react";
import FAQ from "../components/FAQ";
import { frequently_asked_question } from "../constants";

const FAQs = () => {


  return (
    <section className="py-8 px-32 max-lg:px-4 max-sm:py-4 max-lg:py-16 flex flex-col justify-center items-center mt-32">
      <h2 className="text-5xl max-sm:text-2xl font-bold capitalize  mb-20 max-sm:mb-4 max-lg:mb-6">
        Our most <span className="text-secondary">frequently</span> asked
        questions
      </h2>
      <div className="w-full px-40">
        {frequently_asked_question.map((question) => (
          <FAQ question={question.question} key={question.question} answer={question.answer}/>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
