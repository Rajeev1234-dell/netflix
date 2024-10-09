// app/page.js (or app/posts/page.js if it's a nested route)
import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

// Server Component - Fetching data on the server
const Page = async () => {
  // Using async/await directly in Server Component
  let data: Post[] = [];
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();
  } catch (error) {
    console.log(error);
  }
  //   const data = await res.json();

  //   console.log("Fetched Data:", data); // You can log the data in the server log

  return (
    <div className="container">
      <h2>Fetched Posts</h2>
      <ul>
        {data.length > 0
          ? data.map((item: any) => (
              <li key={item.id} className="text-white">
                {item.title}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default Page;
