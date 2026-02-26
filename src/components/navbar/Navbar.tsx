import { Link } from "react-router-dom"
// CORRIGIDO AQUI: Sobe um nível (..) e entra na pasta audio
import { AudioController } from "../audio/AudioController"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#00affa]/30 bg-[#0d1017] py-4 shadow-[0_4px_20px_-5px_rgba(0,175,250,0.3)] backdrop-blur-sm transition-all duration-500">
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6">
        {/* Esquerda: Logo */}
        <div className="flex justify-start">
          <Link
            to="/home"
            className="block h-16 w-16 overflow-hidden rounded-full"
          >
            <img
              src="/img/logo/logo.jpeg"
              alt="Logo MoveUp"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>

        {/* Centro: Menu */}
        <ul className="flex justify-center gap-8 text-lg font-semibold text-[#244e73] md:gap-10">
          <li>
            <Link to="/home" className="transition-colors hover:text-[#00affa]">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contatos"
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

        {/* Direita: Audio Controller */}
        <div className="flex justify-end">
          <AudioController />
        </div>
      </nav>
    </header>
  )
}
