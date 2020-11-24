import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
// import SidebarMenu from "./SidebarMenu";
// import Consulting from "../Consulting/Consulting";
import Typography from '@material-ui/core/Typography';

const AboutPage = () => {
	return React.createElement(
		Fragment,
		null,
		React.createElement(
			'section',
			{ className: 'section-about' },
			React.createElement(
				Container,
				null,
				React.createElement(
					'div',
					{ className: 'layout-about' },
					React.createElement(
						'div',
						{ className: 'layout-item' },
						React.createElement(
							'div',
							{ className: 'heading-secondary' },
							React.createElement(
								Typography,
								{ variant: 'h2' },
								'\u041E \u043D\u0430\u0441'
							),
							React.createElement(
								'p',
								null,
								'\u0424\u0438\u0440\u043C\u0430 BALCo \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u043C \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u043E\u0439 \u0442\u0430\u0440\u044B \u043F\u0438\u0449\u0435\u0432\u043E\u0433\u043E \u0438 \u043D\u0435 \u043F\u0438\u0449\u0435\u0432\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F.'
							)
						),
						React.createElement(
							'p',
							{ className: 'description' },
							'\u0412 \u0441\u0444\u0435\u0440\u0435 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0443\u0436\u0435 10 \u043B\u0435\u0442 \u0438 \u0438\u043C\u0435\u0435\u043C \u0431\u043E\u0433\u0430\u0442\u044B\u0439 \u043E\u043F\u044B\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0430\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0442\u044C \u0438\u043C \u043D\u0430\u0438\u043B\u0443\u0447\u0448\u0438\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438.'
						),
						React.createElement(
							'p',
							{ className: 'description' },
							'\u041C\u044B \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0430\u0435\u043C \u0441 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u043C\u0438 \u043A\u0430\u043A \u043F\u0438\u0449\u0435\u0432\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 (\u043C\u0451\u0434, \u0445\u0430\u043B\u0432\u0430, \u043C\u0430\u0439\u043E\u043D\u0435\u0437, \u0441\u0430\u043B\u0430\u0442\u044B, \u043C\u043E\u0440\u043E\u0436\u0435\u043D\u043D\u043E\u0435, \u043C\u043E\u043B\u043E\u043A\u043E, \u0441\u043C\u0435\u0442\u0430\u043D\u0430, \u0442\u0432\u043E\u0440\u043E\u0433, \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u043E\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u0435, \u0442\u0430\u0431\u043B\u0435\u0442\u043A\u0438, \u0432\u0438\u0442\u0430\u043C\u0438\u043D\u044B, \u043A\u0430\u043F\u0441\u0443\u043B\u044B \u0438 \u043F\u043E\u0440\u043E\u0448\u043A\u0438), \u0442\u0430\u043A \u0438 \u043D\u0435 \u043F\u0438\u0449\u0435\u0432\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 (\u043A\u0440\u0430\u0441\u043A\u0438, \u043B\u0430\u043A\u0438, \u043A\u043B\u0435\u044F, \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0438 \u0438 \u043C\u0430\u0441\u043B\u0430, \u0448\u043F\u0430\u0442\u043B\u0451\u0432\u043A\u0438, \u0442\u0443\u0431\u044B \u0434\u043B\u044F \u0433\u0435\u0440\u043C\u0435\u0442\u0438\u043A\u043E\u0432, \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0430, \u043A\u0440\u0435\u043C\u0430 \u0438 \u043C\u0430\u0437\u0438, \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0438, \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0430\u0441\u0442\u044B).'
						),
						React.createElement(
							'div',
							{ className: 'headingSecondary' },
							React.createElement(
								'p',
								null,
								'\u041F\u0440\u0438\u043D\u0446\u0438\u043F\u044B \u043D\u0430\u0448\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u044B:'
							)
						),
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								null,
								'\u0431\u0430\u043B\u0430\u043D\u0441 \u0446\u0435\u043D\u044B \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u043E\u0439 \u0442\u0430\u0440\u044B \u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438,'
							),
							React.createElement(
								'li',
								null,
								'\u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A,'
							),
							React.createElement(
								'li',
								null,
								'\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430 \u0442\u0430\u0440\u044B \u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438.'
							)
						),
						React.createElement(
							'div',
							{ className: 'headingSecondary' },
							React.createElement(
								'p',
								null,
								'\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438:'
							)
						),
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								null,
								'\u0432\u044B\u0441\u043E\u043A\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u0430 \u0438 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0441\u0430\u043D\u0438\u0442\u0430\u0440\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432,'
							),
							React.createElement(
								'li',
								null,
								'\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0438 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0442\u0430\u0440\u044B,'
							),
							React.createElement(
								'li',
								null,
								'\u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0432\u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438,'
							),
							React.createElement(
								'li',
								null,
								'\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043B\u0435\u0440\u043E\u0432\u043A\u0438 \u0442\u0430\u0440\u044B \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437,'
							),
							React.createElement(
								'li',
								null,
								'\u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u043E\u0439 \u0442\u0430\u0440\u044B.,'
							)
						),
						React.createElement(
							'p',
							{ className: 'description' },
							'\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u0432\u0441\u0435\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u043A \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u043C\u0443 \u043F\u0440\u043E\u0446\u0432\u0435\u0442\u0430\u043D\u0438\u044E.'
						)
					)
				)
			)
		)
	);
};

export default AboutPage;