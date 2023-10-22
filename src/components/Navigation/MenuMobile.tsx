'use client'

import { useState } from "react";
import { NavLink } from "./NavLink";

export function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsMenuOpen((prevState) => !prevState)} className="sm:hidden z-[999] fixed top-6 right-6 w-[50px] h-[50px] bg-brand-gray-800 flex flex-col items-center justify-center gap-1 cursor-pointer" >
        <div className="w-2/3 h-1 bg-brand-white-200" ></div>
        <div className="w-2/3 h-1 bg-brand-white-200" ></div>
        <div className="w-2/3 h-1 bg-brand-white-200" ></div>
      </div>

      <div className={`fixed z-[998] top-0 left-0 w-full h-screen ${isMenuOpen ? '' : '-ml-[100vw]'} bg-brand-gray-700 flex flex-col items-center justify-center gap-10 transition-all`} >
        <a href="/#home">
          <h1 className="text-3xl font-mono font-bold text-brand-red-500" >Valorant Guide</h1>
        </a>

        <nav>
          <ul className="flex flex-col items-center" >
            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} className="text-brand-white-200 font-bold" name="Home" to="/#home" />
            </li>
            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} className="text-brand-white-200 font-bold" name="Sobre" to="/#about" />
            </li>
            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} className="text-brand-white-200 font-bold" name="Agentes" to="/#agents" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}