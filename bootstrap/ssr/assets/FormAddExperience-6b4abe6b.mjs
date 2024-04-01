import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { S as SecondaryButton, M as Modal } from "./SecondaryButton-2c9ad173.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { useState } from "react";
import { T as TextInput } from "./TextInput-2c7d8ed7.mjs";
import { I as InputError } from "./InputError-af1dd4cc.mjs";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { BiPlus } from "react-icons/bi/index.esm.js";
import { useForm } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
function FormAddExperience() {
  const [addingExperience, setAddingExperience] = useState(false);
  const { data, setData, post, processing, reset, errors } = useForm({
    position: "",
    company: "",
    start_date: "",
    end_date: "",
    description: ""
  });
  const openAddExperience = () => {
    setAddingExperience(true);
  };
  const closeModal = () => {
    setAddingExperience(false);
    reset();
  };
  const addExperience = (e) => {
    e.preventDefault();
    post(route("experience.add"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => {
      },
      onFinish: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SecondaryButton, { className: "py-3", onClick: openAddExperience, children: /* @__PURE__ */ jsx(BiPlus, { size: 21 }) }),
    /* @__PURE__ */ jsx(Modal, { show: addingExperience, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: addExperience, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-darker dark:text-gray-100", children: "Add Your Experience" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "By adding your experience you can show your skills to others." }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-1/2 pr-3", children: [
          /* @__PURE__ */ jsx(InputLabel, { className: "mt-3", htmlFor: "position", value: "Position" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "position",
              type: "text",
              name: "position",
              value: data.position,
              onChange: (e) => setData("position", e.target.value),
              className: "mt-1 block w-3/4",
              placeholder: "Position"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.position,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(InputLabel, { className: "mt-3", htmlFor: "company", value: "Company" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "company",
              type: "text",
              name: "company",
              value: data.company,
              onChange: (e) => setData("company", e.target.value),
              className: "mt-1 block w-3/4",
              placeholder: "Company"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.company,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-3",
              htmlFor: "description",
              value: "Description"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "description",
              type: "text",
              name: "description",
              value: data.description,
              onChange: (e) => setData("description", e.target.value),
              className: "mt-1 block w-3/4",
              placeholder: "Description"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.description,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-1/2 pr-3", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-3",
              htmlFor: "start_date",
              value: "Start Date"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "start_date",
              type: "date",
              name: "start_date",
              value: data.start_date,
              onChange: (e) => setData("start_date", e.target.value),
              className: "mt-1 block w-3/4"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.start_date,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(InputLabel, { className: "mt-3", htmlFor: "end_date", value: "End Date" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "end_date",
              type: "date",
              name: "end_date",
              value: data.end_date,
              onChange: (e) => setData("end_date", e.target.value),
              className: "mt-1 block w-3/4"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.end_date,
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
  FormAddExperience as default
};
