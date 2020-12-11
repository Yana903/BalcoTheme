import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import HomeSliderItem from "./homeSliderItem";
import LazyLoad from 'react-lazyload';
import { themeSettings } from '../lib/settings';
import storeSettings from '../../../config/store';

const renderItem = item => (
	<div className="image-gallery-image">
		<LazyLoad>
			{/* <NavLink to={item.path || ''}> */}
				<HomeSliderItem
					item={item}
				/>
				<HomeSliderItem
					item={item}
				/>
			{/* </NavLink> */}
		</LazyLoad>
	</div>
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
			title1: item.title+"gggggggggggggg",
			description1: item.description,
			path1: item.path || '',
			button1: item.button


		}));

		return (
			<section className="home-slider section-container">
					<div className='heading-secondary'>
						<h2>Новая продукция</h2>
					</div>
					<hr className='divider'/>
				<ImageGallery
					items={items}
					lazyLoad
					showThumbnails={false}
					slideInterval={2000}
					showNav={themeSettings.home_gallery_shownav === true}
					showBullets={images.length > 1}
					showPlayButton={false}
					showFullscreenButton={false}
					slideOnThumbnailHover={false}
					renderItem={renderItem}
					infinite={false}
				/>
			</section>
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
