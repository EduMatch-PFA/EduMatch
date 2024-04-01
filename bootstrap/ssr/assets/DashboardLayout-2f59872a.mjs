import { a as jsx, j as jsxs } from "../ssr.mjs";
import { M as MainLayout } from "./MainLayout-df1ebc35.mjs";
import SideBar from "./SideBar-1eff9694.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./Logo-fe49b513.mjs";
import "react";
import "@headlessui/react";
import "react-icons/cg/index.esm.js";
import "./Avatar-df9de362.mjs";
import "./PrimaryButton-1152ff4d.mjs";
import "react-icons/ri/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/fi/index.esm.js";
import "./InputLabel-0ae3a22b.mjs";
import "react-icons/go/index.esm.js";
function DashboardLayout({ children }) {
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsx(SideBar, {}),
    /* @__PURE__ */ jsx("div", { className: "p-4 sm:ml-64", children })
  ] }) });
}
export {
  DashboardLayout as default
};
