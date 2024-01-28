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
  },

  {
    id: 2,
    name: "GetLinked UI",
    description:
      "This was the result of the getklinked hackathon which i was a part of. After being handed a figma design file, the goal was to replicate the design as much as possibble.",
    link: "https://getlinked-57e41.web.app",
    languagesAndTools: ["Javascript", "React", "Firebase", "Tailwind"],
    imageUrl: "/images/getlinked.png",
    completed: true,
    technologies: ["React", "Redux", "Render", "Javascript", "Firebase"],
  },
  {
    id: 3,
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
  },
  {
    id: 6,
    name: "Analytics dashboard",
    description:
      "I took part in the geegpay frontend challenge and this was my final submitted entry. It is an analytics dashboard in which we were tasked with making",
    link: "https://analytics-dashboard-sbtp.onrender.com",
    technologies: ["Javascript", "React", "Tailwind", "Render"],
    imageUrl: "/images/dashboard-dark.png",
    completed: true,
  },
  {
    id: 4,
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
  },
  {
    id: 5,
    name: "Project Schedule Manager",
    description:
      "This is a personal build for scheduling and keeping track of my builds. This came out of the need for a self made time management tool for my builds and it was also my first time using GraphQL as my query language with apollo client on the frontend which is quite good for state management and data caching as well",
    link: "https://dunisforum.onrender.com",
    technologies: [
      "Javascript",
      "GraphQL",
      "Apollo Server",
      "Apollo Client",
      "React",
      "Tailwind",
      "Node",
      "Express",
      "Render",
    ],
    imageUrl: "/images/projectschedulemgr.png",
    completed: false,
  },
];
