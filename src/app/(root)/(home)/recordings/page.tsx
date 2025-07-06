import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: " All meet recording • Zura",
  description: "recording of you meets details and more",
};

const Recordings = () => {
  return (
    <section className="flex flex-col gap-10 size-full">
      <h1 className="text-3xl font-bold">Recordings</h1>
    </section>
  );
};

export default Recordings;
