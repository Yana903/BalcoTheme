import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { themeSettings } from '../lib/settings';
import MetaTags from '../components/metaTags';
import GalleryProducts from '../components/products/gallery';
import HomeSlider from '../components/homeSlider';
import ViewedProducts from '../components/products/viewed';
import { advantagesData } from '../../locales/advantagesData';
import CategoriesGallery from '../components/categoriesGallery';
import BigBanner from '../components/bigBanner';
import HomeContacts from '../components/homeContacts';
import MapYand from '../components/mapYand';
import Hero from '../components/Hero';
import Principles from '../components/Principles';
import CathalogMain from '../components/CathalogMain/CathalogMain';
// import Consulting from '../components/Consulting/Consulting';
import Map from '../components/Map/Map';
import MainPage from '../components/MainPage';

const containers = {
	categories: [{
		id: 'medicine',
		name: 'Тара для медицины',
		number: '72',
		image: 'http://tara.kh.ua/wp-content/uploads/2019/07/Tara-dlya-medicziny-i-kosmetiki.jpg',
		description: 'Применяется для упаковки: таблеток, витаминов, порошков, мазей, кремов, бальзамов, гелей, красок, спортивного питания, чистящих средств.',
		subCategories: [{
			subId: 'slamCap',
			subName: 'С крышкой захлопкой',
			subNumber: '24',
			subImage: 'http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-300x300.jpg'
		}, {
			subId: 'scruwCap',
			subName: 'С винтовой крышкой',
			subNumber: '35',
			subImage: 'http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-1-300x300.jpg'
		}, {
			subId: 'powderJar',
			subName: 'Баночки под присыпку',
			subNumber: '5',
			subImage: 'http://tara.kh.ua/wp-content/uploads/2019/08/Banka-dlya-prisypki-300x300.jpg'
		}, {
			subId: 'bottle',
			subName: 'бутылки под ПЭТ крышку',
			subNumber: '7',
			subImage: 'http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-2-300x300.jpg'
		}, {
			subId: 'testJar',
			subName: 'Контейнеры для анализов',
			subNumber: '2',
			subImage: 'http://tara.kh.ua/wp-content/uploads/2019/08/Kontejnery-laboratornye-300x300.jpg'
		}]
	}, {
		id: 'makeup',
		name: 'Тара для косметики',
		number: '133',
		image: 'http://tara.kh.ua/wp-content/uploads/2019/07/Tara-dlya-kosmetiki.jpg',
		subCategories: [{
			subId: 'makeup1',
			subName: 'makeup',
			subNumber: '24',
			subImage: 'http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-300x300.jpg'
		}, {
			subId: 'makeup2',
			subName: 'makeup',
			subNumber: '35',
			subImage: 'http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-1-300x300.jpg'
		}]
	}, {
		id: 'nutrition',
		name: 'Тара для спортивного питания',
		number: '23',
		image: 'http://tara.kh.ua/wp-content/uploads/2019/07/Tara-dlya-sportivnogo-pitaniya.jpg'
	}, {
		id: 'jar',
		name: 'Баночки',
		number: '',
		image: 'http://tara.kh.ua/wp-content/uploads/2019/07/Obshhaya.jpg'
	}, {
		id: 'busket',
		name: 'Вёдра',
		number: '25',
		image: 'http://tara.kh.ua/wp-content/uploads/2019/07/Plastikovye-vyodra.jpg'
	}, {
		id: 'dish',
		name: 'Судки',
		number: '20',
		image: 'http://tara.kh.ua/wp-content/uploads/2019/07/Sudki.jpg'
	}]
};

const IndexContainer = props => {
	const {
		addCartItem,
		state: { pageDetails, settings, advantages = advantagesData, categories }
	} = props;

	return React.createElement(
		Fragment,
		null,
		React.createElement(MetaTags, {
			title: pageDetails.meta_title,
			description: pageDetails.meta_description,
			canonicalUrl: pageDetails.url,
			ogTitle: pageDetails.meta_title,
			ogDescription: pageDetails.meta_description
		}),
		React.createElement(MainPage, null)
	);
};

IndexContainer.propTypes = {
	addCartItem: PropTypes.func.isRequired,
	state: PropTypes.shape({
		settings: PropTypes.shape({}),
		pageDetails: PropTypes.shape({})
	}).isRequired
};

export default IndexContainer;