
export interface TeamMember {
  slug: string
  nome: string
  funcao: string
  img: string
  linkedin: string
  github: string
  email: string
  banner: string
  bio: string
  about: string
  skills: string[]
  education: string[]
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "marcos-alexandre",
    nome: "Marcos Alexandre",
    funcao: "Fullstack & Mobile Developer",
    img: "/img/members/marcos.jpeg",
    linkedin: "https://www.linkedin.com/in/marcsfic/",
    github: "https://github.com/Marcsfic98",
    email: "marcsfic98@gmail.com",
    banner: "bg-gradient-to-r from-blue-900 to-slate-900",
    bio: "Desenvolvedor FullStack & Mobile apaixonado por performance e Clean Code. Focado em criar experiências digitais impactantes",
    about:
      "Do pacote de rede ao código escalável: Desenvolvedor Full Stack apaixonado por arquitetura e performance.<br/>Com uma base sólida construída na infraestrutura de redes, transicionei para a Engenharia de Software trazendo uma visão que poucos desenvolvedores possuem: o entendimento real de como o dado trafega, da camada física à interface final.<br/>Atualmente, curso Análise e Desenvolvimento de Sistemas e lidero tecnicamente o projeto Serviços Já, selecionado para a pré-incubação na Incubadora I.de.i.as (Senac). Minha missão é transformar requisitos complexos em produtos digitais que resolvem dores reais de mercado."
,
  skills: ["Typescript","Next","React","React Native","expo", "Node.js","Nest","Prisma","TypeORM","JWT", "MySQL", "Scrum"],
    education: [
      "Análise e Desenvolvimento de Sistemas - Mauricio De Nassau(2025 - Atual)",
      "Bootcamp Fullstack JavaScript - Generation Brasil (2025)",
      "Bootcamp Fullstack JavaScript - Atlântico Avanti (2025)",
      "Bootcamp Mobile Developer - MeuTudo (2024)"
    ],
  },
  {
    slug: "matheus-carvalho",
    nome: "Matheus Carvalho",
    funcao: "Fullstack Developer",
    img: "/img/members/matheusc.jpeg",
    linkedin: "https://www.linkedin.com/in/mcarvalho-dev/",
    github: "https://github.com/mc4rvalho",
    email: "mcarvalho093@gmail.com",
    banner: "bg-gradient-to-r from-[#00affa]/40 to-purple-900",
    bio: "Desenvolvedor apaixonado por performance e Clean Code. Focado em criar experiências digitais impactantes.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisi eget libero vulputate dignissim. Curabitur viverra egestas erat, vitae dapibus nisi rhoncus vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer fringilla, diam eget consectetur bibendum, felis metus pellentesque ex, vel scelerisque dui leo ut nisi.",
    skills: ["NestJS", "TypeScript", "TailwindCSS", "PostgreSQL"],
    education: [
      "Análise e Desenvolvimento de Sistemas - Mauricio De Nassau(2025 - Atual)",
      "Bootcamp Fullstack JavaScript - Generation Brasil (2025)",
    ],
  },
  {
    slug: "matheus-lins",
    nome: "Matheus Lins",
    funcao: "Fullstack Developer",
    img: "/img/members/lins.jpeg",
    linkedin:
      "https://www.linkedin.com/in/matheus-antonio-santos-lins-091946217",
    github: "https://github.com/Matheus-Lins",
    email: "matheusantonioslins@outlook.com",
    banner: "bg-gradient-to-r from-green-900 to-slate-900",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, tellus sit amet congue vulputate, nisi erat iaculis nibh, vitae feugiat sapien ante eget mauris. Cras elit nisl, rhoncus nec iaculis ultricies, feugiat eget sapien. Pellentesque ac felis tellus.",
    skills: ["React", "UX/UI", "Figma", "CSS"],
    education: [
      "Curso Técnico em Informática (2023)",
      "Bootcamp Fullstack Java - Generation Brasil (2025)",
    ],
  },
  {
    slug: "allyson-goncalves",
    nome: "Allyson Gonçalves",
    funcao: "Fullstack Developer",
    img: "/img/members/allyson.jpeg",
    linkedin: "https://www.linkedin.com/in/allysongon%C3%A7alves/",
    github: "https://github.com/allysonaggp",
    email: "allysonaggp@gmail.com",
    banner: "bg-gradient-to-r from-red-900 to-slate-900",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.",
    skills: ["JavaScript", "API REST", "Git", "Debug"],
    education: [
      "Engenharia de Software (Em andamento)",
      "Bootcamp Fullstack Java - Generation Brasil (2025)",
    ],
  },
  {
    slug: "juliermes-mendes",
    nome: "Juliermes Mendes",
    funcao: "Fullstack Developer",
    img: "/img/members/ju.jpeg",
    linkedin: "https://www.linkedin.com/in/juliermes/",
    github: "https://github.com/juliomendes160",
    email: "juliomendes160@hotmail.com",
    banner: "bg-gradient-to-r from-yellow-900 to-slate-900",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum.",
    skills: ["Java", "Spring Boot", "Segurança", "SQL"],
    education: [
      "Ciência da Computação (Em andamento)",
      "Bootcamp Fullstack Java - Generation Brasil (2025)",
    ],
  },
  {
    slug: "alexandre-julio",
    nome: "Alexandre Julio",
    funcao: "Fullstack Developer",
    img: "/img/members/alexandre.png",
    linkedin: "https://www.linkedin.com/in/alexandre-julio-0b007a211/",
    github: "https://github.com/AlexandreJulioDev",
    email: "alexandre.julio8772@gmail.com",
    banner: "bg-gradient-to-r from-purple-900 to-slate-900",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.",
    skills: ["DevOps", "Linux", "Cloud", "Python"],
    education: [
      "Sistemas de Informação (Em andamento)",
      "Bootcamp Fullstack Java - Generation Brasil (2025)",
    ],
  },
]
