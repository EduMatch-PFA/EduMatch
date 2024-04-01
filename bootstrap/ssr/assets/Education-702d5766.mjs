import { a as jsx, j as jsxs } from "../ssr.mjs";
import { BiBook, BiEdit } from "react-icons/bi/index.esm.js";
import CardLayout from "./CardLayout-40a0aff1.mjs";
import FormAddEducation from "./FormAddEducation-571d365a.mjs";
import { t as toCapital, f as formatDate } from "./utils-5d71c507.mjs";
import DeleteModal from "./DeleteModal-f473461f.mjs";
import { usePage } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./Card-17a4bd2e.mjs";
import "./SecondaryButton-2c9ad173.mjs";
import "react";
import "@headlessui/react";
import "./InputLabel-0ae3a22b.mjs";
import "./TextInput-2c7d8ed7.mjs";
import "./InputError-af1dd4cc.mjs";
import "./PrimaryButton-1152ff4d.mjs";
import "./DangerButton-df970400.mjs";
function Education({ data }) {
  const { canEdit } = usePage().props;
  return /* @__PURE__ */ jsx(
    CardLayout,
    {
      cardName: "Education",
      Icon: BiBook,
      FormModal: canEdit && FormAddEducation,
      children: data.length > 0 ? /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: data.map((education) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flexible justify-between bg-slate-500/10 py-3 px-4 rounded-lg",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold", children: toCapital(education.degree) }),
              /* @__PURE__ */ jsxs("h2", { className: "text-sm", children: [
                "In",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: toCapital(education.field_of_study) }),
                " "
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-sm", children: [
                "At ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: toCapital(education.institution) })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-sm", children: [
                formatDate(education.start_year),
                " -",
                " ",
                formatDate(education.end_year) || "Present"
              ] })
            ] }),
            canEdit && /* @__PURE__ */ jsxs("div", { className: "buttons flex gap-2", children: [
              /* @__PURE__ */ jsx(DeleteModal, { routeDirect: `/profile/education/${education.id}` }),
              /* @__PURE__ */ jsx(
                BiEdit,
                {
                  className: "text-primary duration-100 cursor-pointer",
                  size: 21
                }
              )
            ] })
          ]
        },
        education.id
      )) }) : /* @__PURE__ */ jsx("h1", { className: "opacity-[0.5]", children: " No education added." })
    }
  );
}
export {
  Education as default
};
