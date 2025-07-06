import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const MeetingPage = ({ params }: PageProps) => {
  return <div>Meeting Id: {params.id}</div>;
};

export default MeetingPage;
