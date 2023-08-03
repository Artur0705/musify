import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

// This component is used to render navigation links based on the provided links array.
const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

// The main sidebar component which contains navigation links, logo, and a mobile view toggler.
const Sidebar = () => {
  // State to manage if the mobile menu is open or not.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hook from react-router to programmatically navigate between routes.
  const navigate = useNavigate();

  return (
    <>
      {/* Sidebar for desktop view */}
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
          className="w-full h-14 object-contain cursor-pointer"
        />
        <NavLinks />
      </div>

      {/* Mobile menu toggler icons */}
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile menu that slides in from the left */}
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
