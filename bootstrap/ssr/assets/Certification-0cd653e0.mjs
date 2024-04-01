import { a as jsx, j as jsxs } from "../ssr.mjs";
import { TbCertificate } from "react-icons/all.js";
import CardLayout from "./CardLayout-40a0aff1.mjs";
import { BiEdit } from "react-icons/bi/index.esm.js";
import FormAddCertification from "./FormAddCertification-f89ac5cc.mjs";
import { t as toCapital, f as formatDate } from "./utils-5d71c507.mjs";
import DeleteModal from "./DeleteModal-f473461f.mjs";
import { usePage } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./Card-17a4bd2e.mjs";
import "react";
import "./SecondaryButton-2c9ad173.mjs";
import "@headlessui/react";
import "./InputLabel-0ae3a22b.mjs";
import "./TextInput-2c7d8ed7.mjs";
import "./InputError-af1dd4cc.mjs";
import "./PrimaryButton-1152ff4d.mjs";
import "./DangerButton-df970400.mjs";
function Certification({ data }) {
  const { canEdit } = usePage().props;
  return /* @__PURE__ */ jsx(
    CardLayout,
    {
      cardName: "Certification",
      Icon: TbCertificate,
      FormModal: canEdit && FormAddCertification,
      children: data.length > 0 ? /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: data.map((certification) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flexible justify-between bg-slate-500/10 py-3 px-4 rounded-lg",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold", children: toCapital(certification.name) }),
              /* @__PURE__ */ jsxs("h2", { className: "text-sm", children: [
                "Issued by",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: toCapital(
                  certification.issuing_organization
                ) })
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-sm", children: [
                formatDate(certification.issue_date),
                " -",
                " ",
                certification.expiration_date ? formatDate(
                  certification.expiration_date
                ) : "No Expiration"
              ] }),
              certification.link && /* @__PURE__ */ jsx(
                "a",
                {
                  href: certification.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-sm text-primary underline",
                  children: "View Certification"
                }
              )
            ] }),
            canEdit && /* @__PURE__ */ jsxs("div", { className: "buttons flex gap-2", children: [
              /* @__PURE__ */ jsx(
                DeleteModal,
                {
                  routeDirect: `/profile/certification/${certification.id}`
                }
              ),
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
        certification.id
      )) }) : /* @__PURE__ */ jsxs("h1", { className: "opacity-[0.5]", children: [
        " ",
        "No certification uploaded."
      ] })
    }
  );
}
export {
  Certification as default
};
