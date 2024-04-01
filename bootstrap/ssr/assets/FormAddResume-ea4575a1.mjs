import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { S as SecondaryButton, M as Modal } from "./SecondaryButton-2c9ad173.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { useState } from "react";
import { T as TextInput } from "./TextInput-2c7d8ed7.mjs";
import { I as InputError } from "./InputError-af1dd4cc.mjs";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { BiPlus } from "react-icons/bi/index.esm.js";
import { usePage, useForm } from "@inertiajs/react";
import { TbReplace } from "react-icons/tb/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
function FormAddResume() {
  const { resume } = usePage().props;
  const [addingResume, setAddingResume] = useState(false);
  const { data, setData, post, progress, errors, reset, processing } = useForm({
    resume: ""
  });
  const openAddResume = () => {
    setAddingResume(true);
  };
  const closeModal = () => {
    setAddingResume(false);
    reset();
  };
  const addResume = (e) => {
    e.preventDefault();
    post(route("resume.add"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => {
      },
      onFinish: () => {
        reset();
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SecondaryButton, { className: "py-3", onClick: openAddResume, children: resume ? /* @__PURE__ */ jsx(TbReplace, { size: 21 }) : /* @__PURE__ */ jsx(BiPlus, { size: 21 }) }),
    /* @__PURE__ */ jsx(Modal, { show: addingResume, onClose: closeModal, children: /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: addResume,
        encType: "multipart/form-data",
        className: "p-6",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-darker dark:text-gray-100", children: "Add Your Resume" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "By adding your resume you can get more trust from others." }),
          /* @__PURE__ */ jsxs("div", { className: "flex mt-4 flex-col", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                className: "mt-3",
                htmlFor: "resume",
                value: "Upload Your Resume"
              }
            ),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "resume",
                type: "file",
                accept: "application/pdf",
                name: "resume",
                onChange: (e) => {
                  setData("resume", e.target.files[0]);
                },
                className: "mt-1 block w-3/4",
                placeholder: "Resume"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.resume, className: "mt-2" }),
            progress && /* @__PURE__ */ jsxs(
              "progress",
              {
                value: progress.percentage,
                className: "mt-2 rounded-lg text-primary",
                max: "100",
                children: [
                  progress.percentage,
                  "%"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
            /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Cancel" }),
            /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-3", disabled: processing, children: "Submit" })
          ] })
        ]
      }
    ) })
  ] });
}
export {
  FormAddResume as default
};
