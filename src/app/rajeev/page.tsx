// "use client";
// import { movieList, searchData } from "@/Services/Service";
// import React, { useEffect, useState } from "react";

// function page() {
//   const [input, setInput] = useState("");
//   const [res, setResults] = useState([]);

//   const fetchData = async (value: string) => {
//     const result = await movieList();
//     const { results } = result;

//     const data = results.filter((user: any) => {
//       return (
//         value &&
//         user &&
//         user.original_title &&
//         user.original_title.toLowerCase().includes(value)
//       );
//     });
//     setResults(data);
//   };

//   const handleInput = (event: any) => {
//     setInput(event.target.value);
//     fetchData(event.target.value);
//   };

//   const handClick = (value) => {
//     setInput(value);
//     setResults([]);
//   };

//   return (
//     <div className="container">
//       <input type="text" onChange={handleInput} value={input} />
//       <div>
//         {res && res.length > 0
//           ? res?.map((item, index) => (
//               <div
//                 key={index}
//                 className="text-red-700"
//                 onClick={() => handClick(item?.original_title)}
//               >
//                 {item.original_title}
//               </div>
//             ))
//           : ""}
//       </div>
//     </div>
//   );
// }

// export default page;

// "use client";

// import Pagination from "@/Components/Pagination/Pagination";
// import React, { useEffect, useState } from "react";

// export const paginate = (items, pageNumber, pageSize) => {
//   const startIndex = (pageNumber - 1) * pageSize;
//   return items.slice(startIndex, startIndex + pageSize);
// };

// type itemData = {
//   title: string;
// };

// function page() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [data, setData] = useState<itemData[]>([]);
//   const pageSize = 10;

//   const fetchData = async () => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//       const data = await res.json();
//       setData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const paginatedData = paginate(data, currentPage, pageSize);

//   return (
//     <>
//       {paginatedData && paginatedData.length > 0
//         ? paginatedData.map((item, index: number) => (
//             <div key={index} className="flex gap-5">
//               <p>{item.id}</p>
//               <h2>{item?.title}</h2>
//             </div>
//           ))
//         : "No data available"}
//       <Pagination
//         items={data?.length}
//         currentPage={currentPage}
//         pageSize={pageSize}
//         setCurrentPage={setCurrentPage}
//       />
//     </>
//   );
// }

// export default page;

import React from "react";

async function page() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=2b86f2a0e2ef98181891acf9070b6f88&page=2"
  );
  const data = await res.json();

  const { results } = data;

  console.log("Data 3", results.length0);

  return (
    <div className="container">
      <h2>hello</h2>
      {results && results.length > 0
        ? results?.map((item, index) => {
            return <p>{item?.title}</p>;
          })
        : ""}
    </div>
  );
}

export default page;
