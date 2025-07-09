import { Metadata } from "next";
import Banner from "@/assets/Banner.jpg";
import MeetingList from "@/components/MeetingList";
import LiveClock from "@/components/LiveClock";

export const metadata: Metadata = {
  title: "Zura • We create emotions",
  description: "Welcome to zura a real time meet",
};

const Home = () => {
  return (
    <section className="flex flex-col gap-10 size-full">
      <div
        className="h-[300px] w-full rounded-[20px] bg-cover bg-no-repeat shadow-2xl"
        style={{
          backgroundImage: `url("${Banner.src}")`,
        }}
      >
        <div className="flex h-full flex-col justify-between max-md:py-4 max-md:px-4 lg:p-10">
          <h1 className="bg-[#1e2939c4] w-fit p-2 rounded text-white shadow-2xl hover:scale-105 transition-all cursor-pointer text-base font-normal">
            Upcoming meeting at: 12:30
          </h1>
          <LiveClock />
        </div>
      </div>
      <MeetingList />
    </section>
  );
};

export default Home;
