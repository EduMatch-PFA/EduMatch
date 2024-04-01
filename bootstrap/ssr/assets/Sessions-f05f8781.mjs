import { j as jsxs, a as jsx, F as Fragment } from "../ssr.mjs";
import "react";
import SearchBar from "./SearchBar-55200f43.mjs";
import FiltersMenu from "./FiltersMenu-979a4862.mjs";
import SessionsFeed from "./SessionsFeed-d6da14da.mjs";
import { Link } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./PrimaryButton-1152ff4d.mjs";
import "./TextInput-2c7d8ed7.mjs";
import "react-icons/bi/index.esm.js";
import "@inertiajs/inertia";
import "./Filter-74bb87a8.mjs";
import "./Card-17a4bd2e.mjs";
import "react-icons/hi/index.esm.js";
import "./SessionCard-6fdbcdaa.mjs";
import "./Avatar-df9de362.mjs";
import "./Avatars-a9657bc9.mjs";
import "./Badge-6dc0d10f.mjs";
import "./Stars-518460b5.mjs";
import "./utils-5d71c507.mjs";
import "react-icons/md/index.esm.js";
function Paginator({ data, count }) {
  return data && data.link && data.links.length > 3 && /* @__PURE__ */ jsxs("div", { className: "flexible-center flex-col gap-2", children: [
    /* @__PURE__ */ jsxs("span", { className: "text-slate-700/70 font-normal text-sm dark:text-slate-100/70", children: [
      "Showing ",
      data.data.length,
      " out of ",
      count
    ] }),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Page navigation", children: /* @__PURE__ */ jsx("ul", { className: "inline-flex items-center -space-x-px", children: data.links.map((link) => {
      if (link.label.includes("Previous") || link.label.includes("Next")) {
        return /* @__PURE__ */ jsx(
          Link,
          {
            href: link.url,
            className: `${!link.url ? "text-gray-500 bg-white border border-gray-300 dark:bg-darker dark:border-gray-700 dark:text-gray-400 cursor-not-allowed" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} px-3 py-2 leading-tight ${link.label.includes("Previous") ? "rounded-l-lg" : "rounded-r-lg"}`,
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                "aria-hidden": "true",
                className: "w-5 h-5",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: link.label.includes("Previous") ? /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                    clipRule: "evenodd"
                  }
                ) : /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                    clipRule: "evenodd"
                  }
                )
              }
            )
          },
          link.label
        );
      } else {
        return /* @__PURE__ */ jsx(
          Link,
          {
            href: link.url,
            className: `${link.active ? "text-gray-500 bg-white border border-gray-300 dark:bg-darker dark:border-gray-700 dark:text-gray-400 cursor-not-allowed" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} px-3 py-2 leading-tight`,
            children: link.label
          },
          link.label
        );
      }
    }) }) })
  ] });
}
const Sessions = ({ sessions, count }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SearchBar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline", children: [
      /* @__PURE__ */ jsx("div", { className: "w-1/5 sticky top-20", children: /* @__PURE__ */ jsx(FiltersMenu, {}) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 p-4 mb-12", children: [
        /* @__PURE__ */ jsx(SessionsFeed, { sessions: sessions.data }),
        /* @__PURE__ */ jsx("div", { className: "my-6", children: /* @__PURE__ */ jsx(Paginator, { data: sessions, count }) })
      ] })
    ] })
  ] });
};
const Sessions$1 = Sessions;
export {
  Sessions$1 as default
};
