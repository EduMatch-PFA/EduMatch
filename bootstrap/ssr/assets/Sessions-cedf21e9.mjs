import { j as jsxs, a as jsx, F as Fragment } from "../ssr.mjs";
import { usePage, Head, Link } from "@inertiajs/react";
import DashboardLayout from "./DashboardLayout-2f59872a.mjs";
import Table from "./Table-f76b1813.mjs";
import { BiLink, BiEdit } from "react-icons/bi/index.esm.js";
import { f as formatDate } from "./utils-5d71c507.mjs";
import DeleteModal from "./DeleteModal-f473461f.mjs";
import DoneModal from "./DoneModal-397396c0.mjs";
import { B as Badge } from "./Badge-6dc0d10f.mjs";
import ListModal from "./ListModal-56780ae2.mjs";
import ActivityCard from "./ActivityCard-b22411f0.mjs";
import FeedbackModal from "./FeedbackModal-7f38855f.mjs";
import "flowbite-react";
import { S as Stars } from "./Stars-518460b5.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./MainLayout-df1ebc35.mjs";
import "./Logo-fe49b513.mjs";
import "react";
import "@headlessui/react";
import "react-icons/cg/index.esm.js";
import "./Avatar-df9de362.mjs";
import "./PrimaryButton-1152ff4d.mjs";
import "react-icons/ri/index.esm.js";
import "react-icons/fi/index.esm.js";
import "./SideBar-1eff9694.mjs";
import "./InputLabel-0ae3a22b.mjs";
import "react-icons/go/index.esm.js";
import "./DangerButton-df970400.mjs";
import "./SecondaryButton-2c9ad173.mjs";
import "./TextInput-2c7d8ed7.mjs";
import "react-icons/bs/index.esm.js";
import "./Card-17a4bd2e.mjs";
import "./InputError-af1dd4cc.mjs";
import "./TextArea-49159cf8.mjs";
import "react-rating-stars-component";
function Dashboard() {
  var _a, _b;
  usePage().props.auth.user;
  const sessions = (_a = usePage().props.sessions) == null ? void 0 : _a.data;
  const enrollments = ((_b = usePage().props.enrollments) == null ? void 0 : _b.data) || [];
  const findFeedback = (data, id) => {
    return data.filter((f) => f.userId === id);
  };
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Sessions" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
      sessions && /* @__PURE__ */ jsx(
        Table,
        {
          title: "Your Sessions",
          subtitle: "Session that you poster sorted by recently added.",
          columns: [
            "Title",
            "Scheduled Date",
            "Places Limit",
            "Students enrolled",
            "status",
            "Actions"
          ],
          children: sessions.map((s) => /* @__PURE__ */ jsxs("tr", { className: "bg-white dark:bg-dark", children: [
            /* @__PURE__ */ jsx(
              "th",
              {
                scope: "row",
                className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: `/session/${s.id}`,
                    className: "flexible gap-2",
                    children: [
                      /* @__PURE__ */ jsx(BiLink, {}),
                      s.title
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("th", { scope: "row", className: "px-6 py-4", children: formatDate(s.scheduled_time) }),
            /* @__PURE__ */ jsx("th", { scope: "row", className: "px-6 py-4", children: s.placesLimit }),
            /* @__PURE__ */ jsx("th", { scope: "row", className: "px-6 py-4", children: s.enrollments.length }),
            /* @__PURE__ */ jsx("th", { scope: "row", className: "px-6 py-4", children: /* @__PURE__ */ jsx(
              Badge,
              {
                text: s.is_active ? "LIVE" : "DONE",
                className: s.is_active ? "bg-green-500 text-white" : "bg-slate-500 text-white"
              }
            ) }),
            /* @__PURE__ */ jsxs("td", { className: "px-6 py-4 flexible gap-3", children: [
              s.is_active == 1 && /* @__PURE__ */ jsx(
                DoneModal,
                {
                  routeDirect: `/session/${s.id}/done`
                }
              ),
              s.is_active == 1 && /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
                BiEdit,
                {
                  size: 21,
                  className: "text-primary"
                }
              ) }),
              /* @__PURE__ */ jsx(ListModal, { children: /* @__PURE__ */ jsx(
                ActivityCard,
                {
                  modal: 1,
                  session: s,
                  more: 1
                }
              ) }),
              /* @__PURE__ */ jsx(
                DeleteModal,
                {
                  routeDirect: `/session/${s.id}`
                }
              )
            ] })
          ] }, s.id))
        }
      ),
      enrollments && /* @__PURE__ */ jsx(
        Table,
        {
          title: "Your Enrollments",
          subtitle: "Sessions that you're enrolled in.",
          columns: [
            "Title",
            "Note",
            "scheduled Date",
            "Enrollments",
            "Feedback"
          ],
          children: enrollments.map((e) => /* @__PURE__ */ jsxs("tr", { className: "bg-white dark:bg-dark", children: [
            /* @__PURE__ */ jsx(
              "th",
              {
                scope: "row",
                className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: `/session/${e.session.id}`,
                    className: "flexible gap-2",
                    children: [
                      /* @__PURE__ */ jsx(BiLink, {}),
                      e.session.title
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("th", { scope: "row", className: "px-6 py-4", children: e.note }),
            /* @__PURE__ */ jsx("th", { scope: "row", className: "px-6 py-4", children: formatDate(e.session.scheduled_time) }),
            /* @__PURE__ */ jsx("th", { scope: "row", className: "px-6 py-4", children: e.session.enrollments.length }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: e.session.is_active == 1 ? /* @__PURE__ */ jsx("p", { className: "opacity-[0.5]", children: "You can leave a feedback after the session is done." }) : !findFeedback(
              e.session.feedbacks,
              e.user.id
            )[0] ? /* @__PURE__ */ jsx(
              FeedbackModal,
              {
                routeDirect: `/session/${e.session.id}/feedback`
              }
            ) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
              Stars,
              {
                rating: findFeedback(
                  e.session.feedbacks,
                  e.user.id
                )[0].rating
              }
            ) }) })
          ] }, e.id))
        }
      )
    ] })
  ] });
}
export {
  Dashboard as default
};
