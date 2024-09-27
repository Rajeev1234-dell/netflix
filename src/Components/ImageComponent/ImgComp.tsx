import Image from "next/image";
import React from "react";

type imgprops = {
  src: string;
  alt: string;
};

function ImgComp({ src, alt }: imgprops) {
  return <Image src={src} width={100} height={100} alt={alt} unoptimized />;
}

export default ImgComp;
