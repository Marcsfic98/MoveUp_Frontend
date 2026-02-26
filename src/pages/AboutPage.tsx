import {
  CheckCircle2,
  GitBranch,
  Github,
  Lightbulb,
  Linkedin,
  Mail,
  Users,
} from "lucide-react"

const TEAM_MEMBERS = [
  {
    nome: "Marcos Alexandre",
    funcao: "Fullstack Developer",
    img: "/img/members/marcos.jpeg",
    linkedin: "https://www.linkedin.com/in/marcsfic/",
    github: "https://github.com/Marcsfic98",
    email: "marcsfic98@gmail.com",
  },
  {
    nome: "Matheus Carvalho",
    funcao: "Fullstack Developer",
    img: "/img/members/matheusc.jpeg",
    linkedin: "https://www.linkedin.com/in/mcarvalho-dev/",
    github: "https://github.com/mc4rvalho",
    email: "mcarvalho093@gmail.com",
  },
  {
    nome: "Matheus Lins",
    funcao: "Fullstack Developer",
    img: "/img/members/lins.jpeg",
    linkedin:
      "https://www.linkedin.com/in/matheus-antonio-santos-lins-091946217",
    github: "https://github.com/Matheus-Lins",
    email: "matheusantonioslins@outlook.com",
  },
  {
    nome: "Allyson Gonçalves",
    funcao: "Fullstack Developer",
    img: "/img/members/allyson.jpeg",
    linkedin: "https://www.linkedin.com/in/allysongon%C3%A7alves/",
    github: "https://github.com/allysonaggp",
    email: "allysonaggp@gmail.com",
  },
  {
    nome: "Juliermes Mendes",
    funcao: "Fullstack Developer",
    img: "/img/members/ju.jpeg",
    linkedin: "https://www.linkedin.com/in/juliermes/",
    github: "https://github.com/juliomendes160",
    email: "juliomendes160@hotmail.com",
  },
  {
    nome: "Alexandre Julio",
    funcao: "Fullstack Developer",
    img: "/img/members/alexandre.png",
    linkedin: "https://www.linkedin.com/in/alexandre-julio-0b007a211/",
    github: "https://github.com/AlexandreJulioDev",
    email: "alexandre.julio8772@gmail.com",
  },
]

const METHODOLOGY_ITEMS = [
  {
    title: "Metodologia Scrum",
    desc: "Ciclos de entrega ágil para garantir valor constante ao projeto.",
    icon: <Users className="text-blue-600" size={24} />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Brainstorming",
    desc: "Sessões criativas em equipe para idealização e resolução de problemas.",
    icon: <Lightbulb className="text-yellow-600" size={24} />,
    bgColor: "bg-yellow-100",
  },
  {
    title: "Divisão de Tarefas",
    desc: "Organização estratégica de demandas para máxima produtividade.",
    icon: <CheckCircle2 className="text-green-600" size={24} />,
    bgColor: "bg-green-100",
  },
  {
    title: "Versionamento",
    desc: "Gestão de código via Git/GitHub, garantindo colaboração segura.",
    icon: <GitBranch className="text-purple-600" size={24} />,
    bgColor: "bg-purple-100",
  },
]

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#040c25] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-20 text-center">
          <span className="text-sm font-bold tracking-widest text-[#244e73] uppercase">
            Generation Brasil
          </span>
          <h1 className="mt-2 mb-6 text-5xl font-black text-[#00affa]">
            GRUPO 2
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-400">
            Unimos tecnologia e processos ágeis para desenvolver uma aplicação
            Fullstack robusta, focada em performance e experiência do usuário.
          </p>
        </header>

        <section className="mb-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {METHODOLOGY_ITEMS.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-700 bg-[#051d37] p-6 shadow-sm transition-colors hover:border-indigo-300"
              >
                <div
                  className={`${item.bgColor} mb-4 flex h-12 w-12 items-center justify-center rounded-lg`}
                >
                  {item.icon}
                </div>
                <h3 className="mb-2 font-bold text-slate-200">{item.title}</h3>
                <p className="text-sm leading-snug text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-300">
            Desenvolvedores
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.nome}
                className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-[#051d37] p-5 shadow-sm shadow-indigo-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/40"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6 flex h-40 w-40 rotate-3 items-center justify-center overflow-hidden rounded-2xl bg-slate-200 transition-transform duration-300 group-hover:rotate-0">
                    <img
                      src={member.img}
                      alt={member.nome}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="mb-4 flex gap-4">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-300 p-2 text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-900"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-300 p-2 text-slate-500 transition-all hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="rounded-full bg-slate-300 p-2 text-slate-500 transition-all hover:bg-red-50 hover:text-red-500"
                    >
                      <Mail size={20} />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-slate-300">
                    {member.nome}
                  </h3>
                  <p className="mt-1 text-sm font-semibold tracking-tight text-indigo-400 uppercase">
                    {member.funcao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
