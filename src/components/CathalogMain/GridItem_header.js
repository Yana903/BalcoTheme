import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const GridItem_header = ({ category, id }) => {
	return (
		<div className="gridItem">
			<div className="cardCathalog">
				<div className="cardImage">
					{<img alt="image1" src={category.image} />}
				</div>
				<div className="cardDescription">
					<p>
						{category.name}
						{/* {name} ({number}) */}
					</p>
				</div>
				<div className="buttonGroup">
					<Button
						variant="outlined"
						color="primary"
						fullWidth="true"
						component={Link}
						to={`/categories/${id}`}
					>
						Перейти
					</Button>
				</div>
			</div>
		</div>
	);
};

export default GridItem_header;
