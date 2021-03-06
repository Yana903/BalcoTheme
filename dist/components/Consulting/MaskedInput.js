import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import InputMask from 'react-input-mask';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class MaskedInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.onChange = data => {
      this.setState({ phone: data.target.value });
    };
  }

  render() {
    return React.createElement(
      MuiThemeProvider,
      null,
      React.createElement(
        InputMask,
        { mask: '(+380)99 999 99 99',
          maskChar: ' ',
          value: this.state.phone,
          onChange: this.onChange
        },
        React.createElement(TextField, { id: 'outlined-basic',
          label: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D',
          variant: 'outlined',
          ref: 'phone',
          name: 'phone',
          type: 'text',
          color: 'primary'
        })
      )
    );
  }
}