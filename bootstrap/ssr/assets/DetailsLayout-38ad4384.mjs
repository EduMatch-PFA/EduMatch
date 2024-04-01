import { j as jsxs, a as jsx } from "../ssr.mjs";
import { A as Avatar } from "./Avatar-df9de362.mjs";
import { A as Avatars } from "./Avatars-a9657bc9.mjs";
import { B as Badge } from "./Badge-6dc0d10f.mjs";
import { C as Card } from "./Card-17a4bd2e.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { S as Stars } from "./Stars-518460b5.mjs";
import { usePage, useForm, Link } from "@inertiajs/react";
import { BiDollar, BiPhone, BiCalendar } from "react-icons/bi/index.esm.js";
import { HiLocationMarker } from "react-icons/hi/index.esm.js";
import { MdPeople } from "react-icons/md/index.esm.js";
import SmallDetail from "./SmallDetail-8829359b.mjs";
import { a as truncate, r as randColor } from "./utils-5d71c507.mjs";
import { FiMail } from "react-icons/fi/index.esm.js";
import { T as TextArea } from "./TextArea-49159cf8.mjs";
import FeedbacksCard from "./FeedbacksCard-479835d2.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
const DetailsLayout = ({ session }) => {
  const isEnrolled = usePage().props.isEnrolled;
  const user = usePage().props.auth.user;
  const { data, setData, post, processing, reset } = useForm({
    note: ""
  });
  const feedbacks = session.feedbacks;
  const findFeedback = (data2, id) => {
    return data2.filter((f) => f.userId === id);
  };
  const enroll = (e) => {
    e.preventDefault();
    post(`/session-enroll/${session.id}`, {
      preserveScroll: true,
      onSuccess: () => {
      },
      onError: () => {
      },
      onFinish: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "p-5 mt-8 mr-5 flex flex-col lg:flex-row gap-5",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "left-content", children: [
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
                /* @__PURE__ */ jsx(Stars, { rating: session.user.rating })
              ] }),
              /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold py-0.5", children: session.title }),
              /* @__PURE__ */ jsx(Link, { href: `/profile/${session.user.username}`, children: /* @__PURE__ */ jsx("h1", { className: "font-semibold text-primary text-sm cursor-pointer", children: "View Profile" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-7", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                value: "Session details",
                className: "font-semibold text-[1.05rem]"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5", children: [
              /* @__PURE__ */ jsx(
                SmallDetail,
                {
                  Icon: BiDollar,
                  h1: "Discuss with the teacher",
                  h2: "Price"
                }
              ),
              /* @__PURE__ */ jsx(
                SmallDetail,
                {
                  Icon: FiMail,
                  h1: `${truncate(session.user.email, 20)}`,
                  h2: "Email"
                }
              ),
              /* @__PURE__ */ jsx(
                SmallDetail,
                {
                  Icon: BiPhone,
                  h1: `${session.user.phone_number}`,
                  h2: "Phone Number"
                }
              ),
              /* @__PURE__ */ jsx(
                SmallDetail,
                {
                  Icon: HiLocationMarker,
                  h1: `${session.location}`,
                  h2: "Location"
                }
              ),
              /* @__PURE__ */ jsx(
                SmallDetail,
                {
                  Icon: BiCalendar,
                  h1: `${session.scheduled_time}`,
                  h2: "Scheduled Time"
                }
              ),
              /* @__PURE__ */ jsx(
                SmallDetail,
                {
                  Icon: MdPeople,
                  h1: "Limited to " + session.placesLimit + ` place${session.placesLimit > 1 ? "s" : ""}`,
                  h2: "Places"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-7", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                value: "Skills that you'll learn",
                className: "font-semibold text-[1.05rem]"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "my-4 tags", children: JSON.parse(session.tags).skills.map((skill) => {
              return /* @__PURE__ */ jsx(Link, { href: `/?search=${skill}`, children: /* @__PURE__ */ jsx(
                Badge,
                {
                  text: skill,
                  className: `px-3`,
                  style: { backgroundColor: randColor() }
                }
              ) }, skill);
            }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-7", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                value: "Description",
                className: "font-semibold text-[1.05rem]"
              }
            ),
            /* @__PURE__ */ jsx(Card, { className: "p-4 my-4 description", children: /* @__PURE__ */ jsxs("p", { className: "font-medium text-sm leading-relaxed", children: [
              session.description,
              "..."
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-7", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                value: "Feedbacks",
                className: "font-semibold text-[1.05rem]"
              }
            ),
            /* @__PURE__ */ jsx(
              FeedbacksCard,
              {
                feedbacks: session.feedbacks,
                className: "my-4"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "right-content", children: [
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  value: "Students who are enrolled in this session",
                  className: "ml-0 font-semibold "
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "w-20 mt-2 rounded-lg h-[2px] bg-primary" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "subscribers mt-5 flexible-center gap-2", children: [
              /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold leading-relaxed ", children: [
                session.enrollments.length == 0 && "No one enrolled",
                " "
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex -space-x-2", children: /* @__PURE__ */ jsx(Avatars, { users: session.enrollments }) })
            ] })
          ] }),
          user.id === session.user.id ? /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  value: "You own this session",
                  className: "ml-0 font-semibold "
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "w-20 mt-2 rounded-lg h-[2px] bg-primary" })
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/dashboard/sessions",
                className: "mt-5 flexible-center",
                children: /* @__PURE__ */ jsx(PrimaryButton, { children: "View in dashboard" })
              }
            )
          ] }) : !session.is_active && !isEnrolled ? /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                value: "This session is done, you can't enroll in it",
                className: "ml-0 font-semibold "
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "w-20 mt-2 rounded-lg h-[2px] bg-primary" })
          ] }) }) : !isEnrolled ? /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  value: "Enroll in this session",
                  className: "ml-0 font-semibold "
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "w-20 mt-2 rounded-lg h-[2px] bg-primary" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  value: "Note",
                  className: "ml-0 font-bold"
                }
              ),
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  value: "Write anything you would like to inform or ask the tutor about, after you enroll.",
                  className: "ml-0 text-sm opacity-60"
                }
              ),
              /* @__PURE__ */ jsxs("form", { onSubmit: enroll, children: [
                /* @__PURE__ */ jsx(
                  TextArea,
                  {
                    className: "mt-3 text-sm",
                    placeholder: "Write your note here...",
                    name: "note",
                    onChange: (e) => setData("note", e.target.value),
                    children: data.note
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "flexible justify-end mt-2", children: /* @__PURE__ */ jsx(
                  PrimaryButton,
                  {
                    type: "submit",
                    disabled: processing || isEnrolled,
                    children: isEnrolled ? "Enrolled" : "Enroll"
                  }
                ) })
              ] })
            ] })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  value: "You're enrolled in this session",
                  className: "ml-0 font-semibold "
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "w-20 mt-2 rounded-lg h-[2px] bg-primary" })
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/dashboard/sessions",
                className: "mt-5 flexible-center",
                children: /* @__PURE__ */ jsx(PrimaryButton, { children: session.user.username !== user.username && findFeedback(feedbacks, user.id).length === 0 && !session.is_active ? "Give feedback" : "View in dashboard" })
              }
            )
          ] })
        ] })
      ]
    },
    session.id
  );
};
export {
  DetailsLayout as default
};
