import React from 'react';
import GridItem from './GridItem';

const GridCathalog = ({ containers }) => {
	const { categories } = containers;
	return React.createElement(
		'div',
		{ className: 'container' },
		React.createElement(
			'div',
			{ className: 'gridCathalog' },
			categories.map(category => {
				return React.createElement(GridItem, {
					categories: categories
					// id={category.id}
					, key: category.id,
					name: category.name,
					image: category.image,
					number: category.number
				});
			})
		)
	);
};

export default GridCathalog;