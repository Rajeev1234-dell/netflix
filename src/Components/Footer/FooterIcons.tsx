import { footertype, herotype } from "@/type/type";
import React from "react";
import ImgComp from "../ImageComponent/ImgComp";

type props = {
  icons: footertype["social_icons"];
};

function FooterIcons({ icons }: props) {
  return (
    <div className="flex gap-[14px]">
      {icons?.map((icon) => (
        <div className="w-[56px] h-[56px] mt-[14px] cursor-pointer">
          <ImgComp alt="" src={icon.img} />
        </div>
      ))}
    </div>
  );
}

export default FooterIcons;
