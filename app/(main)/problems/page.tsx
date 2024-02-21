"use client"
import React, { useState } from 'react'
import QustionCards from '@/components/QustionCards';
import Loading from "@/components/loading";
import AuthError from "@/components/authError";
import { IoFilter } from "react-icons/io5";
import { useSession } from "next-auth/react";
import Link from 'next/link';
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
    <div className="flex h-auto flex-col justify-center items-center mt-[20vh] gap-[5rem]  sm:gap-[4rem]">
      <div className="absolute circlePosition w-screen sm:w-[590px] h-[400px] bg-gradient-to-r from-indigo-500 rounded-[100%] top-[50%] left-[50%]  blur-[90px] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
      <h1 className="text-4xl sm:text-5xl text-center  text-indigo-500 font-bold">
        Problems Page
      </h1>
      <div className="flex justify-between w-[76%] cursor-pointer" onClick={handleMenuClick}>
        <h2 className="text-center text-xl sm:text-xl font-medium text-gray-600">
          Score : <span className="text-indigo-500 font-extrabold">10000</span>
        </h2>
        <div className="flex gap-2 items-center justify-center text-center text-xl sm:text-xl font-medium text-gray-600">
          <IoFilter className="text-2xl" />
          <span className="text-indigo-500 hidden sm:block font-extrabold">
            Filter
          </span>
        </div>
      </div>
      <div
        className={
          open
            ? "absolute top-[200px] left-0 h-[400px] w-[300px] flex justify-center items-center  backdrop-blur-[150px] rounded-2xl transition-all duration-900 shadow-lg z-[101]"
            : "absolute top-[200px] left-[-100%] h-[400px] w-[300px] flex justify-center items-center  backdrop-blur-[1px] rounded-2xl transition-all duration-900 shadow-lg z-[101]"
        }
      >
        <ul className="flex flex-col gap-3 text-center items-center justify-center font-bold ">
          <li onClick={handleMenuClick} className=''>
            <Link href="#">Any</Link>
          </li>
          <li onClick={handleMenuClick}>
            <Link href="#">Web</Link>
          </li>
          <li onClick={handleMenuClick}>
            <Link href="#">Crypto</Link>
          </li>
          <li onClick={handleMenuClick}>
            <Link href="#">Reverse Eng</Link>
          </li>
          <li onClick={handleMenuClick}>
            <Link href="#">Genarel</Link>
          </li>
        </ul>
      </div>
      <div className="w-[80%] mx-auto my-0 flex justify-center items-center flex-wrap gap-x-[30px] gap-y-[30px]">
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
  );
}

export default page
