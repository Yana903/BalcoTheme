import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputMask from "react-input-mask";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Имя" variant="outlined" />
      {/* <InputMask
        mask="(+380)99-999-99-99"
        // value={props.value}
        // onChange={props.onChange}
      > */}
        {(inputProps) => (
          <TextField
            id="outlined-basic"
            label="Телефон"
            type="tel"
            variant="outlined"
          />
        )}
      {/* </InputMask> */}
      <Button variant="contained" color="primary">
        Нужна консультация
      </Button>
    </form>
  );
}
