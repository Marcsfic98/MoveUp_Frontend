import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  ShieldCheck,
  Twitter,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#0d1017] pt-12 pb-6 font-sans">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-blue-700 uppercase">
              Institucional
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="transition hover:text-blue-600">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-600">
                  Nossas Lojas
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-600">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-600">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-blue-700 uppercase">
              Atendimento
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="transition hover:text-blue-600">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-600">
                  Entregas e Prazos
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-600">
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-600">
                  Como comprar
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-blue-700 uppercase">
              Fale Conosco
            </h3>
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-600">
              <Phone size={16} className="text-blue-600" />
              <span>0800 123 4567</span>
            </div>
            <div className="mb-4 flex items-center gap-2 text-sm text-slate-600">
              <Mail size={16} className="text-blue-600" />
              <span>sac@moveup.com.br</span>
            </div>
            <div className="flex gap-4">
              <Facebook
                size={20}
                className="cursor-pointer text-slate-400 hover:text-blue-600"
              />
              <Instagram
                size={20}
                className="cursor-pointer text-slate-400 hover:text-pink-600"
              />
              <Twitter
                size={20}
                className="cursor-pointer text-slate-400 hover:text-blue-400"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-blue-700 uppercase">
              Segurança
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 rounded bg-[#051e38] p-2 shadow-sm">
                <ShieldCheck size={24} className="text-green-600" />
                <span className="text-[10px] leading-tight font-bold text-slate-700">
                  SITE
                  <br />
                  SEGURO
                </span>
              </div>
              <div className="rounded bg-[#051e38] p-2 shadow-sm">
                <span className="text-[10px] font-bold text-slate-700 italic">
                  ANVISA
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="mb-2 text-xs font-bold tracking-wider text-blue-700 uppercase">
                Pagamento
              </h3>
              <div className="flex gap-2 opacity-70 grayscale transition hover:grayscale-0">
                <img
                  src="https://img.icons8.com/color/32/visa.png"
                  alt="Visa"
                />
                <img
                  src="https://img.icons8.com/color/32/mastercard.png"
                  alt="Mastercard"
                />
                <img src="https://img.icons8.com/color/32/pix.png" alt="Pix" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-[11px] leading-relaxed text-slate-500 md:text-center">
          <p className="mb-4">
            Moveup | CNPJ: 00.000.000/0001-00 | Inscrição Estadual:
            000.000.000.000 | Endereço: Av. Principal, 1000 - Recife/PE - CEP:
            50000-000
          </p>

          <p className="mt-4 text-slate-400">
            © 2026 Moveup. Todos os direitos reservados. Preços e condições
            exclusivos para o site.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
