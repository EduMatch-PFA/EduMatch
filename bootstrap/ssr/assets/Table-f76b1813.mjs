import { a as jsx, j as jsxs } from "../ssr.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function Table({ title, subtitle, columns, children }) {
  return /* @__PURE__ */ jsx("div", { className: "relative overflow-x-auto shadow-md sm:rounded-2xl", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left first-letter backdrop-blur rounded-2xl transition-colors duration-300 z-50 bg-white/70 supports-backdrop-blur:bg-white/60 dark:bg-transparent border-apply border shadow-md ", children: [
    /* @__PURE__ */ jsxs("caption", { className: "p-5 text-lg font-semibold text-left rounded-t-2xl backdrop-blur transition-colors duration-300 z-50 bg-white/70 supports-backdrop-blur:bg-white/60 dark:bg-transparent border-apply border", children: [
      title,
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-normal text-gray-500 dark:text-gray-400", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darker dark:text-gray-400", children: /* @__PURE__ */ jsx("tr", { children: columns.map((column) => column && /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: column || "" }, column)) }) }),
    /* @__PURE__ */ jsx("tbody", { children })
  ] }) });
}
export {
  Table as default
};
