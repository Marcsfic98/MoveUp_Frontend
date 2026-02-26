import { CheckCircle2, GitBranch, Lightbulb, Users } from "lucide-react"
import { Link } from "react-router-dom"
import { TEAM_MEMBERS } from "../data/team"

const METHODOLOGY_ITEMS = [
  {
    title: "Metodologia Scrum",
    desc: "Ciclos de entrega ágil para garantir valor constante ao projeto.",
    icon: <Users className="text-[#00affa]" size={24} />,
    borderColor: "hover:border-[#00affa]",
  },
  {
    title: "Brainstorming",
    desc: "Sessões criativas em equipe para idealização e resolução de problemas.",
    icon: <Lightbulb className="text-yellow-400" size={24} />,
    borderColor: "hover:border-yellow-400",
  },
  {
    title: "Divisão de Tarefas",
    desc: "Organização estratégica de demandas para máxima produtividade.",
    icon: <CheckCircle2 className="text-green-400" size={24} />,
    borderColor: "hover:border-green-400",
  },
  {
    title: "Versionamento",
    desc: "Gestão de código via Git/GitHub, garantindo colaboração segura.",
    icon: <GitBranch className="text-purple-400" size={24} />,
    borderColor: "hover:border-purple-400",
  },
]

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#040c25] px-6 py-20 font-sans text-slate-300 selection:bg-[#00affa] selection:text-[#0d1017]">
      <div className="mx-auto max-w-7xl">
        <header className="mb-24 text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#00affa]/30 bg-[#00affa]/10 px-3 py-1 text-sm font-medium text-[#00affa]">
            Generation Brasil
          </div>
          <h1 className="mb-6 text-5xl font-black text-white sm:text-6xl">
            Quem constrói o <br />
            <span className="bg-linear-to-r from-[#00affa] to-purple-500 bg-clip-text text-transparent">
              Futuro do MoveUp
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-400">
            Unimos tecnologia e processos ágeis para desenvolver uma aplicação
            Fullstack robusta, focada em performance e experiência do usuário.
          </p>
        </header>

        <section className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-white">Nosso Processo</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {METHODOLOGY_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`group rounded-2xl border border-slate-700 bg-[#051d37] p-6 shadow-lg transition-all duration-300 ${item.borderColor} hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0d1017] shadow-inner">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-bold text-white group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-snug text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Dream Team
            </h2>
            <p className="mt-4 text-slate-400">
              Conheça os desenvolvedores por trás do código
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <Link
                key={member.slug}
                to={`/member/${member.slug}`}
                className="group relative block h-full cursor-pointer"
              >
                <div className="relative h-full overflow-hidden rounded-3xl border border-slate-700 bg-[#051d37] p-6 transition-all duration-300 hover:border-[#00affa]/50 hover:shadow-[0_0_30px_rgba(0,175,250,0.15)]">
                  <div className="absolute inset-0 bg-linear-to-b from-[#00affa]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-[#0d1017] shadow-xl ring-2 ring-slate-700 transition-all duration-300 group-hover:scale-105 group-hover:ring-[#00affa]">
                      <img
                        src={member.img}
                        alt={member.nome}
                        className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#00affa]">
                      {member.nome}
                    </h3>
                    <p className="mb-2 text-sm font-medium tracking-wide text-slate-400 uppercase">
                      {member.funcao}
                    </p>
                    <span className="text-xs font-semibold text-[#00affa] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Ver Perfil Completo →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
