import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    height: "15px"
  }
};

function TextFieldStyled(props) {
  const { classes } = props;
  return React.createElement(TextField, { className: classes.root });
}

TextFieldStyled.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFieldStyled);