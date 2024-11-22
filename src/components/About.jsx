import React from "react";

function About({ id, onSectionChange }) {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        {/* <p className="mb-4">
          In 2022 I wrote my first ever “hello world” with html which happens to
          be the first code output of almost if not all developers out there. I
          went through making traditional static pages with html and css and
          temporarily abandoned following up anymore until a year later.
          Fast-forward to today, i have developed a lot of love and appreciation
          for javascript which happens to be the center of my builds so far. I
          have built a lot of practice projects ranging from web apps to backend
          api(s) using the
          <span className="text-teal-300"> MERN stack</span> while also taking a
          <span className="text-teal-300">React Native</span> course in my spare
          time.
        </p>
        <p class="mb-4">
          My main focus these days as it has always been remains to keep
          building projects while in search of real industry experience
        </p> */}
        <p className="mb-4">
          A passionate full-stack developer specializing in the{" "}
          <span className="text-teal-300"> MERN stack</span>. With a string
          foundation in both frontend and backend development, I create
          scalable, efficient and user friendly web applications that drive
          results.
        </p>
      </div>
    </>
  );
}

export default About;
