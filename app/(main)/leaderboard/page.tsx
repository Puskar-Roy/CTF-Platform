"use client"
import React from "react";
import Image from "next/image";
import image from "@/public/server-support-header-image.png";
import { useSession } from "next-auth/react";
const page = () => {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-[20vh]">
      <div className="absolute circlePosition w-screen sm:w-[590px] h-[400px] bg-gradient-to-r from-indigo-500 rounded-[100%] top-[50%] left-[50%]  blur-[90px] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
      <h1 className="text-3xl sm:text-3xl text-center  text-indigo-500 font-bold">
        (Leaderboard Page) Server Under Maintenance
      </h1>
      <Image
        src={image}
        alt="Server Working"
        height={300}
        width={500}
        className="rounded-xl"
      />
    </div>
  );
};

export default page;
