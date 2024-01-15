import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Section({ onSectionChange, id, children }) {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSectionChange(id);
            console.log("This is steadily observing right now");
          }
        });
      },
      { threshold: 1 }
    );
    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
    };
  }, [id, onSectionChange]);
  return (
    <section
      ref={sectionRef}
      id={id}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      {children}
    </section>
  );
}

export default Section;
