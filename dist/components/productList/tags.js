import React from 'react';
import * as helper from '../../lib/helper';
import { themeSettings, text } from '../../lib/settings';

const Tags = ({ tags }) => {
	if (tags && tags.length > 0) {
		return React.createElement(
			'div',
			{ className: 'products__tags tags' },
			tags.map((tag, index) => React.createElement(
				'span',
				{ key: index, className: 'tag' },
				tag
			))
		);
	}
	return null;
};

export default Tags;