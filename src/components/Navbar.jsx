import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

/*
const scrollFunction = (title) => {
    const element = document.getElementById({title});
    element.scrollIntoView({behavior: "smooth"});
}*/

const NavbarItem = ({ title, classProps }) => {
    return (
        <a href={`#${title.toLowerCase()}`} className={` hover:text-[#fec70c] mx-4 cursor-pointer ${classProps}`}>
            {title}
        </a>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="gradient-bg-navbar-2 w-full flex md:justify-center justify-between items-center pb-3 " id="navbar">
            <ul className="pt-3 sm:text-2xl md:text-xl md:flex hidden list-none flex-row justify-between items-center flex-initial text-white font-bold space-x-40">
                {["Projects", "About", "Resumé"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} classProps="lg:text-xl xl:text-3xl text-xl" />
                ))}
            </ul>
            <div></div>
            <div className="flex relative pt-2">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-cultured md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="text-cultured md:hidden cursor-pointer flex mr-4" onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none 
                flex flex-col justify-start items-end rounded-md white-glassmorphism text-white">
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose className="cursor-pointer" onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Projects", "About", "Resumé"].map((item, index) => (
                            <NavbarItem key={item + index} title={item} classProps="my-2 font-bold text-xl" />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;