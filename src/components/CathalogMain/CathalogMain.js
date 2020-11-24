import React from 'react';
import Container from '@material-ui/core/Container';
import GridCathalog from './GridCathalog';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const CathalogMain = ({ containers }) => {
	return (
		<section className="sectionCathalog">
			<Box marginBottom="40px">
				<Container>
					<div className="heading-primary">
						<Typography variant="h2">Каталог продукции</Typography>
					</div>
					<GridCathalog containers={containers} />
				</Container>
			</Box>
		</section>
	);
};

export default CathalogMain;
