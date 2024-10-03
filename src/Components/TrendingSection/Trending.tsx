import React from "react";
import Card from "../Card/Card";
import Slider from "react-slick";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";

export default function Trending({ data }: any) {
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
          top: "-87px",
          right: "100px",
          left: "none",
          marginRight: "30px",
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
        style={{ ...style, color: "red", top: "-87px" }}
      >
        <IoMdArrowForward className="text-white text-2xl" />
      </div>
    );
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mt-[180px]">
      <h2 className="mb-16">New Release Shows</h2>
      <div id="slider-icon">
        <Slider {...settings}>
          {data?.map((item: any, i: any) => (
            <Card
              img={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              title={item.release_date}
              key={i}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
