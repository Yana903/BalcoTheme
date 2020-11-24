import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { themeSettings, text } from '../lib/settings';
import * as helper from '../lib/helper';

const Delivery = () => {
	return React.createElement(
		Fragment,
		null,
		React.createElement(
			'h1',
			null,
			'\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430'
		),
		React.createElement(
			'p',
			null,
			'\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432 \u0441\u0442\u0430\u0434\u0438\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u0437\u0430\u0433\u043B\u044F\u043D\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u043F\u043E\u0437\u0436\u0435'
		)
	);
};

export default Delivery;