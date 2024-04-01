import { a as jsx } from "../ssr.mjs";
function DangerButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-red-600 rounded-lg font-semibold text-sm text-white hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-offset-2 dark:focus:ring-offset-dark transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
export {
  DangerButton as D
};
