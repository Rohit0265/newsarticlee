// 'use client';
// import { Sling as Hamburger } from 'hamburger-react';  // or 'Spin', 'Squash', etc.
// import Tab from "./TOC/Tab"
// import {useState} from 'react'

// export default function HamburgerButton({ toggled, toggle }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//     <Hamburger size={30} toggled={toggled} toggle={toggle} />
//     </>
//   );
// }

import React from "react";
import { Sling as HamburgerButton } from "hamburger-react";
import Tab from "./TOC/Tab";
function Hamburger({ toggled, toggle, className }) {
  return (
    <>
    
   
    <HamburgerButton 
      toggled={toggled} 
      toggle={toggle} 
      className= {className} 
      
    />
    </>
  );
}

export default Hamburger;
