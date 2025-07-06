import Logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed z-50 bg-gray-800 w-full px-4 py-4">
      <Link href={"/"} className="flex justify-center gap-1 items-center">
        <Image src={Logo} alt="Logo" height={50} width={50} />
        <p className="font-bold text-white text-2xl">Zura</p>
      </Link>
      <div className="flex justify-between items-center gap-5">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
