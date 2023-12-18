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

      {isMenuShown && (
        <div className="overflow-hidden">
          <div className="bg-[#00000095] w-[50%] h-[100vh] absolute z-30 top-0 right-0 mr-[-8px] mt-[-16px]" onClick={() => setIsMenuShown(!isMenuShown)}>

          </div>
          <div className="bg-secondary text-white absolute top-0 left-0 h-[100vh] z-30 ml-[-8px] mt-[-16px] justify-center items-center flex flex-col w-[80%] text-xl gap-6 font-semibold">
            <img
              src="icons/close.svg"
              alt=""
              className="absolute top-0 right-0 m-4"
              onClick={() => setIsMenuShown(!isMenuShown)}
            />

            {navLinks.map((link) => (
              <a href={link.link} key={link.name}>
                <p className={`${link.selected && "text-black"} `}>
                  {link.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

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
