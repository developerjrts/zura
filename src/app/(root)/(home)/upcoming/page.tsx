import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Upcoming meets • Zura",
  description: "Upcoming meets details and more",
};

const Upcoming = () => {
  return (
    <section className="flex flex-col gap-10 size-full">
      <h1 className="text-3xl font-bold">Upcoming</h1>
    </section>
  );
};

export default Upcoming;
