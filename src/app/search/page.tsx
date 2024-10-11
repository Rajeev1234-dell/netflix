"use client";
import { getMovies, movieList, searchData } from "@/Services/Service";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useSearchParams, useRouter } from "next/navigation";

type path = { poster_path: String; id: String };
type movie = path[];

type restype = {
  original_title: string;
};

function page() {
  const [data, setData] = useState<movie>([]);
  const [input, setInput] = useState("");
  const router = useRouter();
  const parmas = useSearchParams();
  const [res, setResults] = useState<restype[]>([]);

  const searching = async () => {
    const resData = await searchData(parmas.get("query"));
    const { results } = resData;
    setData(results);
  };

  const handleClicked = (id: String) => {
    router.push(`/movie/${id}`);
  };

  const getData = async () => {
    const resData = await searchData(input);
    const { results } = resData;
    console.log(results);

    setData(results);
  };

  useEffect(() => {
    searching();
  }, [parmas]);

  useEffect(() => {
    if (input == "") return;
    const time = setTimeout(() => {
      getData();
    }, 2000);
    return () => clearTimeout(time);
  }, [input]);

  const fetchData = async (value: string) => {
    const result = await movieList();
    const { results } = result;

    const data = results.filter((user: any) => {
      return (
        value &&
        user &&
        user.original_title &&
        user.original_title.toLowerCase().includes(value)
      );
    });
    setResults(data);
  };

  const handleInput = (event: any) => {
    setInput(event.target.value);
    fetchData(event.target.value);
  };

  const handClick = (value: string) => {
    setInput(value);
    setResults([]);
  };

  return (
    <div className="container">
      <h2>Your Search Related Movies</h2>
      <input
        className="mt-10 rounded-xl py-2 ps-4 outline-none w-1/4"
        placeholder="Enter Seach Movie"
        onChange={handleInput}
        value={input}
      />
      {res && res.length > 0 ? (
        <div className="rounded-2xl bg-[#80808060] w-1/4 mt-[1px]">
          {res?.map((item, index) => (
            <div
              key={index}
              className="w-full text-white ps-4 hover:bg-zinc-400 cursor-default py-2 font-medium rounded-2xl"
              onClick={() => handClick(item?.original_title)}
            >
              {item.original_title}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {data && data.length > 0 ? (
        <div className="container grid grid-cols-3 gap-10 mt-16">
          {data
            .filter((item) => item?.poster_path)
            .map((item, index) => (
              <div key={index} onClick={() => handleClicked(item?.id)}>
                <Item
                  img={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                />
              </div>
            ))}
        </div>
      ) : (
        <div className="mt-14">
          <h2>No Movie available.</h2>
        </div>
      )}
    </div>
  );
}

export default page;
