import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as helper from '../lib/helper';
import MetaTags from '../components/metaTags';
import Delivery from '../components/delivery';

const DeliveryContainer = props => {
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
		React.createElement(Delivery, {
			settings: settings
		})
	);
};

export default DeliveryContainer;