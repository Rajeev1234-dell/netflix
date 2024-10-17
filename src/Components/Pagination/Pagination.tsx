"use client";

import { paginationList } from "@/Services/Service";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PaginationCard from "./PaginationCard";
import Link from "next/link";
import { useRouter } from "next/navigation";

type paginationItems = {
  backdrop_path: String;
  id: string;
};

function Pagination() {
  const [data, setData] = useState<paginationItems[]>([]);
  const params = useParams();
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(Number(params.id) || 1);
  const router = useRouter();

  const pageRangeToShow = 5;
  const rangeStart = Math.max(1, currentPage - Math.floor(pageRangeToShow / 2));
  const rangeEnd = Math.min(pages, rangeStart + pageRangeToShow - 1);

  const values = Array.from(
    { length: rangeEnd - rangeStart + 1 },
    (_, i) => rangeStart + i
  );

  const fetchPaginationItems = async (page: number) => {
    const res = await paginationList(page);
    const { results, total_pages, total_results } = res;
    setData(results);
    setPages(total_pages);
    setCurrentPage(page);
    console.log(results, total_pages, total_results);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pages) {
      fetchPaginationItems(page);
      router.push(`/movielist/${page}`);
    }
  };

  const handlePrev = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  };

  useEffect(() => {
    fetchPaginationItems(currentPage);
  }, [currentPage]);

  return (
    <div className="container mt-[60px]">
      {data && data.length > 0 ? (
        <div className="grid gap-10 grid-cols-4">
          {data.map((item, index) => (
            <PaginationCard
              key={item.id}
              movieId={item.id}
              imagSrc={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            />
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="flex gap-7 justify-center mt-9">
        <button
          className="text-red-500 font-semibold"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {values.map((item) => (
          <Link
            key={item}
            href={`/movielist/${item}`}
            className="text-white"
            onClick={() => handlePageChange(item)}
          >
            {item}
          </Link>
        ))}
        <button
          className="text-red-500 font-semibold"
          onClick={handleNext}
          disabled={currentPage === pages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
