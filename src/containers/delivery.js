import React, { Fragment } from 'react';
import { themeSettings, text } from '../lib/settings';
import MetaTags from '../components/metaTags';
import Delivery from '../components/delivery';
import PageBreadcrumbs from '../components/breadcrumbs';

const DeliveryContainer = props => {
	return (
		<Fragment>
			<MetaTags title="Delivery" />
			<section className="main__header section-container">
				<PageBreadcrumbs page="Delivery" path="/delivery" />
				<h1 className="main__title">Доставка</h1>
				{/* <NavLink to="/">{text.text404}</NavLink> */}
			</section>
			<section className="section-container">
				<Delivery {...props} />
			</section>
		</Fragment>
	);
};

export default DeliveryContainer;
