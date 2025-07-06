import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

const MeetingPage = async ({ params }: PageProps) => {
  const { id } = await params;
  return <div>Meeting Id: {id}</div>;
};

export default MeetingPage;
