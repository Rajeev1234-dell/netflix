import Hero from "@/Components/HeroSection/Hero";
import { getMovies, trendingMovies } from "@/Services/Service";
import { hero, trial } from "@/json/json";
import Trending from "@/Components/TrendingSection/Trending";
import Trial from "@/Components/TrialSection/Trail";

export default async function Home() {
  
  const res = await getMovies();
  const { results: movieResults } = res;

  const response = await trendingMovies();
  const { results: trendingResults } = response;

  return (
    <>
      <Hero data={movieResults} hero_icons={hero} />
      <Trending data={trendingResults} />
      <Trial trialdata={trial} />
    </>
  );
}
