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
      "Do pacote de rede ao código escalável: Desenvolvedor Full Stack apaixonado por arquitetura e performance. Com uma base sólida construída na infraestrutura de redes, transicionei para a Engenharia de Software trazendo uma visão que poucos desenvolvedores possuem: o entendimento real de como o dado trafega, da camada física à interface final. Atualmente, curso Análise e Desenvolvimento de Sistemas e lidero tecnicamente o projeto Serviços Já, selecionado para a pré-incubação na Incubadora I.de.i.as (Senac). Minha missão é transformar requisitos complexos em produtos digitais que resolvem dores reais de mercado.",
    skills: [
      "Typescript",
      "Next",
      "React",
      "React Native",
      "expo",
      "Node.js",
      "NestJS",
      "Prisma",
      "TypeORM",
      "JWT",
      "MySQL",
      "Scrum",
    ],
    education: [
      "Análise e Desenvolvimento de Sistemas - Mauricio De Nassau(2025 - Atual)",
      "Bootcamp Fullstack JavaScript - Generation Brasil (2025)",
      "Bootcamp Fullstack JavaScript - Atlântico Avanti (2025)",
      "Bootcamp Mobile Developer - MeuTudo (2024)",
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
    bio: "De ex-vendedor a Desenvolvedor Full Stack: unindo comunicação estratégica com código limpo e performático.",
    about:
      "Minha jornada começou na área comercial, onde aprendi a ouvir clientes e negociar soluções. Hoje, uso essa bagagem para desenvolver softwares que resolvem problemas reais. Apaixonado pelo ecossistema JavaScript, tenho foco especial em arquitetura de Back-end com NestJS e interfaces responsivas com React. No MoveUp, busquei aplicar Clean Code e escalabilidade. Fora dos códigos, sou atleta de Futebol de Mesa pelo Sport Recife, onde exercito a disciplina e o pensamento estratégico.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "TypeORM",
      "Java",
      "Node.js",
      "NestJS",
      "TypeScript",
      "JavaScript",
      "React",
      "TailwindCSS",
    ],
    education: [
      "Análise e Desenvolvimento de Sistemas - Faculdade Católica Imaculada Conceição do Recife - FICR (Ago/2024 - Dez/2026)",
      "Bootcamp Fullstack JavaScript - Atlântico Avanti (Fev/2026 - Jan/2026)",
      "Bootcamp Fullstack JavaScript - Generation Brasil (Nov/2025 - Mar/2026)",
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
    bio: "Desenvolvedor Full Stack em início de carreira, unindo base técnica sólida com dedicação, aprendizado constante e foco em construir soluções eficientes.",
    about:
      "Minha trajetória na tecnologia começou em 2021, no curso técnico em Informática, onde aprendi programação, redes e manutenção de computadores. Atualmente, estou me especializando no programa Full Stack JavaScript da Generation Brasil, aprendendo TypeScript, Node.js, NestJS, React, SQL e práticas essenciais de versionamento com Git. Além da parte técnica, desenvolvi habilidades importantes como trabalho em equipe, atenção aos detalhes, comunicação e experiência com metodologias ágeis como Scrum. Estou em busca da minha primeira oportunidade como desenvolvedor para aplicar tudo o que venho construindo e continuar evoluindo na área..",
    skills: ["React", "Nest", "TypeScipt", "SQL", "HTML", "CSS"],
    education: [
      "Curso Técnico em Informática - Senac (Fev/2021 - Nov/2023)",
      "Bootcamp Fullstack Java - Generation Brasil (Nov/2025 - Mar/2026)",
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
    bio: "Ex militar, especialista em vendas e Desenvolvedor FullStack .",
    about:
      "  Ola me chamo Allyson Gonçalves Sou Desenvolvedor FullStack com experiência prévia em liderança e gestão, atualmente cursando Análise e Desenvolvimento de Software e participando do bootcamp intensivo da Generation Brasil. Tenho sólida base em JavaScript, TypeScript, Python e Lógica de programação e Banco de dados. Minha trajetória une disciplina adquirida na Força Aérea Brasileira e experiência comercial com tecnologia, buscando contribuir para soluções inovadoras e eficientes",
    skills: ["TypeScript","React","Tailwind","Nest","Postegres","MySQL","Arquitetura MVC", "API REST", "Git", "Debug"],
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
