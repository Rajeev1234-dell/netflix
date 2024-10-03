"use client";
import Hero from "@/Components/HeroSection/Hero";
import { useEffect, useState } from "react";
import { getMovies, trendingMovies } from "@/Services/Service";
import { hero, trial } from "@/json/json";
import Trending from "@/Components/TrendingSection/Trending";
import Trial from "@/Components/TrialSection/Trail";

export default function Home() {
  const [data, setData] = useState([]);
  const [trend, setTrend] = useState([]);

  const moviesList = async () => {
    const res = await getMovies();
    const { results } = res;
    setData(results);
  };

  const trendingmovie = async () => {
    const res = await trendingMovies();
    const { results } = res;

    setTrend(results);
  };

  useEffect(() => {
    moviesList();
    trendingmovie();
  }, []);

  return (
    <>
      <Hero data={data} hero_icons={hero} />
      <Trending data={data} />
      <Trial trialdata={trial}/>
    </>
  );
}
