import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Previous Room • Zura",
  description: "Previous meets details and more",
};

const Previous = () => {
  return (
    <section className="flex flex-col gap-10 size-full">
      <h1 className="text-3xl font-bold">Previous</h1>
    </section>
  );
};

export default Previous;
