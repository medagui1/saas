import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import Button from "./Button";

const NavBar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  useEffect(() => {
    if (isMenuShown) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
     return () => {
      document.body.style.overflow = 'auto'
     }
  }, [isMenuShown])

  return (
    <nav className="flex justify-between px-24 max-lg:px-4  pb-12 items-center w-full relative ">
      <div className="flex max-sm:gap-4 gap-12">
        <img
          src="icons/hamburger.svg"
          alt=""
          className="lg:hidden"
          onClick={() => setIsMenuShown(!isMenuShown)}
        />
        <img src="icons/logo.png" alt="Logo" />
      </div>

          <div className={`bg-[#29252695] h-[100vh]  absolute z-30 top-0 right-0 mr-[-8px] mt-[-16px] transition-[width, opacity] duration-500 ease-in-out ${isMenuShown ? "opacity-1 w-[100%]" : "opacity-0 w-0"}`} onClick={() => setIsMenuShown(!isMenuShown)}>

          </div>
          <div className={`bg-secondary text-white absolute top-0  h-[100vh] z-50  mt-[-16px] justify-center items-center flex flex-col text-xl gap-6 font-semibold transition-[left, opacity] duration-500 ease-in-out w-[80%] ${isMenuShown ? "left-0 opacity-1" : " left-[-100%] opacity-0"}`}>
            <img
              src="icons/close.svg"
              alt=""
              className="absolute top-0 right-0 m-4"
              onClick={() => setIsMenuShown(!isMenuShown)}
            />

            {navLinks.map((link, index) => (
              <a href={link.link} key={link.name}>
                <p className={`${link.selected && "text-[#292526]"} translate-x-[-200px] opacity-0 ${isMenuShown && 'translate-x-[0] opacity-100'} transition-[transform, opacity] duration-[.6s]  ease-in-out`} style={{'transitionDelay' : `${index * 80}ms `}}>
                  {link.name}
                </p>
              </a>
            ))}
          </div>

      <div className={`flex gap-12 font-bold uppercase max-lg:hidden`}>
        {navLinks.map((link) => (
          <a href={link.link} key={link.name}>
            <p className={`${link.selected && "text-secondary"} `}>
              {link.name}
            </p>
          </a>
        ))}
      </div>
      <Button text="Get started" />
    </nav>
  );
};

export default NavBar;
