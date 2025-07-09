import React, { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface props {
  open: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  buttonText?: string;
  handleClick?: () => void;
  children?: ReactNode;
  image?: undefined;
}

const MeetingModel = ({
  open,
  onClose,
  title,
  className,
  buttonText,
  handleClick,
  image,
  children,
}: props) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="flex w-full  max-w-[566px] flex-col gap-4 border-none bg-gray-800 px-6 py-9 text-white ">
        <div className="flex flex-col items-center gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="Image" width={70} height={70} />
            </div>
          )}
          <DialogTitle
            className={cn(
              "xl:text-4xl lg:text-3xl text-lg  font-bold leading-[42px]",
              className
            )}
          >
            {title}
          </DialogTitle>
          {children}
          <Button
            onClick={handleClick}
            className="bg-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0 w-fit px-6 py-4"
          >
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModel;
