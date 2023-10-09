import React from "react";

const Capsule = ({ color, name, textcolor }) => {
  return (
    <div
      className={`h-[32px] bg-${color} w-[80%] md:w-[117px] text-${textcolor} flex justify-center items-center rounded-2xl`}
    >
      {name}
    </div>
  );
};

export default Capsule;