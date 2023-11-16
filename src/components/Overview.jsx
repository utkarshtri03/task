import React from "react";
import { Dropdownoverview } from "../assets/images";

const Overview = () => {
  return (
    <div className="flex justify-between items-center ">
      <p className="text-[#1A181E] text-lg font-semibold ">Overview</p>
      <div className="flex h-[36px] items-center w-[120px]  sm:w-[130px]  justify-center sm:space-x-2 border border-[#D9D9D9] bg-white rounded-md ">
        <p className="text-[#4D4D4D] pb-1 ">This Month</p>
        <Dropdownoverview />
      </div>
    </div>
  );
};

export default Overview;
