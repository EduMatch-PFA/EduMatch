import { a as jsx } from "../ssr.mjs";
function Card({ children, className = "" }) {
  let p = "p-4";
  if (className.includes("p-") || className.includes("px-") || className.includes("py-")) {
    p = "";
  }
  return /* @__PURE__ */ jsx("div", { className: `bg-white shadow-lg dark:bg-dark rounded-xl ${p} mb-4 border border-apply ` + className, children });
}
export {
  Card as C
};
