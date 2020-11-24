import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputMask from "react-input-mask";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return React.createElement(
    "form",
    { className: classes.root, noValidate: true, autoComplete: "off" },
    React.createElement(TextField, { id: "outlined-basic", label: "\u0418\u043C\u044F", variant: "outlined" }),
    inputProps => React.createElement(TextField, {
      id: "outlined-basic",
      label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
      type: "tel",
      variant: "outlined"
    }),
    React.createElement(
      Button,
      { variant: "contained", color: "primary" },
      "\u041D\u0443\u0436\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F"
    )
  );
}