import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { useState } from "react";
import { D as DangerButton } from "./DangerButton-df970400.mjs";
import { M as Modal, S as SecondaryButton } from "./SecondaryButton-2c9ad173.mjs";
import "./TextInput-2c7d8ed7.mjs";
import { useForm } from "@inertiajs/react";
import { BiTrash } from "react-icons/bi/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
function DeleteModal({
  routeDelete,
  routeDirect,
  className = ""
}) {
  const [confirmingDeletion, setConfirmingDeletion] = useState(false);
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingDeletion(true);
  };
  const deleteItem = (e) => {
    e.preventDefault();
    if (routeDelete || routeDirect) {
      destroy(routeDelete ? route(routeDelete) : routeDirect, {
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
    setConfirmingDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: confirmUserDeletion, children: /* @__PURE__ */ jsx(
      BiTrash,
      {
        className: "text-red-500 duration-100 cursor-pointer",
        size: 21
      }
    ) }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: deleteItem, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-darker dark:text-gray-100", children: "Are you sure you want to delete this item?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Once the item is deleted, all of its associated data will be permanently deleted. Please enter your password to confirm you would like to permanently delete this item." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx(DangerButton, { className: "ml-3", disabled: processing, children: "Delete Item" })
      ] })
    ] }) })
  ] });
}
export {
  DeleteModal as default
};
