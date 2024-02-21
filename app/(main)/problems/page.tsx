"use client";
import React, { useState } from "react";
import QustionCards from "@/components/QustionCards";
import Loading from "@/components/loading";
import AuthError from "@/components/authError";
import { IoFilter } from "react-icons/io5";
import { useSession } from "next-auth/react";
import Link from "next/link";

const page = () => {
  const { status: sessionStatus } = useSession();
  const [open, setOpen] = useState<boolean>(false);
  if (sessionStatus === "loading") {
    return <Loading />;
  }

  if (sessionStatus === "unauthenticated") {
    return <AuthError />;
  }
  const handleMenuClick: () => void = () => {
    setOpen(!open);
  };
  return (
    <div className="flex h-auto flex-col justify-center items-center mt-[14vh] gap-[5rem]  sm:gap-[4rem]">
      <div className="absolute circlePosition w-screen sm:w-[590px] h-[400px] bg-gradient-to-r from-indigo-500 rounded-[100%] top-[50%] left-[50%]  blur-[90px] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
      <h1 className="text-4xl sm:text-5xl text-center  text-indigo-500 font-bold">
        Challenges
      </h1>
      <div
        className="flex justify-between w-[76%] cursor-pointer sm:hidden"
        onClick={handleMenuClick}
      >
        <h2 className="text-center text-xl sm:text-xl font-medium text-gray-600">
          Score : <span className="text-indigo-500 font-extrabold">10000</span>
        </h2>
        <div className="flex gap-2 items-center justify-center text-center text-xl sm:hidden font-medium text-gray-600">
          <IoFilter className="text-2xl" />
        </div>
      </div>
      <div
        className={
          open
            ? "absolute top-[0px] sm:hidden left-0 h-screen  w-[300px] flex flex-col gap-3 justify-center items-center  backdrop-blur-[150px] rounded-2xl transition-all duration-900 shadow-lg z-[101]"
            : "absolute top-[0px] sm:hidden left-[-100%] h-screen w-[300px] flex flex-col gap-3 justify-center items-center  backdrop-blur-[1px] rounded-2xl transition-all duration-900 shadow-lg z-[101]"
        }
      >
        <div className="text-2xl font-bold flex gap-2 items-center text-center ">
          <IoFilter />
          Filters
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg">Topics</h1>
          <ul className="flex flex-col gap-3 font-base">
            <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-indigo-100 cursor-pointer">
              All
            </li>
            <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-indigo-100 cursor-pointer">
              Web Exploitation
            </li>
            <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-indigo-100 cursor-pointer">
              Cryptography
            </li>
            <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-indigo-100 cursor-pointer">
              Reverse Engineering
            </li>
            <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-indigo-100 cursor-pointer">
              Forensics
            </li>
            <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-indigo-100 cursor-pointer">
              General Skills
            </li>
            <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-indigo-100 cursor-pointer">
              Binary Exploitation
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[90%] mx-auto my-0 flex justify-between">
        <div className="w-[20%] h-[70vh] shadow-xl p-6 rounded-xl sm:flex flex-col gap-[36px] hidden">
          <div className="text-2xl font-bold flex gap-2 items-center text-center ml-12">
            <IoFilter />
            Filters
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg">Topics</h1>
            <ul className="flex flex-col gap-2 font-base">
              <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-gray-100 cursor-pointer">
                All
              </li>
              <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-gray-100 cursor-pointer">
                Web Exploitation
              </li>
              <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-gray-100 cursor-pointer">
                Cryptography
              </li>
              <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-gray-100 cursor-pointer">
                Reverse Engineering
              </li>
              <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-gray-100 cursor-pointer">
                Forensics
              </li>
              <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-gray-100 cursor-pointer">
                General Skills
              </li>
              <li className="shadow p-3 rounded-md hover:text-indigo-500 hover:font-bold hover:bg-gray-100 cursor-pointer">
                Binary Exploitation
              </li>
            </ul>
          </div>
        </div>
        
        <div className="w-[70%] mx-auto my-0 flex justify-center items-center flex-wrap gap-x-[5px] gap-y-[30px]">
          <QustionCards
            title="Bug Hunter"
            category="Web"
            points={100}
            description="lorem hjshj sjdhsjhd dskjdksjd isjdisid suidusiud hkhdkshd skdhskhd kshdkshdks hihdieh ish fishk osijfisjf ishfkshfksn skfhsih8fh sifhsifhkfheiwhfwhf 8wy Description of question 1"
          />
          <QustionCards
            title="Bug Hunter"
            category="Web"
            points={100}
            description="lorem hjshj sjdhsjhd dskjdksjd isjdisid suidusiud hkhdkshd skdhskhd kshdkshdks hihdieh ish fishk osijfisjf ishfkshfksn skfhsih8fh sifhsifhkfheiwhfwhf 8wy Description of question 1"
          />
          <QustionCards
            title="Bug Hunter"
            category="Web"
            points={100}
            description="lorem hjshj sjdhsjhd dskjdksjd isjdisid suidusiud hkhdkshd skdhskhd kshdkshdks hihdieh ish fishk osijfisjf ishfkshfksn skfhsih8fh sifhsifhkfheiwhfwhf 8wy Description of question 1"
          />
          <QustionCards
            title="Bug Hunter"
            category="Web"
            points={100}
            description="lorem hjshj sjdhsjhd dskjdksjd isjdisid suidusiud hkhdkshd skdhskhd kshdkshdks hihdieh ish fishk osijfisjf ishfkshfksn skfhsih8fh sifhsifhkfheiwhfwhf 8wy Description of question 1"
          />
          <QustionCards
            title="Bug Hunter"
            category="Web"
            points={100}
            description="lorem hjshj sjdhsjhd dskjdksjd isjdisid suidusiud hkhdkshd skdhskhd kshdkshdks hihdieh ish fishk osijfisjf ishfkshfksn skfhsih8fh sifhsifhkfheiwhfwhf 8wy Description of question 1"
          />
          <QustionCards
            title="Bug Hunter"
            category="Web"
            points={100}
            description="lorem hjshj sjdhsjhd dskjdksjd isjdisid suidusiud hkhdkshd skdhskhd kshdkshdks hihdieh ish fishk osijfisjf ishfkshfksn skfhsih8fh sifhsifhkfheiwhfwhf 8wy Description of question 1"
          />
        </div>
        
      </div>
    </div>
  );
};

export default page;
