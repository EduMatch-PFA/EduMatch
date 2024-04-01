import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { useState } from "react";
import { M as Modal, S as SecondaryButton } from "./SecondaryButton-2c9ad173.mjs";
import "./TextInput-2c7d8ed7.mjs";
import { useForm } from "@inertiajs/react";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
function DoneModal({
  routeDelete,
  routeDirect,
  className = ""
}) {
  const [confirmingDone, setConfirmingDone] = useState(false);
  const {
    data,
    setData,
    patch,
    processing,
    reset,
    errors
  } = useForm({});
  const confirmUserDone = () => {
    setConfirmingDone(true);
  };
  const doneItem = (e) => {
    e.preventDefault();
    if (routeDelete || routeDirect) {
      patch(routeDelete ? route(routeDelete) : routeDirect, {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => {
        },
        onFinish: () => reset()
      });
    } else {
      closeModal();
    }
  };
  const closeModal = () => {
    setConfirmingDone(false);
    reset();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: confirmUserDone, className: "text-yellow-400 font-medium", children: "Mark as done" }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingDone, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: doneItem, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-darker dark:text-gray-100", children: "Is this session done?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Once the session is set to done, it won't show up in the feed anymore." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-3", disabled: processing, children: "Mark as done" })
      ] })
    ] }) })
  ] });
}
export {
  DoneModal as default
};
