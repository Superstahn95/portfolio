import React from "react";
import HeaderLinks from "./HeaderLinks";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

const headerLinks = [
  { id: 1, text: "about" },
  { id: 2, text: "experience" },
  { id: 3, text: "projects" },
];
const socials = [
  {
    id: 1,
    icon: <AiOutlineGithub size={30} />,
    link: "https://github.com/Superstahn95",
  },
  {
    id: 2,
    icon: <AiOutlineInstagram size={30} />,
    link: "https://instagram.com/superstahn",
  },
  {
    id: 3,
    icon: <AiOutlineTwitter size={30} />,
    link: "https://twitter.com/superstahn",
  },
  {
    id: 4,
    icon: <AiOutlineLinkedin size={30} />,
    link: "https://www.linkedin.com/in/stanley-chukwuemeka-55a172298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
];
function Header({ activeSection }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex-col   lg:max-h-screen lg:w-1/2 lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Chukwuemeka Stanley
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-teal-300 sm:text-xl">
          MERN Stack developer
        </h2>
        <p className="mt-4 max-w-xs  leading-normal">
          An engineering graduate and a developer. I build accessible, inclusive
          products and digital experiences for the web.
        </p>
        {/* links */}
        <nav class="nav hidden lg:block" aria-label="In-page jump links">
          <ul class="mt-16 w-max">
            {headerLinks.map((link) => (
              <HeaderLinks
                key={link.id}
                link={link}
                activeSection={activeSection}
              />
            ))}
          </ul>
        </nav>
      </div>
      <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
        {socials.map((social) => (
          <li
            key={social.id}
            className="mr-5 text-xs cursor-pointer hover:text-slate-200"
          >
            <a href={social.link} target="_blank">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
