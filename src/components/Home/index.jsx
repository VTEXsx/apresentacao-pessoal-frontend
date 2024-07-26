import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";

import { useRef } from "react";
import { AnimationLeft, AnimationRight } from "../../animation/animation";
import {
  ResetAnimationLeft,
  ResetAnimationRight,
} from "../../animation/resetAnimation";
import useIntersectionObserver from "../../intersection";
import BoxLinks from "../BoxLinks";
function Home() {
  const h2Ref = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const p2Ref = useRef(null);

  useIntersectionObserver(h2Ref, AnimationLeft, ResetAnimationLeft);
  useIntersectionObserver(pRef, AnimationLeft, ResetAnimationLeft);
  useIntersectionObserver(h1Ref, AnimationRight, ResetAnimationRight);
  useIntersectionObserver(p2Ref, AnimationRight, ResetAnimationRight);
  return (
    <section
      id="home"
      className="home h-dvh w-full pt-40 pb-20 text-white font-bold"
    >
      <div className="w-[90%] xl:w-[70%] h-full mx-auto">
        <div className="h-full flex flex-col  items-center justify-center text-center gap-2">
          <h2 ref={h2Ref} className="text-3xl font-condensedItalic">
            Vítor Silva
          </h2>
          <h1
            ref={h1Ref}
            className="text-5xl md:text-6xl gradient-text font-condensed"
          >
            Desenvolvedor Front End
          </h1>
          <p
            ref={pRef}
            className="text-xl tracking-wider md:w-4/5 lg:w-3/5 font-condensedItalic"
          >
            Precisa de um desenvolvedor front end para transformar suas ideias
            em experiências incríveis?
          </p>
          <p
            ref={p2Ref}
            className="text-base text-blue-300 tracking-wider md:w-3/5 lg:w-1/2 font-condensedItalic"
          >
            Entre em contato comigo! Vamos trabalhar juntos!
          </p>
          <div className="flex items-center justify-center gap-5 mt-5">
            <BoxLinks href={"https://www.linkedin.com/in/devsvitor/"}>
              <FaLinkedinIn className="hover:scale-110" />
            </BoxLinks>
            <BoxLinks href={"https://github.com/VTEXsx"}>
              <TbBrandGithubFilled className="hover:scale-110" />
            </BoxLinks>
            <BoxLinks href={"https://www.instagram.com/svitor.dev/"}>
              <RiInstagramFill className="hover:scale-110" />
            </BoxLinks>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
