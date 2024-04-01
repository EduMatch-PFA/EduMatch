import { j as jsxs, a as jsx } from "../ssr.mjs";
function Badge({ icon: Icon, size, text, className, ...props }) {
  return /* @__PURE__ */ jsxs("span", { ...props, className: `cursor-pointer inline-flex items-center gap-1 font-semibold text-xs rounded-md px-2 py-1 mr-3 ${className}`, children: [
    Icon && /* @__PURE__ */ jsx(Icon, { size }),
    text
  ] });
}
export {
  Badge as B
};
