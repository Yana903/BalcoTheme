import React, { Fragment } from 'react';
import { themeSettings, text } from '../lib/settings';
import MetaTags from '../components/metaTags';
import Delivery from '../components/delivery';
import PageBreadcrumbs from '../components/breadcrumbs';

const DeliveryContainer = props => {

	return React.createElement(
		Fragment,
		null,
		React.createElement(MetaTags, { title: 'Delivery' }),
		React.createElement(
			'section',
			{ className: 'main__header section-container' },
			React.createElement(PageBreadcrumbs, { page: 'Delivery', path: '/delivery' }),
			React.createElement(
				'h1',
				{ className: 'main__title' },
				'\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430'
			)
		),
		React.createElement(
			'section',
			{ className: 'section-container' },
			React.createElement(Delivery, props)
		)
	);
};

export default DeliveryContainer;