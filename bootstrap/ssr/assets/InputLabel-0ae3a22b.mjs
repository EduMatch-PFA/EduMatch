import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
function InputLabel({ hint, value, Icon, className = "", children, ...props }) {
  let color = "text-gray-700 dark:text-gray-100 ";
  if (className.includes("text-primary"))
    color = "text-primary ";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("label", { ...props, className: `flexible ml-1 gap-1 text-[0.9rem] ` + color + className, children: [
      Icon && /* @__PURE__ */ jsx(Icon, { className: "text-red-500", size: 16 }),
      value ? value : children
    ] }),
    hint && /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 ml-1 mb-2", children: hint })
  ] });
}
export {
  InputLabel as I
};
