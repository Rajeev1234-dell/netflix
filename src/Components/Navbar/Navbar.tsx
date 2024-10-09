"use client";
import React, { useState } from "react";
import { navtype } from "@/type/type";
import ImgComp from "../ImageComponent/ImgComp";
import NavbarItem from "./NavbarItem";
import { useRouter } from "next/navigation";
import { searchData } from "@/Services/Service";

type props = {
  navdata: navtype;
};

function Navbar({ navdata }: props) {
  const [data, setData] = useState("");
  const { logo, links, icons } = navdata;
  const router = useRouter();

  const handlePrint = async () => {
    router.push(`/search?query=${data}`);
    setData("");
  };

  return (
    <nav className="container py-[1.875rem] flex justify-between items-center ">
      <div className="w-[198px] h-auto cursor-pointer">
        <ImgComp src={logo?.src} alt={logo?.alt} />
      </div>
      <div className="hidden border-2 border-light rounded-xl lg:flex p-2.5">
        <NavbarItem items={links} />
      </div>
      <div className="cursor-pointer flex sm:gap-[30px] gap-2.5">
        <input
          onChange={(event) => setData(event.target.value)}
          value={data}
          type="text"
          placeholder="Search Movie"
          className="rounded-full px-5 border-none outline-none"
        />
        {icons?.map((icon, index) => (
          <div className="w-[34px] h-auto" onClick={handlePrint} key={index}>
            <ImgComp src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
