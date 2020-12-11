import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import HomeSliderItem from "./homeSliderItem";
import LazyLoad from 'react-lazyload';
import { themeSettings } from '../lib/settings';
import storeSettings from '../../../config/store';

const renderItem = item => React.createElement(
	'div',
	{ className: 'image-gallery-image' },
	React.createElement(
		LazyLoad,
		null,
		React.createElement(HomeSliderItem, {
			item: item
		}),
		React.createElement(HomeSliderItem, {
			item: item
		})
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