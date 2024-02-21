import React from 'react'
import Image from "next/image";
import image from "@/public/404.png";
const AuthError = () => {
  return (
    <div>
      <div className="mt-[90px] h-[70vh] w-[50vw] mx-auto my-0 flex flex-col justify-center items-center gap-4">
        <div className="absolute circlePosition w-screen sm:w-[590px] h-[400px] bg-gradient-to-r from-indigo-500 rounded-[100%] top-[50%] left-[50%]  blur-[90px] translate-x-[-50%] translate-y-[-50%] z-[-1]" />

        <h2 className="text-center text-3xl sm:text-3xl font-extrabold text-gray-600">
          Access<span className="text-indigo-500"> Denied!!</span>😥
        </h2>
        <h2 className="text-center text-xl sm:text-3xl font-extrabold text-gray-600">
          Sign In To Enter <span className="text-indigo-500"> This Page!</span>😥
        </h2>

        <div className="">
          <Image src={image} alt="404image" height={250} width={400} />
        </div>
      </div>
    </div>
  );
}

export default AuthError
