import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-[1000] w-full backdrop-blur-md bg-black/40 border-b border-white/10 shadow-sm px-6 sm:px-16 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <img
        src={logo}
        alt="Zerofy Technologies Logo"
        className="w-[140px] h-auto max-h-[44px] sm:w-[160px] sm:max-h-[48px] object-contain"
      />

      {/* Desktop Nav */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              i !== navLinks.length - 1 ? 'mr-10' : ''
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(prev => !prev)}
        />

        {/* Mobile Dropdown */}
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black/90 backdrop-blur-md absolute top-20 right-4 min-w-[180px] rounded-xl shadow-lg z-50`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  i !== navLinks.length - 1 ? 'mb-4' : ''
                }`}
              >
                <a href={`#${nav.id}`} onClick={() => setToggle(false)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
