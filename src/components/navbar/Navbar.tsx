import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full bg-teal-950/90 backdrop-blur-sm text-white py-4 shadow-lg">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4">

        <Link to="/home "className="text-3xl font-bold tracking-wide hover:text-teal-300 transition-colors"
        >NomeSite
        </Link>

        {/* Menu */}
        <ul className="flex gap-10 text-xl font-semibold">
          <li>
            <Link
              to="/home" className="relative hover:text-teal-300 transition-colors 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all 
              after:duration-300 hover:after:w-full"
            >Home
            </Link>
          </li>

          <li>
            <Link
              to="/sobre"
              className="relative hover:text-teal-300 transition-colors 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all 
              after:duration-300 hover:after:w-full"
            >Sobre
            </Link>
          </li>

          <li>
            <Link
              to="/contato"
              className="relative hover:text-teal-300 transition-colors 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all 
              after:duration-300 hover:after:w-full"
            >Contato
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;