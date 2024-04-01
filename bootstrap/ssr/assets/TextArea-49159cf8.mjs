import { j as jsxs, a as jsx } from "../ssr.mjs";
import { forwardRef, useRef, useEffect } from "react";
const TextArea = forwardRef(function TextArea2({ className = "", isFocused = false, icon: Icon, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    Icon && /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-gray-400" }) }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        ...props,
        className: "py-2 w-full text-darker border border-apply dark:bg-darker dark:text-gray-300 focus:border-primary focus:ring-primary/10 focus:ring-4 rounded-lg shadow-sm " + (Icon ? "pl-10" : "") + " " + className,
        ref: input
      }
    )
  ] });
});
export {
  TextArea as T
};
