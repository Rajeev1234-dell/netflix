"use client";
import React from "react";
import ImgComp from "../ImageComponent/ImgComp";

function Card({ img, title }: any) {

  return (
    <div
      className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] h-auto p-[30px] border-icons border-[1px] rounded-lg bg-primary"
    >
      <div className="rounded-xl">
        <ImgComp alt="" src={img} />
      </div>
      <div className="rounded-[50px] mt-5 bg-black py-[6px] px-[10px]">
        <p className="text-center text-base text-gray font-medium">
          {"Released at " + title}
        </p>
      </div>
    </div>
  );
}

export default Card;
