import React from "react";
import Darkmode from "./darkmode"
import HamburgerButton from "../componenets/hamburger";
import {useState} from "react";
// import Tab from "./TOC/Tab";
function header({ open, setOpen }) {
    // const [open,setOpen] =useState(false);
  return (
    <div>
      <div className="nav h-14 border-b-2 border-gray-700  p-5 flex items-center justify-between relative"> 
       
        {/* Hamburger only visible on small screens */}
        <div className="xl:hidden z-10 cursor-pointer" onClick={() => setOpen(!open)}>
                     
          <HamburgerButton toggled={open} toggle={setOpen} className="z-11"/>
        </div>
        {/* <Tab/> */}


        {/* Search */}
        <div className="flex gap-4 items-center">
          <img
            className="w-6"
            src="https://www.svgrepo.com/show/410387/search.svg"
            alt="Search"
          />
          <div className="search rounded-2xl">
            <form>
              <input
                type="text"
                className="bg-amber-50 cursor-text px-2 py-1 rounded border"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="login flex gap-2 items-center">
            <span>Log In</span>
            <img
              className="w-6"
              src="https://www.svgrepo.com/download/391480/login.svg"
              alt="Login"
            />
          </div>
          <div className="mode w-6">
            <Darkmode/>
            {/* <img
              src="https://tse3.mm.bing.net/th/id/OIP.mbzKbnNJkNGrAidzO5abtwHaHa?pid=Api&P=0&h=220"
              alt="Mode"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
