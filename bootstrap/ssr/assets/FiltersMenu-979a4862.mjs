import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { BiSort } from "react-icons/bi/index.esm.js";
import Filter from "./Filter-74bb87a8.mjs";
import { HiLocationMarker } from "react-icons/hi/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./Card-17a4bd2e.mjs";
import "react";
function FiltersMenu() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-4 text-xl sm:text-3xl tracking-tight font-extrabold", children: "Filters" }),
    /* @__PURE__ */ jsx(
      Filter,
      {
        filterType: "sort",
        icon: BiSort,
        heading: "Sort by",
        fields: {
          name: "sort",
          values: [
            { key: "new", value: "Recently Added" },
            { key: "upcoming", value: "Upcoming" },
            { key: "tr", value: "Top Rated" },
            { key: "lp", value: "Low Availability" },
            { key: "hp", value: "High Availability" }
            // { key: "lp", value: "Lowest price" },
            // { key: "hp", value: "Highest price" },
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      Filter,
      {
        filterType: "type",
        icon: HiLocationMarker,
        heading: "Session type",
        fields: {
          name: "type",
          values: [
            { key: "online", value: "Online" },
            { key: "inperson", value: "In-person" }
          ]
        }
      }
    )
  ] });
}
export {
  FiltersMenu as default
};
