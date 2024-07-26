/* eslint-disable react/prop-types */
import { useRef } from "react";
import { AnimationBottom } from "../../animation/animation";
import { ResetAnimationBottom } from "../../animation/resetAnimation";
import useIntersectionObserver from "../../intersection";
import Tag from "../Tags";

const ProjectBox = ({ item }) => {
  const par = item.id % 2;
  const BoxRef = useRef(null);

  useIntersectionObserver(BoxRef, AnimationBottom, ResetAnimationBottom);

  return (
    <div
      ref={BoxRef}
      className={`w-full flex opacity-0  flex-col gap-5  ${
        par === 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <video
        className="md:w-[45%] h-full border-2 border-neutral-300 hover:border-neutral-500  rounded-2xl shadow-xl  shadow-gray-400"
        controls
      >
        <source src={item.src} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      <div className="w-full flex flex-col items-start justify-start space-y-3">
        <h3 className="text-2xl">{item.title}</h3>
        <p>{item.about}</p>
        <div className="flex gap-2 flex-wrap">
          {item.tecnologias.map((tecs) => (
            <Tag key={tecs}>{tecs}</Tag>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          {item.deploy && (
            <a
              href={item.deploy}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-orange-500 hover:bg-orange-500 hover:border-gray-300 hover:text-slate-50  px-4 py-2 rounded-lg text-sm"
            >
              Deploy
            </a>
          )}
          {item.repositorio && (
            <a
              href={item.repositorio}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-orange-500 hover:bg-orange-500 hover:border-gray-300 hover:text-slate-50 px-4 py-2 rounded-lg text-sm "
            >
              Repositório
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
