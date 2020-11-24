import React, { Fragment } from 'react';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Hero from "../Hero/Hero";
import Principles from "../Principles/Principles";
import CathalogMain from "../CathalogMain/CathalogMain";
import Consulting from "../Consulting/Consulting";
import Map from "../Map/Map";
// import Footer from "../Footer/Footer";

// const theme = createMuiTheme({
//   typography: {
//     h1: {
//       fontSize: 40,
//       fontWeight: 400
//     },
//     h2: {
//       fontSize: 32,
//       fontWeight: 300,
//     },
//     h3: {
//       fontSize: 28,
//       marginTop: 0,
//       fontTeight: 700,
//       marginBottom: 0
//     }
//   },
// });

const MainPage = ({ containers }) => {
  return React.createElement(
    Fragment,
    null,
    React.createElement(Hero, null)
  );
};

export default MainPage;