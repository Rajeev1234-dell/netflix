"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type props = {
  imagSrc: string;
  movieId: string;
};

function PaginationCard({ imagSrc, movieId }: props) {
  return (
    <Link href={`/movie/${movieId}`}>
      <div className="border-2 border-lightcolor p-5 rounded-lg">
        <div className="relative overflow-hidden w-full h-[400px] bg-lightgray p-10 cursor-pointer">
          <Image
            src={imagSrc}
            alt=""
            fill
            unoptimized
            className="h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </Link>
  );
}

export default PaginationCard;
