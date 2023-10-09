import React from "react";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Amounts from "./Amounts";
import Capsule from "./Capsule";
import Table from "./Table";
import Tabletop from "./Tabletop";

const Herosection = () => {
  return (
    <div className="w-screen h-full md:h-screen bg-[#F2F2F2] flex flex-col items-center ">
      <Navbar />
      <div className="w-[90%] md:w-full md:px-[3%] flex flex-col mt-4 md:overflow-y-auto ">
        <Overview />
        <Amounts />
        <div>
          <p className="text-[#1A181E] font-semibold text-[16px] mt-4 ">
            Transactions | This month
          </p>
          <div className="flex space-x-4 mt-4 ">
            <Capsule
              color="[#E6E6E6]"
              name="Payouts (22)"
              textcolor="[#808080]"
            />
            <Capsule
              color="[#146EB4]"
              name="Refunds (6)"
              textcolor="[#FFFFFF]"
            />
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg mt-4 mb-4 h-[400px] ">
          <Tabletop />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
