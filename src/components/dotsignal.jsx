import React from "react";

export const Dotsignal = ({ status }) => {
  const dotClass = status === "Processing" ? "bg-gray-500" : "bg-green-500";
  return <div className={`w-[10px] h-[10px] rounded-full ${dotClass}`}></div>;
};
