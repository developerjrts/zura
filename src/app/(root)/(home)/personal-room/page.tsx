import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Personal Room • Zura",
  description: "Create personal room & start real time meet with Zura",
};

const PersonalRoom = () => {
  return (
    <section className="flex flex-col gap-10 size-full">
      <h1 className="text-3xl font-bold">Personal Room</h1>
    </section>
  );
};

export default PersonalRoom;
