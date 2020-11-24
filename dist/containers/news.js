import React, { Fragment } from 'react';
import { themeSettings, text } from '../lib/settings';
import MetaTags from '../components/metaTags';
import News from '../components/news';
import PageBreadcrumbs from '../components/breadcrumbs';

const NewsContainer = props => {
	const {
		state: { pageDetails }
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
		React.createElement(
			'section',
			{ className: 'main__header section-container' },
			React.createElement(PageBreadcrumbs, {
				page: pageDetails.meta_title,
				path: pageDetails.path
			}),
			React.createElement(
				'h1',
				{ className: 'main__title' },
				'\u041D\u043E\u0432\u043E\u0441\u0442\u0438'
			)
		),
		React.createElement(
			'section',
			{ className: 'section-container' },
			React.createElement(News, props)
		)
	);
};

export default NewsContainer;