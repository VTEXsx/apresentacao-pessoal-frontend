import gsap from "gsap";

const ResetAnimationBottom = (element) => {
      gsap.to(element, { duration: 1, y: -20, opacity: 0 });
};
const ResetAnimationTitulo = (element) => {
      gsap.to(element, { duration: 1, y: -50, opacity: 0 });
};
const ResetAnimationLeft = (element) => {
  gsap.to(element, { duration: 1, x: -100, opacity: 0 });
};
const ResetAnimationRight = (element) => {
  gsap.to(element, { duration: 1, x: 100, opacity: 0 });
};
export { ResetAnimationBottom, ResetAnimationLeft, ResetAnimationRight, ResetAnimationTitulo };