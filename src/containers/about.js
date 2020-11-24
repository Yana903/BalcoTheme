import React, { Fragment } from 'react';
import { themeSettings, text } from '../lib/settings';
import MetaTags from '../components/metaTags';
import About from '../components/about';
import PageBreadcrumbs from '../components/breadcrumbs';

const AboutContainer = props => {
	const {
		state: { pageDetails }
	} = props;

	return (
		<Fragment>
			<MetaTags
				title={pageDetails.meta_title}
				description={pageDetails.meta_description}
				canonicalUrl={pageDetails.url}
				ogTitle={pageDetails.meta_title}
				ogDescription={pageDetails.meta_description}
			/>
			<section className="main__header section-container">
				<PageBreadcrumbs
					page={pageDetails.meta_title}
					path={pageDetails.path}
				/>
				<h1 className="main__title">О нас</h1>
				{/* <NavLink to="/">{text.text404}</NavLink> */}
			</section>
			<section className="section-container">
				<About {...props} />
			</section>
		</Fragment>
	);
};

export default AboutContainer;
