import { j as jsxs, a as jsx } from "../ssr.mjs";
import { A as Avatar } from "./Avatar-df9de362.mjs";
import { A as Avatars } from "./Avatars-a9657bc9.mjs";
import { B as Badge } from "./Badge-6dc0d10f.mjs";
import { C as Card } from "./Card-17a4bd2e.mjs";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { S as Stars } from "./Stars-518460b5.mjs";
import { r as randColor } from "./utils-5d71c507.mjs";
import { Link } from "@inertiajs/react";
import { BiTime } from "react-icons/bi/index.esm.js";
import { HiLocationMarker } from "react-icons/hi/index.esm.js";
import { MdPeople } from "react-icons/md/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
const SessionCard = ({ session }) => {
  return /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
      /* @__PURE__ */ jsx(
        Avatar,
        {
          name: session.user.fullname,
          img: session.user.picture,
          className: "w-20 h-20 rounded-xl"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxs("span", { className: "flexible gap-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "opacity-[0.6] text-sm font-bold uppercase", children: session.user.username }),
          /* @__PURE__ */ jsx(Stars, { rating: session.user.rating }),
          /* @__PURE__ */ jsx(
            Badge,
            {
              text: session.is_active ? "LIVE" : "DONE",
              className: session.is_active ? "bg-green-500 text-white" : "bg-slate-500 text-white"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold py-0.5", children: session.title }),
        /* @__PURE__ */ jsxs("div", { className: "badges flexible my-2", children: [
          /* @__PURE__ */ jsx(
            Badge,
            {
              icon: BiTime,
              text: session.scheduled_time,
              className: "bg-primary/30"
            }
          ),
          /* @__PURE__ */ jsx(
            Badge,
            {
              icon: HiLocationMarker,
              size: 14,
              text: session.location ? session.location : "Online"
            }
          ),
          /* @__PURE__ */ jsx(
            Badge,
            {
              icon: MdPeople,
              size: 16,
              text: "Limited to " + session.placesLimit + ` place${session.placesLimit > 1 ? "s" : ""}`
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "px-4 my-4 description", children: /* @__PURE__ */ jsxs("p", { className: "opacity-[0.8] font-medium text-sm leading-relaxed", children: [
      session.description,
      "..."
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-4 my-4 tags", children: JSON.parse(session.tags).skills.map((skill) => {
      return /* @__PURE__ */ jsx(Link, { href: `/?search=${skill}`, children: /* @__PURE__ */ jsx(
        Badge,
        {
          text: skill,
          className: `px-3`,
          style: { backgroundColor: randColor() }
        }
      ) }, skill);
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "px-4 mt-8 footer flexible justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "subscribers flexible gap-2", children: [
        /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold leading-relaxed", children: [
          session.enrollments.length >= 1 ? "People enrolled :" : "No one enrolled",
          " "
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex -space-x-2.5", children: /* @__PURE__ */ jsx(Avatars, { users: session.enrollments }) })
      ] }),
      /* @__PURE__ */ jsx(Link, { href: `/session/${session.id}`, children: /* @__PURE__ */ jsx(PrimaryButton, { className: "text-sm", children: "View Details" }) })
    ] })
  ] }, session.id);
};
const SessionCard$1 = SessionCard;
export {
  SessionCard$1 as default
};
