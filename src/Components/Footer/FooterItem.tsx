import { footertype } from "@/type/type";
import Link from "next/link";
import React from "react";

type props = {
  items: footertype["options_links"];
};

function FooterItem({ items }: props) {
  return (
    <div className="flex w-full sm:justify-between flex-wrap sm:flex-nowrap sm:gap-0 gap-[45px]">
      {items?.map((link, index) => (
        <div>
          <p className="text-white">{link.title}</p>
          <ul className="mt-[24px]">
            {link?.links?.map((link, index) => (
              <li className="mt-[14px]">
                <Link
                  href={link.url}
                  key={index}
                  className="text-gray block feellook"
                >
                  {link?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterItem;
