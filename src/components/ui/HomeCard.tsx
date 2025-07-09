import { CirclePlus } from "lucide-react";
import React, { ReactNode } from "react";

interface props {
  title: string;
  description: string;
  icon: ReactNode;
  onClick?: () => void;
  className: string;
}

const HomeCard = ({ title, description, icon, onClick, className }: props) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col px-4 py-6 justify-between w-full xl:max-w-[270px] min-h-[220px] ${className} cursor-pointer rounded-[20px] shadow-2xl`}
    >
      <div className="flex items-center justify-center size-12 rounded-[10px] bg-[#ffffff1a] hover:bg-[#ffffff38] transition-all">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
