/* eslint-disable react/prop-types */
function BoxLinks(props) {
  return (
    <a
      href={props.href}
      className="w-14 h-14 md:w-20 md:h-20 border-2 border-blue-900 hover:border-blue-600 rounded-md flex items-center justify-center cursor-pointer transition  duration-400 ease-linear text-5xl hover:text-[3.2rem]"
      target="_blank"
    >
      {props.children}
    </a>
  );
}

export default BoxLinks;
