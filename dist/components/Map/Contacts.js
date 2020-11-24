import React from 'react';
import Button from '@material-ui/core/Button';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Room from '@material-ui/icons/Room';
import Typography from '@material-ui/core/Typography';

const Contacts = () => {
	return React.createElement(
		'div',
		{ className: 'contactBlock' },
		React.createElement(
			'div',
			{ className: 'heading-secondary' },
			React.createElement(
				Typography,
				{ variant: 'h2' },
				'\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B'
			)
		),
		React.createElement(
			'div',
			{ className: 'phonesBlock' },
			React.createElement(
				'div',
				{ className: 'blockTitle' },
				React.createElement(PhoneIphone, null),
				React.createElement(
					Typography,
					{ variant: 'h3' },
					'\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B'
				)
			),
			React.createElement(
				'p',
				null,
				'+380(50)302-55-22'
			),
			React.createElement(
				'p',
				null,
				'+380(57)717-61-17'
			),
			React.createElement(
				'p',
				null,
				'+380(57)717-50-27'
			)
		),
		React.createElement(
			'div',
			{ className: 'addressBlock' },
			React.createElement(
				'div',
				{ className: 'blockTitle' },
				React.createElement(Room, null),
				React.createElement(
					Typography,
					{ variant: 'h3' },
					'\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F'
				)
			),
			React.createElement(
				'p',
				null,
				'\u0425\u0430\u0440\u044C\u043A\u043E\u0432, \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0438\u0439, \u0434. 257\u0411'
			),
			React.createElement(
				'p',
				null,
				'\u041F\u043D. \u2013 \u041F\u0442. \u0441 9:00 \u0434\u043E 17:00'
			),
			React.createElement(
				'a',
				{ href: 'yyy' },
				'sales@tara.kh.ua'
			)
		),
		React.createElement(
			Button,
			{ variant: 'contained', color: 'primary' },
			'\u041D\u0443\u0436\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F'
		)
	);
};

export default Contacts;