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
