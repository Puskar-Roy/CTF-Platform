import React from 'react'
import QustionCards from '@/components/QustionCards';
const page = () => {
  return (
    <div className="flex h-auto flex-col justify-center items-center mt-[20vh] gap-[5rem]  sm:gap-[4rem]">
      <div className="absolute circlePosition w-screen sm:w-[590px] h-[400px] bg-gradient-to-r from-indigo-500 rounded-[100%] top-[50%] left-[50%]  blur-[90px] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
      <h1 className="text-4xl sm:text-5xl text-center  text-indigo-500 font-bold">
        Problems Page
      </h1>
      <div className='w-[80%] mx-auto my-0 flex justify-center items-center flex-wrap gap-x-[30px] gap-y-[30px]'>
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
