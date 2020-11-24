import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const GridItem = ({ id, name, image, number }) => {
	return (
		<div className="gridItem">
			<div className="cardCathalog">
				<div className="cardImage">
					<img src={image} alt="image1" />
				</div>
				<div className="cardDescription">
					<p>
						{name} ({number})
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

export default GridItem;
