import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { useState } from "react";
import { I as InputError } from "./InputError-af1dd4cc.mjs";
import { I as InputLabel } from "./InputLabel-0ae3a22b.mjs";
import { M as Modal, S as SecondaryButton } from "./SecondaryButton-2c9ad173.mjs";
import "./TextInput-2c7d8ed7.mjs";
import { useForm } from "@inertiajs/react";
import { P as PrimaryButton } from "./PrimaryButton-1152ff4d.mjs";
import { T as TextArea } from "./TextArea-49159cf8.mjs";
import ReactStars from "react-rating-stars-component";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
function FeedbackModal({
  routeDirect,
  className = ""
}) {
  const [confirmingDone, setConfirmingDone] = useState(false);
  const { data, setData, post, processing, reset, errors } = useForm({
    review: "",
    rating: 0
  });
  const confirmUserDone = () => {
    setConfirmingDone(true);
  };
  let rating = {
    size: 30,
    count: 5,
    isHalf: true,
    value: data.rating,
    onChange: (newValue) => {
      setData("rating", newValue);
    }
  };
  const addFeedback = (e) => {
    e.preventDefault();
    if (routeDirect) {
      post(routeDirect, {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => {
        },
        onFinish: () => reset()
      });
    } else {
      closeModal();
    }
  };
  const closeModal = () => {
    setConfirmingDone(false);
    reset();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: confirmUserDone,
        className: "text-primary font-medium",
        children: "Give feedback"
      }
    ),
    /* @__PURE__ */ jsx(Modal, { show: confirmingDone, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: addFeedback, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-darker dark:text-gray-100", children: "Leave a feedback" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "How was your session? What can we do better? We'd love to hear from you!" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            className: "mt-3",
            htmlFor: "rating",
            value: "Rating"
          }
        ),
        /* @__PURE__ */ jsx(ReactStars, { ...rating }),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.rating,
            className: "mt-2"
          }
        ),
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            className: "mt-3",
            htmlFor: "review",
            value: "Review"
          }
        ),
        /* @__PURE__ */ jsx(
          TextArea,
          {
            id: "review",
            type: "text",
            name: "review",
            value: data.review,
            onChange: (e) => setData("review", e.target.value),
            className: "mt-1 block w-3/4",
            placeholder: "Review",
            children: data.review
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.review,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-3", disabled: processing, children: "Submit" })
      ] })
    ] }) })
  ] });
}
export {
  FeedbackModal as default
};
