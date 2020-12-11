import React from "react";
import ConsultForm from "./ConsultForm";

const Consulting = () => {
  return React.createElement(
    "section",
    { className: "section-callback" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "heading-primary" },
        React.createElement(
          "h2",
          null,
          "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A"
        )
      ),
      React.createElement("hr", { className: "divider" }),
      React.createElement(ConsultForm, null)
    )
  );
};

export default Consulting;