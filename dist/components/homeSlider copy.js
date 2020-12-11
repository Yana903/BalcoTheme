import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import LazyLoad from 'react-lazyload';
import { themeSettings } from '../lib/settings';
import storeSettings from '../../../config/store';

const renderItem = item => React.createElement(
	'div',
	{ className: 'image-gallery-image' },
	React.createElement(
		LazyLoad,
		null,
		React.createElement(
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
		),
		React.createElement(
			'div',
			{
				className: 'image-gallery__item',
				style: {
					color: themeSettings.home_slider_color || '#000'
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
						React.createElement('img', { src: item.original1, alt: 'tara' })
					)
				),
				React.createElement(
					'div',
					{ className: 'cart-gallery__item' },
					React.createElement(
						'div',
						{ className: 'image-gallery__title' },
						item.title
					),
					React.createElement(
						'div',
						{ className: 'image-gallery__description' },
						item.description1,
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
		)
	)
);

const HomeSlider = ({ images }) => {
	// debugger;
	if (images && images.length > 0) {
		const items = images.map(item => ({
			original: `/assets/images/${item.image}`,
			title: item.title,
			description: item.description,
			path: item.path || '',
			button: item.button,

			original1: `/assets/images/${item.image}`,
			title1: item.title + "gggggggggggggg",
			description1: item.description,
			path1: item.path || '',
			button1: item.button

		}));

		return React.createElement(
			'section',
			{ className: 'home-slider section-container' },
			React.createElement(
				'div',
				{ className: 'heading-secondary' },
				React.createElement(
					'h2',
					null,
					'\u041D\u043E\u0432\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F'
				)
			),
			React.createElement('hr', { className: 'divider' }),
			React.createElement(ImageGallery, {
				items: items,
				lazyLoad: true,
				showThumbnails: false,
				slideInterval: 2000,
				showNav: themeSettings.home_gallery_shownav === true,
				showBullets: images.length > 1,
				showPlayButton: false,
				showFullscreenButton: false,
				slideOnThumbnailHover: false,
				renderItem: renderItem,
				infinite: false
			})
		);
	}
	return null;
};

HomeSlider.propTypes = {
	images: PropTypes.arrayOf(PropTypes.shape({}))
};

HomeSlider.defaultProps = {
	images: null
};

export default HomeSlider;