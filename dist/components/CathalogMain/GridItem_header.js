import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const GridItem_header = ({ category, id }) => {
	return React.createElement(
		'div',
		{ className: 'gridItem' },
		React.createElement(
			'div',
			{ className: 'cardCathalog' },
			React.createElement(
				'div',
				{ className: 'cardImage' },
				React.createElement('img', { alt: 'image1', src: category.image })
			),
			React.createElement(
				'div',
				{ className: 'cardDescription' },
				React.createElement(
					'p',
					null,
					category.name
				)
			),
			React.createElement(
				'div',
				{ className: 'buttonGroup' },
				React.createElement(
					Button,
					{
						variant: 'outlined',
						color: 'primary',
						fullWidth: 'true',
						component: Link,
						to: `/categories/${id}`
					},
					'\u041F\u0435\u0440\u0435\u0439\u0442\u0438'
				)
			)
		)
	);
};

export default GridItem_header;