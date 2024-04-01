import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { BsCalendar, BsPeople, BsBookmark } from "react-icons/bs/index.esm.js";
import Widget from "./Widget-a064e922.mjs";
import { BiBook, BiNotification } from "react-icons/bi/index.esm.js";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { usePage } from "@inertiajs/react";
import "react";
import ActivityCard from "./ActivityCard-b22411f0.mjs";
import { f as formatDate } from "./utils-5d71c507.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./Avatar-df9de362.mjs";
import "./Card-17a4bd2e.mjs";
function DashboardContent() {
  var _a, _b;
  const user = usePage().props.auth.user;
  const sessions = (_a = usePage().props.sessions) == null ? void 0 : _a.data;
  const enrollments = (_b = usePage().props.enrollments) == null ? void 0 : _b.data;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 mb-4", children: [
      user.ROLE === "TEACHER" && sessions && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          Widget,
          {
            Icon: BsCalendar,
            title: "Upcoming Date",
            hint: "Date of the upcoming session",
            className: "h-40",
            children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-semibold", children: sessions.length > 0 && sessions[0].is_active === 1 ? sessions[0].scheduled_time : "-" })
          }
        ),
        /* @__PURE__ */ jsx(
          Widget,
          {
            Icon: BsPeople,
            title: "Students",
            hint: "Total number of students enrolled in the upcoming session",
            className: "h-40",
            children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-semibold", children: sessions.length > 0 && sessions[0].is_active === 1 ? sessions[0].enrollments.length : "-" })
          }
        ),
        /* @__PURE__ */ jsx(
          Widget,
          {
            Icon: BiBook,
            title: "Active Sessions",
            hint: "Total number of active sessions",
            className: "h-40",
            children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-semibold", children: sessions.filter((s) => s.is_active).length })
          }
        )
      ] }),
      user.ROLE === "STUDENT" && enrollments && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          Widget,
          {
            Icon: BsCalendar,
            title: "Upcoming Date",
            hint: "Date of the upcoming session",
            className: "h-40",
            children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-semibold", children: enrollments.length > 0 && enrollments[0].session.is_active ? formatDate(
              enrollments[0].session.scheduled_time
            ) : "-" })
          }
        ),
        /* @__PURE__ */ jsx(
          Widget,
          {
            Icon: BsPeople,
            title: "Upcoming Sessions",
            hint: "Total number of your upcoming sessions",
            className: "h-40",
            children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-semibold", children: enrollments.filter(
              (e) => e.session.is_active && new Date(e.session.scheduled_time) > /* @__PURE__ */ new Date()
            ).length })
          }
        ),
        /* @__PURE__ */ jsx(
          Widget,
          {
            Icon: BsBookmark,
            title: "Total Enrollements",
            hint: "Total number of enrollements",
            className: "h-40",
            children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-semibold", children: enrollments.length })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      Widget,
      {
        Icon: BiNotification,
        title: "Notifications",
        className: "mb-4",
        children: [
          user.ROLE === "TEACHER" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                value: "Your Sessions",
                className: "ml-0 text-lg mt-4"
              }
            ),
            sessions.length > 0 ? /* @__PURE__ */ jsx(ActivityCard, { session: sessions[0] }) : /* @__PURE__ */ jsx(
              InputLabel,
              {
                value: "No activity",
                className: "ml-0 text-sm opacity-60"
              }
            ),
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                value: "Your Enrollments",
                className: "ml-0 text-lg mt-4"
              }
            ),
            enrollments.length > 0 ? /* @__PURE__ */ jsx(ActivityCard, { session: enrollments[0].session }) : /* @__PURE__ */ jsx(
              InputLabel,
              {
                value: "No activity",
                className: "ml-0 text-sm opacity-60"
              }
            )
          ] }),
          user.ROLE === "STUDENT" && /* @__PURE__ */ jsx(Fragment, { children: enrollments.length > 0 ? /* @__PURE__ */ jsx(ActivityCard, { session: enrollments[0].session }) : /* @__PURE__ */ jsx(
            InputLabel,
            {
              value: "No activity",
              className: "ml-0 text-sm opacity-60"
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  DashboardContent as default
};
