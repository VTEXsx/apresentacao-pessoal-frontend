import { useRef } from "react";
import { projectsItems } from "../../data/projects";
import ProjectBox from "../ProjectBox";
import useIntersectionObserver from "../../intersection";
import { AnimationTitulo } from "../../animation/animation";
import { ResetAnimationTitulo } from "../../animation/resetAnimation";
function Projects() {
  const TituloRef = useRef(null);
  useIntersectionObserver(TituloRef, AnimationTitulo, ResetAnimationTitulo);

  return (
    <section
      id="projects"
      className="text-slate-700 w-full py-16 font-condensed text-base text-justify space-y-20"
    >
      <h2
        ref={TituloRef}
        className="text-3xl md:text-4xl text-blue-600 text-center"
      >
        Meus Projetos
      </h2>
      <div className="w-4/5 xl:w-[70%] mx-auto space-y-16">
        {projectsItems.map((item) => (
          <ProjectBox key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
