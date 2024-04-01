import { j as jsxs, a as jsx } from "../ssr.mjs";
import { useEffect } from "react";
import { G as Guest } from "./GuestLayout-e35eb624.mjs";
import { I as InputError } from "./InputError-af1dd4cc.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { T as TextInput } from "./TextInput-2c7d8ed7.mjs";
import { useForm, Head, Link } from "@inertiajs/react";
import { BiError } from "react-icons/bi/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./Logo-fe49b513.mjs";
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    username: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { Icon: errors.username && BiError, htmlFor: "username", value: "Username" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "username",
            name: "username",
            value: data.username,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData("username", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.username, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { Icon: errors.name && BiError, htmlFor: "name", value: "Full name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.name,
            className: "mt-1 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: (e) => setData("name", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { Icon: errors.email && BiError, htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { Icon: errors.password && BiError, htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { Icon: errors.password_confirmation && BiError, htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password_confirmation", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start mt-6 gap-3", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { className: "w-full", disabled: processing, children: "Register" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("login"),
            className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-darker dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/0 dark:focus:ring-offset-dark",
            children: "Already registered?"
          }
        )
      ] })
    ] })
  ] });
}
export {
  Register as default
};
