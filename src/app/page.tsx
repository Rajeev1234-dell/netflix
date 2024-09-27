"use client";
import Hero from "@/Components/HeroSection/Hero";
import { useEffect, useState } from "react";
import { getMovies, trendingMovies } from "@/Services/Service";
import { hero } from "@/json/json";

export default function Home() {
  const [data, setData] = useState([]);

  const moviesList = async () => {
    const res = await getMovies();
    const { results } = res;
    setData(results);
  };

  const trendingmovie = async () => {
    const res = await trendingMovies();
    console.log("Trending", res);
  };

  useEffect(() => {
    moviesList();
    trendingmovie();
  }, []);
  return <Hero data={data} hero_icons={hero} />;
}
