"use client";
import { getMovies, searchData } from "@/Services/Service";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useSearchParams, useRouter } from "next/navigation";

type path = { poster_path: String; id: String };
type movie = path[];

function page() {
  const [data, setData] = useState<movie>([]);
  const router = useRouter();
  const parmas = useSearchParams();

  const searching = async () => {
    const resData = await searchData(parmas.get("query"));
    const { results } = resData;
    setData(results);
  };

  const handleClicked = (id: String) => {
    router.push(`/movie/${id}`);
  };

  console.log("Movie Data", data);

  useEffect(() => {
    searching();
  }, [parmas]);

  return (
    <div className="container">
      <h2>Your Search Related Movies</h2>
      {data && (
        <div className="container grid grid-cols-3 gap-10 mt-16">
          {data
            .filter((item) => item?.poster_path)
            .map((item, index) => (
              <div onClick={() => handleClicked(item?.id)}>
                <Item
                  key={index}
                  img={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default page;
