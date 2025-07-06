import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home • Zura",
  description: "Welcome to zura a real time meet",
};

const Home = () => {
  return (
    <section className="flex flex-col gap-10 size-full">
      <h1 className="text-3xl font-bold">Home</h1>
    </section>
  );
};

export default Home;
