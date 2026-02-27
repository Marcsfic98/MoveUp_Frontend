import { NavLink } from "react-router-dom";

function Navbar() {
  const baseLinkClasses =
    "relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:transition-all after:duration-300";

  return (
    <header className="w-full bg-cyan-950/90 backdrop-blur-sm text-white border-b border-cyan-800/70">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-8 py-3">
        
        <NavLink
          to="/home"
          className="text-3xl font-bold tracking-wide hover:text-cyan-600 transition-colors"
        >
          NomeSite
        </NavLink>

        <ul className="flex gap-8 text-lg lg:text-xl font-semibold">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                [
                  baseLinkClasses,
                  isActive
                    ? "text-cyan-600 after:w-full after:bg-cyan-600"
                    : "hover:text-cyan-600 after:w-0 after:bg-cyan-600 hover:after:w-full",
                ].join(" ")
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                [
                  baseLinkClasses,
                  isActive
                    ? "text-cyan-600 after:w-full after:bg-cyan-600"
                    : "hover:text-cyan-600 after:w-0 after:bg-cyan-600 hover:after:w-full",
                ].join(" ")
              }
            >
              Sobre
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                [
                  baseLinkClasses,
                  isActive
                    ? "text-cyan-600 after:w-full after:bg-cyan-600"
                    : "hover:text-cyan-600 after:w-0 after:bg-cyan-600 hover:after:w-full",
                ].join(" ")
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;