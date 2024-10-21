import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/rooftop-logo.jpeg";
import { RiMenuFold3Line2 } from "react-icons/ri";

const Navbar = () => {
    const navItems = [
        { name: "About", href: "#" },
        { name: "Contact Us", href: "#" }, // Adjusted href to a valid route
        { name: "Menu", href: "#" }, // Link to Solutions route
        { name: "Services", href: "#" }, // Link to Solutions route
        
      ];

  return (
    <nav className='px-4 2xl:px-20 flex md:flex items-center justify-between bg-black text-white'>
        <a href="#"><img className='w-28 2xl:w-36 invert' src={logo} alt="" /></a>
        
        <div className='md:hidden'>
            <RiMenuFold3Line2 className='text-4xl hover:text-primary'/>
        </div>
        <div className='hidden md:flex'>
            <ul className='flex gap-8'>
                <li><a className='hover:text-primary' href="/about">About</a></li>
                <li><a className='hover:text-primary' href="#">Services</a></li>
                <li><a className='hover:text-primary' href="#">Menu</a></li>
                <li><a className='hover:text-primary' href="#">Contact US</a></li>
            </ul>

        </div>
    </nav>
  )
}

export default Navbar