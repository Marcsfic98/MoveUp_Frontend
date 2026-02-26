import { Github, Mail, MapPin, Send } from "lucide-react"

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#040c25] px-6 py-24 font-sans text-slate-300 selection:bg-[#00affa] selection:text-[#0d1017]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Fale com a <span className="text-[#00affa]">MoveUp</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Tem alguma dúvida técnica, sugestão de feature ou quer contribuir
            com o projeto? Nossa equipe está pronta para responder.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-slate-700 bg-[#051d37] p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold text-white">
                Canais Diretos
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#00affa]/10 text-[#00affa]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Email do Projeto</h4>
                    <p className="text-sm text-slate-400">
                      Dúvidas gerais e suporte
                    </p>
                    <a
                      href="mailto:contato@moveup.com.br"
                      className="mt-1 block font-semibold text-[#00affa] hover:underline"
                    >
                      contato@moveup.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#00affa]/10 text-[#00affa]">
                    <Github size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Repositório</h4>
                    <p className="text-sm text-slate-400">
                      Issues, Pull Requests e Documentação
                    </p>
                    <a
                      href="https://github.com/Grupo-02-Turma-JavaScript-12/AplicativoFitnessPersonalizado-backend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-semibold text-[#00affa] hover:underline"
                    >
                      github.com/Grupo-02
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#00affa]/10 text-[#00affa]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Localização</h4>
                    <p className="text-sm text-slate-400">
                      Desenvolvido em Recife/PE
                    </p>
                    <span className="mt-1 block font-semibold text-slate-200">
                      Generation Brasil - Turma 12
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-[#051d37]/50 p-8">
              <h3 className="mb-4 text-lg font-bold text-white">
                Perguntas Frequentes
              </h3>
              <details className="group mb-4 marker:content-['']">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-200 group-open:text-[#00affa]">
                  <span>Como rodo o projeto localmente?</span>
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-2 text-sm text-slate-400">
                  Basta clonar o repositório, rodar <code>npm install</code> e
                  depois <code>npm run start:dev</code>. Verifique o README para
                  variáveis de ambiente.
                </p>
              </details>
              <hr className="my-2 border-slate-700/50" />
              <details className="group marker:content-['']">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-200 group-open:text-[#00affa]">
                  <span>Quais tecnologias foram usadas?</span>
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-2 text-sm text-slate-400">
                  O Back-end utiliza NestJS, TypeORM e banco de dados SQL. O
                  Front-end é construído com React, TypeScript e TailwindCSS.
                </p>
              </details>
            </div>
          </div>

          <div className="rounded-3xl border border-[#00affa]/20 bg-[#0d1017] p-8 shadow-[0_0_40px_rgba(0,175,250,0.05)] lg:p-12">
            <h2 className="mb-8 text-2xl font-bold text-white">
              Envie uma mensagem
            </h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-400"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-slate-700 bg-[#051d37] px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-[#00affa] focus:ring-1 focus:ring-[#00affa] focus:outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-slate-700 bg-[#051d37] px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-[#00affa] focus:ring-1 focus:ring-[#00affa] focus:outline-none"
                    placeholder="voce@exemplo.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-400"
                >
                  Assunto
                </label>
                <select
                  id="subject"
                  className="w-full rounded-lg border border-slate-700 bg-[#051d37] px-4 py-3 text-white transition-colors focus:border-[#00affa] focus:ring-1 focus:ring-[#00affa] focus:outline-none"
                >
                  <option>Dúvida Técnica</option>
                  <option>Sugestão de Feature</option>
                  <option>Reportar Bug</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-400"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-slate-700 bg-[#051d37] px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-[#00affa] focus:ring-1 focus:ring-[#00affa] focus:outline-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00affa] px-8 py-4 font-bold text-[#040c25] transition-transform hover:scale-[1.02] hover:bg-[#33bfff]"
              >
                <Send size={18} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
