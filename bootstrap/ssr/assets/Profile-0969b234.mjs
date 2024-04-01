import { j as jsxs, a as jsx } from "../ssr.mjs";
import { M as MainLayout } from "./MainLayout-df1ebc35.mjs";
import { t as toCapital } from "./utils-5d71c507.mjs";
import { Head, Link } from "@inertiajs/react";
import { A as Avatar } from "./Avatar-df9de362.mjs";
import { CgClose } from "react-icons/cg/index.esm.js";
import Resume from "./Resume-4a981a98.mjs";
import Experience from "./Experience-edd27b48.mjs";
import Education from "./Education-702d5766.mjs";
import Certification from "./Certification-0cd653e0.mjs";
import ProfileInfo from "./ProfileInfo-6b68011c.mjs";
import { S as Stars } from "./Stars-518460b5.mjs";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import FeedbacksCard from "./FeedbacksCard-479835d2.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./Logo-fe49b513.mjs";
import "@headlessui/react";
import "./PrimaryButton-1152ff4d.mjs";
import "react-icons/ri/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/fi/index.esm.js";
import "./CardLayout-40a0aff1.mjs";
import "./Card-17a4bd2e.mjs";
import "./FormAddResume-ea4575a1.mjs";
import "./SecondaryButton-2c9ad173.mjs";
import "./TextInput-2c7d8ed7.mjs";
import "./InputError-af1dd4cc.mjs";
import "react-icons/tb/index.esm.js";
import "./DeleteModal-f473461f.mjs";
import "./DangerButton-df970400.mjs";
import "./FormAddExperience-6b4abe6b.mjs";
import "dateformat";
import "./FormAddEducation-571d365a.mjs";
import "react-icons/all.js";
import "./FormAddCertification-f89ac5cc.mjs";
import "./Badge-6dc0d10f.mjs";
import "./FormEditProfile-4dbe0762.mjs";
function Profile({
  user,
  canEdit,
  experiences,
  educations,
  certification,
  resume,
  feedbacks
}) {
  const [showAlert, setShowAlert] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [cookies, setCookie] = useCookies(["showAlert"]);
  const profileCompeletionPercentage = () => {
    let percentage2 = 0;
    if (user.name)
      percentage2 += 25;
    if (user.phone_number)
      percentage2 += 25;
    if (user.birthdate)
      percentage2 += 25;
    if (resume)
      percentage2 += 25;
    return percentage2;
  };
  useEffect(() => {
    setPercentage(profileCompeletionPercentage());
    if (cookies.showAlert === "false") {
      setShowAlert(false);
    } else
      setShowAlert(true);
  }, [user, showAlert, resume]);
  return /* @__PURE__ */ jsxs(MainLayout, { user, children: [
    canEdit && user.ROLE === "STUDENT" && /* @__PURE__ */ jsxs(
      "div",
      {
        className: `fixed w-full py-2 px-10 bg-primary text-white flexible gap-2 ${!showAlert && "invisible"}`,
        children: [
          /* @__PURE__ */ jsx(
            CgClose,
            {
              className: "cursor-pointer",
              onClick: () => {
                setShowAlert(false);
                setCookie("showAlert", false, {
                  maxAge: 800,
                  // Expires after 10min
                  sameSite: true
                });
              }
            }
          ),
          percentage !== 100 ? /* @__PURE__ */ jsxs("p", { children: [
            "In order to ",
            /* @__PURE__ */ jsx("strong", { children: "post a session" }),
            ", you need to complete your profile.",
            " ",
            /* @__PURE__ */ jsxs("strong", { children: [
              "Your profile is ",
              percentage,
              "% complete"
            ] }),
            "."
          ] }) : /* @__PURE__ */ jsxs("p", { children: [
            "Your profile is ",
            percentage,
            "% complete,",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "Become a teacher now" }),
            "."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto py-16 sm:px-6 lg:px-8 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flexible gap-3 flex-col", children: [
        /* @__PURE__ */ jsx(
          Avatar,
          {
            name: (user == null ? void 0 : user.name) || (user == null ? void 0 : user.fullname),
            img: user.picture,
            className: "rounded-full h-40"
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "font-semibold text-3xl", children: toCapital(user.name) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg", children: toCapital(user.email) }),
        percentage === 100 && user.ROLE === "STUDENT" && canEdit ? /* @__PURE__ */ jsx(
          Link,
          {
            href: "/become-a-teacher",
            method: "post",
            as: "button",
            children: /* @__PURE__ */ jsx("h3", { className: "text-primary font-semibold", children: "Click here to become a teacher" })
          }
        ) : user.ROLE === "TEACHER" && /* @__PURE__ */ jsx(Stars, { rating: user.rating })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-3", children: /* @__PURE__ */ jsx(ProfileInfo, { user, percentage }) }),
      /* @__PURE__ */ jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxs("div", { className: "cards grid grid-cols-2 gap-x-6 gap-y-3", children: [
        /* @__PURE__ */ jsx("div", { className: "self-start", children: /* @__PURE__ */ jsx(Resume, { data: resume, percentage }) }),
        /* @__PURE__ */ jsx("div", { className: "self-start", children: /* @__PURE__ */ jsx(Experience, { data: experiences }) }),
        /* @__PURE__ */ jsx("div", { className: "self-start", children: /* @__PURE__ */ jsx(Education, { data: educations }) }),
        /* @__PURE__ */ jsx("div", { className: "self-start", children: /* @__PURE__ */ jsx(Certification, { data: certification }) })
      ] }) }),
      user.ROLE === "TEACHER" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            value: "Feedbacks",
            className: "font-semibold text-[1.05rem]"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "my-4", children: /* @__PURE__ */ jsx(FeedbacksCard, { grid: "grid grid-cols-4 gap-x-4 ", feedbacks }) })
      ] })
    ] })
  ] });
}
export {
  Profile as default
};
