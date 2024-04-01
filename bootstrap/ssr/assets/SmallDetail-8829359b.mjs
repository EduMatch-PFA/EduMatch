import { j as jsxs, a as jsx } from "../ssr.mjs";
import { C as Card } from "./Card-17a4bd2e.mjs";
import "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function SmallDetail({ Icon, h1, h2, className, ...props }) {
  return /* @__PURE__ */ jsxs("div", { className: `flexible gap-2 ${className}`, children: [
    /* @__PURE__ */ jsx(Card, { className: "w-10 h-10 flexible-center p-0", children: /* @__PURE__ */ jsx(Icon, { size: 18 }) }),
    /* @__PURE__ */ jsxs("div", { className: "-mt-4 text-sm", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-semibold break-words", children: h1 }),
      /* @__PURE__ */ jsx("h2", { className: "font-medium opacity-60", children: h2 })
    ] })
  ] });
}
export {
  SmallDetail as default
};
