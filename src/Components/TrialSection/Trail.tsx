import { trialtype } from "@/type/type";
import { url } from "inspector";
import React from "react";
import Button from "../Button/Button";

type props = {
  trialdata: trialtype;
};

function Trail({ trialdata }: props) {
  return (
    <section
      className="container mt-[109px] xl:py-[100px] xl:px-[80px] md:flex justify-between items-center rounded-lg"
      style={{ background: `url(${trialdata.bgImage})` }}
    >
      <div>
        <h2>{trialdata.title}</h2>
        <p className="md:max-w-[511px] lg:max-w-[100%]  ">{trialdata.desc}</p>
      </div>
      <div className="whitespace-nowrap">
        <Button label={trialdata.btn.label} />
      </div>
    </section>
  );
}

export default Trail;
