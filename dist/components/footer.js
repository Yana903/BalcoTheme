import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { themeSettings, text } from '../lib/settings';

import storeSettings from '../../../config/store';
import { FaFacebook } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

class FooterMenu extends React.Component {
	constructor(props) {
		super(props);

		this.isActiveToggle = () => {
			this.setState({
				isActive: !this.state.isActive
			});
		};

		this.state = {
			isActive: false
		};
	}

	render() {
		const { title, items } = this.props;
		let ulItems = null;

		if (items && items.length > 0) {
			ulItems = items.map((item, index) => React.createElement(
				'li',
				{ className: 'footer-menu__link', key: index },
				React.createElement(
					NavLink,
					{ to: item.url || '' },
					item.text
				)
			));
		}

		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: `footer__title` },
				title
			),
			React.createElement(
				'ul',
				{ className: 'footer-menu' },
				ulItems
			)
		);
	}
}

class HeaderBottomMenu extends React.Component {
	constructor(props) {
		super(props);

		this.isActiveToggle = () => {
			this.setState({
				isActive: !this.state.isActive
			});
		};

		this.state = {
			isActive: false
		};
	}

	render() {
		const { title, items } = this.props;
		let ulItems = null;

		if (items && items.length > 0) {
			ulItems = items.map((item, index) => React.createElement(
				'li',
				{ className: 'footer-menu__link', key: index },
				React.createElement(
					NavLink,
					{ to: item.url || '' },
					item.text
				)
			));
		}

		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: `footer__title` },
				title
			),
			React.createElement(
				'ul',
				{ className: 'footer-menu' },
				ulItems
			)
		);
	}
}

const SocialIcons = ({ icons }) => {
	if (icons && icons.length > 0) {
		const items = icons.map((icon, index) => React.createElement('a', {
			key: index,
			href: icon.url || '',
			target: '_blank',
			rel: 'noopener',
			title: icon.type,
			className: icon.type
		}));
		return React.createElement(
			'div',
			{ className: 'social-icons' },
			items
		);
	}
	return null;
};

const Contacts = ({ contacts }) => {
	if (contacts && contacts.length > 0) {
		const items = contacts.map((item, index) => {
			const contact = item ? item.text : null;
			if (contact && contact.indexOf('@') > 0) {
				return React.createElement(
					'li',
					{ key: index },
					React.createElement(
						'a',
						{ href: `mailto:${contact}` },
						contact
					)
				);
			}
			if (contact && (contact.indexOf('+1') == 0 || contact.indexOf('1') == 0)) {
				let contactTel = contact;
				let re1 = new RegExp(/[-()\s/\\]/g);
				contactTel = contactTel.replace(re1, '');
				return React.createElement(
					'li',
					{ key: index },
					React.createElement(
						'a',
						{ className: 'footer-contacts__phone', href: `tel:${contactTel}` },
						contact
					)
				);
			}
			return React.createElement(
				'li',
				{ key: index },
				contact
			);
		});
		return React.createElement(
			'ul',
			{ className: 'footer-contacts' },
			items
		);
	}
	return null;
};

export default class Footer extends React.PureComponent {

	render() {
		const { settings } = this.props;
		const footerLogoUrl = settings.logo && settings.logo.length > 0 ? settings.logo : null;

		return React.createElement(
			'footer',
			{ className: 'footer' },
			React.createElement(
				'div',
				{ className: 'layout layout_footer' },
				React.createElement(
					'div',
					{ className: 'layout-item layout-item_footer' },
					React.createElement(
						'div',
						{ className: 'footer__info' },
						React.createElement(
							'div',
							{ className: 'footer__logo' },
							React.createElement('img', { src: '/assets/images/BALco-white-logo.png', alt: 'imgLogo' })
						),
						React.createElement(
							'div',
							{ className: 'footer__description' },
							React.createElement(
								'p',
								null,
								'\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B,'
							),
							React.createElement(
								'p',
								null,
								'\u0437\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u043C\u044B '
							),
							React.createElement(
								'p',
								null,
								'\u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043B\u0435\u0434\u0438\u043C'
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'footer__phones' },
						React.createElement(
							'div',
							{ className: 'heading-footer' },
							React.createElement(
								'p',
								null,
								'\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B:'
							)
						),
						React.createElement(
							'p',
							null,
							'+380(50)302-55-22'
						),
						React.createElement(
							'p',
							null,
							'+380(57)717-61-17'
						),
						React.createElement(
							'p',
							null,
							'+380(57)717-50-27'
						)
					),
					React.createElement(
						'div',
						{ className: 'footer__address' },
						React.createElement(
							'div',
							{ className: 'heading-footer' },
							React.createElement(
								'p',
								null,
								'\u0410\u0434\u0440\u0435\u0441:'
							)
						),
						React.createElement(
							'p',
							null,
							'\u0425\u0430\u0440\u044C\u043A\u043E\u0432,'
						),
						React.createElement(
							'p',
							null,
							'\u043F\u0440. \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0438\u0439, \u0434. 257-\u0411'
						)
					),
					React.createElement(
						'div',
						{ className: 'footer__socials' },
						React.createElement(
							'div',
							{ className: 'heading-footer' },
							React.createElement(
								'p',
								null,
								'\u041C\u044B \u0432 \u0441\u043E\u0446. \u0441\u0435\u0442\u044F\u0445:'
							)
						),
						React.createElement(
							'div',
							{ className: 'socials' },
							React.createElement(
								'a',
								null,
								React.createElement(FaFacebook, { style: { color: "#fff" } })
							),
							React.createElement(
								'a',
								null,
								React.createElement(FaViber, { style: { color: "#fff" } })
							),
							React.createElement(
								'a',
								null,
								React.createElement(FaInstagram, { style: { color: "#fff" } })
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'layout-item layout-item_footer' },
					React.createElement(
						'div',
						{ className: 'footer-menu' },
						React.createElement(
							'nav',
							{ className: 'navigation__menu' },
							React.createElement(FooterMenu, {
								items: themeSettings.footer_menu_1_items
							})
						)
					)
				)
			)
		);
	}
}
Footer.propTypes = {
	settings: PropTypes.shape({}).isRequired
};