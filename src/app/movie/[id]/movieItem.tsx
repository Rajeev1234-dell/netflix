import Image from "next/image";
import React from "react";

function movieItem() {
  return "";
  // <>
  //   {directordata
  //     ?.filter((_: any, index: number) => index < 6)
  //     .map((item: { profile_path: string }, index: number) => {
  //       return item?.profile_path ? (
  //         <div className="flex flex-col">
  //           <div key={index} className="rounded-full min-w-40 min-h-40">
  //             <Image
  //               src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
  //               alt="cast profile"
  //               width={100}
  //               height={100}
  //               className="w-full h-full rounded-full aspect-square"
  //             />
  //           </div>
  //           <h4 className="text-white text-center mt-5">
  //             {item?.original_name}
  //           </h4>
  //         </div>
  //       ) : null;
  //     })}
  // </>
}

export default movieItem;
