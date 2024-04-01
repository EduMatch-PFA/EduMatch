import { a as jsx, j as jsxs } from "../ssr.mjs";
import "react";
import { BiUser } from "react-icons/bi/index.esm.js";
import CardLayout from "./CardLayout-40a0aff1.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { B as Badge } from "./Badge-6dc0d10f.mjs";
import { f as formatDate, r as randColor } from "./utils-5d71c507.mjs";
import { usePage, Link } from "@inertiajs/react";
import FormEditProfile from "./FormEditProfile-4dbe0762.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./Card-17a4bd2e.mjs";
import "./SecondaryButton-2c9ad173.mjs";
import "@headlessui/react";
import "./TextInput-2c7d8ed7.mjs";
import "./InputError-af1dd4cc.mjs";
import "./PrimaryButton-1152ff4d.mjs";
function ProfileInfo({ user, percentage }) {
  const { canEdit } = usePage().props;
  return /* @__PURE__ */ jsx(
    CardLayout,
    {
      cardName: "Profile Info",
      cardProps: (!user.birthdate || !user.phone_number) && { percentage, percentageToAdd: 50 },
      Icon: BiUser,
      FormModal: canEdit && FormEditProfile,
      children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(InputLabel, { className: "opacity-[0.5]", value: "Username" }),
          /* @__PURE__ */ jsx("h1", { className: "ml-1 text-lg font-semibold", children: user.username })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(InputLabel, { className: "opacity-[0.5]", value: "Full Name" }),
          /* @__PURE__ */ jsx("h1", { className: "ml-1 text-lg font-semibold", children: user.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(InputLabel, { className: "opacity-[0.5]", value: "Email" }),
          /* @__PURE__ */ jsx("h1", { className: "ml-1 text-lg font-semibold", children: user.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(InputLabel, { className: "opacity-[0.5]", value: "Status" }),
          /* @__PURE__ */ jsx("h1", { className: "ml-1 text-lg font-semibold", children: user.ROLE })
        ] }),
        user.phone && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(InputLabel, { className: "opacity-[0.5]", value: "Phone" }),
          /* @__PURE__ */ jsx("h1", { className: "ml-1 text-lg font-semibold", children: user.phone })
        ] }),
        user.address && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(InputLabel, { className: "opacity-[0.5]", value: "Address" }),
          /* @__PURE__ */ jsx("h1", { className: "ml-1 text-lg font-semibold", children: user.address })
        ] }),
        user.phone_number && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "opacity-[0.5]",
              value: "Phone Number"
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "ml-1 text-lg font-semibold", children: user.phone_number })
        ] }),
        user.birthdate && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "opacity-[0.5]",
              value: "Birthdate"
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "ml-1 text-lg font-semibold", children: formatDate(user.birthdate) })
        ] }),
        user.skills && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(InputLabel, { className: "opacity-[0.5]", value: "Skills" }),
          user.skills.split(",").map((skill) => {
            skill = skill.trim();
            return /* @__PURE__ */ jsx(Link, { href: `/?search=${skill}`, children: /* @__PURE__ */ jsx(
              Badge,
              {
                text: skill,
                className: `px-3 my-1`,
                style: { backgroundColor: randColor() }
              },
              skill
            ) }, skill);
          })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "opacity-[0.5]",
              value: "Member Since"
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "ml-1 text-lg font-semibold", children: formatDate(user.created_at) })
        ] })
      ] })
    }
  );
}
export {
  ProfileInfo as default
};
