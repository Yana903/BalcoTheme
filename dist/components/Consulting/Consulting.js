import React from "react";
// import Container from "@material-ui/core/Container";
import ConsultForm from "./ConsultForm";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

const Consulting = () => {
  return React.createElement(
    "section",
    { className: "sectionConsult" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "heading-primary inverce" },
        React.createElement(
          Typography,
          { variant: "h2" },
          "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E"
        ),
        React.createElement(
          "p",
          { className: "description inverce" },
          "\u043E\u043F\u044B\u0442\u043D\u043E\u0433\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430 \u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u0412\u0430\u0448\u0438\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432"
        )
      ),
      React.createElement(
        Box,
        {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        },
        React.createElement(ConsultForm, null)
      )
    )
  );
};

export default Consulting;