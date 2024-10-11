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

import React from "react";

async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log("Response Data", data);

  return <div></div>;
}

export default page;
