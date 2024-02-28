import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="pt-[3.25rem] px-[3rem] flex flex-col gap-[3rem] ">
      <div className="flex flex-col gap-[50px]">
        <div className="absolute circlePosition w-screen sm:w-[590px] h-[400px] bg-gradient-to-r from-rose-400 rounded-[100%] top-[50%] left-[50%]  blur-[90px] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
        <h2 className=" sm:w-[80%] mx-auto text-[2.6rem] sm:text-6xl text-center  text-gray-600 leading-[51px]  sm:leading-1">
          Welcome to{" "}
          <span className="text-rose-500 font-extrabold">bingoCTF</span>{" "}
          <span className="font-bold">Capture The Flag (CTF)</span>{" "}
          playground!🏆
        </h2>
        <h2 className="w-[98%] sm:w-[75%] mx-auto my-0 text-center text-base sm:text-lg">
          <span className="text-rose-700 font-extrabold">bingoCTF</span> is a
          dynamic and engaging CTF platform dedicated to promoting{" "}
          <span className="text-rose-700 font-extrabold">Cybersecurity</span>{" "}
          awareness and fostering a passion for coding among participants. Our
          CTF competition offers a challenging environment for individuals to
          test their skills in cybersecurity 🔒, cryptography 🗝️, web
          exploitation 💻, reverse engineering 🔍, and other related fields.
        </h2>
        <button className="bg-rose-500 hover:bg-rose-800 rounded-xl w-[18rem] px-4 py-2 text-white text-center mx-[auto] my-0 font-bold">
          <Link href="/problems">Start Solving 🚀</Link>
        </button>
      </div>

      <div className="w-auto sm:w-[80vw] mx-auto my-0 flex flex-col sm:flex-row p-6 gap-8 ">
        <div className="w-40% mx-auto my-0 flex flex-col gap-3 justify-center shadow-lg p-7 rounded-xl bg-[white]/40 backdrop-blur-[150px]">
          <h1 className="font-extrabold text-2xl">Innovative Challenges 🧿</h1>
          <p>
            <span className="text-rose-500 font-bold">bingoCTF</span> offers a
            variety of innovative challenges that test participants' creativity
            and problem-solving abilities, ensuring an engaging and rewarding
            experience for all.
          </p>
        </div>
        <div className="w-40% mx-auto my-0 flex flex-col gap-3 justify-center  p-5 rounded-xl shadow-lg bg-[white]/40 backdrop-blur-[150px]">
          <h1 className="font-extrabold text-2xl">Beginner-Friendly 🌐</h1>
          <p>
            <span className="text-rose-700 font-extrabold">bingoCTF</span>
            welcomes participants of all skill levels, including beginners. The
            platform offers challenges that cater to newcomers, providing a
            supportive environment for learning and growth.
          </p>
        </div>
        <div className="w-40% mx-auto my-0 flex flex-col gap-3 justify-center p-5 rounded-xl shadow-lg bg-[white]/40 backdrop-blur-[150px]">
          <h1 className="font-extrabold text-2xl">Improvement 🎁</h1>
          <p>
            <span className="text-rose-700 font-extrabold">bingoCTF</span>{" "}
            regularly updates its challenges and platform based on feedback from
            participants, ensuring that the experience remains relevant and
            engaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
