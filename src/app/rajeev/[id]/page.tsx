import React from "react";

interface PageProps {
  params: {
    id: string; // This will be the dynamic parameter from the URL
  };
}

const Page = ({ params }: PageProps) => {
  console.log(params.id);

  return <h2>Post ID: {params.id}</h2>;
};

export default Page;
