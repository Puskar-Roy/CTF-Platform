import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="pt-[3.25rem] px-[3rem] flex flex-col gap-[3rem] ">
      <div className="flex flex-col gap-[50px]">
        <div className="absolute circlePosition w-screen sm:w-[590px] h-[400px] bg-gradient-to-r from-indigo-500 rounded-[100%] top-[50%] left-[50%]  blur-[90px] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
        <h2 className="w-[80%] mx-auto text-[2.6rem] sm:text-6xl text-center  text-gray-600 leading-[51px]  sm:leading-1">
          Welcome to{" "}
          <span className="text-indigo-700 font-extrabold">The CodeBird</span>{" "}
          <span className="font-bold">Capture The Flag (CTF)</span>{" "}
          competition!🏆
        </h2>
        <h2 className="w-[90%] sm:w-[75%] mx-auto my-0 text-center text-base sm:text-lg">
          <span className="text-indigo-700 font-extrabold">The CodeBird</span>{" "}
          is a non-profit coding club at{" "}
          <span className="text-indigo-700 font-extrabold">UIT Burdwan</span>{" "}
          dedicated to promoting Cybersecurity awareness and fostering a passion
          for coding among students. Our CTF competition is designed to provide
          a platform for students to test their skills in cybersecurity 🔒,
          cryptography 🗝️, web exploitation 💻, reverse engineering 🔍, and
          other related fields.
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row p-6 gap-8 ">
        <div className="w-40% mx-auto my-0 flex flex-col gap-3 justify-center shadow-lg p-7 rounded-xl bg-[white]/40 backdrop-blur-[150px]">
          <h1 className="font-extrabold text-2xl">Registration</h1>
          <p>
            Registration for the CTF competition is now open! To register,
            please visit our registration page{" "}
            <span className="text-indigo-500 font-bold">here</span> and fill out
            the form. Registration is free and open to all students.📝
          </p>
        </div>
        <div className="w-40% mx-auto my-0 flex flex-col gap-3 justify-center  p-5 rounded-xl shadow-lg bg-[white]/40 backdrop-blur-[150px]">
          <h1 className="font-extrabold text-2xl">Competition Details</h1>
          <p>
            CodeBird's online CTF competition is on <span className="text-indigo-700 font-extrabold">07/07/07</span> at <span className="text-indigo-700 font-extrabold">7:00AM</span> ⏰, conducted entirely online 🌐. Open to single players,
            compete for rewards and test your skills 💻
          </p>
        </div>
        <div className="w-40% mx-auto my-0 flex flex-col gap-3 justify-center p-5 rounded-xl shadow-lg bg-[white]/40 backdrop-blur-[150px]">
          <h1 className="font-extrabold text-2xl">Prizes</h1>
          <p>
            We have exciting prizes lined up for the winners of the CTF
            competition 🏆, including cash prizes 💰, certificates 📜, and
            exclusive CodeBird merchandise 🎁.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
