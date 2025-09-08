"use client"

import React, { useEffect, useRef, useState } from "react";
const Header = ({headerBgWhite, mortgagePageColor, closePopup}) => {

  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const sectionHero = document.querySelector(".section-hero");

    if (!sectionHero) return;

    const handleScroll = () => {
      const tenVh = (10 * window.innerHeight) / 100; // Convert 10vh to pixels
      const heroBottom = sectionHero.getBoundingClientRect().bottom;

      // When the bottom of section-hero is less than or equal to 10vh, set scrolled to true
      if (heroBottom <= tenVh) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case the user reloads mid-scroll

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(scrolled);
  }, [scrolled])

  
  return (
    <header  className={`header sticky top-0 z-20  transition-all ease-in-out duration-300 `}>
      <nav className={`m-auto text-white flex ${closePopup?"bg-white":mortgagePageColor} ${scrolled || headerBgWhite?" bg-white":" bg-primary"} w-full items-center justify-between p-5 md:py-5 md:px-10 xl:px-16 xl:py-6`}>
        <div className="flex gap-12">
          <h1 className={` ${scrolled || headerBgWhite?"text-black":"text-white"} text-[1.6rem] font-bold`}>Better</h1>
          <ul className={`hidden xl:flex ${scrolled || headerBgWhite?"text-black":"text-white"}  font-medium  text-[17px] space-x-20 items-center`}>
            <li>Buy </li>
            <li>Refinance </li>
            <li>HELOC </li>
            <li>Rates </li>
            <li>Better+</li>
          </ul>
        </div>

        {/* right items  */}
        <ul className="flex items-center text-[17px] space-x-3 md:space-x-10">
          <li className="">
            <div className="group min-[520px]:relative">
              <div className="transition-all ease-in-out duration-300 border rounded-full p-2 md:p-3.5 border-strokeBorder group-hover:bg-backgroundSecondary group-hover:border-backgroundSecondary">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  className="transition-all ease-in-out group-hover:[&amp;_path]:fill-interactiveForegroundInversePrimary [&amp;_path]:fill-white h-3 w-3 md:h-4 md:w-4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                    fill="#292B29"
                  ></path>
                </svg>
              </div>
              <div className="absolute font-medium whitespace-nowrap  invisible left-1 min-[520px]:left-auto right-0 pt-2 group-hover:visible">
                <div className=" bg-white text-black px-10 py-7 rounded-lg w-80 shadow-md">
                  Call us anytime at&nbsp;
                  <a
                    className="underline hover:text-textHighlight"
                    href="tel:4155238837"
                  >
                    415-523-8837
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className={` ${scrolled || headerBgWhite?"text-black":"text-white"} md:block hidden`}>Sign in</li>
          <li>
            <button className={`${!scrolled || headerBgWhite?"text-black bg-[#1EE07F]":"text-white bg-secondary"}  text-center text-[15px] md:text-lg transition-all ease-in-out duration-150 font-semibold px-3 py-1 md:px-8 md:py-3 rounded-full`}>
              Continue
            </button>
          </li>
          <li className="block xl:hidden">
            <button
              className={` flex items-center font-normal transition-all ease-in-out duration-300 group-hover:bg-backgroundSecondary ${ headerBgWhite || scrolled?"text-gray-600":"text-white"} group-hover:text-textPrimary text-textInversePrimary hover:text-textInversePrimary hover:bg-inherit"
              aria-label="open mobile nav bar`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu "
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
