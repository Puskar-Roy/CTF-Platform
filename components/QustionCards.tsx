import React from "react";
import { Questions } from "@/interfaces";
const QustionCards = ({ title, description, category, points }: Questions) => {
  return (
    <div className="w-[300px] bg-[white]/40 backdrop-blur-[150px] mx-auto my-0 flex flex-col gap-4 shadow p-7 rounded-2xl z-2">
      <div className="flex flex-col gap-1">
        <h1 className="text-[1.5rem] font-bold">{title}</h1>
        <div className="flex justify-between">
          <h1 className="text-md font-bold">
            Points : <span className="text-indigo-500">{points}</span>
          </h1>
          <div className="text-md">
            Category -{" "}
            <span className="text-indigo-500 font-bold">{category}</span>
          </div>
        </div>
      </div>

      <h3 className="font-base font-sm text-black">{description}</h3>
    </div>
  );
};

export default QustionCards;
