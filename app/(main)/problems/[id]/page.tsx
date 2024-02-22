import React from "react";

const page = ({ params }: any) => {
  return (
    <div className="sm:h-[70vh] mt-[120px]">
      <div className="absolute circlePosition w-screen sm:w-[590px] h-[400px] bg-gradient-to-r from-indigo-500 rounded-[100%] top-[50%] left-[50%]  blur-[90px] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
      <div className="w-[70%] mx-auto my-0 ">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl flex items-center justify-center gap-2 text-black font-bold">
              Web Exploitation
              <span className="text-sm hidden sm:block  px-[0.4rem] py-[0.18rem] shadow-xl text-center font-normal bg-indigo-500 rounded-lg text-white hover:bg-indigo-700">
                Cryptography
              </span>
            </h1>
            <h2 className="text-xl hidden sm:block">
              Points :
              <span className="text-indigo-500 font-extrabold">300</span>
            </h2>
            <h2 className="text-xl sm:hidden">
              <span className="text-indigo-500 font-extrabold">300</span>
            </h2>
          </div>
          <div className="w-[70vw] border-b-2 border-gray-500"></div>
        </div>
        <div className="mt-8 text-lg flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Description</h1>
          <h2>
            Find the vulnerability in the provided web to retrieve the flag.Find
            the vulnerability in the provided web to retrieve the flag.Find the
            vulnerability in the provided web to retrieve the flag.Find the
            vulnerability in the provided web to retrieve the flag.Find the
            vulnerability in the provided web to retrieve the flag.
          </h2>
        </div>
        <div className="mt-8 text-lg flex justify-between gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl sm:text-2xl font-semibold">
              Given Resources
            </h1>
            <h2 className="font-bold text-sm sm:text-md text-indigo-500">
              https://www.puskarroy.site
            </h2>
          </div>
          <div className="flex flex-col  gap-3">
            <h1 className="text-xl sm:text-2xl font-semibold">Hints</h1>
            <h2 className="text-sm sm:text-md px-[0.18rem] py-[0.18rem] shadow-xl text-center bg-indigo-500 rounded-lg text-white font-bold hover:bg-indigo-700">
              1
            </h2>
          </div>
        </div>
        <div className="mt-[40px] shadow-2xl rounded-2xl p-7 flex flex-col justify-start gap-6">
          <input
            type="text"
            className="py-2 px-4 block w-full border-indigo-500 rounded-2xl text-base sm:text-lg focus:outline-indigo-600 "
            placeholder="Flag Starts With : codebird"
          />
          <button className="bg-indigo-500 w-full sm:w-[180px] border border-indigo-500 hover:bg-indigo-800 rounded-xl px-4 py-2 text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
