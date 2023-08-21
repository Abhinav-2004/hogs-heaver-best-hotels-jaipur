import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [state, setState] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [isActive, setIsActive] = useState(true);
  /*
  if(){
    check from props or parasm whether which page is active and update state
  }
  */
  const option1item = [
    { link: "/", value: "Three Best Hotels In - By City" },
    { link: "/", value: "Best Hotels In - By Country" },
    { link: "/", value: "Africa" },
    { link: "/", value: "Asia" },
    { link: "/", value: "Australia, New Zealand" },
    { link: "/", value: "Europe" },
    { link: "/", value: "North America" },
    { link: "/", value: "South & Central America" },
    { link: "/", value: "All 5 Star" },
  ];
  return (
    <div className="relative z-50 mt-[2%] ml-[10vw] mr-[10vw] flex justify-between items-center">
      <div className="flex justify-center items-center">
        <div>
          <img className="w-16" src="/assets/images/logo.png" />
        </div>
      </div>
      <div>
        <div className="flex text-xl justify-center items-center gap-5">
          <div className="flex justify-center items-center font-roboto">
            <div className="flex justify-center">
              <div onMouseLeave={() => setOpen1(false)} className="relative">
                <button
                  onMouseOver={() => setOpen1(true)}
                  className="flex items-center"
                >
                  <Link to={"/"}>
                    <button>
                      <span className="flex justify-center items-baseline text-lg font-roboto">
                        Best Hotels In-All guides
                      </span>
                    </button>
                  </Link>
                </button>
                <div
                  className={`absolute left-[-380%] flex justify-between items-center w-[70vw] pb-0 rounded-lg shadow-xl border-4 border-t-black ${
                    open1 ? "showNavbarItem":"dontShowNavbarItem"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center">
                    {option1item.map((ele) => {
                      return (
                        <div
                          className={`navbar-buttons flex w-[20vw] justify-center items-center bg-[#EEEEEE] ${
                            isActive ? "text-black" : "text-[#00000062]"
                          } px-10 py-2 text-[15px] border-2 border-b-slate-200`}
                        >
                          <Link to={ele.link}>{ele.value}</Link>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col justify-center items-center gap-10 w-[100%] h-[57vh] bg-[#ffffff]">
                    <div className="flex justify-center items-center text-3xl">
                      Best Hostels In - All Guide
                    </div>
                    <div className="flex flex-row justify-center items-center gap-5">
                      <div className="flex flex-col gap-2 justify-between
                      ">
                        <img
                          className="w-[18vw] p-6"
                          src="assets/images/navbarfirstoptionimg1.jpg"
                        />
                        <span className="text-sm text-center w-[17vw] flex justify-center items-center">3 Best Hostels in Sarajevo – A Budget Traveller Collection in the Bewitching Balkans</span>
                      </div >
                      <div className="flex flex-col gap-2 justify-between
                      ">
                        <img
                          className="w-[18vw] p-6"
                          src="assets/images/navbarfirstoptionimg2.jpg"
                        />
                        <span className="text-sm text-center w-[17vw] flex justify-center items-center">3 Best Hostels in Sarajevo – A Budget Traveller Collection in the Bewitching Balkans</span>
                      </div >
                      <div className="flex flex-col gap-2 justify-between
                      ">
                        <img
                          className="w-[18vw] p-6"
                          src="assets/images/navbarfirstoptionimg1.jpg"
                        />
                        <span className="text-sm text-center w-[17vw] flex justify-center items-center">3 Best Hostels in Sarajevo – A Budget Traveller Collection in the Bewitching Balkans</span>
                      </div >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center font-roboto">
            <div className="flex justify-center">
              <div onMouseLeave={() => setOpen2(false)} className="relative">
                <button
                  onMouseOver={() => setOpen2(true)}
                  className="flex items-center"
                >
                  <span className="flex text-lg font-roboto">Hostel Tips</span>
                </button>
                <ul
                  className={`absolute flex flex-col justify-center items-center w-[50vw] py-2 mt-2 rounded-lg shadow-xl ${
                    open2 ? "block" : "hidden"
                  }`}
                >
                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                    Dropdown List 1
                  </li>
                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                    Dropdown List 2
                  </li>
                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                    Dropdown List 3
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <AiOutlineSearch size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
