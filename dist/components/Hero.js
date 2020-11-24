import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
// import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Hero = () => {
	return React.createElement(
		'section',
		{ className: 'sectionHero' },
		React.createElement('div', { className: 'heroBackground' }),
		React.createElement(
			'div',
			{ className: 'heroForeground' },
			React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(
					'div',
					{ className: 'heroInform' },
					React.createElement(
						Typography,
						{
							variant: 'h1',
							style: { fontSize: '40px', marginTop: '0' }
						},
						'\u041D\u0430\u0434\u0451\u0436\u043D\u044B\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0442\u0435\u043B\u044C \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u043E\u0439 \u0442\u0430\u0440\u044B \u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438'
					),
					React.createElement(
						'p',
						null,
						'\u0412 \u0441\u0444\u0435\u0440\u0435 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0443\u0436\u0435 10 \u043B\u0435\u0442 \u0438 \u0438\u043C\u0435\u0435\u043C \u0431\u043E\u0433\u0430\u0442\u044B\u0439 \u043E\u043F\u044B\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0430\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0442\u044C \u0438\u043C \u043D\u0430\u0438\u043B\u0443\u0447\u0448\u0438\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438.'
					),
					React.createElement(
						Button,
						{
							variant: 'contained',
							component: Link,
							to: '/goods',
							color: 'primary'
						},
						'\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433'
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'heroImg' },
				React.createElement('img', { src: '/assets/images/img-tara.png', alt: 'imgHero' })
			)
		)
	);
};

export default Hero;