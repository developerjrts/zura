"use client";

import { Calendar, CirclePlus, UserRoundPlus, Video } from "lucide-react";
import HomeCard from "./ui/HomeCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModel from "./MeetingModel";

const MeetingList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "schedule" | "join" | "instant" | undefined
  >();

  const handleMeetingState = (type: "schedule" | "join" | "instant") => {
    setMeetingState(type);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const MeetingType = [
    {
      title: "New Meeting",
      description: "Start instant meeting.",
      icon: <CirclePlus />,
      className: "bg-blue-600",
      action: () => handleMeetingState("instant"),
    },
    {
      title: "Join Meeting",
      description: "Via invitation link.",
      icon: <UserRoundPlus />,
      className: "bg-orange-600",
      action: () => handleMeetingState("join"),
    },
    {
      title: "Schedule Meet",
      description: "Plan your meet.",
      icon: <Calendar />,
      className: "bg-purple-600",
      action: () => handleMeetingState("schedule"),
    },
    {
      title: "View Recordings",
      description: "Check your recordings.",
      icon: <Video />,
      className: "bg-yellow-600",
      action: () => handleNavigation("/recordings"),
    },
  ];

  const createMeeting = () => {};

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {MeetingType.map((card, i) => (
        <HomeCard
          key={i}
          title={card.title}
          description={card.description}
          icon={card.icon}
          onClick={card.action}
          className={card.className}
        />
      ))}
      <MeetingModel
        open={meetingState === "instant"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingList;
