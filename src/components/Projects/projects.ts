const projects = [
  {
    id: 1,
    url: "portfolio",
    img: "/projects/portfolio/thumb.png",
    title: "Portfolio",
    type: "Website",
    icon: "/projects/portfolio/home.webp",
    github: "https://github.com/MichaelRodriguesss/Portfolio",
    web: "https://michael.vercel.app/",
    description:
      "Meu portfólio criado com o objetivo de mostrar meus projetos ao longo da minha carreira.",
    tags: [
      { name: "Next JS", icon: "/skills/next-js.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "Styled Components", icon: "/skills/styled-components.svg" },
    ],
    print: [{ name: "Thumb", img: "/projects/portfolio/thumb.png" }],
  },
  {
    id: 2,
    url: "Authentication-app",
    img: "/projects/auth-app/home.png",
    title: "Authentication-app",
    type: "Website",
    icon: "https://i.imgur.com/tu0NiEI.png",
    github:
      "https://github.com/MichaelRodriguesss/Authentication-App-Front-end",
    web: "https://authentication-app-front-end.vercel.app/",
    description:
      "Desenvolvi um novo projeto, um desafio do devchallenges.io que consiste em uma página de autenticação de usuário, onde o usuário pode se registrar, fazer login e alterar as informações de sua conta. Utilizei Node.js com Express para desenvolver a API e o MongoDB com mongoose para armazenar os dados do usuário no banco de dados, NextJS(framework baseada em ReactJS) para desenvolver o layout front-end e o por fim axios para consumir a API.",
    tags: [
      { name: "Next Js", icon: "/skills/next-js.svg" },
      { name: "Node Js", icon: "/skills/nodejs.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Sass", icon: "/skills/sass.svg" },
    ],
    print: [{ name: "Home", img: "/projects/auth-app/home.png" }],
  },
  {
    id: 3,
    url: "sneaker-store",
    img: "/projects/sneaker-store/home.png",
    title: "sneaker-store",
    type: "Website",
    icon: "https://i.imgur.com/Dmc7XAt.png",
    github: "https://github.com/MichaelRodriguesss/Sneaker-Store",
    web: "https://sneaker-store-five.vercel.app/",
    description: "E-commerce Website para compra de sapatos.",
    tags: [
      { name: "Html", icon: "/skills/html.svg" },
      { name: "Css", icon: "/skills/css.svg" },
      { name: "React", icon: "/skills/react.svg" },
      { name: "Sass", icon: "/skills/sass.svg" },
    ],
    print: [{ name: "Home", img: "/projects/sneaker-store/home.png" }],
  },
];

export default projects;
