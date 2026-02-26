import { ArrowLeft, BookOpen, Code2, Github, GraduationCap, Linkedin, Mail } from "lucide-react"
import { Link, Navigate, useParams } from "react-router-dom"
import { TEAM_MEMBERS } from "../data/team"

export function MemberPage() {
  const { slug } = useParams()
  const member = TEAM_MEMBERS.find((m) => m.slug === slug)

  if (!member) {
    return <Navigate to="/about" replace />
  }

  return (
    <div className="min-h-screen bg-[#040c25] pb-20 font-sans text-slate-300 selection:bg-[#00affa] selection:text-[#0d1017]">
      {/* Banner Superior Decorativo */}
      <div className={`h-48 w-full ${member.banner} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#040c25] to-transparent"></div>
        
        {/* Botão de Voltar Flutuante */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            to="/about"
            className="flex items-center gap-2 rounded-full bg-[#0d1017]/80 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-[#00affa] hover:text-[#0d1017]"
          >
            <ArrowLeft size={16} />
            Voltar
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="relative -mt-20 mb-8 flex flex-col items-center md:flex-row md:items-end md:gap-8">
          {/* Foto de Perfil */}
          <div className="group relative">
             <div className="absolute -inset-0.5 animate-pulse rounded-full bg-[#00affa] opacity-75 blur-md"></div>
             <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[#040c25] bg-slate-800 ring-2 ring-[#00affa]">
              <img
                src={member.img}
                alt={member.nome}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          {/* Nome e Cargo */}
          <div className="mt-4 text-center md:mt-0 md:mb-4 md:text-left">
            <h1 className="text-4xl font-black text-white sm:text-5xl">
              {member.nome}
            </h1>
            <p className="text-lg font-medium text-[#00affa] uppercase tracking-wide">
              {member.funcao}
            </p>
          </div>

          {/* Botões Sociais (Desktop: Direita / Mobile: Centro) */}
          <div className="mt-6 flex gap-3 md:ml-auto md:mb-4">
             <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d1017] text-slate-400 border border-slate-700 transition-all hover:-translate-y-1 hover:border-[#00affa] hover:text-white"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d1017] text-slate-400 border border-slate-700 transition-all hover:-translate-y-1 hover:border-[#0077b5] hover:text-[#0077b5]"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${member.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d1017] text-slate-400 border border-slate-700 transition-all hover:-translate-y-1 hover:border-red-500 hover:text-red-500"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* Coluna Esquerda: Sobre e Trajetória */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sobre */}
            <div className="rounded-3xl border border-slate-700/50 bg-[#051d37]/50 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                 <BookOpen className="text-[#00affa]" size={24}/>
                 <h2 className="text-2xl font-bold text-white">Sobre Mim</h2>
              </div>
              <p className="text-lg font-light italic text-slate-400 mb-6 border-l-4 border-[#00affa] pl-4">
                "{member.bio}"
              </p>
              <p className="leading-relaxed text-slate-300">
                {member.about}
              </p>
            </div>

            {/* Formação / Educação */}
             <div className="rounded-3xl border border-slate-700/50 bg-[#051d37]/50 p-8 backdrop-blur-sm">
               <div className="flex items-center gap-2 mb-6">
                 <GraduationCap className="text-[#00affa]" size={24}/>
                 <h2 className="text-2xl font-bold text-white">Trajetória Acadêmica</h2>
              </div>
              <ul className="space-y-4">
                {member.education.map((edu, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-[#00affa] shrink-0"></div>
                    <span className="text-slate-300">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna Direita: Skills e Contato Rápido */}
          <div className="space-y-8">
            
            {/* Skills */}
            <div className="rounded-3xl border border-slate-700 bg-[#0d1017] p-8 shadow-xl">
               <div className="flex items-center gap-2 mb-6">
                 <Code2 className="text-[#00affa]" size={24}/>
                 <h2 className="text-xl font-bold text-white">Hard Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-md bg-[#051d37] px-3 py-1.5 text-sm font-semibold text-[#00affa] border border-[#00affa]/20 transition-colors hover:bg-[#00affa] hover:text-[#0d1017]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Box de Contato Extra */}
            <div className="rounded-3xl bg-linear-to-br from-[#00affa] to-blue-600 p-8 text-[#0d1017]">
               <h3 className="text-xl font-black mb-2">Vamos trabalhar juntos?</h3>
               <p className="text-sm font-medium opacity-80 mb-6">
                 Estou disponível para novos projetos e desafios. Entre em contato!
               </p>
               <a 
                 href={`mailto:${member.email}`}
                 className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0d1017] py-3 font-bold text-white transition-transform hover:scale-105"
               >
                 <Mail size={18} />
                 Mandar Email
               </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}