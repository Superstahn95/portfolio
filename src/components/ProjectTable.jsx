import { projects } from "../assets/data";

function ProjectTable() {
  return (
    <table className="mt-12 w-full border-collapse text-left">
      <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
        <tr>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
            Year
          </th>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
            Project
          </th>
          <th className=" py-4 pr-8 text-sm font-semibold text-slate-200 ">
            Frontend codebase
          </th>
          <th className=" py-4 pr-8 text-sm font-semibold text-slate-200 ">
            Backend codebase
          </th>
          <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
            Technologies
          </th>
          <th className=" py-4 pr-8 text-sm font-semibold text-slate-200 ">
            Live Link
          </th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr class="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div class="translate-y-px">2023</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>{project.name}</div>
            </td>
            <td className=" py-4 pr-4 align-top text-sm ">
              <div className="translate-y-px whitespace-nowrap">
                <a href={project.githubClientUrl}>Click to see</a>
              </div>
            </td>
            <td className=" py-4 pr-4 align-top text-sm ">
              {project.githubServerUrl && (
                <div className="translate-y-px whitespace-nowrap">
                  <a href={project.githubServerUrl}>Click to see</a>
                </div>
              )}
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul class="flex -translate-y-1.5 flex-wrap">
                {project.technologies.map((tech) => (
                  <li key={tech} className="my-1 mr-1.5">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </td>
            <td className=" py-4 pr-4 align-top text-sm ">
              <div className="translate-y-px whitespace-nowrap">
                <a href={project.link} target="_blank">
                  {" "}
                  {project.link}
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProjectTable;

{
  /* <div class="block sm:hidden"><a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 hover:text-slate-200 focus-visible:text-teal-300 sm:hidden group/link text-base" href="https://www.emersoncollective.com/" target="_blank" rel="noreferrer noopener" aria-label="Emerson Collective (opens in a new tab)"><span>Emerson <span class="inline-block">Collective<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span></span></a></div> */
}
