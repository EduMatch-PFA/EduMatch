import { a as jsx, F as Fragment, j as jsxs } from "../ssr.mjs";
import { A as Avatar } from "./Avatar-df9de362.mjs";
import { C as Card } from "./Card-17a4bd2e.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { S as Stars } from "./Stars-518460b5.mjs";
import { usePage, Link } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
function FeedbacksCard({ feedbacks, grid = "grid grid-cols-2 gap-x-4 ", className }) {
  const user = usePage().props.auth.user;
  return /* @__PURE__ */ jsx("div", { className: grid + className, children: feedbacks.length > 0 && /* @__PURE__ */ jsx(Fragment, { children: feedbacks.map((f) => /* @__PURE__ */ jsx(Card, { className: "mb-2 self-start", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flexible gap-3", children: [
      /* @__PURE__ */ jsx(
        Avatar,
        {
          name: f.fullname,
          img: f.picture,
          className: "w-12 rounded-full"
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Link, { href: `/profile/${f.username}`, children: /* @__PURE__ */ jsx("h1", { className: "font-semibold hover:text-primary duration-100", children: f.id === user.id ? "You" : f.username }) }),
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            value: `In ${f.createdAt}`,
            className: "-ml-0 mb-2 text-sm opacity-60"
          }
        ),
        /* @__PURE__ */ jsx(Stars, { rating: f.rating })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 p-1", children: /* @__PURE__ */ jsx("p", { children: f.review }) })
  ] }) }, f.id)) }) });
}
export {
  FeedbacksCard as default
};
