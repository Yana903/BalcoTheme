import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MaskedInput from "./MaskedInput"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    '& .MuiInputBase-input': {
      height: "15px",
    },
    '& .MuiFormLabel-root': {
      fontSize: "15px"
    },
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <TextField id="outlined-basic" label="Имя" variant="outlined" color="primary"/>
      <MaskedInput />
      <button class="button image-gallery__button">
        Нужна консультация
      </button>
    </form>
  );
}
