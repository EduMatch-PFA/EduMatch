import { j as jsxs, a as jsx } from "../ssr.mjs";
import "react";
import { M as MainLayout } from "./MainLayout-df1ebc35.mjs";
import { Head } from "@inertiajs/react";
import "./SessionCard-6fdbcdaa.mjs";
import DetailsLayout from "./DetailsLayout-38ad4384.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./Logo-fe49b513.mjs";
import "@headlessui/react";
import "react-icons/cg/index.esm.js";
import "./Avatar-df9de362.mjs";
import "./PrimaryButton-1152ff4d.mjs";
import "react-icons/ri/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/fi/index.esm.js";
import "./Avatars-a9657bc9.mjs";
import "./Badge-6dc0d10f.mjs";
import "./Card-17a4bd2e.mjs";
import "./Stars-518460b5.mjs";
import "./utils-5d71c507.mjs";
import "react-icons/hi/index.esm.js";
import "react-icons/md/index.esm.js";
import "./InputLabel-0ae3a22b.mjs";
import "./SmallDetail-8829359b.mjs";
import "./TextArea-49159cf8.mjs";
import "./FeedbacksCard-479835d2.mjs";
const SessionDetails = ({ auth, session }) => {
  session = session.data;
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Session Details" }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(DetailsLayout, { session }) })
  ] });
};
export {
  SessionDetails as default
};
