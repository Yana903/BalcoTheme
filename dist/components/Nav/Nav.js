var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Search from "../Search/Search";
import MainPage from "../MainPage/MainPage";
// import GoodsPageContainer from "../GoodsPage/GoodsPage";
import GoodsPage from "../GoodsPage/GoodsPage";
import AboutPage from "../AboutPage/AboutPage";
import DelivePayPage from "../DelivePayPage/DelivePayPage";
import NewsPage from "../NewsPage/NewsPage";
import ContactsPage from "../ContactsPage/ContactsPage";
import { Link, Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from 'history';
import Category from "../Category/Category";
import DetailsPage from "../DetailsPage/DetailsPage";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const history = createMemoryHistory();

export default function NavTabs() {
  const containers = {
    categories: [{
      id: "medicine",
      name: "Тара для медицины",
      number: "72",
      image: "http://tara.kh.ua/wp-content/uploads/2019/07/Tara-dlya-medicziny-i-kosmetiki.jpg",
      description: "Применяется для упаковки: таблеток, витаминов, порошков, мазей, кремов, бальзамов, гелей, красок, спортивного питания, чистящих средств.",
      subCategories: [{
        subId: "slamCap",
        subName: "С крышкой захлопкой",
        subNumber: "24",
        subImage: "http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-300x300.jpg"

      }, {
        subId: "scruwCap",
        subName: "С винтовой крышкой",
        subNumber: "35",
        subImage: "http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-1-300x300.jpg"
      }, {
        subId: "powderJar",
        subName: "Баночки под присыпку",
        subNumber: "5",
        subImage: "http://tara.kh.ua/wp-content/uploads/2019/08/Banka-dlya-prisypki-300x300.jpg"
      }, {
        subId: "bottle",
        subName: "бутылки под ПЭТ крышку",
        subNumber: "7",
        subImage: "http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-2-300x300.jpg"
      }, {
        subId: "testJar",
        subName: "Контейнеры для анализов",
        subNumber: "2",
        subImage: "http://tara.kh.ua/wp-content/uploads/2019/08/Kontejnery-laboratornye-300x300.jpg"
      }]
    }, {
      id: "makeup",
      name: "Тара для косметики",
      number: "133",
      image: "http://tara.kh.ua/wp-content/uploads/2019/07/Tara-dlya-kosmetiki.jpg",
      subCategories: [{
        subId: "makeup1",
        subName: "makeup",
        subNumber: "24",
        subImage: "http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-300x300.jpg"
      }, {
        subId: "makeup2",
        subName: "makeup",
        subNumber: "35",
        subImage: "http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-1-300x300.jpg"
      }]
    }, {
      id: "nutrition",
      name: "Тара для спортивного питания",
      number: "23",
      image: "http://tara.kh.ua/wp-content/uploads/2019/07/Tara-dlya-sportivnogo-pitaniya.jpg"
    }, {
      id: "jar",
      name: "Баночки",
      number: "",
      image: "http://tara.kh.ua/wp-content/uploads/2019/07/Obshhaya.jpg"
    }, {
      id: "busket",
      name: "Вёдра",
      number: "25",
      image: "http://tara.kh.ua/wp-content/uploads/2019/07/Plastikovye-vyodra.jpg"
    }, {
      id: "dish",
      name: "Судки",
      number: "20",
      image: "http://tara.kh.ua/wp-content/uploads/2019/07/Sudki.jpg"
    }]
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { categories } = containers;

  return React.createElement(
    Router,
    { history: history },
    React.createElement(
      "div",
      { className: classes.root },
      React.createElement(
        AppBar,
        { position: "static" },
        React.createElement(
          Container,
          null,
          React.createElement(
            Tabs,
            {
              variant: "fullWidth",
              value: value,
              onChange: handleChange,
              "aria-label": "nav tabs example"
            },
            React.createElement(Tab, { label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", component: Link, disableRipple: "true", to: "/main" }),
            React.createElement(Tab, { label: "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F", component: Link, to: "/goods" }),
            React.createElement(Tab, { label: "\u041E \u043D\u0430\u0441", component: Link, to: "/about" }),
            React.createElement(Tab, { label: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430", component: Link, to: "/delivepay" }),
            React.createElement(Tab, { label: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438", component: Link, to: "/news" }),
            React.createElement(Tab, { label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", component: Link, to: "/contacts" }),
            React.createElement(
              Box,
              { display: "flex", alignItems: "center" },
              React.createElement(Search, null)
            )
          )
        )
      ),
      React.createElement(
        Switch,
        null,
        React.createElement(Route, {
          exact: true,
          path: "/",
          render: props => React.createElement(MainPage, _extends({}, props, { containers: containers }))
        }),
        React.createElement(Route, {
          path: "/main",
          render: props => React.createElement(MainPage, _extends({}, props, { containers: containers }))
        }),
        React.createElement(Route, {
          path: "/goods"
          // render={(props) => <GoodsPageContainer {...props} containers={containers} />}
          , render: props => React.createElement(GoodsPage, _extends({}, props, { containers: containers }))
        }),
        React.createElement(Route, {
          path: "/delivepay",
          render: props => React.createElement(DelivePayPage, _extends({}, props, { containers: containers }))
        }),
        React.createElement(Route, {
          path: "/news",
          render: props => React.createElement(NewsPage, _extends({}, props, { containers: containers }))
        }),
        React.createElement(Route, {
          path: "/about",
          render: props => React.createElement(AboutPage, _extends({}, props, { containers: containers }))
        }),
        React.createElement(Route, {
          path: "/contacts",
          render: props => React.createElement(ContactsPage, _extends({}, props, { containers: containers }))
        }),
        React.createElement(Route, {
          exact: true,
          path: "/categories/:id",
          render: props => {
            const category = categories.find(({ id }) => id === props.match.params.id);
            return React.createElement(Category, _extends({}, props, category));
          }
        }),
        React.createElement(Route, {
          path: "/categories/:id/:subId",
          render: props => {
            const category = categories.find(({ id }) => id === props.match.params.id);
            const { subCategories } = category;
            const subCategory = subCategories.find(({ subId }) => subId === props.match.params.subId);
            const sliderCategories = subCategories.slice(0, 4);
            return React.createElement(Details, { subCategory: subCategory, sliderCategories: sliderCategories });
          }
        })
      )
    )
  );
}