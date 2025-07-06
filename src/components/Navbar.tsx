import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/Logo.png";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed z-50 bg-gray-800 w-full px-4 py-4">
      <Link href={"/"} className="flex gap-1 items-center">
        <Image
          src={Logo}
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full max-sm:size-10"
        />
        <p className="font-extrabold max-sm:hidden text-2xl">Zura</p>
      </Link>
      <div className="flex justify-between items-center gap-5">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
