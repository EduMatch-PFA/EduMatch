import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import SessionCard from "./SessionCard-6fdbcdaa.mjs";
import "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./Avatar-df9de362.mjs";
import "react";
import "./Avatars-a9657bc9.mjs";
import "./Badge-6dc0d10f.mjs";
import "./Card-17a4bd2e.mjs";
import "./PrimaryButton-1152ff4d.mjs";
import "./Stars-518460b5.mjs";
import "./utils-5d71c507.mjs";
import "react-icons/bi/index.esm.js";
import "react-icons/hi/index.esm.js";
import "react-icons/md/index.esm.js";
function SessionsFeed({ sessions }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "flexible justify-between", children: /* @__PURE__ */ jsxs("h1", { className: "mb-4 text-xl sm:text-3xl tracking-tight font-extrabold flexible gap-2", children: [
      "Available Sessions",
      " "
    ] }) }),
    sessions.map((session) => /* @__PURE__ */ jsx(SessionCard, { session }, session.id))
  ] });
}
export {
  SessionsFeed as default
};
