import { a as jsx } from "../ssr.mjs";
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-red-600 dark:text-red-400 " + className, children: message }) : null;
}
export {
  InputError as I
};
