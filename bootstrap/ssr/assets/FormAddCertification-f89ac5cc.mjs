import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { S as SecondaryButton, M as Modal } from "./SecondaryButton-2c9ad173.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { T as TextInput } from "./TextInput-2c7d8ed7.mjs";
import { I as InputError } from "./InputError-af1dd4cc.mjs";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { BiPlus } from "react-icons/bi/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
function FormAddCertification() {
  const [addingCertification, setAddingCertification] = useState(false);
  const { data, setData, post, processing, reset, errors } = useForm({
    name: "",
    issuing_organization: "",
    issue_date: "",
    expiration_date: "",
    link: ""
  });
  const openAddCertification = () => {
    setAddingCertification(true);
  };
  const closeModal = () => {
    setAddingCertification(false);
    reset();
  };
  const addCertification = (e) => {
    e.preventDefault();
    post(route("certification.add"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => {
      },
      onFinish: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SecondaryButton, { className: "py-3", onClick: openAddCertification, children: /* @__PURE__ */ jsx(BiPlus, { size: 21 }) }),
    /* @__PURE__ */ jsx(Modal, { show: addingCertification, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: addCertification, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-darker dark:text-gray-100", children: "Add Your Certification" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "By adding your certification, you can showcase your qualifications to others." }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-1/2 pr-3", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-3",
              htmlFor: "name",
              value: "Name"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "name",
              type: "text",
              name: "name",
              value: data.name,
              onChange: (e) => setData("name", e.target.value),
              className: "mt-1 block w-full",
              placeholder: "Certification Name"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.name,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-3",
              htmlFor: "issuing_organization",
              value: "Issuing Organization"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "issuing_organization",
              type: "text",
              name: "issuing_organization",
              value: data.issuing_organization,
              onChange: (e) => setData(
                "issuing_organization",
                e.target.value
              ),
              className: "mt-1 block w-full",
              placeholder: "Issuing Organization"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.issuing_organization,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-3",
              htmlFor: "issue_date",
              value: "Issue Date"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "issue_date",
              type: "date",
              name: "issue_date",
              value: data.issue_date,
              onChange: (e) => setData("issue_date", e.target.value),
              className: "mt-1 block w-full"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.issue_date,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-1/2 pr-3", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-3",
              htmlFor: "expiration_date",
              value: "Expiration Date"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "expiration_date",
              type: "date",
              name: "expiration_date",
              value: data.expiration_date,
              onChange: (e) => setData("expiration_date", e.target.value),
              className: "mt-1 block w-full"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.expiration_date,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-3",
              htmlFor: "link",
              value: "Link"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "link",
              type: "url",
              name: "link",
              value: data.link,
              onChange: (e) => setData("link", e.target.value),
              className: "mt-1 block w-full",
              placeholder: "Link (optional)"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.link,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-3", disabled: processing, children: "Submit" })
      ] })
    ] }) })
  ] });
}
export {
  FormAddCertification as default
};
