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
function FormAddEducation() {
  const [addingEducation, setAddingEducation] = useState(false);
  const { data, setData, post, processing, reset, errors } = useForm({
    institution: "",
    degree: "",
    field_of_study: "",
    start_year: "",
    end_year: ""
  });
  const openAddEducation = () => {
    setAddingEducation(true);
  };
  const closeModal = () => {
    setAddingEducation(false);
    reset();
  };
  const addEducation = (e) => {
    e.preventDefault();
    post(route("education.add"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => {
      },
      onFinish: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SecondaryButton, { className: "py-3", onClick: openAddEducation, children: /* @__PURE__ */ jsx(BiPlus, { size: 21 }) }),
    /* @__PURE__ */ jsx(Modal, { show: addingEducation, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: addEducation, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-darker dark:text-gray-100", children: "Add Your Education" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "By adding your education, you can showcase your qualifications to others." }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-1/2 pr-3", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-3",
              htmlFor: "institution",
              value: "Institution"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "institution",
              type: "text",
              name: "institution",
              value: data.institution,
              onChange: (e) => setData("institution", e.target.value),
              className: "mt-1 block w-3/4",
              placeholder: "Institution"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.institution,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-3",
              htmlFor: "degree",
              value: "Degree"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "degree",
              type: "text",
              name: "degree",
              value: data.degree,
              onChange: (e) => setData("degree", e.target.value),
              className: "mt-1 block w-3/4",
              placeholder: "Degree"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.degree,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-3",
              htmlFor: "field_of_study",
              value: "Field of Study"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "field_of_study",
              type: "text",
              name: "field_of_study",
              value: data.field_of_study,
              onChange: (e) => setData("field_of_study", e.target.value),
              className: "mt-1 block w-3/4",
              placeholder: "Field of Study"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.field_of_study,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-1/2 pr-3", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-3",
              htmlFor: "start_year",
              value: "Start Year"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "start_year",
              type: "date",
              name: "start_year",
              value: data.start_year,
              onChange: (e) => setData("start_year", e.target.value),
              className: "mt-1 block w-3/4"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.start_year,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-3",
              htmlFor: "end_year",
              value: "End Year"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "end_year",
              type: "date",
              name: "end_year",
              value: data.end_year,
              onChange: (e) => setData("end_year", e.target.value),
              className: "mt-1 block w-3/4"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.end_year,
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
  FormAddEducation as default
};
