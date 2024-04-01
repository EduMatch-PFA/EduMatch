import { j as jsxs, a as jsx, F as Fragment } from "../ssr.mjs";
import { A as Avatar } from "./Avatar-df9de362.mjs";
import { C as Card } from "./Card-17a4bd2e.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { usePage, Link } from "@inertiajs/react";
import "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function ActivityCard({
  modal = 0,
  session,
  grid = "grid-cols-2",
  more
}) {
  const user = usePage().props.auth.user;
  const feedbacks = session.feedbacks;
  const findFeedback = (data, id) => {
    return data.filter((f) => f.userId === id);
  };
  return /* @__PURE__ */ jsxs("div", { className: `mt-4 grid ${grid} gap-x-4`, children: [
    session.user.username !== user.username && findFeedback(feedbacks, user.id).length === 0 && !session.is_active && /* @__PURE__ */ jsx(Card, { className: "mb-2 self-start", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flexible gap-3", children: [
        /* @__PURE__ */ jsx(
          Avatar,
          {
            name: session.user.fullname,
            img: session.user.picture,
            className: "w-12 rounded-full"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              href: `/profile/${session.user.username}`,
              children: /* @__PURE__ */ jsx("h1", { className: "font-semibold hover:text-primary duration-100", children: session.user.username })
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              value: `Ended the session in ${session.updatedAt}`,
              className: "-ml-1 text-sm opacity-60"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-yellow-400", children: "Please leave a feedback" })
    ] }) }),
    session && (session.is_active || modal && !session.is_active) && session.enrollments.length > 0 ? /* @__PURE__ */ jsx(Fragment, { children: session.enrollments.map((e) => /* @__PURE__ */ jsx(Card, { className: "mb-2 self-start", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flexible gap-3", children: [
        /* @__PURE__ */ jsx(
          Avatar,
          {
            name: e.fullname,
            img: e.picture,
            className: "w-12 rounded-full"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Link, { href: `/profile/${e.username}`, children: /* @__PURE__ */ jsx("h1", { className: "font-semibold hover:text-primary duration-100", children: e.id === user.id ? "You" : e.username }) }),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              value: `Joined the session in ${e.date}`,
              className: "-ml-1 text-sm opacity-60"
            }
          )
        ] })
      ] }),
      (session.user.id === user.id || e.id === user.id) && /* @__PURE__ */ jsxs("p", { className: "mt-2", children: [
        /* @__PURE__ */ jsx("span", { className: "ml-0 text-sm opacity-60 mr-4", children: "NOTE" }),
        " ",
        e.note ? e.note : "No note provided"
      ] }),
      !session.is_active && more && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm uppercase text-primary font-bold", children: feedbacks.filter(
        (f) => f.user_id == e.id
      ).length === 0 ? "Didn't rate yet" : "rated" })
    ] }) }, e.id)) }) : /* @__PURE__ */ jsx(Fragment, { children: !(session.user.username !== user.username && findFeedback(feedbacks, user.id).length === 0 && !session.is_active) && /* @__PURE__ */ jsx(
      InputLabel,
      {
        value: "No activity",
        className: "ml-0 text-sm opacity-60"
      }
    ) })
  ] });
}
export {
  ActivityCard as default
};
