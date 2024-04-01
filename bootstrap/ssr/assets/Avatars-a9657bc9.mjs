import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { Link } from "@inertiajs/react";
import { A as Avatar } from "./Avatar-df9de362.mjs";
const Avatars = ({ users }) => {
  const usersToShow = users.length <= 8 ? users : users.slice(0, 8);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    usersToShow.map((user) => /* @__PURE__ */ jsx(Link, { href: `/profile/${user.username}`, children: /* @__PURE__ */ jsx(
      Avatar,
      {
        className: "w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 object-cover cursor-pointer",
        img: user.picture,
        name: user.fullname
      }
    ) }, user.id)),
    users.length > 8 && // Only display the div if remainingUserCount is more than 8
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800", children: [
      "+",
      users.length - 8
    ] })
  ] });
};
export {
  Avatars as A
};
