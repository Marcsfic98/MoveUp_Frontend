import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { AudioController } from "../audio/AudioController"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#00affa]/30 bg-[#0d1017] py-4 shadow-[0_4px_20px_-5px_rgba(0,175,250,0.3)] backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:grid md:grid-cols-3">
        <div className="flex justify-start">
          <Link
            to="/home"
            className="block h-12 w-12 overflow-hidden md:h-16 md:w-16"
          >
            <img
              src="/img/logo/logo.jpeg"
              alt="Logo MoveUp"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>

        <ul className="hidden justify-center gap-8 text-lg font-semibold text-[#244e73] md:flex md:gap-10">
          <li>
            <Link to="/home" className="transition-colors hover:text-[#00affa]">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="transition-colors hover:text-[#00affa]"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="transition-colors hover:text-[#00affa]"
            >
              Sobre
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-end gap-4">
          <AudioController />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#00affa] focus:outline-none md:hidden"
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={`absolute top-full left-0 w-full border-b border-[#00affa]/30 bg-[#0d1017] transition-all duration-300 md:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-5 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-xl font-semibold text-[#244e73]">
          <li>
            <Link
              to="/home"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#00affa]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#00affa]"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#00affa]"
            >
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
