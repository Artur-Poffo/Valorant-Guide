import { NavLink } from "./NavLink";

export function Navbar() {
  return (
    <header className="fixed z-[999] top-0 w-full py-6 px-10 bg-brand-gray-800 flex items-center justify-between" >
      <a href={'/'} >
        <h1 className="text-3xl font-mono font-bold text-brand-red-500" >Valorant Guide</h1>
      </a>

      <nav className="flex items-center gap-6">
        <ul className="flex items-center gap-4" >
          <li>
            <NavLink className="text-brand-white-200 font-bold" name="Home" to="/" />
          </li>
          <li>
            <NavLink className="text-brand-white-200 font-bold" name="About" to="/about" />
          </li>
        </ul>
      </nav>
    </header>
  )
}