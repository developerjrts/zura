"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sideBarLinks } from "@/constants/sidebarLinks";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/Logo.png";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer lg:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-gray-800 text-white">
          <SheetHeader>
            <SheetTitle className="text-2xl font-extrabold text-white">
              Zura
            </SheetTitle>
          </SheetHeader>
          <section className="flex flex-col p-4 gap-2">
            {sideBarLinks.map((link, i) => {
              const isActive =
                link.route === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.route);
              return (
                <SheetClose asChild key={i}>
                  <Link
                    href={link.route}
                    className={cn("flex items-center gap-4 rounded-lg p-4", {
                      "bg-blue-600": isActive,
                    })}
                  >
                    {link.icon}
                    <p>{link.label}</p>
                  </Link>
                </SheetClose>
              );
            })}
          </section>
          <SheetFooter>
            <Link
              className="font-semibold text-sm text-white"
              target="_blank"
              href={"https://instagram.com/jrts_31"}
            >
              @jrts_31
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
