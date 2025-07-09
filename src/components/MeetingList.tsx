"use client";

import { Calendar, CirclePlus, UserRoundPlus, Video } from "lucide-react";
import HomeCard from "./ui/HomeCard";
import { useState } from "react";

interface Meet {
  meetingType: "schedule" | "join" | "instant" | undefined;
}

const MeetingList = () => {
  const [meetingState, setMeetingState] = useState<Meet>();

  const MeetingType = [
    {
      title: "New Meeting",
      description: "start instant meeting.",
      icon: <CirclePlus />,
      className: "bg-blue-600",
      action: "instant",
    },
    {
      title: "Join Meeting",
      description: "via invitaion link.",
      icon: <UserRoundPlus />,
      className: "bg-orange-600",
      action: "join",
    },
    {
      title: "Schedule Meet",
      description: "Plan your meet.",
      icon: <Calendar />,
      className: "bg-purple-600",
      action: "join",
    },
    {
      title: "View Recordings",
      description: "Check your recordings.",
      icon: <Video />,
      className: "bg-yellow-600",
      action: "join",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {MeetingType.map((card, i) => (
        <HomeCard
          key={i}
          title={card.title}
          description={card.description}
          icon={card.icon}
          onClick={() => {}}
          className={card.className}
        />
      ))}
    </section>
  );
};

export default MeetingList;
