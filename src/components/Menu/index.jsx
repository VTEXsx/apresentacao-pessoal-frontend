function Menu() {
  return (
    <ul className="text-white flex items-center justify-center gap-7 font-bold font-condensed">
      <li>
        <a className="hover:text-blue-600" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="hover:text-blue-600" href="#about">
          Sobre Mim
        </a>
      </li>
      <li>
        <a className="hover:text-blue-600" href="#projects">
          Meus Projetos
        </a>
      </li>
    </ul>
  );
}

export default Menu;
