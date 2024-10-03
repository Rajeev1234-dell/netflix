import { footertype } from "@/type/type";
import Link from "next/link";
import React from "react";
import ImgComp from "../ImageComponent/ImgComp";
import FooterItem from "./FooterItem";
import FooterIcons from "./FooterIcons";

type props = {
  footerdata: footertype;
};

function Footer({ footerdata }: props) {
  return (
    <footer className="container mt-[250px] mb-10">
      <div className="flex flex-col lg:flex-row justify-between sm:gap-x-[150px] gap-[40px] border-2 border-b-gray pb-[100px] border-t-0 border-l-0 border-r-0">
        <div className="flex w-full sm:justify-between flex-wrap sm:flex-nowrap sm:gap-0 gap-[45px]">
          <FooterItem items={footerdata?.options_links} />
        </div>
        <div className="">
          <p className="text-white">{footerdata?.connect}</p>
          <FooterIcons icons={footerdata?.social_icons} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-5 md:gap-0 mt-[24px]">
        <p>{footerdata?.copy_right}</p>
        {footerdata.policies && (
          <div className="">
            <ul className="flex gap-x-10">
              {footerdata.policies?.map((item, index) => (
                <li
                  key={index}
                  className="text-gray hover:text-white hover:drop-shadow-2xl cursor-pointer"
                >
                  {item?.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
