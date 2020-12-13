import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { themeSettings, text } from '../lib/settings';

import storeSettings from '../../../config/store';
import { FaFacebook } from "react-icons/fa";
import { FaViber } from  "react-icons/fa";
import { FaInstagram } from  "react-icons/fa";

class FooterMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
	}

	isActiveToggle = () => {
		this.setState({
			isActive: !this.state.isActive
		});
	};

	render() {
		const { title, items } = this.props;
		let ulItems = null;

		if (items && items.length > 0) {
			ulItems = items.map((item, index) => (
				<li className="footer-menu__link" key={index}>
					<NavLink to={item.url || ''}>{item.text}</NavLink>
				</li>
			));
		}

		return (
			<div>
				<div className={`footer__title`}>{title}</div>
				<ul className="footer-menu">{ulItems}</ul>
			</div>
		);
	}
}

class HeaderBottomMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
	}

	isActiveToggle = () => {
		this.setState({
			isActive: !this.state.isActive
		});
	};

	render() {
		const { title, items } = this.props;
		let ulItems = null;

		if (items && items.length > 0) {
			ulItems = items.map((item, index) => (
				<li className="footer-menu__link" key={index}>
					<NavLink to={item.url || ''}>{item.text}</NavLink>
				</li>
			));
		}

		return (
			<div>
				<div className={`footer__title`}>{title}</div>
				<ul className="footer-menu">{ulItems}</ul>
			</div>
		);
	}
}

const SocialIcons = ({ icons }) => {
	if (icons && icons.length > 0) {
		const items = icons.map((icon, index) => (
			<a
				key={index}
				href={icon.url || ''}
				target="_blank"
				rel="noopener"
				title={icon.type}
				className={icon.type}
			/>
		));
		return <div className="social-icons">{items}</div>;
	}
	return null;
};

const Contacts = ({ contacts }) => {
	if (contacts && contacts.length > 0) {
		const items = contacts.map((item, index) => {
			const contact = item ? item.text : null;
			if (contact && contact.indexOf('@') > 0) {
				return (
					<li key={index}>
						<a href={`mailto:${contact}`}>{contact}</a>
					</li>
				);
			}
			if (
				contact &&
				(contact.indexOf('+1') == 0 || contact.indexOf('1') == 0)
			) {
				let contactTel = contact;
				let re1 = new RegExp(/[-()\s/\\]/g);
				contactTel = contactTel.replace(re1, '');
				return (
					<li key={index}>
						<a className="footer-contacts__phone" href={`tel:${contactTel}`}>
							{contact}
						</a>
					</li>
				);
			}
			return <li key={index}>{contact}</li>;
		});
		return <ul className="footer-contacts">{items}</ul>;
	}
	return null;
};

export default class Footer extends React.PureComponent {
	static propTypes = {
		settings: PropTypes.shape({}).isRequired
	};

	render() {
		const { settings } = this.props;
		const footerLogoUrl =
			settings.logo && settings.logo.length > 0 ? settings.logo : null;

		return (
			<footer className="footer">
				<div className="layout layout_footer">
					<div className="layout-item layout-item_footer">
						<div className="footer__info">
							<div className="footer__logo">
								<img src="/assets/images/BALco-white-logo.png" alt="imgLogo" />
							</div>
							<div className="footer__description">
								<p>Только качественные товары,</p>
								<p>за которыми мы </p>
								<p>всегда следим</p>
							</div>
						</div>
						<div className="footer__phones">
							<div className="heading-footer">
								<p>Телефоны:</p>
							</div>
							<p>+380(50)302-55-22</p>
							<p>+380(57)717-61-17</p>
							<p>+380(57)717-50-27</p>
						</div>
						<div className="footer__address">
							<div className="heading-footer">
								<p>Адрес:</p>
							</div>
							<p>Харьков,</p>
							<p>пр. Московский, д. 257-Б</p>
						</div>
						<div className="footer__socials">
							<div className="heading-footer">
								<p>Мы в соц. сетях:</p>
							</div>
							<div className="socials">
								<a>
									<FaFacebook style={{color: "#fff"}}/>
								</a>
								<a>
									<FaViber style={{color: "#fff"}}/>
								</a>
								<a>
									<FaInstagram style={{color: "#fff"}}/>
								</a>
							</div>
						</div>
					</div>
					<div className="layout-item layout-item_footer">
						{/* <div className="footer-menu">
							<nav className="navigation__menu">
								<HeaderBottomMenu items={themeSettings.footer_menu_2_items} />
							</nav>
						</div> */}

						<div className="footer-menu">
							<nav className="navigation__menu">
								<FooterMenu
									items={themeSettings.footer_menu_1_items}
								/>
							</nav>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
