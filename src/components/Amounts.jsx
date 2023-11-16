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
    <div className="w-full flex flex-col md:flex-row md:space-x-2 justify-between mt-4 space-y-4 md:space-y-0">
      <Amouttrackcard
        name="Next Payout"
        amount="₹2,312.23"
        display="block"
        bcolor="#146EB4"
        ht="h-36"
        displaybottom="block"
        textcolor="white"
        maintextcolor="white"
        ordercolor="#FFFFFF"
        arrowicon={<RightArrow />}
        questionicon={<Questionmark />}
        ordernum="23 Orders"
      />
      <Amouttrackcard
        name="Amount Pending"
        amount="₹92,312.20"
        display="block"
        bcolor="#FFFFFF"
        ht="h-28"
        displaybottom="hidden"
        textcolor="[#4D4D4D]"
        maintextcolor="[#1A181E]"
        ordercolor="#146EB4"
        arrowicon={<RightArrowBlue />}
        questionicon={<Navicon1 />}
        ordernum="13 Orders"
      />
      <Amouttrackcard
        name="Amount Processed"
        amount="₹23,92,312.19"
        display="hidden"
        bcolor="#FFFFFF"
        ht="h-28"
        displaybottom="hidden"
        textcolor="[#4D4D4D]"
        maintextcolor="[#1A181E]"
        questionicon={<Navicon1 />}
      />
    </div>
  );
};

export default Amounts;
