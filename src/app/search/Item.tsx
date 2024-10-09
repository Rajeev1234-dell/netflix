import ImgComp from "@/Components/ImageComponent/ImgComp";
import React from "react";

type imgprops = {
  img: string;
};

function Item({ img }: imgprops) {
  return (
    <div className="p-[30px] border-icons border-[1px] rounded-lg bg-primary cursor-pointer">
      <div className="rounded-xl">
        <ImgComp alt="" src={img} />
      </div>
    </div>
  );
}

export default Item;
