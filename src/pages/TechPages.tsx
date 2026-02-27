import { Layers } from "lucide-react"
import { Link } from "react-router-dom"
import { TECH_STACK } from "../data/techStack"

export function TechPage() {
  return (
    <div className="min-h-screen bg-[#040c25] px-6 py-20 font-sans text-slate-300 selection:bg-[#00affa] selection:text-[#0d1017]">
      <div className="mx-auto max-w-7xl">
        <header className="mb-20 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00affa]/10 text-[#00affa] ring-1 ring-[#00affa]/30">
              <Layers size={32} />
            </div>
          </div>

          <h1 className="mb-6 text-4xl font-black text-white sm:text-5xl">
            Stack Tecnológica <br />
            <span className="bg-linear-to-r from-[#00affa] to-purple-500 bg-clip-text text-transparent">
              MoveUp
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-400">
            Cada ferramenta foi escolhida estrategicamente para garantir
            performance, escalabilidade e uma excelente experiência de
            desenvolvimento.
          </p>
        </header>

        <div className="space-y-24">
          {TECH_STACK.map((section, idx) => (
            <section key={idx}>
              <div className="mb-10 border-l-4 border-[#00affa] pl-6">
                <h2 className="text-3xl font-bold text-white">
                  {section.category}
                </h2>
                <p className="mt-2 text-lg text-slate-400">
                  {section.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className={`group relative overflow-hidden rounded-2xl border border-slate-700 bg-[#051d37] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.bg}`}
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-[#00affa]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    <div className="relative z-10">
                      <div className="mb-4 flex items-start justify-between">
                        <div
                          className={`rounded-lg bg-[#0d1017] p-3 ${item.color} shadow-inner`}
                        >
                          {item.icon}
                        </div>
                        <span className="rounded-full border border-slate-600 bg-[#0d1017] px-2 py-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-[#00affa]">
                        {item.name}
                      </h3>

                      <p className="mb-4 text-sm leading-relaxed text-slate-400">
                        {item.desc}
                      </p>

                      <div className="border-t border-slate-700 pt-4">
                        <p className="text-xs font-medium text-slate-500 italic">
                          <span className="font-bold text-[#00affa] not-italic">
                            Por que?{" "}
                          </span>
                          {item.reason}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-32 text-center">
          <h3 className="mb-6 text-2xl font-bold text-white">
            Gostou da nossa arquitetura?
          </h3>
          <Link
            to="/contatos"
            className="inline-flex items-center justify-center rounded-lg bg-[#00affa] px-8 py-4 font-bold text-[#040c25] transition-transform hover:scale-105 hover:bg-[#33bfff]"
          >
            Entre em contato
          </Link>
        </div>
      </div>
    </div>
  )
}
