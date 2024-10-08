"use client";
import { getCastDirector, getSingle, getTrailer } from "@/Services/Service";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MovieData, castDirector } from "@/type/type";
import YouTube from "react-youtube";
import { FaPlay } from "react-icons/fa6";

type movieProps = MovieData | null;
type directorProps = castDirector | null;

function Page() {
  const [movieData, setMovieData] = useState<movieProps>(null);
  const [director, setDirector] = useState<directorProps>(null);
  const [popup, setPopup] = useState(false);
  const [trialer, setTrialer] = useState<any>(null);

  const params = useParams();

  const fetchData = async () => {
    try {
      if (params.id) {
        const res = await getSingle(params.id); // Fetch movie data based on ID
        setMovieData(res);
        console.log("Fetched Data", res);
      }
    } catch (error) {
      console.error("Error fetching movie data", error);
    }
  };

  //Movie Duration-------
  const duration = (runtime: number | undefined) => {
    if (!runtime) {
      return;
    }
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours} hours and ${minutes} minutes`;
  };

  const castDirector = async () => {
    try {
      if (params.id) {
        const res = await getCastDirector(params.id);
        setDirector(res);
        // console.log("Cast Director Data", res);
      }
    } catch (error) {
      console.error("Error fetching cast director data", error);
    }
  };

  const trailer = async () => {
    try {
      if (params.id) {
        const res = await getTrailer(params.id);
        // setDirector(res);
        setTrialer(res?.results);
        console.log("Trailer", res?.results);
      }
    } catch (error) {
      console.error("Error fetching trailer data", error);
    }
  };

  useEffect(() => {
    fetchData();
    castDirector();
    trailer();
  }, []);

  return (
    <div className="container mt-[50px]">
      <div className="flex flex-col lg:flex-row items-center gap-14">
        <div className="w-full rounded-lg h-[500px] relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}`}
            alt=""
            width={100}
            height={100}
            unoptimized
            className="rounded-lg h-full cursor-pointer"
          />
          <FaPlay
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-7xl text-white bg-transparent rounded-full p-4 cursor-pointer border-2 border-white shadow-2xl"
            onClick={() => setPopup(!popup)}
          />
        </div>
        <div className="w-full">
          <h2>{movieData?.title}</h2>
          <h4 className="text-navlinks mt-3">{movieData?.tagline}</h4>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-12 mt-4">
            <h4 className="text-navlinks">
              <span className="text-zinc-100 font-extrabold">Language : </span>
              {movieData?.original_language?.toLocaleUpperCase()}
            </h4>
            <h4 className="text-navlinks">
              <span className="text-zinc-100 font-extrabold">Duration : </span>
              {duration(movieData?.runtime)}
            </h4>
          </div>
          <p className="mt-5">{movieData?.overview}</p>
        </div>
      </div>

      <div className="flex mt-20 gap-16">
        {director?.cast
          ?.filter((_: any, index: number) => index < 6)
          .map((item: directorProps, index: number) => {
            return item?.profile_path ? (
              <div className="grid md:grid-rows-2 lg:grid-rows-1">
                <div key={index} className="rounded-full min-w-40 min-h-40">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                    alt="cast profile"
                    width={100}
                    height={100}
                    className="w-full h-full rounded-full aspect-square"
                  />
                </div>
                <h4 className="text-white text-center mt-5">
                  {item?.original_name}
                </h4>
              </div>
            ) : null;
          })}
      </div>
      {popup ? (
        <div className="main flex justify-center items-center h-full">
          <div className="popup">
            <div className="">
              <RxCross1
                className="text-4xl text-white mb-4 cursor-pointer ms-auto"
                onClick={() => setPopup(!popup)}
              />
              <YouTube videoId={trialer[0]?.key} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Page;
