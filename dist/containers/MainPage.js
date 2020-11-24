import React, { Fragment } from 'react';
import Hero from './Hero';
// import Principles from './Principles';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const MainPage = () => {
    return React.createElement(
        Fragment,
        null,
        React.createElement(Hero, null)
    );
};

export default MainPage;