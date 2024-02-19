import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo1.png'
function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} alt="logo" height={40} width={40} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              The CodeBird
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">
          © Design And Devloped By{" "}
          <Link href="https://puskarroy.site" className="hover:underline">
            Puskar Roy™
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
