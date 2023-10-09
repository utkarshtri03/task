import React from "react";
import {
  Navicon1,
  Questionmark,
  RightArrow,
  RightArrowBlue,
} from "../assets/images";
import { Amouttrackcard } from "./Amouttrackcard";

const Amounts = () => {
  return (
    <div className="w-[100%] flex flex-col md:flex-row md:space-x-2 justify-between mt-4  space-y-4 md:space-y-0  ">
      <Amouttrackcard
        name="Next Payout"
        amount="₹2,312.23"
        display="block"
        bgcolor="[#146EB4]"
        height="[154px]"
        displaybottom="block"
        textcolor="white"
        ordercolor="white"
        arrowicon={<RightArrow />}
        questionicon={<Questionmark />}
      />
      <Amouttrackcard
        name="Amount Pending"
        amount="₹92,312.20"
        display="block"
        bgcolor="white"
        height="[118px]"
        displaybottom="hidden"
        textcolor="[#4D4D4D]"
        ordercolor="[#146EB4]"
        arrowicon={<RightArrowBlue />}
        questionicon={<Navicon1 />}
      />
      <Amouttrackcard
        name="Amount Processed"
        amount="₹23,92,312.19"
        display="hidden"
        bgcolor="white"
        height="[118px]"
        displaybottom="hidden"
        textcolor="[#4D4D4D]"
        questionicon={<Navicon1 />}
      />
    </div>
  );
};

export default Amounts;
