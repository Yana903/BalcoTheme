import React from 'react';
import { NavLink } from 'react-router-dom';
import Lscache from 'lscache';
import { themeSettings, text } from '../../lib/settings';
import * as helper from '../../lib/helper';
import LocalMall from '@material-ui/icons/LocalMall';

const CartCount = ({ cart }) => {
	if (cart && cart.items && cart.items.length > 0) {
		const itemsCount = cart.items.reduce((a, b) => a + b.quantity, 0);
		return React.createElement(
			'span',
			{ className: 'cart-count' },
			itemsCount
		);
	}
	return null;
};

const CartIcon = ({ cartIsActive }) =>
// <img
// 	src="/assets/images/shopping-bag.svg"
// 	className="icon"
// 	alt={text.cart}
// 	title={text.cart}
// />
React.createElement(LocalMall, { style: { color: '#f7a709', fontSize: 40, marginLeft: '-5px' } });

export default class CartIndicator extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			subtotal: 0
		};
	}

	render() {
		const { cart, onClick, cartIsActive, settings } = this.props;

		if (cart) {
			this.setState({ subtotal: cart.subtotal });
			if (Lscache.get('auth_data')) {
				this.setState({ subtotal: Math.ceil(cart.subtotal * 0.7) });
			}
		}

		return React.createElement(
			'div',
			{ className: 'header__cart' },
			React.createElement(
				'span',
				{ className: 'cart-button ', onClick: onClick },
				React.createElement(CartIcon, { cartIsActive: cartIsActive }),
				React.createElement(CartCount, { cart: cart })
			),
			React.createElement(
				'div',
				{ className: 'cart__info', onClick: onClick },
				React.createElement(
					'p',
					{ className: 'card__info_title' },
					'\u041A\u043E\u0440\u0437\u0438\u043D\u0430'
				),
				' ',
				React.createElement(
					'b',
					{ className: 'cart__info_total' },
					this.state.subtotal,
					' ',
					settings.currency_symbol
				)
			)
		);
	}
}