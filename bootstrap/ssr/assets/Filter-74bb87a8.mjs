import { j as jsxs, a as jsx } from "../ssr.mjs";
import { C as Card } from "./Card-17a4bd2e.mjs";
import "react";
import { usePage, router } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function RadioOption({
  name,
  id,
  value,
  label,
  helper,
  selected
}) {
  return /* @__PURE__ */ jsxs(
    "label",
    {
      htmlFor: id,
      className: "flex items-center gap-2 text-sm duration-50 hover:bg-primary/10 p-1 rounded-lg cursor-pointer font-semibold text-slate-900 dark:text-slate-300",
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            id,
            name,
            type: "radio",
            value,
            checked: selected,
            className: "w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary/0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
          }
        ),
        label,
        helper && /* @__PURE__ */ jsx("p", { className: "text-xs font-normal text-slate-500 dark:text-slate-300", children: helper })
      ]
    }
  );
}
function Filter({ filterType, heading, fields, icon: Icon }) {
  const values = fields.values;
  const { search, sort, type } = usePage().props;
  const getQuery = (newSearch, newSort, newType) => {
    const url = new URL(window.location.href);
    if (search)
      url.searchParams.set("search", search);
    if (sort)
      url.searchParams.set("sort", sort);
    if (type)
      url.searchParams.set("type", type);
    return url;
  };
  const handleChange = (e) => {
    router.get(
      getQuery(),
      { [filterType]: e.target.value },
      { preserveState: true }
    );
  };
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs("h3", { className: "mb-4 text-lg sm:text-xl tracking-tight text-slate-900 font-semibold dark:text-slate-200 flexible gap-2", children: [
      /* @__PURE__ */ jsx(Icon, { className: "text-primary" }),
      heading
    ] }),
    /* @__PURE__ */ jsx("div", { className: "fields flex flex-col", children: /* @__PURE__ */ jsx("form", { action: "", method: "get", onChange: handleChange, children: values.map((field) => /* @__PURE__ */ jsx(
      RadioOption,
      {
        name: fields.name,
        id: field.key,
        value: field.key,
        label: field.value,
        helper: field == null ? void 0 : field.helper,
        selected: field.key === sort || field.key === type
      },
      field.key
    )) }) })
  ] });
}
export {
  Filter as default
};
