import gsap from "gsap";

const AnimationBottom = (element) => {
 gsap.to(element, { duration: 1, y: -40, opacity: 1 });
}
const AnimationLeft = (element) => {
 gsap.to(element, { duration: 1, x: 0, opacity: 1 });
}
const AnimationRight = (element) => {
 gsap.to(element, { duration: 1, x: 0, opacity: 1 });
}
const AnimationTitulo = (element) => {
 gsap.to(element, { duration: 1, y: 0, opacity: 1 });
}
export { AnimationBottom, AnimationLeft, AnimationRight, AnimationTitulo };