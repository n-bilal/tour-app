import React from 'react';
import Logo from "@/components/Logo";
import Link from "next/link";
import {User} from "@/interfaces/models";
import {Button, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from "flowbite-react";

const TourNavBar = () => (
    // <nav className="top-4 flex flex-col sm:flex-row justify-between items-center bg-gray-100 px-10 py-10">
    <nav className="bg-gradient-to-r from-white to-yellow-400 h-20 items-center flex flex-col md:flex-row justify-between">
      {/* Logo on the left */}
      <div className="flex pl-10">
        <Logo />
      </div>

      {/* Menu on the right */}
      {/*<div className="space-x-4">*/}
      <div className="flex-1 flex items-center justify-end space-x-4 pr-10 mt-4 sm:mt-0">
        <Link className="hover:text-white" href="/">Home</Link>
        <Link className="hover:text-white" href="/about">About</Link>
        <Link className="hover:text-white" href="/contact">Contact Us</Link>
        <button className="px-2 py-1 bg-white text-black rounded hover:bg-black hover:text-white">
          Login / Register
        </button>
        {/*<Link href="/api/users">Users List</Link>*/}
      </div>
    </nav>
);

export default TourNavBar;


// import React from 'react';
// import {Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";
// import Link from "next/link";
// import Logo from "@/components/Logo";
//
// export function TourNavBar() {
//   return (
//       <Navbar fluid rounded>
//         <NavbarBrand href="/">
//           {/*<img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />*/}
//           <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Your Tours</span>
//         </NavbarBrand>
//         <div className="flex md:order-2">
//           <Button>Get started</Button>
//           <NavbarToggle />
//         </div>
//         <NavbarCollapse>
//           {/*<NavbarLink href="/" active>Home</NavbarLink>*/}
//           {/*<NavbarLink href="/about">About</NavbarLink>*/}
//           {/*<NavbarLink href="/contact">Contact Us</NavbarLink>*/}
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/contact">Contact Us</Link>
//         </NavbarCollapse>
//       </Navbar>
//   );
// }