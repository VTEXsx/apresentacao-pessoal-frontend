import { useRef } from "react";
import {
  AnimationLeft,
  AnimationRight,
  AnimationTitulo,
} from "../../animation/animation";
import {
  ResetAnimationLeft,
  ResetAnimationRight,
  ResetAnimationTitulo,
} from "../../animation/resetAnimation";
import Aboutme from "../../assets/images/Aboutme.png";
import useIntersectionObserver from "../../intersection";
function AboutMe() {
  const pRef = useRef(null);
  const PpRef = useRef(null);
  const ImgRef = useRef(null);
  const TituloRef = useRef(null);

  useIntersectionObserver(ImgRef, AnimationRight, ResetAnimationRight);
  useIntersectionObserver(pRef, AnimationLeft, ResetAnimationLeft);
  useIntersectionObserver(PpRef, AnimationLeft, ResetAnimationLeft);
  useIntersectionObserver(TituloRef, AnimationTitulo, ResetAnimationTitulo);

  return (
    <section id="about" className=" py-10 font-bold border-b-2 border-blue-300">
      <div className="w-[90%] md:w-4/5 xl:w-[70%] mx-auto space-y-10">
        <h2
          ref={TituloRef}
          className="text-red text-3xl md:text-4xl font-condensed text-blue-600 text-center"
        >
          Sobre Mim
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
          <img
            ref={ImgRef}
            src={Aboutme}
            alt="foto de Vitor Silva de lado com uma paisagem desfocada no fundo"
            className="w-2/3 md:w-2/5 lg:w-1/4 rounded-xl shadow-xl shadow-gray-400 mb-3 hover:scale-110 hover:rotate-6 transition  duration-400 ease-linear"
          />
          <div className="flex flex-col gap-4 items-center md:items-start justify-center text-lg font-condensedItalic text-justify ">
            <p ref={pRef} className="lg:w-3/4 opacity-0">
              Me chamo Vítor Silva e sou desenvolvedor front-end com um ano de
              experiência na área. Possuo habilidades em{" "}
              <span className="text-blue-600">React,</span>{" "}
              <span className="text-blue-600">Redux,</span>{" "}
              <span className="text-blue-600">JavaScript,</span>
              <span className="text-blue-600">TypeScript,</span>{" "}
              <span className="text-blue-600">Tailwind CSS,</span>{" "}
              <span className="text-blue-600">APIREST e</span>{" "}
              <span className="text-blue-600">NodeJS.</span>
            </p>
            <p ref={PpRef} className="lg:w-3/4 opacity-0">
              Também sou músico á onze anos, onde desenvolvo minhas SoftSkills,
              como: trabalho em equipe, disciplina, persistência, criatividade,
              estudo, resiliência, escuta ativa, memória, empatia, discernimento
              estético e etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
