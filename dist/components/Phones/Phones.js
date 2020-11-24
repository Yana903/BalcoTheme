import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(0)
  },
  phonesBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  phones: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px'
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [phone, setPhone] = React.useState('');

  const handleChange = event => {
    setPhone(event.target.value);
  };

  return React.createElement(
    'div',
    { className: classes.phonesBox },
    React.createElement(
      'div',
      { className: classes.phones },
      React.createElement(PhoneIphone, null),
      React.createElement(
        FormControl,
        { className: classes.formControl },
        React.createElement(
          Select,
          {
            value: phone,
            onChange: handleChange,
            displayEmpty: true,
            className: classes.selectEmpty,
            inputProps: { 'aria-label': 'Without label' }
          },
          React.createElement(
            MenuItem,
            { value: '' },
            React.createElement(
              'em',
              null,
              '+380(50)302-55-22'
            )
          ),
          React.createElement(
            MenuItem,
            { value: 20 },
            '+380(57)717-61-17'
          ),
          React.createElement(
            MenuItem,
            { value: 30 },
            '+380(57)717-50-27'
          )
        )
      )
    ),
    React.createElement(
      Button,
      { variant: 'contained', color: 'primary', marginLeft: '20px' },
      '\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A'
    )
  );
}