"use client";

import Link from "next/link";
import React, { useState } from "react";

import {
  HiOutlineMenuAlt3,
  HiOutlineUser,
} from "react-icons/hi";

import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Destinations",
      path: "/destinations",
    },
    {
      name: "My Bookings",
      path: "/bookings",
    },
    {
      name: "Admin",
      path: "/admin",
    },
  ];

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-[1400px] mx-auto h-[75px] px-4 md:px-6 flex items-center justify-between">
        
        {/* Left Side */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-[15px] font-medium text-black hover:text-[#14B9E5] transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

       
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-black"
        >
          {open ? (
            <IoClose size={30} />
          ) : (
            <HiOutlineMenuAlt3 size={30} />
          )}
        </button>

        <Link
          href="/"
          className="text-[#14B9E5] text-2xl md:text-4xl font-bold"
        >
          Wanderlast
        </Link>

        
        <div className="hidden sm:flex items-center gap-5">
          
          <button className="flex items-center gap-1 text-sm md:text-[15px] text-black hover:text-[#14B9E5] transition">
            <HiOutlineUser size={18} />
            Profile
          </button>

          <Link
            href="/login"
            className="text-sm md:text-[15px] text-black hover:text-[#14B9E5] transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="text-sm md:text-[15px] font-medium text-black hover:text-[#14B9E5] transition"
          >
            Sign Up
          </Link>
        </div>

      
        <div className="sm:hidden flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-black"
          >
            Login
          </Link>
        </div>
      </nav>

     
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-5 pt-2 border-t border-gray-100 bg-white flex flex-col gap-4">
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-black hover:text-[#14B9E5] transition"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-4 pt-2 border-t border-gray-100 sm:hidden">
            
            <Link
              href="/profile"
              className="flex items-center gap-2 text-[15px] font-medium text-black"
            >
              <HiOutlineUser size={18} />
              Profile
            </Link>

            <Link
              href="/signup"
              className="text-[15px] font-medium text-black"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;