import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  ShieldCheck,
  Twitter,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0d1017] pt-12 pb-6 font-sans">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-blue-600 uppercase">
              Institucional
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Nossas Lojas
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-blue-600 uppercase">
              Atendimento
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Entregas e Prazos
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Como comprar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-blue-600 uppercase">
              Fale Conosco
            </h3>
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
              <Phone size={16} className="text-blue-600" />
              <span>0800 123 4567</span>
            </div>
            <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
              <Mail size={16} className="text-blue-600" />
              <span>sac@moveup.com.br</span>
            </div>
            <div className="flex gap-4">
              <Facebook
                size={20}
                className="cursor-pointer text-slate-500 transition-colors hover:text-blue-600"
              />
              <Instagram
                size={20}
                className="cursor-pointer text-slate-500 transition-colors hover:text-pink-600"
              />
              <Twitter
                size={20}
                className="cursor-pointer text-slate-500 transition-colors hover:text-blue-400"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-blue-600 uppercase">
              Segurança
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 rounded border border-slate-800 bg-[#051e38] p-2 shadow-sm">
                <ShieldCheck size={24} className="text-green-500" />
                <span className="text-[10px] leading-tight font-bold text-slate-300">
                  SITE
                  <br />
                  SEGURO
                </span>
              </div>
              <div className="rounded border border-slate-800 bg-[#051e38] p-2 shadow-sm">
                <span className="text-[10px] font-bold text-slate-300 italic">
                  ANVISA
                </span>
              </div>
            </div>
            {/* Pagamento */}
            <div className="mt-6">
              <h3 className="mb-2 text-xs font-bold tracking-wider text-blue-600 uppercase">
                Pagamento
              </h3>
              <div className="flex gap-2 opacity-70 transition hover:opacity-100">
                <div className="flex h-8 w-12 items-center justify-center rounded bg-white text-[10px] font-bold text-black">
                  <img
                    className="w-10"
                    src="https://http2.mlstatic.com/storage/logos-api-admin/d589be70-eb86-11e9-b9a8-097ac027487d-l.svg"
                    alt="card visa"
                  />
                </div>
                <div className="flex h-8 w-12 items-center justify-center rounded bg-white text-[10px] font-bold text-black">
                  <img
                    className="w-9"
                    src="https://http2.mlstatic.com/storage/logos-api-admin/9cf818e0-723a-11f0-a459-cf21d0937aeb-l.svg"
                    alt="card master"
                  />
                </div>
                <div className="flex h-8 w-12 items-center justify-center rounded bg-white text-[10px] font-bold text-black">
                  <img
                    className="w-11"
                    src="https://http2.mlstatic.com/storage/logos-api-admin/f99fcca0-f3bd-11eb-9984-b7076edb0bb7-l.svg"
                    alt="pix"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-[11px] leading-relaxed text-slate-500">
          <p className="mb-4">
            Moveup | CNPJ: 00.000.000/0001-00 | Endereço: Av. Principal, 1000 -
            Recife/PE - CEP: 50000-000
          </p>
          <p className="mt-4 text-slate-600">
            © 2026 Moveup. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
