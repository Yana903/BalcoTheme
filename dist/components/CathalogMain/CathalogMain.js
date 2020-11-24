import React from 'react';
import Container from '@material-ui/core/Container';
import GridCathalog from './GridCathalog';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const CathalogMain = ({ containers }) => {
	return React.createElement(
		'section',
		{ className: 'sectionCathalog' },
		React.createElement(
			Box,
			{ marginBottom: '40px' },
			React.createElement(
				Container,
				null,
				React.createElement(
					'div',
					{ className: 'heading-primary' },
					React.createElement(
						Typography,
						{ variant: 'h2' },
						'\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438'
					)
				),
				React.createElement(GridCathalog, { containers: containers })
			)
		)
	);
};

export default CathalogMain;