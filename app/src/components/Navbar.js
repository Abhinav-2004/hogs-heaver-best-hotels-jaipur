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
  const option1item=[
    {link:"/", value:"option1"},
    {link:"/", value:"option2"},
    {link:"/", value:"option3"},
    {link:"/", value:"option3"},
    {link:"/", value:"option5"},
    {link:"/", value:"option6"},
    {link:"/", value:"option7"}
]
  return (
    <div className="mt-[2%] mb-[2%] ml-[10vw] mr-[10vw] flex justify-between items-center">
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
                  <span className="flex justify-center items-baseline text-lg font-roboto" >Best Hotels In-All guides</span>
                </button>
                <div
                  className={`absolute left-[-45vw] flex justify-between items-center w-[70vw] pb-0 rounded-lg shadow-xl border-4 border-t-black ${
                    open1 ? "block " : "hidden"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center"> 
                 {option1item.map((element)=>{
                    return(
                        <div className="flex w-[20vw] justify-center items-center bg-[#EEEEEE] text-black px-10 py-2 text-lg border-2 border-b-slate-200">
                            {element.value}
                        </div>
                    )
                 })}</div> 
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
                  <span className="flex text-lg font-roboto" >Hostel Tips</span>
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
