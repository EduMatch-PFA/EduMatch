import { a as jsx, j as jsxs } from "../ssr.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { usePage, Link } from "@inertiajs/react";
import "react";
import { BiCollection, BiPlus } from "react-icons/bi/index.esm.js";
import { GoDashboard } from "react-icons/go/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function ListItem({ name, route: route2, Icon, isActive }) {
  return /* @__PURE__ */ jsx("li", { className: "text-lg font-semibold py-5 px-5", children: /* @__PURE__ */ jsxs(
    Link,
    {
      href: route2,
      className: `flex items-center duration-150 text-gray-900 rounded-xl dark:text-white ${isActive ? "bg-primary text-white" : "bg-slate-500/5 dark:bg-slate-200/5 hover:bg-slate-500/10 dark:hover:bg-slate-200/10"} py-3 px-4`,
      children: [
        /* @__PURE__ */ jsx(Icon, { size: 23 }),
        /* @__PURE__ */ jsx("span", { className: "ml-3", children: name })
      ]
    }
  ) });
}
function SideBar() {
  const user = usePage().props.auth.user;
  const currentRoute = route().current();
  return /* @__PURE__ */ jsx(
    "aside",
    {
      id: "default-sidebar",
      className: "fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0",
      "aria-label": "Sidebar",
      children: /* @__PURE__ */ jsxs("div", { className: "h-full pb-10 pt-10 overflow-y-auto backdrop-blur transition-colors duration-300 z-50 bg-white/70 supports-backdrop-blur:bg-white/60 dark:bg-transparent border-apply border-r", children: [
        /* @__PURE__ */ jsxs("ul", { className: "font-medium", children: [
          /* @__PURE__ */ jsx(
            ListItem,
            {
              name: "Dashboard",
              route: "/dashboard",
              isActive: currentRoute === "dashboard",
              Icon: GoDashboard
            }
          ),
          /* @__PURE__ */ jsx(
            ListItem,
            {
              name: "Sessions",
              route: "/dashboard/sessions",
              isActive: currentRoute === "dashboard.session",
              Icon: BiCollection
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-5 py-6", children: user.ROLE === "TEACHER" ? /* @__PURE__ */ jsx(Link, { href: "/dashboard/create", children: /* @__PURE__ */ jsxs(
          PrimaryButton,
          {
            className: "w-full flexible-center gap-2",
            style: {
              padding: ".85rem",
              borderRadius: ".75rem"
            },
            children: [
              /* @__PURE__ */ jsx(BiPlus, { size: 20 }),
              "Create New Session"
            ]
          }
        ) }) : /* @__PURE__ */ jsx(
          InputLabel,
          {
            value: "Become a teacher to create a session",
            className: "ml-0 text-sm opacity-60"
          }
        ) })
      ] })
    }
  );
}
export {
  SideBar as default
};
