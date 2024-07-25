import Aboutme from "../../assets/images/Aboutme.png";
function AboutMe() {
  return (
    <section id="about" className=" py-10 font-bold border-b-2 border-blue-300">
      <div className="w-[90%] md:w-4/5 xl:w-[70%] mx-auto flex flex-col items-center md:items-start gap-4">
        <h2 className="text-red text-3xl md:text-4xl font-condensed text-blue-600">
          Sobre Mim
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
          <img
            src={Aboutme}
            alt="foto de Vitor Silva de lado com uma paisagem desfocada no fundo"
            className="w-2/3 md:w-2/5 lg:w-1/4 rounded-xl shadow-xl shadow-gray-400 mb-3 hover:scale-110 hover:rotate-6 transition  duration-400 ease-linear"
          />
          <div className="flex flex-col gap-4 items-center md:items-start justify-center text-lg font-condensedItalic text-justify">
            <p className="lg:w-3/4">
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
            <p className="lg:w-3/4">
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
