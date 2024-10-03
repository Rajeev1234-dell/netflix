"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Button from "@/Components/Button/Button";
import { abc, herotype } from "@/type/type";
import ImgComp from "../ImageComponent/ImgComp";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";

type heroprops = {
  data: herotype[];
  hero_icons: abc;
};

function Hero({ data, hero_icons }: heroprops) {
  console.log(hero_icons);
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <IoArrowBackSharp className="text-white text-2xl" />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, color: "red" }}
      >
        <IoMdArrowForward className="text-white text-2xl" />
      </div>
    );
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,
  };

  const { icons } = hero_icons;

  return (
    <>
      <div className="container mt-[50px] overflow-hidden">
        <Slider {...settings}>
          {data?.map((item: any, index: any) => (
            <div key={index}>
              <div
                style={{
                  backgroundImage: `linear-gradient(to top, #000, transparent), url("https://image.tmdb.org/t/p/original${item?.backdrop_path}")`,
                }}
                className="w-full h-[835px] bg-cover bg-center flex flex-col justify-end pb-[126px]  
              "
              >
                <h2 className="text-center">{item?.original_title}</h2>
                <p className="text-center mx-auto sm:max-w-[1000px]">
                  {item?.overview}
                </p>
                <div className="flex flex-col sm:flex-row justify-center mt-[30px] gap-6 sm:gap-x-5 ">
                  <Button label="Play Now" />
                { icons && icons.length > 0 && <div className="flex sm:gap-[10px] justify-evenly">
                    {icons?.map((icon: any) => (
                      <>
                        <div className="bg-black w-[56px] h-[56px] p-3.5 cursor-pointer rounded-lg">
                          <ImgComp alt={icon.src} src={icon.src} />
                        </div>
                      </>
                    ))}
                  </div>}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Hero;
