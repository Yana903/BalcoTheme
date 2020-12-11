import React from 'react';
import Button from '@material-ui/core/Button';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Room from '@material-ui/icons/Room';

const Contacts = () => {
	return React.createElement(
		'div',
		{ className: 'contact-block' },
		React.createElement(
			'div',
			{ className: 'contact-block__address' },
			React.createElement(
				'div',
				{ className: 'heading-map' },
				React.createElement(
					'p',
					null,
					'\u0410\u0434\u0440\u0435\u0441:'
				)
			),
			React.createElement(
				'p',
				null,
				'\u0425\u0430\u0440\u044C\u043A\u043E\u0432'
			),
			React.createElement(
				'p',
				null,
				'\u043F\u0440. \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0438\u0439, 257-\u0411'
			)
		),
		React.createElement(
			'div',
			{ className: 'contact-block__phones' },
			React.createElement(
				'div',
				{ className: 'heading-map' },
				React.createElement(
					'p',
					null,
					'\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B:'
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
		)
	);
};

export default Contacts;