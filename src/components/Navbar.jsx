import React from "react";
import { Navicon1, Navicon2, Navicon3, Searchicon } from "../assets/images";

const Navbar = () => {
  return (
    <div className="w-[100%] h-[64px] bg-[#FFFFFF] flex px-[2%] space-x-[4%] items-center border-b border-[#D9D9D9] ">
      <div className="flex w-[29.6%] space-x-[5%] items-center ">
        <h3 className="text-[20px] font-semibold text-xl pb-1 ">Payouts</h3>
        <div className="flex items-center space-x-2  ">
          <Navicon1 />
          <p className="text-[#4D4D4D] text-[12px] hidden sm:block pb-1 ">
            How it works
          </p>
        </div>
      </div>
      <div className="w-[32.9%] bg-[#E6E6E6] flex h-[70%] items-center pl-5 space-x-3 rounded-lg relative">
        <Searchicon />
        <input
          className="text-[#808080] pb-1 w-[60%] sm:w-full sm:block outline-none bg-transparent caret-opacity-100"
          placeholder="Search features, tutorials, etc."
        />
      </div>

      <div className="flex w-[29.6%] justify-end space-x-2 sm:space-x-4 pr-4 sm:pr-0  ">
        <Navicon2 />
        <Navicon3 />
      </div>
    </div>
  );
};

export default Navbar;
