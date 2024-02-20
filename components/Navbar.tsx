"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "@/public/logo1.png";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { NavbarData } from "@/utlis/data";
import { NavbarItems } from "@/interfaces";
import { useSession, signOut } from "next-auth/react";

const NavItem = ({ href, tags }: NavbarItems) => {
  return (
    <li className="hover:text-indigo-700">
      <Link href={href}>{tags}</Link>
    </li>
  );
};
const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const status = false;
  const session = useSession();
  const handleMenuClick: () => void = () => {
    setOpen(!open);
  };
  return (
    <header className="bg-white fixed top-0 shadow-xl w-screen z-10">
      <nav className="px-9 flex justify-between items-center w-screen sm:w-[80%] mx-[auto] my-0 h-20 ">
        <Link href="/">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Image src={logo} alt="logo" height={40} width={40} />
            CTF Competition
          </div>
        </Link>
        <div className="sm:hidden" onClick={handleMenuClick}>
          {open ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <CgMenuRightAlt className="text-2xl" />
          )}
        </div>
        <div
          className={
            open
              ? "sm:hidden absolute top-0 left-0 h-screen w-[300px] flex justify-center items-center  backdrop-blur-[150px] rounded-2xl transition-all duration-900 shadow-lg"
              : "sm:hidden absolute top-0 left-[-100%] h-screen w-[300px] flex justify-center items-center  backdrop-blur-[1px] rounded-2xl transition-all duration-900 shadow-lg"
          }
        >
          <ul className="flex flex-col gap-[30px]">
            {session.status === "authenticated" ? (
              NavbarData.map(({ href, tags }: NavbarItems) => (
                <NavItem key={href} href={href} tags={tags} />
              ))
            ) : (
              <Link
                href="/authentication"
                className="bg-indigo-500 hover:bg-indigo-800 rounded-xl px-4 py-2 text-white"
              >
                Sign in / Sign up
              </Link>
            )}
            {session.status === "authenticated" && (
              <div onClick={()=>{signOut()}} className="flex gap-2 font-bold text-indigo-500 items-center cursor-pointer">
                <Image
                  src={session.data?.user?.image ?? logo}
                  alt="Logo"
                  height={22}
                  width={25}
                  className="rounded-[100%] shadow-xl"
                />
                <h3>{session.data?.user?.name ?? "User"}</h3>
              </div>
            )}
          </ul>
        </div>
        <div className="hidden sm:block">
          <ul className="flex gap-[30px]">
            {session.status === "authenticated" ? (
              NavbarData.map(({ href, tags }: NavbarItems) => (
                <NavItem key={href} href={href} tags={tags} />
              ))
            ) : (
              <Link
                href="/authentication"
                className="bg-indigo-500 hover:bg-indigo-800 rounded-xl px-4 py-2 text-white"
              >
                Sign in / Sign up
              </Link>
            )}
            {session.status === "authenticated" && (
              <div onClick={()=>{signOut()}} className="flex gap-2 font-bold text-indigo-500 items-center justify-center  cursor-pointer">
                <Image
                  src={session.data?.user?.image ?? logo}
                  alt="Logo"
                  height={22}
                  width={25}
                  className="rounded-[100%] shadow-xl"
                />
                <h3>{session.data?.user?.name ?? "User"}</h3>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
