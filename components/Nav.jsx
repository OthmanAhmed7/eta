"use client";

import Image from "next/image";
import React, { useState } from "react";

import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <section className="fixed flex mx-auto w-[100%] h-[5rem] z-50">
      <nav className="flex justify-between items-center max-w-[1440px] w-full px-[1rem] py-[1rem]">
        <a href="#">
          <Image
            src="/img/logo.png"
            height={1000}
            width={1000}
            alt="Eta logo"
            className="w-[7rem] h-[3.5rem]"
          />
        </a>

        <RiMenuFoldFill
          className="w-[2rem] h-[2rem] text-white"
          onClick={() => {
            setToggleNav(true);
          }}
        />
      </nav>

      <div
        className={`${
          toggleNav === false ? "translate-x-[100%]" : ""
        } w-[100%] h-[100vh] fixed bg-black/30 transition duration-700 ease-out`}
      ></div>

      {/* --------------------------------------------------------
      ----------------------- Side Nav Menu ----------------------
      ---------------------------------------------------------*/}

      <nav
        className={`fixed ${
          toggleNav === false ? "translate-x-[100%]" : ""
        } h-[100vh] bg-white right-0 top-0 z-30 w-[35%] transition duration-700 ease-out`}
      >
        <RiMenuUnfoldFill
          className="absolute z-50 right-[5rem] top-[3rem] w-[2rem] h-[2rem] cursor-pointer"
          onClick={() => {
            setToggleNav(false);
          }}
        />

        <div className="flex flex-col mt-[7rem] justify-center items-center">
          <div>
            <ul className="text-center flex flex-col gap-[1.5rem] text-[1.8rem] font-[600] tracking-[.1rem]">
              <li>Home</li>
              <li>Gallery</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <Image
            width={1000}
            height={1000}
            alt="divider"
            src="/img/divider-2.svg"
            className="flex justify-center items-center w-[70%] h-[10rem]"
          />

          <div className="text-center flex flex-col gap-[1rem] font-[500]">
            <div>emplyee@eta.com</div>

            <div>
              <p>(002) 0100 008 3181</p>
              <p>(002) 0100 522 0653</p>
            </div>

            <div>20, Villa Hanin, El-Bahr st.</div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
