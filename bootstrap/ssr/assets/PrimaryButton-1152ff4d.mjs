import { a as jsx } from "../ssr.mjs";
function PrimaryButton({ className = "", disabled, children, ...props }) {
  let bg = "bg-primary hover:bg-primary/80 dark:hover:bg-primary";
  if (className.includes("bg-")) {
    bg = "";
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `btn-primary ${bg} px-4 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
export {
  PrimaryButton as P
};
