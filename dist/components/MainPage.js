import React, { Fragment } from 'react';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Hero from './Hero';
import { themeSettings } from '../lib/settings';
import HomeSlider from '../components/homeSlider';
// import CathalogMain from './CathalogMain/CathalogMain';
// import Consulting from '../Consulting/Consulting';
// import Map from "../Map/Map";
// import Footer from "../Footer/Footer";

// const theme = createMuiTheme({
//   typography: {
//     h1: {
//       fontSize: 40,
//       fontWeight: 400
//     },
//     h2: {
//       fontSize: 32,
//       fontWeight: 300,
//     },
//     h3: {
//       fontSize: 28,
//       marginTop: 0,
//       fontTeight: 700,
//       marginBottom: 0
//     }
//   },
// });

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

const MainPage = () => {
	return React.createElement(
		Fragment,
		null,
		React.createElement(Hero, null),
		React.createElement(HomeSlider, { images: themeSettings.home_slider })
	);
};

export default MainPage;