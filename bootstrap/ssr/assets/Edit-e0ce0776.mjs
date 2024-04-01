import { j as jsxs, a as jsx } from "../ssr.mjs";
import { M as MainLayout } from "./MainLayout-df1ebc35.mjs";
import DeleteUserForm from "./DeleteUserForm-9fdf004e.mjs";
import UpdatePasswordForm from "./UpdatePasswordForm-f4518dc6.mjs";
import UpdateProfileInformation from "./UpdateProfileInformationForm-88789c06.mjs";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./Logo-fe49b513.mjs";
import "react";
import "@headlessui/react";
import "react-icons/cg/index.esm.js";
import "./Avatar-df9de362.mjs";
import "./PrimaryButton-1152ff4d.mjs";
import "react-icons/ri/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/fi/index.esm.js";
import "./DangerButton-df970400.mjs";
import "./InputError-af1dd4cc.mjs";
import "./InputLabel-0ae3a22b.mjs";
import "./SecondaryButton-2c9ad173.mjs";
import "./TextInput-2c7d8ed7.mjs";
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(MainLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile Settings" }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-dark shadow sm:rounded-lg border border-apply", children: /* @__PURE__ */ jsx(
        UpdateProfileInformation,
        {
          mustVerifyEmail,
          status,
          className: "max-w-xl"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-dark shadow sm:rounded-lg border border-apply", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-dark shadow sm:rounded-lg border border-apply", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
    ] }) })
  ] });
}
export {
  Edit as default
};
