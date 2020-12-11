import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { themeSettings } from '../lib/settings';

const HomeSliderItem = ({ item }) => React.createElement(
	'div',
	{
		className: 'image-gallery__item',
		style: {
			color: themeSettings.home_slider_color || '#000'
			// backgroundImage: `url(${item.original})`
		}
	},
	React.createElement(
		'div',
		{ className: 'cart cart-gallery' },
		React.createElement(
			'div',
			{ className: 'cart-gallery__item' },
			React.createElement(
				'div',
				{ className: 'cart-gallery__image' },
				React.createElement('img', { src: item.original, alt: 'tara' })
			)
		),
		React.createElement(
			'div',
			{ className: 'cart-gallery__item' },
			React.createElement(
				'div',
				{ className: 'image-gallery__title' },
				item.title1
			),
			React.createElement(
				'div',
				{ className: 'image-gallery__description' },
				item.description,
				item.description && item.description.length > 0 && React.createElement(
					NavLink,
					{ to: item.path || '' },
					React.createElement(
						'button',
						{
							type: 'button',
							to: item.path || '',
							className: 'button image-gallery__button'
						},
						'\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433'
					)
				)
			)
		)
	)
);
export default HomeSliderItem;