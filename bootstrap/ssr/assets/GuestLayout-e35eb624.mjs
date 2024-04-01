import { j as jsxs, a as jsx } from "../ssr.mjs";
import { G as Gradient, L as Logo } from "./Logo-fe49b513.mjs";
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-grid-slate-900 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100/40 dark:bg-darker", children: [
    /* @__PURE__ */ jsx(Gradient, {}),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Logo, {}) }),
    /* @__PURE__ */ jsx("div", { className: "w-full relative z-50 sm:max-w-md mt-8 px-7 py-6 bg-white dark:bg-dark shadow-lg overflow-hidden sm:rounded-xl", children })
  ] });
}
export {
  Guest as G
};
