import { j as jsxs, a as jsx } from "../ssr.mjs";
import { C as Card } from "./Card-17a4bd2e.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function CardLayout({ cardName, cardProps, Icon, children, FormModal }) {
  return /* @__PURE__ */ jsxs(Card, { className: "p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "header flexible justify-between py-3 px-5 border-b border-apply", children: [
      /* @__PURE__ */ jsxs("div", { className: "flexible gap-2", children: [
        /* @__PURE__ */ jsx(Icon, {}),
        /* @__PURE__ */ jsx("h1", { children: cardName }),
        cardProps && cardProps.percentage !== 100 && /* @__PURE__ */ jsxs("div", { className: "text-green-500", children: [
          "+",
          cardProps.percentageToAdd,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: FormModal && /* @__PURE__ */ jsx(FormModal, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "content py-3 px-5", children })
  ] });
}
export {
  CardLayout as default
};
