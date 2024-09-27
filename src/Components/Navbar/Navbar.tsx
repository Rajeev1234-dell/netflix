import React from "react";
import { navtype } from "@/type/type";
import ImgComp from "../ImageComponent/ImgComp";
import NavbarItem from "./NavbarItem";

type props = {
  navdata: navtype;
};

function Navbar({ navdata }: props) {
  const { logo, links, icons } = navdata;

  return (
    <nav className="container py-[1.875rem] flex justify-between items-center ">
      <div className="w-[198px] h-auto cursor-pointer">
        <ImgComp src={logo?.src} alt={logo?.alt} />
      </div>
      <div className="hidden border-2 border-light rounded-xl lg:flex p-2.5">
        <NavbarItem items={links} />
      </div>
      <div className="cursor-pointer flex sm:gap-[30px] gap-2.5">
        {icons?.map((icon) => (
          <div className="w-[34px] h-auto">
            <ImgComp src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

