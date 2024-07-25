import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function MenuMobile() {
 const [open, setOpen] = useState(false);

 function openMenu(){
  setOpen(true);
 }
 function closeMenu(){
  setOpen(false);
 }
  return (
    <div className="transition delay-200 duration-500 ease-in-out">
      <FaBars
        onClick={openMenu}
        className="text-white text-3xl hover:text-blue-600"
      />
      {open && (
        <div className="fixed top-0 right-0 w-1/2 h-60 border-b-2 border-red bg-orange-600/90 ">
          <IoClose
            onClick={closeMenu}
            className="text-white text-5xl fixed right-3 top-2 hover:text-blue-600"
          />
          <ul className="h-4/5 mt-[20%] text-white flex flex-col items-center justify-around font-bold font-condensed">
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
        </div>
      )}
    </div>
  );
}

export default MenuMobile;
