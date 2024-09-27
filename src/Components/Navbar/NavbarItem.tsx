import Link from "next/link";
import React from "react";
import { navtype } from "@/type/type";

type props = {
  items: navtype["links"];
};

function NavbarItem({ items }: props) {
  return (
    <>
      {items?.map((item) => (
        <Link
          href={item?.url}
          className="text-navlinks px-6 py-3.5 hover:text-white hover:drop-shadow-md hover:bg-lightcolor hover:rounded-lg"
        >
          {item?.label}
        </Link>
      ))}
    </>
  );
}

export default NavbarItem;
