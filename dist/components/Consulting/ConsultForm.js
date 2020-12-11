import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MaskedInput from "./MaskedInput";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    },
    '& .MuiInputBase-input': {
      height: "15px"
    },
    '& .MuiFormLabel-root': {
      fontSize: "15px"
    }
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return React.createElement(
    "form",
    { className: classes.root, noValidate: true, autoComplete: "off" },
    React.createElement(TextField, { id: "outlined-basic", label: "\u0418\u043C\u044F", variant: "outlined", color: "primary" }),
    React.createElement(MaskedInput, null),
    React.createElement(
      "button",
      { "class": "button image-gallery__button" },
      "\u041D\u0443\u0436\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F"
    )
  );
}