import { j as jsxs, a as jsx } from "../ssr.mjs";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { T as TextInput } from "./TextInput-2c7d8ed7.mjs";
import { BiSearch } from "react-icons/bi/index.esm.js";
import { useState } from "react";
import "@inertiajs/inertia";
import { usePage, router } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function SearchBar() {
  const { search: initialSearch, sort, type } = usePage().props;
  const [search, setSearch] = useState(initialSearch || "");
  const getQuery = (newSearch, newSort, newType) => {
    const url = new URL(window.location.href);
    if (newSearch)
      url.searchParams.set("search", newSearch);
    if (newSort)
      url.searchParams.set("sort", newSort);
    if (newType)
      url.searchParams.set("type", newType);
    return url;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.get(
      getQuery(search, sort, type),
      { search },
      { preserveState: true }
    );
  };
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  return /* @__PURE__ */ jsxs("header", { className: "py-16 sm:text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200", children: "Latest Sessions" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-700 dark:text-slate-400", children: "Find Available Sessions with Expert Tutors Now!" }),
    /* @__PURE__ */ jsxs("section", { className: "mt-3 max-w-sm sm:mx-auto sm:px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "Search for available sessions" }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          method: "get",
          onSubmit: handleSubmit,
          className: "flex flex-wrap -mx-2",
          children: [
            /* @__PURE__ */ jsx("div", { className: "px-2 grow-[9999] basis-64 mt-3", children: /* @__PURE__ */ jsx("div", { className: "group relative", children: /* @__PURE__ */ jsx(
              TextInput,
              {
                icon: BiSearch,
                value: search,
                placeholder: "Search",
                onChange: handleInputChange
              }
            ) }) }),
            /* @__PURE__ */ jsx("div", { className: "px-2 grow flex mt-3", children: /* @__PURE__ */ jsx(PrimaryButton, { children: /* @__PURE__ */ jsx(BiSearch, { size: 20 }) }) })
          ]
        }
      )
    ] })
  ] });
}
export {
  SearchBar as default
};
