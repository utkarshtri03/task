import React from "react";

export const Amouttrackcard = ({
  name,
  amount,
  display,
  ht,
  bcolor,
  displaybottom,
  textcolor,
  ordercolor,
  arrowicon,
  questionicon,
  ordernum,
  maintextcolor,
}) => {
  return (
    <div
      className={`w-full md:w-[32%] min-w-[240px] ${ht} rounded-lg flex flex-col justify-between bg-[${bcolor}]`}
    >
      <div className="mx-5 mt-3 flex flex-col space-y-2  ">
        <div className="flex space-x-2 items-center">
          <p className={`text-${textcolor} `}>{name}</p>
          <div className=" pt-1 ">{questionicon}</div>
        </div>
        <div className="flex w-full justify-between items-center ">
          <p
            className={`text-[32px] md:text-[26px] lg:text-[32px] font-semibold  text-${maintextcolor}`}
          >
            {amount}
          </p>
          <div className={`flex ${display} items-center pt-2 `}>
            <p
              className={`underline text-[${ordercolor}] md:text-sm lg:text-base pb-2 `}
            >
              {ordernum}
            </p>
            {arrowicon}
          </div>
        </div>
      </div>

      <div
        className={`bg-[#0E4F82] w-full h-[40px] rounded-lg flex justify-between items-center px-5 ${displaybottom}`}
      >
        <p className="text-white md:text-xs lg:text-base ">Next Payout Date:</p>
        <p className="text-white md:text-xs lg:text-base  ">Today, 04:00 PM</p>
      </div>
    </div>
  );
};
