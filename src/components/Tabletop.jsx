import React from "react";
import { Downloadicon, Searchicon, Sorticon } from "../assets/images";

const Tabletop = () => {
  return (
    <div className="h-[40px] flex justify-between items-center   ">
      <div className="flex border h-full border-[#D9D9D9] w-[120px] sm:w-[248px] pl-3 space-x-2 items-center rounded-lg relative">
        <Searchicon />
        <input
          className="text-[#999999] w-[60%] sm:w-full sm:block outline-none bg-transparent caret-opacity-100 pb-1 "
          placeholder="Order ID transaction ID"
        />
      </div>
      <div className="flex h-full space-x-1 sm:space-x-4 ">
        <div className="flex border border-[#D9D9D9] items-center p-3 rounded-lg space-x-2 ">
          <p className="text-[#4D4D4D] pb-1 ">Sort</p> <Sorticon />
        </div>
        <div className="h-full border border-[#D9D9D9] flex items-center p-2 rounded-lg ">
          <Downloadicon />
        </div>
      </div>
    </div>
  );
};

export default Tabletop;
