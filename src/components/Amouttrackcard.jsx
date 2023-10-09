import React from "react";

export const Amouttrackcard = ({
  name,
  amount,
  display,
  height,
  bgcolor,
  displaybottom,
  textcolor,
  ordercolor,
  arrowicon,
  questionicon,
}) => {
  return (
    <div
      className={`w-full  md:w-[32%] min-w-[270px] h-${height} rounded-lg flex flex-col justify-between bg-${bgcolor} `}
    >
      <div className="text-[#146EB4]"></div>
      <div className="mx-5 mt-4 flex flex-col space-y-3  ">
        <div className="flex space-x-2 items-center">
          <p className={`text-${textcolor}`}>{name}</p>
          {questionicon}
        </div>
        <div className="flex w-full justify-between items-center ">
          <p className={`text-[32px] font-semibold text-${textcolor} `}>
            {amount}
          </p>
          <div className={`flex  ${display} `}>
            <p className={`underline text-${ordercolor}`}>13 Orders</p>
            {arrowicon}
          </div>
        </div>
      </div>

      <div
        className={`bg-[#0E4F82] w-full h-[40px] rounded-lg flex justify-between items-center px-5 ${displaybottom} `}
      >
        <p className="text-white">Next Payout Date:</p>
        <p className="text-white">Today,04:00PM</p>
      </div>
    </div>
  );
};
