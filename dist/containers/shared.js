import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { themeSettings } from '../lib/settings';
import Header from '../components/header/header';
import Footer from '../components/footer';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#5F9F0D'
		},
		secondary: {
			main: '#689f38'
		}
	},
	overrides: {
		MuiContainer: {
			maxWidthLg: {
				['@media (min-width: 600px)']: {
					maxWidth: '500px'
				},
				['@media (min-width: 960px)']: {
					maxWidth: '860px'
				},
				['@media (min-width: 1280px)']: {
					maxWidth: '1180px'
				}
			}
		},
		MuiButton: {
			root: {
				fontSize: '12px'
			}
		},
		MuiInput: {
			root: {
				height: '15px'
			}
		},
		MuiSelect: {
			root: {
				fontSize: '14px'
			}
		},
		MuiMenuItem: {
			root: {
				fontSize: '14px'
			}
		}
	}
});

theme.typography.h2 = {
	fontFamily: 'Oswald',
	fontSize: '56px',
	fontWeight: '600',
	lineHeight: '67.2',
	marginTop: '0',
	marginBottom: '0'
};

theme.typography.h3 = {
	fontSize: '24px',
	fontWeight: '700',
	marginTop: '0',
	marginBottom: '0'
};

theme.typography.h4 = {
	fontSize: '20px',
	fontWeight: '700',
	marginTop: '0',
	marginBottom: '0'
};

const SharedContainer = props => {
	const {
		children,
		state: { currentPage, settings }
	} = props;
	const hideFooter = (currentPage.path === '/checkout-success' || currentPage.path === '/checkout') && themeSettings.hide_footer_on_checkout === true;

	return React.createElement(
		ThemeProvider,
		{ theme: theme },
		React.createElement(
			'div',
			{ className: 'my-wrapper' },
			React.createElement(Header, props),
			children,
			!hideFooter && React.createElement(Footer, { settings: settings })
		)
	);
};

SharedContainer.propTypes = {
	children: PropTypes.element.isRequired,
	state: PropTypes.shape({
		currentPage: PropTypes.shape({}),
		settings: PropTypes.shape({})
	}).isRequired
};

export default SharedContainer;