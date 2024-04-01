import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { useState } from "react";
import { M as Modal, S as SecondaryButton } from "./SecondaryButton-2c9ad173.mjs";
import "./TextInput-2c7d8ed7.mjs";
import "@inertiajs/react";
import { BsPeopleFill } from "react-icons/bs/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
function ListModal({
  children,
  className = ""
}) {
  const [confirmingDone, setConfirmingDone] = useState(false);
  const confirmUserDone = () => {
    setConfirmingDone(true);
  };
  const closeModal = () => {
    setConfirmingDone(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: confirmUserDone, className: "font-medium", children: /* @__PURE__ */ jsx(BsPeopleFill, { size: 21, className: "" }) }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingDone, onClose: closeModal, children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-darker dark:text-gray-100", children: "Students in this session" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: [
        "List of students in this session. ",
        /* @__PURE__ */ jsx("br", {}),
        "Click in the student name to see more details."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-darker dark:text-gray-100", children }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-end", children: /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Close" }) })
    ] }) })
  ] });
}
export {
  ListModal as default
};
