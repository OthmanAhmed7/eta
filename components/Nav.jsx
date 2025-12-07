"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [switchColor, setSwitchColor] = useState(false);

  useEffect(() => {
    const whiteBackground = () => {
      if (window.pageYOffset >= 200) {
        setSwitchColor(true);
      } else {
        setSwitchColor(false);
      }
    };

    window.addEventListener("scroll", whiteBackground);
  }, []);

  return (
    <section
      className={`px-[1rem] fixed top-0 left-0 right-0 flex mx-auto justify-center z-50 ${
        switchColor === true ? "bg-white shadow-2xl" : ""
      } transition duration-500 ease-out`}
    >
      <nav className="flex justify-between items-center max-w-[1440px] w-full py-[1rem]">
        <a href="/">
          <Image
            src="/img/logo.avif"
            height={1000}
            width={1000}
            alt="Eta logo"
            className="w-[7rem] h-[3.5rem]"
          />
        </a>

        <RiMenuFoldFill
          className={`w-[2rem] h-[2rem] cursor-pointer ${
            switchColor === true ? "text-black" : "text-white"
          } transition duration-500 ease-out`}
          onClick={() => {
            setToggleNav(true);
          }}
        />
      </nav>

      <div
        onClick={() => {
          setToggleNav(false);
        }}
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
        } h-[100vh] bg-white right-0 top-0 z-30 w-[75%] lg:w-[45%] transition duration-700 ease-out overflow-scroll`}
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
              <Link href="/">
                <li>Home</li>
              </Link>{" "}
              <Link href="/Gallery">
                <li>Gallery</li>
              </Link>{" "}
              <Link href="/Services">
                <li>Services</li>
              </Link>{" "}
              <Link href="/Founder">
                <li>Founder</li>
              </Link>{" "}
              <Link href="/AboutUs">
                <li>About Us</li>
              </Link>
              <Link href="/ContactUs">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          <Image
            width={1000}
            height={1000}
            alt="divider"
            src="/img/divider-2.svg"
            className="flex justify-center items-center w-[70%] h-[10rem]"
          />

          <div className="text-center flex flex-col gap-[1rem] font-[500] mb-[3rem]">
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
