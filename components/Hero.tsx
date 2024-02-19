import React from 'react'

const Hero:React.FC = () => {
  return (
    <div>
      <div className="h-screen w-[100%] mx-auto my-0 flex justify-center items-center z-[-10]">
        <div className="w-[400px] h-[400px] bg-pink-500 rounded-full mr-[-50px] z-[-11]" />
        <div className="w-[400px] h-[400px] bg-yellow-400 rounded-full ml-[-50px] z-[-11]" />
        <div className="h-[100%] w-[100%] absolute left-0 backdrop-blur-3xl z-[-10]" />
      </div>
    </div>
  );
}

export default Hero
