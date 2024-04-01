import { j as jsxs, a as jsx } from "../ssr.mjs";
import "./TextInput-2c7d8ed7.mjs";
import { M as MainLayout } from "./MainLayout-df1ebc35.mjs";
import Sessions from "./Sessions-f05f8781.mjs";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "./Logo-fe49b513.mjs";
import "@headlessui/react";
import "react-icons/cg/index.esm.js";
import "./Avatar-df9de362.mjs";
import "./PrimaryButton-1152ff4d.mjs";
import "react-icons/ri/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/fi/index.esm.js";
import "./SearchBar-55200f43.mjs";
import "@inertiajs/inertia";
import "./FiltersMenu-979a4862.mjs";
import "./Filter-74bb87a8.mjs";
import "./Card-17a4bd2e.mjs";
import "react-icons/hi/index.esm.js";
import "./SessionsFeed-d6da14da.mjs";
import "./SessionCard-6fdbcdaa.mjs";
import "./Avatars-a9657bc9.mjs";
import "./Badge-6dc0d10f.mjs";
import "./Stars-518460b5.mjs";
import "./utils-5d71c507.mjs";
import "react-icons/md/index.esm.js";
function Home({ auth, sessions, count }) {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(Sessions, { sessions, count }) })
  ] });
}
export {
  Home as default
};
