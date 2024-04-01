import { a as jsx, j as jsxs } from "../ssr.mjs";
import { useEffect } from "react";
import { G as Guest } from "./GuestLayout-e35eb624.mjs";
import { I as InputError } from "./InputError-af1dd4cc.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { T as TextInput } from "./TextInput-2c7d8ed7.mjs";
import { useForm, Head, Link } from "@inertiajs/react";
import { BiError } from "react-icons/bi/index.esm.js";
import { FcGoogle } from "react-icons/fc/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./Logo-fe49b513.mjs";
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded dark:bg-darker border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/0  dark:focus:ring-offset-dark " + className
    }
  );
}
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    login: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            Icon: errors.login && BiError,
            htmlFor: "login",
            value: "Username or Email"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "login",
            type: "text",
            name: "login",
            value: data.login,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData("login", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.login, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "flexible justify-between", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              Icon: errors.password && BiError,
              htmlFor: "password",
              value: "Password"
            }
          ),
          canResetPassword && errors.password && /* @__PURE__ */ jsx(
            Link,
            {
              href: route("password.request"),
              className: "font-medium text-[0.85rem] text-gray-600 dark:text-gray-300 hover:text-darker dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/0 dark:focus:ring-offset-dark",
              children: "Forgot your password?"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flexible", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onChange: (e) => setData("remember", e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-600 dark:text-gray-400", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start mt-5 gap-3", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { className: "w-full", disabled: processing, children: "Log in" }),
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("register"),
            className: "underline text-xs text-gray-600 dark:text-gray-400 hover:text-darker dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/0 dark:focus:ring-offset-dark",
            children: "Don't have an account? Register"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flexible-center gap-2 text-gray-400 text-xs mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "w-1/3 bg-gray-400 h-[1px]" }),
      /* @__PURE__ */ jsx("p", { children: "Or sign in with" }),
      /* @__PURE__ */ jsx("div", { className: "w-1/3 bg-gray-400 h-[1px]" })
    ] }),
    /* @__PURE__ */ jsx("a", { href: "/auth/google/redirect", children: /* @__PURE__ */ jsxs(
      PrimaryButton,
      {
        className: "w-full flex justify-center items-center gap-2 mb-6 bg-black dark:bg-white dark:text-gray-700",
        children: [
          /* @__PURE__ */ jsx(FcGoogle, { size: 20 }),
          "Sign in with Google"
        ]
      }
    ) })
  ] });
}
export {
  Login as default
};
