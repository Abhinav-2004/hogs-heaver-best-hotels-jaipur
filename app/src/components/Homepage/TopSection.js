import React, { useEffect, useState } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { AiOutlineArrowRight, AiOutlineSmile } from "react-icons/ai";
import "./TopSection.css";
import { Link } from "react-router-dom";
const TopSection = () => {
  const [centertextstate, setCentertextstate] = useState(true);
  const centerTextcssbefore = "before-text";
  const centerTextcssafter =
    "center-text absolute text-center text-white font-roboto text-[300%] z-20 flex justify-center item-center";

  useEffect(() => {
    setTimeout(() => {
      setCentertextstate(false);
    }, 1500);
  }, [centertextstate]);
  return (
    <>
      <div>
        <img
          className="relative w-[100vw] h-[55vh] filter brightness-[25%] z-10"
          src="/assets/images/homepagebg1.jpg"
        />
      </div>
      <div
        className={centertextstate ? centerTextcssbefore : centerTextcssafter}
      >
        3 Best Hostels in Jaipur – Unexpected Luxury and Swanky Instagrammable
        Design
      </div>
      <div className="mt-[2%] flex justify-center items-center w-[97vw] ">
        <div className="flex justify-between flex-row w-[75vw] ">
          <div className="flex flex-col justify-start items-start p-7">
            <Breadcrumb
              spacing="5px"
              separator={<AiOutlineArrowRight size={10} color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  <span className="flex justify-center items-center text-[80%]">
                    Home
                  </span>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  <span className="flex justify-center items-center text-[80%]">
                    About
                  </span>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">
                  <span className="flex justify-center items-center text-[80%]">
                    Contact
                  </span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            <div className="mt-[4%] w-[100%] text-xl">
              We’ve collected the very best hostels in Jaipur for you, to entice
              you further! If you’re considering India as your next big
              adventure, we salute you. It’s a chaotic country with so many
              things to offer the outgoing traveller.
            </div>
            <div className="mt-[4%] w-[100%] text-xl">
              <span className="font-bold">Good To Know:</span> We have a
              detailed guide to the best hostels in India.
            </div>
            <div className="mt-[4%] w-[100%] text-xl">
              <span className="font-bold">Your shortcut:</span>
            </div>
            <div className="mt-[2%] w-[100%] text-xl">
              <div>
                <ol type="number">
                  <li>
                    <span className="font-bold">1. Blue Beds Hostel –</span> top
                    pick for female solo travellers
                  </li>
                  <li>
                    <span className="font-bold">2. The Hosteller Jaipur –</span>{" "}
                    one for backpackers
                  </li>
                  <li>
                    <span className="font-bold">3. Hoztel Jaipur –</span> great
                    for solo travellers
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-2 items-center mt-[4%] w-[100%] text-xl p-5 bg-[#717f8c]">
              <div className=" text-[5vw]">🤔</div>
              <div className="flex flex-col gap-2">
                <div className="font-bold text-[#ebe4e4]">
                  Any questions about hostels in Jaipur?
                </div>
                <div className="text-[#ebe4e4]">
                  Join our{" "}
                  <span className="facebook-group text-[#4194c7] font-bold  bg-[#ebe4e4]">
                    Facebook Group here!
                  </span>
                </div>
                <div className="text-[#ebe4e4]">
                  Ask your questions and connect with like-minded wanderers 🔥
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center mt-[4%] w-[100%] text-xl gap-1">
              <div>
                <img
                  className="w-[18vw] h-[40vh]"
                  src="assets/images/homepageimg2.jpg"
                />
              </div>
              <div>
                <img
                  className="w-[18vw] h-[40vh]"
                  src="assets/images/homepageimg3.jpg"
                />
              </div>
              <div>
                <img
                  className="w-[18vw] h-[40vh]"
                  src="assets/images/homepageimg4.jpg"
                />
              </div>
            </div>
            <div className="text-xl mt-[4%]">
              <div className="mb-[4%]">
                We want to get you excited for this marvellous Pink City,the
                capital of Rajasthan.
              </div>
              <div className="mb-[4%]">
                Enjoy the hustle bustle of Jaipur streets and then return to
                quiet spaces and super comfy rooms. Sounds like a good balance,
                right?{" "}
              </div>
              <div className="mb-[4%]">
                We know you’re looking for the best hostel to stay in Jaipur.
                This is the only guide you’ll need, we guarantee it. In fact, we
                even wrote up more hostel guides for your India trip. You can
                find all{" "}
                <Link
                  className="facebook-group font-bold border-b-2 borber-b-[#4194c7] text-[#0f6498]"
                  to="/"
                >
                  top hostels in Delhi
                </Link>{" "}
                here and the{" "}
                <Link
                  className="facebook-group font-bold border-b-2 borber-b-[#4194c7] text-[#0f6498]"
                  to="/"
                >
                  best Goa hostels
                </Link>{" "}
                here. Since India is a big country, the 7th biggest in the
                world, you need to do some proper planning beforehand. Make sure
                you read this guide on{" "}
                <Link
                  className="facebook-group font-bold border-b-2 borber-b-[#4194c7] text-[#0f6498]"
                  to="/"
                >
                  two weeks itinerary in India
                </Link>{" "}
                and how to get around.
              </div>
              <div className="mb-[4%]">
              It is an absolute beginner guide and even goes into details of comparing guided tours vs travelling independently.
              </div>
              <div className="mb-[4%]">
              This hostel guide on the other hand is perfect for YOU, when …
              </div>
              <div className="mb-[4%]">
              <ul className="flex flex-col justify-center pl-10">
                <li className="list-disc">tired of bad and crappy hostels</li>
                <li className="list-disc">want to avoid the “young party kids”</li>
                <li className="list-disc">happy to spend 1-2€ for a better experience</li>
              </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify justify-start w-[150%] bg-[#f2f2f2] items-end">
            <div className="">
              <img
                className="flex p-10"
                src="assets/images/homepagesideimage1.jpg"
              />
              <div className="flex justify-center items-center font-bold text-xl p-10">
                <span className="border-b-2 border-b-black pb-2">
                  Our handmade Hostel map for Jaipur
                </span>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="flex p-10"
                  src="assets/images/homepagesideimage2.png"
                />
              </div>
              <div className="flex justify-center items-center font-bold text-xl p-10">
                {" "}
                <span className="border-b-2 border-b-black pb-2">
                  Need an eSIM Card for Jaipur?
                </span>
              </div>
              <div>
                <div>
                  <img
                    className="flex p-10"
                    src="assets/images/homepagesideimage3.jpg"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Link to='/'>
                  <button className="flex p-10 bg-[#FFC500]"><span><img sizes="10" className=" bg-white p-2 rounded-full" src="assets/images/logo.png"/></span>
                  <span>Get Your E-Sim Card Now</span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
