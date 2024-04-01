import { j as jsxs, a as jsx } from "../ssr.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function Widget({
  Icon,
  hint,
  title,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      className: "flex flex-col gap-1 p-6 rounded-2xl backdrop-blur transition-colors duration-300 z-50 bg-white/70 supports-backdrop-blur:bg-white/60 dark:bg-transparent border-apply border shadow-md " + className,
      children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-xl font-medium flexible gap-2", children: [
          /* @__PURE__ */ jsx(Icon, { size: 20 }),
          title
        ] }),
        hint && /* @__PURE__ */ jsx(InputLabel, { value: hint, className: "ml-0 mb-2 text-sm opacity-60" }),
        children
      ]
    }
  );
}
export {
  Widget as default
};
