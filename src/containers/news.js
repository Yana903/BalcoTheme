import React, { Fragment } from 'react';
import { themeSettings, text } from '../lib/settings';
import MetaTags from '../components/metaTags';
import News from '../components/news';
import PageBreadcrumbs from '../components/breadcrumbs';

const NewsContainer = props => {
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
				<h1 className="main__title">Новости</h1>
				{/* <NavLink to="/">{text.text404}</NavLink> */}
			</section>
			<section className="section-container">
				<News {...props} />
			</section>
		</Fragment>
	);
};

export default NewsContainer;
