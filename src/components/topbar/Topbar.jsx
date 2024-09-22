import React, { useState } from "react";
import { IoIosSchool } from "react-icons/io";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

function Topbar() {
  const [navOpen, setNavOpen] = useState(false);

  const navOpenHandler = () => {
    setNavOpen(!navOpen);
  };
// from-orange-400/70 via-emerald-800/70 to-sky-700/70
// from-fuchsia-700/80 via-emerald-800/50 to-lightishBlue-600/80
  return (
    <>
      <header className="fixed hidden md:flex top-5 right-0 left-0 z-50 justify-between items-center w-[98%] lg:w-[95%] h-24 px-10 py-5 mx-auto rounded-4xl bg-gradient-to-tr from-fuchsia-700/80 via-emerald-800/50 to-lightishBlue-600/80 backdrop-blur-[4px]">
        <Link to={"/"} className="flex-center text-amber-400">
          <IoIosSchool className="w-14 h-14" />
          <span className="font-EstedadBold text-4xl">متانت</span>
        </Link>

        <ul className="flex font-MikhakWoff2one items-center gap-x-6 lg:gap-x-12 text-[19px] text-white shadow-black child:tracking-wide child-hover:[text-shadow:0px_1px_6px_var(--tw-shadow-color)] child-hover:text-amber-200 child-hover:font-bold child:transition-all">
          <li className="flex items-center justify-start">
            <Link to={"/"}>خانه</Link>
          </li>
          <li>
            <Link to={"/aboutUs"}>درباره ما</Link>
          </li>
          <li>
            <Link to={"/classes"}>کلاس ها</Link>
          </li>
          <li>
            <Link to={"/events"}>رویداد ها</Link>
          </li>
          <li>
            <Link to={"/teachers"}>مربیان</Link>
          </li>
          <li className="tracking-normal">
            <Link to={"/contactUs"}>تماس با ما</Link>
          </li>
        </ul>
      </header>

      {/* Mobile Header */}

      <div className="flex md:hidden fixed w-full z-30 items-center justify-between h-16 px-4 bg-gradient-to-tr from-lightishBlue-600/80 via-emerald-800/80 to-fuchsia-700/80 backdrop-blur-[4px]">
        <div className="nav-icon">
          <MenuIcon
            onClick={navOpenHandler}
            fontSize="large"
            className="text-white cursor-pointer"
          />
        </div>

        <div
          className={
            navOpen
              ? "nav fixed top-0 bottom-0 right-0 w-64 min-h-screen pt-3 px-4 bg-cyan-900 overflow-y-auto transition-all"
              : "nav fixed top-0 bottom-0 -right-64 w-64 min-h-screen pt-3 px-4 bg-cyan-900 overflow-y-auto transition-all"
          }
        >
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100">
            <Link onClick={navOpenHandler} to={"/"} className="flex-center gap-x-2 text-amber-400">
              <IoIosSchool className="w-11 h-11" />
              <span className="font-EstedadBold text-3xl">متانت</span>
            </Link>
            <ArrowForwardIosIcon onClick={navOpenHandler} fontSize="medium" className="text-white" />
          </div>

          <div className="flex text-xl items-center h-10 bg-orange-200/20 text-amber-200 mb-4 pr-2.5 rounded-md">
            <Link onClick={navOpenHandler} to={"/"} className="flex items-center gap-x-2">
              خانه
            </Link>
          </div>

          <ul className="child-hover:text-amber-200 child:transition-all child:pr-2.5 text-xl space-y-8 text-white">
            <li className="flex items-center justify-start">
                <Link onClick={navOpenHandler} to={"/aboutUs"} className="flex items-center gap-x-2">
                  درباره ما
                </Link>
            </li>

            <li className="flex items-center justify-start">
              <Link onClick={navOpenHandler} to={"/classes"} className="flex items-center gap-x-2">
                کلاس ها
              </Link>
            </li>

            <li className="flex items-center justify-start">
              <Link onClick={navOpenHandler} to={"/events"} className="flex items-center gap-x-2">
                رویداد ها
              </Link>
            </li>

            <li className="flex items-center justify-start">
              <Link onClick={navOpenHandler} to={"/teachers"} className="flex items-center gap-x-2">
                مربیان
              </Link>
            </li>

            <li className="flex items-center justify-start">
              <Link onClick={navOpenHandler} to={"/contactUs"} className="flex items-center gap-x-2">
                تماس با ما
              </Link>
            </li>
          </ul>

          {/* <div className="flex flex-col items-start gap-y-6 text-orange-300 py-8 px-2.5 mt-8 border-t border-t-gray-100">

          </div> */}
        </div>

        <div className="logo">
          <Link to={"/"} className="flex-center gap-x-1 text-amber-300">
            <span className="font-EstedadBold text-3xl">متانت</span>
            <IoIosSchool className="w-11 h-11" />
          </Link>
        </div>
      </div>
      <div onClick={navOpenHandler} className={navOpen ? "overlay overlay--visible" : "overlay"}></div>
    </>
  );
}

export default Topbar;
