import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import { useState } from "react";
import Section from "../components/Section";
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
          </Section>
          <Section id={"projects"} onSectionChange={handleSectionChange}>
            <Projects />
          </Section>
        </main>
      </div>
    </section>
  );
}

export default HomePage;
