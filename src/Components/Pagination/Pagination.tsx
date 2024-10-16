// "use client";

// import { paginationList } from "@/Services/Service";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";

// function Pagination({ totalPages, currentPage, setCurrentPage }: any) {
//   const [data, setData] = useState([]);
//   const params = useParams();
//   const pageRangeToShow = 5; // Number of page numbers to display at a time
//   const rangeStart = Math.max(1, currentPage - Math.floor(pageRangeToShow / 2));
//   const rangeEnd = Math.min(totalPages, rangeStart + pageRangeToShow - 1);

//   // Create an array of page numbers based on the calculated range
//   const pages = Array.from(
//     { length: rangeEnd - rangeStart + 1 },
//     (_, i) => rangeStart + i
//   );

//   // const fetchingData = async () => {
//   //   debugger;
//   //   const data = await paginationList(Number(params.id));
//   //   const { results, total_pages } = data;
//   //   setData(results);
//   //   console.log("Number", typeof total_pages);
//   // };

//   useEffect(() => {
//     // fetchingData();
//   }, []);

//   return (
//     <div>
//       {/* Previous Button */}
//       <button
//         className="text-white me-6"
//         disabled={currentPage === 1}
//         onClick={() => setCurrentPage(currentPage - 1)}
//       >
//         Previous
//       </button>

//       {/* Page Numbers */}
//       {pages.map((page) => (
//         <button
//           key={page}
//           className={`text-white me-3 ${page === currentPage ? "active" : ""}`}
//           onClick={() => setCurrentPage(page)}
//         >
//           {page}
//           <Link href={`/movielist/:${page}`}>{page}</Link>
//         </button>
//       ))}

//       {/* Next Button */}
//       <button
//         className="text-white ms-6"
//         disabled={currentPage === totalPages}
//         onClick={() => setCurrentPage(currentPage + 1)}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 100; // Total number of pages

//   return (
//     <div>
//       <Pagination
//         totalPages={totalPages}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//       <p>Current Page: {currentPage}</p>
//     </div>
//   );
// }

// "use client";

// import { paginationList } from "@/Services/Service";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import PaginationCard from "./PaginationCard";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// type paginationItems = {
//   backdrop_path: String;
//   id: string;
// };

// function Pagination() {
//   const [data, setData] = useState<paginationItems[]>([]);
//   const params = useParams();
//   const [pages, setPages] = useState<number>(0);
//   const [currentPage, setCurrentPage] = useState(Number(params.id));
//   const router = useRouter();

//   const pageRangeToShow = 5;
//   const rangeStart = Math.max(1, currentPage - Math.floor(pageRangeToShow / 2));
//   const rangeEnd = Math.min(pages, rangeStart + pageRangeToShow - 1);

//   const values = Array.from(
//     { length: rangeEnd - rangeStart + 1 },
//     (_, i) => rangeStart + i
//   );

//   const paginationItems = async () => {
//     const res = await paginationList(params.id);
//     const { results, total_pages, total_results } = res;
//     setData(results);
//     setPages(total_pages);
//     setCurrentPage(Number(params.id));
//     console.log(results, total_pages, total_results);
//   };

//   const handlePrev = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   useEffect(() => {
//     paginationItems();
//   });

//   return (
//     <div className="container mt-[60px]">
//       {data && data.length > 0 ? (
//         <div className="grid gap-10 grid-cols-4">
//           {data?.map((item, index) => (
//             <PaginationCard
//               movieId={item?.id}
//               imagSrc={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
//             />
//           ))}
//         </div>
//       ) : (
//         ""
//       )}
//       <div className="flex gap-7 justify-center mt-9">
//         <button className="text-red-500 font-semibold" onClick={handlePrev}>
//           Prev
//         </button>
//         {values?.map((item, index) => (
//           <Link
//             href={`/movielist/${item}`}
//             className="text-white"
//             onClick={() => setCurrentPage(item)}
//           >
//             {item}
//           </Link>
//         ))}
//         <button className="text-red-500 font-semibold" onClick={handleNext}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Pagination;

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
