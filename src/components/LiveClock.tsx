"use client";

import { useEffect, useState } from "react";

const LiveClock = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
      });
      const currentDate = new Intl.DateTimeFormat("en-IN", {
        dateStyle: "full",
        timeZone: "Asia/Kolkata",
      }).format(now);
      setTime(currentTime);
      setDate(currentDate);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-[#1e2939c4] w-fit md:p-4 p-2 rounded-2xl shadow-2xl">
      <h1 className="text-4xl font-extrabold lg:text-5xl text-white">{time}</h1>
      <p className="lg:text-2xl text-lg font-medium text-white">{date}</p>
    </div>
  );
};

export default LiveClock;
