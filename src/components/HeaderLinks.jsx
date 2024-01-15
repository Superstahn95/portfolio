function HeaderLinks({ link, activeSection }) {
  const { text, id } = link;

  return (
    <li>
      <a className="group flex items-center py-3 active" href={`#${text}`}>
        <span
          className={`${
            activeSection === text ? "w-16 bg-slate-200" : null
          } nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
        ></span>
        <span
          className={`${
            activeSection === text ? "text-slate-200" : "text-slate-500"
          } nav-text text-xs  font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200`}
        >
          {text}
        </span>
        {/* <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span className="nav-text text-xs  font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          {text}
        </span> */}
      </a>
    </li>
  );
}

export default HeaderLinks;
