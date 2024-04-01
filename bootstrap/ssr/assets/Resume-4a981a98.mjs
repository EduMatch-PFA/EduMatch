import { a as jsx, F as Fragment, j as jsxs } from "../ssr.mjs";
import "react";
import { FiFilePlus } from "react-icons/fi/index.esm.js";
import CardLayout from "./CardLayout-40a0aff1.mjs";
import FormAddResume from "./FormAddResume-ea4575a1.mjs";
import { usePage } from "@inertiajs/react";
import DeleteModal from "./DeleteModal-f473461f.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./Card-17a4bd2e.mjs";
import "./SecondaryButton-2c9ad173.mjs";
import "@headlessui/react";
import "./InputLabel-0ae3a22b.mjs";
import "./TextInput-2c7d8ed7.mjs";
import "./InputError-af1dd4cc.mjs";
import "./PrimaryButton-1152ff4d.mjs";
import "react-icons/bi/index.esm.js";
import "react-icons/tb/index.esm.js";
import "./DangerButton-df970400.mjs";
function Resume({ data, percentage }) {
  const { canEdit } = usePage().props;
  return /* @__PURE__ */ jsx(
    CardLayout,
    {
      cardName: "Resume",
      Icon: FiFilePlus,
      cardProps: !data && { percentage, percentageToAdd: 25 },
      FormModal: canEdit && FormAddResume,
      children: /* @__PURE__ */ jsx(Fragment, { children: data ? /* @__PURE__ */ jsxs("div", { className: "flexible justify-between bg-slate-500/10 py-3 px-4 rounded-lg", children: [
        /* @__PURE__ */ jsx("a", { href: data, target: "_BLANK", children: /* @__PURE__ */ jsx("h1", { className: "text font-semibold duration-100 hover:text-primary", children: "Click to view resume" }) }),
        canEdit && /* @__PURE__ */ jsx("div", { className: "buttons flex gap-2", children: /* @__PURE__ */ jsx(DeleteModal, { routeDelete: "resume.delete" }) })
      ] }) : /* @__PURE__ */ jsx("h1", { className: "opacity-[0.5]", children: "No resume uploaded." }) })
    }
  );
}
export {
  Resume as default
};
