import React from "react";
import { useState, useEffect } from "react";
import Dashcomp from "./dashcomp";
import {
  Analytics,
  Appearence,
  Audience,
  Credits,
  Delivery,
  Discount,
  Dropdown,
  Home,
  Marketing,
  Orders,
  Payouts,
  Pluginimg,
  Products,
} from "../assets/images";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const checkScreenSize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="bg-[#1E2640] w-full  md:w-[224px]  md:h-screen  flex flex-col justify-between">
      <div>
        <div className="flex items-center ml-2 md:ml-[8%] md:mt-[5%] ">
          <div>
            <img src="logo.png" alt="" width="39px" height="39px" />
          </div>
          <div className="ml-[4%]">
            <div className=" text-white  text-sm mt-[1%] font-galano-grotesque  ">
              Nishyan
            </div>
            <div className="text-gray-300 text-sm underline">Visit Store</div>
          </div>
          <div className="md:ml-[20%] ml-2">
            <Dropdown />
          </div>
          <div className="md:hidden ml-auto mr-4">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none"
            >
              {isMenuOpen ? "X" : "☰"}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className=" mx-[30%] md:mx-2 mt-6  ">
            <Dashcomp compo={<Home />} name="Home" />
            <Dashcomp compo={<Orders />} name="Orders" />
            <Dashcomp compo={<Products />} name="Products" />
            <Dashcomp compo={<Delivery />} name="Delivery" />
            <Dashcomp compo={<Marketing />} name="Marketing" />
            <Dashcomp compo={<Analytics />} name="Analytics" />
            <Dashcomp compo={<Payouts />} name="Payouts" bgcolor="[#353C53]" />
            <Dashcomp compo={<Discount />} name="Discounts" />
            <Dashcomp compo={<Audience />} name="Audience" />
            <Dashcomp compo={<Appearence />} name="Appearence" />
            <Dashcomp compo={<Pluginimg />} name="Plugins" />
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div className="flex h-[54px] bg-[#353C53] mx-3 mb-3 mt-4 md:mt-0 justify-center items-center space-x-2 rounded-md ">
          <div className="h-[36px] w-[36px] bg-[#FFFFFF1A] flex items-center justify-center rounded-md ">
            <Credits />
          </div>
          <div>
            <p className="text-[14px] text-gray-300">Available Credits</p>
            <p className="text-[16px] text-[#FFFFFF] ">222.10</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
