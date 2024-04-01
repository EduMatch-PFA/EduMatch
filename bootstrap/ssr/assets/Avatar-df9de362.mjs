import { a as jsx } from "../ssr.mjs";
import "react";
function Avatar({ img, name, className, ...options }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: img ? img : `https://api.dicebear.com/5.x/initials/svg?seed=${name.split(" ")[0]}%20${name.split(" ")[1]}`,
      alt: name,
      className,
      ...options
    }
  );
}
export {
  Avatar as A
};
