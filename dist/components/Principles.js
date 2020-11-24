import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Principles = () => {
	return React.createElement(
		'section',
		{ className: 'sectionPrinciples' },
		React.createElement(
			Container,
			null,
			React.createElement(
				'div',
				{ className: 'heading-primary' },
				React.createElement(
					Typography,
					{ variant: 'h2' },
					'\u041D\u0430\u0448\u0438 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u044B'
				)
			),
			React.createElement(
				'div',
				{ className: 'gridPrinc' },
				React.createElement(
					'div',
					{ className: 'gridItem' },
					React.createElement(
						'div',
						{ className: 'cardPrinc' },
						React.createElement(
							'div',
							{ className: 'cardImage' },
							React.createElement('img', { src: '/assets/images/princ1.png', alt: 'image1' })
						),
						React.createElement(
							'div',
							{ className: 'cardDescription' },
							React.createElement(
								'p',
								null,
								'\u0411\u0430\u043B\u0430\u043D\u0441 \u0446\u0435\u043D\u044B \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u043E\u0439 \u0442\u0430\u0440\u044B \u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438'
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'gridItem' },
					React.createElement(
						'div',
						{ className: 'cardPrinc' },
						React.createElement(
							'div',
							{ className: 'cardImage' },
							React.createElement('img', { src: '/assets/images/princ2.png', alt: 'image1' })
						),
						React.createElement(
							'div',
							{ className: 'cardDescription' },
							React.createElement(
								'p',
								null,
								'\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A'
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'gridItem' },
					React.createElement(
						'div',
						{ className: 'cardPrinc' },
						React.createElement(
							'div',
							{ className: 'cardImage' },
							React.createElement('img', { src: '/assets/images/princ3.png', alt: 'image1' })
						),
						React.createElement(
							'div',
							{ className: 'cardDescription' },
							React.createElement(
								'p',
								null,
								'\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430 \u0442\u0430\u0440\u044B \u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438'
							)
						)
					)
				)
			)
		)
	);
};

export default Principles;