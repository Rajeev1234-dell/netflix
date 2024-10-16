import Card from "@/Components/Card/Card";
import Pagination from "@/Components/Pagination/Pagination";
import { getMovies, paginationList } from "@/Services/Service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function page() {
  return <Pagination />;
}

export default page;
