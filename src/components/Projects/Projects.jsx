import { projectsItems } from "../../data/projects";
import ProjectBox from "../ProjectBox";
function Projects() {
  return (
    <section
      id="projects"
      className="text-slate-700 w-full py-16 font-condensed text-base text-justify flex items-center justify-center flex-col space-y-10 border-b-[3px] border-blue-700"
    >
      <h2 className="text-3xl md:text-4xl text-blue-600">Meus Projetos</h2>
      <div className="w-4/5 xl:w-[70%] space-y-16">
        {projectsItems.map((item) => (
          <ProjectBox key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
