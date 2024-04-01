import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { S as SecondaryButton, M as Modal } from "./SecondaryButton-2c9ad173.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { useState, useEffect } from "react";
import { T as TextInput } from "./TextInput-2c7d8ed7.mjs";
import { I as InputError } from "./InputError-af1dd4cc.mjs";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { BiEdit } from "react-icons/bi/index.esm.js";
import { usePage, useForm } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
function FormEditProfile() {
  const user = usePage().props.auth.user;
  const [editingProfile, setEditingProfile] = useState(false);
  const { data, setData, put, processing, reset, errors } = useForm({
    name: "",
    phone_number: "",
    birthdate: "",
    address: "",
    skills: ""
  });
  useEffect(() => {
    if (user) {
      setData({
        name: user.name,
        phone_number: user.phone_number,
        birthdate: user.birthdate,
        address: user.address,
        skills: user.skills
      });
    }
  }, [user]);
  const openEditProfile = () => {
    setEditingProfile(true);
  };
  const closeModal = () => {
    setEditingProfile(false);
    reset();
  };
  const editProfile = (e) => {
    e.preventDefault();
    put(route("profile.edit.info"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => {
      },
      onFinish: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SecondaryButton, { className: "py-3", onClick: openEditProfile, children: /* @__PURE__ */ jsx(BiEdit, { size: 21 }) }),
    /* @__PURE__ */ jsx(Modal, { show: editingProfile, onClose: closeModal, children: /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: editProfile,
        className: "p-6",
        encType: "multipart/form-data",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-darker dark:text-gray-100", children: "Edit Your Profile" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: [
            "By editing your profile you can complete your profile.",
            " ",
            /* @__PURE__ */ jsx("br", {}),
            "And make sure your profile information are valid and up to date."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "w-1/2 pr-3", children: [
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  className: "mt-3",
                  htmlFor: "name",
                  value: "Name *"
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
                  className: "mt-1 block w-3/4",
                  placeholder: "Name"
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
                  htmlFor: "phone_number",
                  value: "Phone Number *"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "phone_number",
                  type: "text",
                  name: "phone_number",
                  value: data.phone_number,
                  onChange: (e) => setData("phone_number", e.target.value),
                  className: "mt-1 block w-3/4",
                  placeholder: "Phone Number"
                }
              ),
              /* @__PURE__ */ jsx(
                InputError,
                {
                  message: errors.phone_number,
                  className: "mt-2"
                }
              ),
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  className: "mt-3",
                  htmlFor: "address",
                  value: "Address"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "address",
                  type: "text",
                  name: "address",
                  value: data.address,
                  onChange: (e) => setData("address", e.target.value),
                  className: "mt-1 block w-3/4",
                  placeholder: "Address"
                }
              ),
              /* @__PURE__ */ jsx(
                InputError,
                {
                  message: errors.address,
                  className: "mt-2"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-1/2 pr-3", children: [
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  className: "mt-3",
                  htmlFor: "birthdate",
                  value: "Birthdate *"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "birthdate",
                  type: "date",
                  name: "birthdate",
                  value: data.birthdate && data.birthdate.split("T")[0],
                  onChange: (e) => setData("birthdate", e.target.value),
                  className: "mt-1 block w-3/4",
                  placeholder: "Birthdate"
                }
              ),
              /* @__PURE__ */ jsx(
                InputError,
                {
                  message: errors.birthdate,
                  className: "mt-2"
                }
              ),
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  className: "mt-3",
                  htmlFor: "skills",
                  value: "Skills"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "skills",
                  type: "text",
                  name: "skills",
                  value: data.skills,
                  onChange: (e) => setData("skills", e.target.value),
                  className: "mt-1 block w-3/4",
                  placeholder: "Skill1, skill2..."
                }
              ),
              /* @__PURE__ */ jsx(
                InputError,
                {
                  message: errors.skills,
                  className: "mt-2"
                }
              )
            ] })
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
  FormEditProfile as default
};
