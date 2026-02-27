import {
  Database,
  Dumbbell,
  Layout,
  Lock,
  Rocket,
  Server,
  Terminal,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/img/banner/b1.png",
    "/img/banner/b2.png",
    "/img/banner/b3.png",
    "/img/banner/b4.png",
    "/img/banner/b5.png",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="min-h-screen bg-[#040c25] font-sans text-slate-300 selection:bg-[#00affa] selection:text-[#0d1017]">
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center rounded-full border border-[#00affa]/30 bg-[#00affa]/10 px-3 py-1 text-sm font-medium text-[#00affa]">
                <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-[#00affa]"></span>
                Versão 1.0 Disponível
              </div>
              <h1 className="mb-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
                Gerencie treinos com <br />
                <span className="bg-linear-to-r from-[#00affa] to-purple-500 bg-clip-text text-transparent">
                  Inteligência e Performance
                </span>
              </h1>
              <p className="mb-8 text-lg leading-8 text-slate-400">
                O <strong>MoveUp</strong> não é apenas um app, é um ecossistema
                robusto. Desenvolvido para profissionais de educação física que
                buscam escalabilidade, organização e segurança na gestão de
                alunos.
              </p>
              <div className="flex flex-col items-center gap-6 md:flex-row">
                <Link
                  to="/tech"
                  className="rounded-lg bg-[#00affa] px-6 py-3 text-sm font-bold text-[#040c25] shadow-[0_0_20px_rgba(0,175,250,0.3)] transition-transform hover:scale-105 hover:bg-[#33bfff]"
                >
                  Conheça a Tecnologia
                </Link>
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 text-sm leading-6 font-semibold text-white"
                >
                  Fale com o time{" "}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-linear-to-r from-[#00affa] to-purple-600 opacity-30 blur-2xl"></div>

              <div className="relative h-100 w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Banner ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              <div className="absolute -bottom-10 -left-6 z-20 hidden rounded-xl border border-slate-700 bg-[#0d1017]/95 p-4 shadow-xl backdrop-blur-sm select-none md:block">
                <div className="mb-2 flex items-center gap-2 border-b border-slate-700 pb-2">
                  <Terminal size={16} className="text-[#00affa]" />
                  <span className="font-mono text-xs text-slate-400">
                    backend-server.ts
                  </span>
                </div>
                <pre className="font-mono text-xs text-green-400">
                  <code>
                    {`@Get('treinos')\nfindAll() {\n  return this.service.find();\n}\n// Status: 200 OK 🚀`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#051d37] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-base leading-7 font-bold tracking-wide text-[#00affa] uppercase">
              A Missão
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Transformando caos em dados estruturados
            </p>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-red-900/30 bg-[#0d1017] p-8">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Dumbbell size={120} />
              </div>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-red-400">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>O
                Cenário Comum
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex gap-2">
                  <span className="text-red-500">✕</span> Treinos perdidos em
                  planilhas ou papel.
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">✕</span> Dificuldade em
                  acompanhar a evolução do aluno.
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">✕</span> Falta de padronização
                  nos exercícios.
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#00affa]/30 bg-[#0d1017] p-8 shadow-[0_0_30px_rgba(0,175,250,0.05)]">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Database size={120} className="text-[#00affa]" />
              </div>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-[#00affa]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#00affa]"></span>
                A Solução MoveUp
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span> API Robustas para
                  gestão centralizada.
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span> Histórico e
                  versionamento de treinos.
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span> Segurança de dados
                  com validações rígidas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Arquitetura de Alta Performance
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              Nosso backend foi construído pensando no futuro. Utilizamos as
              melhores práticas de mercado para garantir que o sistema cresça
              junto com seus alunos.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="group flex flex-col items-start rounded-2xl border border-slate-700 bg-[#051d37] p-6 transition-colors hover:border-[#00affa]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#00affa]">
                  <Server className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="text-base leading-7 font-bold text-white">
                  Escalabilidade com NestJS
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-400">
                  <p className="flex-auto">
                    Arquitetura modular que facilita a expansão para novas
                    entidades como Avaliação Física e Nutrição sem quebrar o
                    sistema.
                  </p>
                </dd>
              </div>

              <div className="group flex flex-col items-start rounded-2xl border border-slate-700 bg-[#051d37] p-6 transition-colors hover:border-[#00affa]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#00affa]">
                  <Database className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="text-base leading-7 font-bold text-white">
                  Dados com TypeORM
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-400">
                  <p className="flex-auto">
                    Abstração de banco de dados SQL com relacionamentos
                    otimizados e segurança contra injeção de dados.
                  </p>
                </dd>
              </div>

              <div className="group flex flex-col items-start rounded-2xl border border-slate-700 bg-[#051d37] p-6 transition-colors hover:border-[#00affa]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#00affa]">
                  <Lock className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="text-base leading-7 font-bold text-white">
                  Validação & Segurança
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-400">
                  <p className="flex-auto">
                    CRUD completo com verificações de integridade. Nada é
                    deletado ou alterado sem as devidas permissões do sistema.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-sky-600 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Conheça quem faz acontecer
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/80">
                Somos o Grupo 2 da Generation Brasil. Uma equipe de
                desenvolvedores Fullstack apaixonados por resolver problemas
                reais com código limpo.
              </p>
              <div className="mt-6 flex max-w-md justify-center gap-x-4 md:justify-start">
                <Link
                  to="/about"
                  className="flex items-center gap-2 rounded-md bg-[#0d1017] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0d1017]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <Rocket size={18} />
                  Ver Equipe de Devs
                </Link>
              </div>
            </div>

            <div className="max-w-xl justify-center border-l border-[#0d1017]/20 pl-0 md:justify-start lg:max-w-lg lg:pl-10">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Vamos construir juntos?
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/80">
                Tem dúvidas sobre a implementação ou quer contribuir com o
                projeto open-source? Entre em contato agora mesmo.
              </p>
              <div className="mt-6 flex max-w-md justify-center gap-x-4 md:justify-start">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 rounded-md bg-[#0d1017] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0d1017]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <Layout size={18} />
                  Fale Conosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
