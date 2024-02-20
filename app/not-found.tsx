import Link from "next/link";
import Image from "next/image";
import image from '@/public/404.png'
export default function NotFound() {
  return (
    <div className="mt-[90px] h-[70vh] w-[50vw] mx-auto my-0 flex flex-col justify-center items-center gap-4">
      <div className="absolute circlePosition w-screen sm:w-[590px] h-[400px] bg-gradient-to-r from-indigo-500 rounded-[100%] top-[50%] left-[50%]  blur-[90px] translate-x-[-50%] translate-y-[-50%] z-[-1]" />
      <h2 className="text-center text-3xl sm:text-3xl font-extrabold text-gray-600">
        OOPS! <span className="text-indigo-500">Page Not Found!</span>😥
      </h2>
      <div className="">
        <Image src={image} alt="404image" height={250} width={400} />
      </div>
    </div>
  );
}
