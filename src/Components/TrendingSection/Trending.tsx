import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Slider from "react-slick";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Trending({ data, setData }: any) {
  const router = useRouter();

  const handleEvent = (index: string) => {
    console.log(index);
    router.push(`movie/${index}`);
  };

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          ...style,
          position: "absolute",
          color: "red",
          left: "initial",
        }}
      >
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

  // console.log("API Data", data);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          textAlign: "left",
          bottom: "initial",
          width: "0px",
          display: "inline-block",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{
          color: "red",
          fontSize: "30px",
        }}
      >
        _
      </div>
    ),
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="container mt-[180px]">
      <h2 className="mb-16">New Release Shows</h2>
      <div id="slider-icon " className="trending">
        <Slider {...settings}>
          {data?.map((item: any, index: any) => (
            <div
              key={index}
              onClick={() => handleEvent(item.id)}
              className="cursor-pointer"
            >
              <Card
                img={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                title={item.release_date}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
