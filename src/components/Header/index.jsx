import Menu from "../Menu";
import MenuMobile from "../MenuMobile";
import Logo from "../../assets/images/sVitor.Dev.png"
function Header() {
  const larguraTela = window.innerWidth;
  return (
    <header className="bg-orange-700/80 fixed top-0 w-full h-20 z-50">
      <div className="w-[90%] xl:w-[70%] mx-auto flex justify-between items-center h-full bg-transparent">
        <img
          className="h-full py-1"
          src={Logo}
          alt="logo do código certo"
        />
        {larguraTela < 768 ? <MenuMobile /> : <Menu />}
      </div>
    </header>
  );
}

export default Header;
