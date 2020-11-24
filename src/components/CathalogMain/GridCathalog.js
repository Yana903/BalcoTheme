import React from 'react';
import GridItem from './GridItem';

const GridCathalog = ({ containers }) => {
	const { categories } = containers;
	return (
		<div className="container">
			<div className="gridCathalog">
				{categories.map(category => {
					return (
						<GridItem
							categories={categories}
							// id={category.id}
							key={category.id}
							name={category.name}
							image={category.image}
							number={category.number}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default GridCathalog;
