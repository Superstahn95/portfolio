export const experiences = [
  {
    id: 1,
    organization: "Dunis Technologies",
    position: "Technical staff and instructor",
    specifics: "Web instructor",
    description:
      "The organization is a techncal institute for different age brackets ranging from kids to adults for different tech fields. I was a trainer in charge of the web classes which covered both html, css and javascript. I was also tasked with looking for software solutions on malfunctioning client computers and general facility maintenance. On a few occassions, i was charged with coming up with web builds for exhibition for the organization ",
    startYear: "2022",
    endYear: "2023",
    languages: ["html", "css", "javascript", "react"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Eatwithus",
    description:
      "A fullstack food order web application with a paystack payment integrated ",
    link: "https://food-app-client-seg7.onrender.com",
    imageUrl: "/images/eatwithus.png",
    completed: true,
    technologies: [
      "Typescript",
      "React",
      "NodeJs",
      "Express",
      "MongoDb",
      "TailwindCss",
    ],
    githubClientUrl: "https://github.com/Superstahn95/food-app-client",
    githubServerUrl:
      "https://github.com/Superstahn95/express-typescript-food-api",
  },
  {
    id: 2,
    name: "Property listings",
    description:
      "This is platform built by me in which real estate agencies can put up properties for sell and they in turn get buy requests from our users after the platform must have carried out deligent research. Admin side is still process and hence for now properties listed are immediately listed on the platform but with the 'Pending approval' tag ",
    link: "https://property-listings.onrender.com",
    imageUrl: "/images/propertylistings.png",
    completed: false,
    technologies: [
      "Javascript",
      "React",
      "Node",
      "Express",
      "MongoDb",
      "Redux",
      "Tailwind",
      "Render",
      "Context",
    ],
    githubClientUrl:
      "https://github.com/Superstahn95/property-listings-frontend",
    githubServerUrl: "https://github.com/Superstahn95/property-listings-server",
  },

  {
    id: 3,
    name: "GetLinked UI",
    description:
      "This was the result of the getklinked hackathon which i was a part of. After being handed a figma design file, the goal was to replicate the design as much as possibble.",
    link: "https://getlinked-57e41.web.app",
    imageUrl: "/images/getlinked.png",
    completed: true,
    technologies: ["React", "Redux", "Render", "Javascript", "Firebase"],
    githubClientUrl: "https://github.com/Superstahn95/getlinked-react",
  },
  {
    id: 4,
    name: "Clothing Ecommerce",
    description:
      "A full stack shopping application built with the MERN stack with a test payment platform (PAYSTACK) integrated in the server side. The build also has an admin dashboard for creating new shop items and a client dashboard for editing profile data and seeing status of previously made orders. The build is still pending other features which will be integrated in time",
    link: "https://fashion-ecommerce-72qi.onrender.com",
    imageUrl: "/images/fashion.png",
    completed: true,
    technologies: [
      "Javascript",
      "React",
      "Node js",
      "Tailwind",
      "Express",
      "Paystack",
      "MongoDB",
      "Render",
    ],
    githubClientUrl: "https://github.com/Superstahn95/fashion-E-commerce-web",
    githubServerUrl: "https://github.com/Superstahn95/fashion-ecommerce",
  },
  {
    id: 5,
    name: "DunisTech Academy forum",
    description:
      "A mini community for the firm in which recent updates about the firm can be posted and commented on by authorized members of the community with a forum integrated in whuch trainees and other admin approved members can share their recent activities and code snippets as well when in need of correction or suggestion",
    link: "https://dunisforum.onrender.com",
    technologies: [
      "Javascript",
      "React",
      "Tailwind",
      "Node",
      "Express",
      "Render",
      "Redux",
    ],
    imageUrl: "/images/dunisforum.png",
    completed: true,
    githubClientUrl: "https://github.com/Superstahn95/dunis-forum",
    githubServerUrl: "https://github.com/Superstahn95/dunis-forum-backend",
  },
  {
    id: 6,
    name: "Social Media",
    description:
      "A social media application with a real time chat messaging system.The build has some common social media features and this was my first time making use of web sockets in my build and getting to see how they work.",
    link: "https://social-app-4miw.onrender.com",
    technologies: [
      "Javascript",
      "Socket",
      "React",
      "Tailwind",
      "Node",
      "Express",
      "Render",
      "Redux",
    ],
    imageUrl: "/images/socialmedia.png",
    githubClientUrl: "https://github.com/Superstahn95/social-app-client",
    githubServerUrl: "https://github.com/Superstahn95/social-app-server",
    completed: true,
  },
  {
    id: 7,
    name: "Analytics dashboard",
    description:
      "I took part in the geegpay frontend challenge and this was my final submitted entry. It is an analytics dashboard in which we were tasked with making",
    link: "https://analytics-dashboard-sbtp.onrender.com",
    technologies: ["Javascript", "React", "Tailwind", "Render"],
    imageUrl: "/images/dashboard-dark.png",
    githubClientUrl: "https://github.com/Superstahn95/analytics-dashboard",
    completed: true,
  },
  {
    id: 8,
    name: "Educen",
    description:
      "Although still in progress and just some part of the UI done for now, this build is going to be an online learning platform in which students are assigned to tutors, test and quizzes are taken online as well. Server side and users and admin dashboard still in progress",
    link: "https://educen.onrender.com",
    technologies: [
      "Javascript",
      "React",
      "Tailwind",
      "Node",
      "Express",
      "Render",
    ],
    imageUrl: "/images/educen.png",
    completed: false,
    githubClientUrl: "https://github.com/Superstahn95/educen",
  },
  // {
  //   id: 9,
  //   name: "Project Schedule Manager",
  //   description:
  //     "This is a personal build for scheduling and keeping track of my builds with a little bit of security on the frontend to restrict visitors from seeing my client details and also to restrict them from being able to write to my databases from the client as well. This came out of the need for a self made time management tool for my builds and it was also my first time using GraphQL as my query language with apollo client on the frontend which is quite good for state management and data caching as well. The app is not yet in use but the build is complete at least for now.",
  //   link: "https://project-mgr.onrender.com",
  //   technologies: [
  //     "Javascript",
  //     "GraphQL",
  //     "Apollo Server",
  //     "Apollo Client",
  //     "React",
  //     "Tailwind",
  //     "Node",
  //     "Express",
  //     "Render",
  //   ],
  //   imageUrl: "/images/projectschedulemgr.png",
  //   completed: false,
  //   githubClientUrl:
  //     "https://github.com/Superstahn95/project-manager-server-graphQL",
  //   githubServerUrl:
  //     "https://github.com/Superstahn95/project-manager-server-graphQL",
  // },
];
