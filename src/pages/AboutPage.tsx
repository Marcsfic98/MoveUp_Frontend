// Importando os ícones atualizados do Lucide
import {
  CheckCircle2,
  GitBranch,
  Github,
  Lightbulb,
  LinkedinIcon,
  Mail,
  Users,
} from "lucide-react"

const AboutPage = () => {
  const team = [
    {
      nome: "Marcos alexandre",
      funcao: "Fullstack Developer",
      img: "/img/menbers/marcos.jpeg",
      linkedin: "https://www.linkedin.com/in/marcsfic/",
      github: "https://github.com/Marcsfic98",
      email: "marcsfic98@gmil.com",
    },
    {
      nome: "Matheus Carvalho",
      funcao: "Fullstack Developer",
      img: "/img/menbers/matheusc.jpeg",
      linkedin: "https://www.linkedin.com/in/mcarvalho-dev/",
      github: "https://github.com/mc4rvalho",
      email: "mcarvalho093@gmail.com",
    },
    {
      nome: "Matheus Lins",
      funcao: "Fullstack Developer",
      img: "/img/menbers/lins.jpeg",
      linkedin:
        "https://www.linkedin.com/in/matheus-antonio-santos-lins-091946217",
      github: "https://github.com/Matheus-Lins",
      email: "matheusantonioslins@outlook.com",
    },
    {
      nome: "Allyson Gonçalves",
      funcao: "Fullstack Developer",
      img: "/img/menbers/allyson.jpeg",
      linkedin: "https://www.linkedin.com/in/allysongon%C3%A7alves/",
      github: "https://github.com/allysonaggp",
      email: "allysonaggp@gmail.com",
    },
    {
      nome: "Juliermes Mendes",
      funcao: "Fullstack Developer",
      img: "/img/menbers/ju.jpeg",
      linkedin: "https://www.linkedin.com/in/juliermes/",
      github: "https://github.com/juliomendes160",
      email: "juliomendes160@hotmail.com",
    },
    {
      nome: "Alexandre Julio",
      funcao: "Fullstack Developer",
      img: "/img/menbers/alexandre.png",
      linkedin: "https://www.linkedin.com/in/alexandre-julio-0b007a211/",
      github: "https://github.com/AlexandreJulioDev",
      email: "Alexandre.julio8772@gmail.com",
    },
  ]

  const methodology = [
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
      title: "Versionomento",
      desc: "Gestão de código via Git/GitHub, garantindo colaboração segura.",
      icon: <GitBranch className="text-purple-600" size={24} />,
      bgColor: "bg-purple-100",
    },
  ]

  return (
    <div className="min-h-screen bg-[#040c25] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
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

        {/* Methodology Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {methodology.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border bg-[#051d37] p-6 shadow-sm transition-colors hover:border-indigo-300"
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
            {team.map((member) => (
              <div
                key={member.nome}
                className="group r relative overflow-hidden rounded-3xl border-slate-100 bg-[#051d37] p-5 shadow-sm shadow-indigo-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-6 flex h-40 w-40 rotate-3 items-center justify-center overflow-hidden rounded-2xl bg-slate-200 transition-transform duration-300 group-hover:rotate-0">
                    <img
                      src={member.img}
                      alt={member.nome}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex gap-4">
                    <a
                      target="_blank"
                      href={member.github}
                      className="rounded-full bg-slate-300 p-2 text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-900"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      target="_blank"
                      href={member.linkedin}
                      className="rounded-full bg-slate-300 p-2 text-slate-500 transition-all hover:bg-blue-50 hover:text-blue-600"
                    >
                      <LinkedinIcon size={20} />
                    </a>
                    <a
                      target="_blank"
                      href={`mailto:${member.email}`}
                      className="rounded-full bg-slate-300 p-2 text-slate-500 transition-all hover:bg-red-50 hover:text-red-500"
                    >
                      <Mail size={20} />
                    </a>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-slate-300">
                    {member.nome}
                  </h3>
                  <p className="text-sm font-semibold tracking-tight text-indigo-600 uppercase">
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

export default AboutPage
