import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <nav className="mx-auto flex h-24 max-w-[1300px] items-center justify-between px-8 lg:max-w-[1800px]">
      <img
        src={require("../assets/icon_and_logo/ssm_logo.png")}
        alt="SwiftShift Movers"
        className="w-36 pt-4"
      />
      <ul className="hidden w-full justify-end text-sm font-semibold md:flex lg:text-lg ">
        <li className="cursor-pointer border-b-4 border-transparent p-4 hover:border-violet-900 hover:text-violet-900">
          Home
        </li>
        <li className="cursor-pointer border-b-4 border-transparent p-4 hover:border-violet-900 hover:text-violet-900">
          Company
        </li>
        <li className="cursor-pointer border-b-4 border-transparent p-4 hover:border-violet-900 hover:text-violet-900">
          Type of Vehicles
        </li>
        <li className="cursor-pointer border-b-4 border-transparent p-4 hover:border-violet-900 hover:text-violet-900">
          Our Team
        </li>
        <li className="cursor-pointer border-b-4 border-transparent p-4 hover:border-violet-900 hover:text-violet-900">
          Contact
        </li>
      </ul>

      <div onClick={handleNav} className="block cursor-pointer md:hidden">
        {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-violet-900 bg-[#f3f1ff] duration-500 ease-in-out md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <ul className="p-4 text-lg font-semibold uppercase">
          <li className="cursor-pointer p-4 hover:text-violet-900">Home</li>
          <li className="cursor-pointer p-4 hover:text-violet-900">Company</li>
          <li className="cursor-pointer p-4 hover:text-violet-900">
            Type of Vehicles
          </li>
          <li className="cursor-pointer p-4 hover:text-violet-900">Our Team</li>
          <li className="cursor-pointer p-4">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
