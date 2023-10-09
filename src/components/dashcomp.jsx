import React from "react";

const Dashcomp = ({ compo, name, bgcolor }) => {
  return (
    <div
      className={`flex space-x-[13px] mt-1 bg-${bgcolor} py-[2px] pl-3 rounded-lg items-center h-[30px] `}
    >
      <div>{compo}</div>
      <div className="text-gray-300">{name}</div>
    </div>
  );
};

export default Dashcomp;
