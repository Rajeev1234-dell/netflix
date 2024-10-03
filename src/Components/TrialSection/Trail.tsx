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
      className="container mt-[109px] mb-[100px] py-[100px] px-[80px] flex justify-between items-center rounded-lg"
      style={{ background: `url(${trialdata.bgImage})` }}
    >
      <div>
        <h2>{trialdata.title}</h2>
        <p>{trialdata.desc}</p>
      </div>
      <Button label={trialdata.btn.label} />
    </section>
  );
}

export default Trail;
