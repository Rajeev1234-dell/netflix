import Card from "@/Components/Card/Card";
import { getMovies } from "@/Services/Service";
import Image from "next/image";
import React from "react";

async function page() {
  const res = await getMovies();
  const { results } = res;

  return (
    <div className="container grid grid-cols-4 gap-10">
      {results &&
        results.length > 0 &&
        results?.map((item: any) => (
          <div className="w-full border-2 border-zinc-700 p-5 rounded-2xl mt-14">
            <Image
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt=""
              width={100}
              height={100}
              unoptimized
            />
          </div>
        ))}
    </div>
  );
}

export default page;
