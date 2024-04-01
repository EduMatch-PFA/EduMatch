import { a as jsx, F as Fragment, j as jsxs } from "../ssr.mjs";
import { useForm, Head } from "@inertiajs/react";
import DashboardLayout from "./DashboardLayout-2f59872a.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { useState, useEffect } from "react";
import { T as TextInput } from "./TextInput-2c7d8ed7.mjs";
import { I as InputError } from "./InputError-af1dd4cc.mjs";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { T as TextArea } from "./TextArea-49159cf8.mjs";
import { RadioGroup } from "@headlessui/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./MainLayout-df1ebc35.mjs";
import "./Logo-fe49b513.mjs";
import "react-icons/cg/index.esm.js";
import "./Avatar-df9de362.mjs";
import "react-icons/ri/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/fi/index.esm.js";
import "./SideBar-1eff9694.mjs";
import "react-icons/go/index.esm.js";
const options = [
  {
    name: "Online"
  },
  {
    name: "In-person"
  }
];
function Radio({ setType }) {
  const [selected, setSelected] = useState(options[0]);
  useEffect(() => {
    setType(selected);
  }, [selected]);
  return /* @__PURE__ */ jsx("div", { className: "mb-5", children: /* @__PURE__ */ jsx(RadioGroup, { value: selected, onChange: setSelected, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: options.map((option) => /* @__PURE__ */ jsx(
    RadioGroup.Option,
    {
      value: option,
      className: ({ active, checked }) => `${checked ? "bg-primary text-white" : "bg-white border border-apply  shadow text-darker dark:bg-darker dark:text-white"}
                    relative flex cursor-pointer rounded-xl px-4 py-3 focus:outline-none`,
      children: ({ active, checked }) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm", children: /* @__PURE__ */ jsx(
          RadioGroup.Label,
          {
            as: "p",
            className: `font-medium ${checked ? "text-white" : "dark:text-white text-dark"}`,
            children: option.name
          }
        ) }),
        checked && /* @__PURE__ */ jsx("div", { className: "shrink-0 text-white", children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" }) })
      ] }) })
    },
    option.name
  )) }) }) });
}
function CheckIcon(props) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", ...props, children: [
    /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 12, fill: "#fff", opacity: "0.3" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M7 13l3 3 7-7",
        stroke: "#fff",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] });
}
function CreateSession() {
  const [locationType, setLocationType] = useState("Online");
  const { data, setData, post, processing, reset, errors } = useForm({
    title: "",
    scheduled_time: "",
    description: "",
    skills_taught: "",
    location: "Online",
    places_limit: ""
  });
  function setType(selected) {
    setLocationType(selected.name);
    if (selected.name === "Online")
      setData("location", "Online");
    else
      setData("location", "");
  }
  const createSession = (e) => {
    e.preventDefault();
    post(route("session.store"), {
      preserveScroll: true,
      onSuccess: () => {
      },
      onError: () => {
      },
      onFinish: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Create Session" }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { onSubmit: createSession, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-darker dark:text-gray-100", children: "Create New Session" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Make sure to enter valid and real information." }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-1/2 pr-5", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "",
              htmlFor: "title",
              value: "Title"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "title",
              type: "text",
              name: "title",
              value: data.title,
              onChange: (e) => setData("title", e.target.value),
              className: "mt-1 block w-3/4",
              placeholder: "Title of the session"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.title,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-8",
              htmlFor: "scheduled_time",
              hint: "When this session will be held?",
              value: "Scheduled time"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "scheduled_time",
              type: "date",
              name: "scheduled_time",
              value: data.scheduled_time,
              onChange: (e) => setData("scheduled_time", e.target.value),
              className: "mt-1 block w-3/4",
              placeholder: "Scheduled time"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.scheduled_time,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-8",
              htmlFor: "location",
              hint: "Where this session will be held?",
              value: "Location"
            }
          ),
          /* @__PURE__ */ jsx(
            Radio,
            {
              type: locationType,
              setType
            }
          ),
          locationType === "In-person" && /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "location",
              type: "text",
              name: "location",
              value: data.location,
              onChange: (e) => setData("location", e.target.value),
              className: "mt-1 block w-3/4",
              placeholder: "Location"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.location,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-1/2 pr-3", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "",
              htmlFor: "description",
              value: "Description"
            }
          ),
          /* @__PURE__ */ jsx(
            TextArea,
            {
              id: "description",
              type: "text",
              name: "description",
              value: data.description,
              onChange: (e) => setData("description", e.target.value),
              className: "mt-1 block w-3/4",
              placeholder: "Description",
              children: data.description
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.description,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-8",
              htmlFor: "skills_taught",
              hint: "What skills or knowledge will be taught?",
              value: "Skills and knowledge"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "skills_taught",
              type: "text",
              name: "skills_taught",
              value: data.skills_taught,
              onChange: (e) => setData("skills_taught", e.target.value),
              className: "mt-1 block w-3/4",
              placeholder: "skill1, skill2, skill3..."
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.skills_taught,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              className: "mt-8",
              htmlFor: "places_limit",
              hint: "How many people can join this session?",
              value: "Places limit"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "places_limit",
              type: "number",
              min: 1,
              name: "places_limit",
              value: data.places_limit,
              onChange: (e) => setData("places_limit", e.target.value),
              className: "mt-1 block w-3/4",
              placeholder: "Places limit"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.places_limit,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-end", children: /* @__PURE__ */ jsx(
            PrimaryButton,
            {
              className: "ml-3",
              disabled: processing,
              children: "Submit"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  CreateSession as default
};
