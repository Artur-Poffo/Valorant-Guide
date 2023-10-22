import { NavLink } from "./NavLink";

export function Navbar() {
  return (
    <header className="hidden fixed z-[999] top-0 w-full py-6 px-10 bg-brand-gray-800 sm:flex items-center justify-between" >
      <a href={'/#home'} >
        <h1 className="text-3xl font-mono font-bold text-brand-red-500" >Valorant Guide</h1>
      </a>

      <nav className="flex items-center gap-6">
        <ul className="flex items-center gap-4" >
          <li>
            <NavLink className="text-brand-white-200 font-bold" name="Home" to="/#home" />
          </li>
          <li>
            <NavLink className="text-brand-white-200 font-bold" name="Sobre" to="/#about" />
          </li>
          <li>
            <NavLink className="text-brand-white-200 font-bold" name="Agentes" to="/#agents" />
          </li>
        </ul>
      </nav>
    </header>
  )
}