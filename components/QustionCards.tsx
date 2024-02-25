import React from "react";
import { Questions } from "@/interfaces";
import Link from "next/link";

const QustionCards = ({
  title,
  description,
  category,
  points,
  _id,
}: Questions) => {
  return (
    <Link
      href={`/problems/${_id}`}
      className="w-[300px] h-[250px] sm:w-[300px] bg-[white]/40 backdrop-blur-[150px] mx-auto my-0 flex flex-col gap-4 shadow-xl p-7 rounded-2xl z-2 hover:bg-gray-200"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-[1.5rem] text-start font-bold">{title}</h1>
        <div className="flex flex-col justify-between">
          <h1 className="text-sm sm:text-base font-bold">
            Points : <span className="text-indigo-500">{points}</span>
          </h1>
          <div className="text-sm sm:text-base font-bold">
            Category -{" "}
            <span className="text-indigo-500 font-bold">{category}</span>
          </div>
        </div>
      </div>
      <h3 className="font-base font-[0.5rem] text-black">{description}{"..."} <span className="text-indigo-500 font-bold">more</span></h3>
    </Link>
  );
};

export default QustionCards;
