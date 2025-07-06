import React from "react";

interface props {
  params: {
    id: string;
  };
}

const Meeting = ({ params }: props) => {
  return <div>Meeting Id: {params.id}</div>;
};

export default Meeting;
