import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  function handleScroll() {
    const scrollTop = window.scrollY;
    const navbar = document.querySelector("#navbar");
    if (scrollTop > 0) {
      navbar.classList.add("shadow-md");
    } else {
      navbar.classList.remove("shadow-md");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionIds = ["home", "moving", "plans", "about", "contact"];

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-10 mx-auto flex h-24 items-center justify-between bg-violet-50 px-8"
    >
      <img
        src={require("../assets/icon_and_logo/ssm_logo.png")}
        alt="SwiftShift Movers"
        className="w-36 pt-4"
      />
      <ul className="hidden w-full justify-end text-sm font-semibold md:flex lg:text-xl ">
        {sectionIds.map((id) => (
          <li
            key={id}
            className="cursor-pointer border-b-4 border-transparent px-1 py-4 hover:border-violet-900 hover:text-violet-900"
          >
            <ScrollLink
              to={id}
              smooth={true}
              duration={500}
              className="px-6 py-5"
              offset={id === "about" || id === "moving" ? -200 : 0}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block cursor-pointer md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-violet-900 bg-[#f3f1ff] duration-300 ease-in-out"
            : "fixed left-[-100%]"
        }
      >
        <ul className="p-4 text-lg font-semibold uppercase">
          {sectionIds.map((id) => (
            <li key={id} className="cursor-pointer p-4 hover:text-violet-900">
              <ScrollLink to={id} smooth={true} duration={500}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
