import React from "react";
import { navLinks, social_links } from "../constants";
import { animate } from "../constants/animate";

const Footer = () => {
  return (
    <footer className="bg-[#292526] flex justify-between items-center py-40 max-sm:py-8 max-sm:px-8 px-32 max-lg:flex-col max-lg:gap-20 max-sm:gap-12 max-lg:justify-center relative z-10">
      <div className="">
        <img src="images/footer_logo.webp" alt="" data-aos='fade-right'/>
        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          {social_links.map((link, index) => (
            <div className="flex gap-2 items-end" key={link.link} data-aos={animate(index)}>
              <img
                src={link.icon}
                alt={link.link}
                className="max-sm:w-6 max-sm:h-6"
              />
              <p className="text-white max-sm:text-sm"> {link.link} </p>
            </div>
          ))}
        </div>

        
      </div>
      <div className="flex flex-col items-end gap-4 max-lg:items-center max-sm:mb-16">
        {navLinks.map((link) => (
          <a
            href=""
            className="font-bold text-white uppercase text-md max-sm:text-sm"
            data-aos='fade-left'
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="mt-8  absolute bottom-0 left-0 right-0  m-auto flex justify-center items-center mb-8" >
          <p className="text-start text-white max-sm:text-sm">Made with ❤️ by <a href="https://github.com/medagui1/saas">Medagui</a></p>
        </div>
    </footer>
  );
};

export default Footer;
