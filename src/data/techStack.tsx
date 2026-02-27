import {
  Box,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layout,
  Server,
  Terminal,
  Zap,
} from "lucide-react"

export const TECH_STACK = [
  {
    category: "Back-end Powerhouse",
    description:
      "A espinha dorsal da nossa aplicação, focada em segurança e escalabilidade.",
    items: [
      {
        name: "NestJS",
        type: "Framework",
        desc: "Framework Node.js progressivo para construir aplicações server-side eficientes e escaláveis.",
        reason:
          "Escolhido pela sua arquitetura modular e suporte nativo a TypeScript.",
        icon: <Server size={24} />,
        color: "text-red-500",
        bg: "hover:border-red-500/50",
      },
      {
        name: "TypeScript",
        type: "Linguagem",
        desc: "Superset do JavaScript que adiciona tipagem estática opcional.",
        reason:
          "Garante um código mais seguro, com menos bugs e melhor manutenibilidade.",
        icon: <Code2 size={24} />,
        color: "text-blue-400",
        bg: "hover:border-blue-400/50",
      },
      {
        name: "TypeORM",
        type: "ORM",
        desc: "Object-Relational Mapper que facilita a interação com o banco de dados.",
        reason:
          "Abstrai queries complexas de SQL e gerencia relacionamentos entre entidades com facilidade.",
        icon: <Database size={24} />,
        color: "text-orange-400",
        bg: "hover:border-orange-400/50",
      },
      {
        name: "MySQL",
        type: "Database",
        desc: "O sistema gerenciador de banco de dados relacional open-source mais popular do mundo.",
        reason:
          "Alta performance, confiabilidade e compatibilidade perfeita com o TypeORM.",
        icon: <Database size={24} />,
        color: "text-blue-300",
        bg: "hover:border-blue-300/50",
      },
    ],
  },
  {
    category: "Front-end Experience",
    description:
      "Interfaces reativas, bonitas e performáticas para o usuário final.",
    items: [
      {
        name: "React",
        type: "Library",
        desc: "Biblioteca JavaScript para criar interfaces de usuário.",
        reason:
          "Componentização, ecossistema gigante e alta performance com Virtual DOM.",
        icon: <Box size={24} />,
        color: "text-cyan-400",
        bg: "hover:border-cyan-400/50",
      },
      {
        name: "TailwindCSS",
        type: "Estilização",
        desc: "Framework CSS utility-first para design rápido e customizável.",
        reason:
          "Permite criar designs modernos sem sair do HTML e sem conflitos de classes.",
        icon: <Layout size={24} />,
        color: "text-cyan-300",
        bg: "hover:border-cyan-300/50",
      },
      {
        name: "Vite",
        type: "Build Tool",
        desc: "Ferramenta de build que oferece um ambiente de desenvolvimento extremamente rápido.",
        reason:
          "Substitui o CRA com builds instantâneos e Hot Module Replacement (HMR) veloz.",
        icon: <Zap size={24} />,
        color: "text-yellow-400",
        bg: "hover:border-yellow-400/50",
      },
      {
        name: "Lucide React",
        type: "Icons",
        desc: "Biblioteca de ícones leve e consistente.",
        reason:
          "Visual limpo que se adapta perfeitamente ao design system do projeto.",
        icon: <Globe size={24} />,
        color: "text-pink-400",
        bg: "hover:border-pink-400/50",
      },
    ],
  },
  {
    category: "Ferramentas & DevOps",
    description: "O ecossistema que mantém o projeto organizado e rodando.",
    items: [
      {
        name: "Git & GitHub",
        type: "Versionamento",
        desc: "Controle de versão distribuído e hospedagem de código.",
        reason: "Essencial para o trabalho em equipe e integração contínua.",
        icon: <GitBranch size={24} />,
        color: "text-white",
        bg: "hover:border-white/50",
      },
      {
        name: "Insomnia",
        type: "API Client",
        desc: "Plataforma para design e teste de APIs.",
        reason:
          "Utilizado para validar todas as rotas do Back-end antes da integração.",
        icon: <Terminal size={24} />,
        color: "text-purple-400",
        bg: "hover:border-purple-400/50",
      },
    ],
  },
]
