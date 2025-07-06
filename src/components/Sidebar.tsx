"use client";

import { sideBarLinks } from "@/constants/sidebarLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky bg-gray-800 left-0 top-0 flex h-full w-fit flex-col justify-between p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sideBarLinks.map((link, i) => {
          const isActive =
            link.route === "/"
              ? pathname === "/"
              : pathname.startsWith(link.route);

          return (
            <Link
              key={i}
              href={link.route}
              className={cn("flex items-center gap-4 rounded-lg p-4", {
                "bg-blue-600": isActive,
              })}
            >
              {link.icon}

              <p className="truncate text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
