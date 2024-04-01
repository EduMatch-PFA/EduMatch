import { j as jsxs, a as jsx, F as Fragment$1 } from "../ssr.mjs";
import { G as Gradient, L as Logo } from "./Logo-fe49b513.mjs";
import { useState, Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";
import { CgProfile, CgLogOut } from "react-icons/cg/index.esm.js";
import { A as Avatar } from "./Avatar-df9de362.mjs";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { RiMoonClearLine } from "react-icons/ri/index.esm.js";
import { BiSun } from "react-icons/bi/index.esm.js";
import { FiSettings } from "react-icons/fi/index.esm.js";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function DropdownComponent({ children, onClick, links }) {
  const [isShowing, setIsShowing] = useState(false);
  return /* @__PURE__ */ jsxs(Menu, { as: "div", className: "relative inline-block text-left", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Menu.Button,
      {
        className: "flexible",
        onMouseEnter: () => setIsShowing(true),
        onMouseLeave: () => setIsShowing(false),
        children
      }
    ) }),
    /* @__PURE__ */ jsx(
      Transition,
      {
        show: isShowing,
        onMouseEnter: () => setIsShowing(true),
        onMouseLeave: () => setIsShowing(false),
        as: Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-100",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ jsx(Menu.Items, { className: "menuItems absolute -left-20 py-2 w-40 mt-2 z-50 origin-top-left bg-white dark:bg-dark dark:border dark:border-gray-700/40 rounded-md shadow-lg ring-1 ring-darker ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ jsx("div", { className: "py-1", children: links.map((item, index) => {
          let style = item.style || {
            color: "text-gray-500 dark:text-white",
            activeColor: "bg-primary/5 dark:bg-slate-300/5 text-gray-700 dark:text-white"
          };
          return /* @__PURE__ */ jsx(Menu.Item, { children: ({ active }) => /* @__PURE__ */ jsxs(
            Link,
            {
              href: route(item.to),
              method: item.method || "get",
              as: "button",
              className: classNames(
                active ? style.activeColor : style.color,
                "block w-full text-left px-6 py-2 text-md font-light duration-150"
              ),
              children: [
                item.Icon && /* @__PURE__ */ jsx(item.Icon, { className: "inline-block mr-2" }),
                item.label
              ]
            }
          ) }, index);
        }) }) })
      }
    )
  ] });
}
function Spinner({ className, white }) {
  if (!className)
    className = "w-4 h-4";
  else if (!className.includes("w-") && !className.includes("h-"))
    className = className + " w-4 h-4";
  return /* @__PURE__ */ jsx("div", { className: "spinner", children: /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": "true",
      role: "status",
      className: `inline text-white ${className} animate-spin `,
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "#E5E7EB"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: white ? `#fff` : `#000`
          }
        )
      ]
    }
  ) });
}
function usePrefersDarkMode() {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
}
const useMedia = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  };
  const [value, setValue] = useState(getValue);
  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  }, []);
  return value;
};
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};
const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled");
  const prefersDarkMode = usePrefersDarkMode();
  const enabled = typeof enabledState !== "undefined" ? enabledState : prefersDarkMode;
  useEffect(() => {
    const className = "dark";
    let element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);
  return [enabled, setEnabledState];
};
function Pipe() {
  return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("span", { className: "text-gray-300/40 dark:text-slate-50/[0.2] text-xl px-4", children: "|" }) });
}
function Navbar({ user }) {
  const [isDark, setDarkMode] = useDarkMode();
  const dropdownMenu = [
    {
      to: "profile.edit",
      label: "Profile",
      Icon: CgProfile
    },
    {
      to: "settings.edit",
      label: "Settings",
      Icon: FiSettings
    },
    {
      to: "logout",
      label: "Logout",
      Icon: CgLogOut,
      method: "post",
      style: {
        activeColor: "bg-red-500/5 text-red-500",
        color: "text-red-400"
      }
    }
  ];
  const currentRoute = route().current();
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(Gradient, {}),
    /* @__PURE__ */ jsx("nav", { className: "sticky top-0 w-full backdrop-blur transition-colors duration-300 z-50 bg-white/70 supports-backdrop-blur:bg-white/60 dark:bg-transparent border-apply border-b ", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("div", { className: "py-3", children: /* @__PURE__ */ jsxs("div", { className: "flexible justify-between", children: [
      /* @__PURE__ */ jsx(Logo, { className: "w-[10rem]" }),
      /* @__PURE__ */ jsxs("div", { className: "redirect flexible gap-4 text-[0.95rem]", children: [
        /* @__PURE__ */ jsxs("div", { className: "nav-links", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", className: `ml-4 p-2 font-semibold hoverEffect ${currentRoute === "sessions.index" && "text-primary"}`, children: "Home" }),
          user && /* @__PURE__ */ jsx(Link, { href: "/dashboard", className: `ml-4 p-2 font-semibold hoverEffect ${currentRoute.includes("dashboard") && "text-primary"}`, children: "Dashboard" })
        ] }),
        /* @__PURE__ */ jsx(Pipe, {}),
        !user ? /* @__PURE__ */ jsxs("div", { className: "sm:block hidden", children: [
          /* @__PURE__ */ jsx(Link, { href: "/login", children: /* @__PURE__ */ jsx("span", { className: "font-medium hoverEffect pr-4", children: "Sign in" }) }),
          /* @__PURE__ */ jsx(Link, { href: "/register", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "text-md", children: "Sign up" }) })
        ] }) : !user ? /* @__PURE__ */ jsx(Spinner, { className: "text-darker w-8 h-8" }) : /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(DropdownComponent, { links: dropdownMenu, children: /* @__PURE__ */ jsx(
          Avatar,
          {
            img: user.picture,
            name: user.name,
            className: "cursor-pointer w-10 rounded-full hoverMode"
          }
        ) }) }),
        /* @__PURE__ */ jsx("button", { onClick: () => setDarkMode(!isDark), className: "bg-transparent duration-300 hover:bg-primary/10 rounded-full box-border p-2", children: isDark ? /* @__PURE__ */ jsx(
          BiSun,
          {
            size: 23,
            className: "text-primary"
          }
        ) : /* @__PURE__ */ jsx(
          RiMoonClearLine,
          {
            size: 21,
            className: "text-primary"
          }
        ) })
      ] })
    ] }) }) }) })
  ] });
}
function MainLayout({ children }) {
  const user = usePage().props.auth.user;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen box-border bg-grid-slate-900  text-slate-900 dark:text-slate-200 bg-white dark:bg-darker", children: [
    /* @__PURE__ */ jsx(Navbar, { user }),
    /* @__PURE__ */ jsx("main", { className: "relative z-40", children })
  ] });
}
export {
  MainLayout as M
};
