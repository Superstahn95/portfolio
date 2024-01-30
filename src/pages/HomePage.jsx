import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import { useState } from "react";
import Section from "../components/Section";
import { Link } from "react-router-dom"; //new line
function HomePage() {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };
  console.log(activeSection);
  return (
    <section className="font-montserrat px-6 py-12 min-h-screen max-w-screen-xl mx-auto md:px-12 md:py:20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4 ">
        <Header activeSection={activeSection} />
        {/* going to hold our different sections */}
        <main className=" pt-24 lg:w-1/2 lg:py-24 ">
          <Section id={"about"} onSectionChange={handleSectionChange}>
            <About />
          </Section>
          <Section id={"experience"} onSectionChange={handleSectionChange}>
            <Experience />
            <div className="mt-12">
              <a
                class="inline-flex items-baseline leading-tight  hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                href="/resume"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="View Full Résumé (opens in a new tab)"
              >
                <span>
                  View Full{" "}
                  <span class="inline-block">
                    Résumé
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </Section>
          <Section id={"projects"} onSectionChange={handleSectionChange}>
            <Projects />
            {/* <div class="mt-12">
              <a
                class="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                aria-label="View Full Project Archive"
                href="/archive"
              >
                <span>
                  <span class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    View Full Project{" "}
                  </span>
                  <span class="whitespace-nowrap">
                    <span class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                      Archive
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div> */}
          </Section>
          <div className="mt-7">
            <Link
              className="inline-flex items-baseline leading-tight  hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
              to="/archive"
            >
              <span>
                View Project{" "}
                <span className="inline-block">
                  Archivé
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
}

export default HomePage;
