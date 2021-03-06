import React from 'react';
import * as helper from '../../lib/helper';
import { themeSettings, text } from '../../lib/settings';

const AddToCartButton = ({
	product,
	variant,
	addCartItem,
	isAllOptionsSelected
}) => {
	let buttonStyle = {};
	if (themeSettings.button_addtocart_bg && themeSettings.button_addtocart_bg.length > 0) {
		buttonStyle.backgroundColor = themeSettings.button_addtocart_bg;
	}
	if (themeSettings.button_addtocart_color && themeSettings.button_addtocart_color.length > 0) {
		buttonStyle.color = themeSettings.button_addtocart_color;
	}

	let addToCartText = 'Add To Cart';

	if (product.stock_status === 'discontinued') {
		return React.createElement(
			'button',
			{
				type: 'button',
				className: 'button is-dark',
				style: buttonStyle,
				disabled: true
			},
			text.discontinued
		);
	}
	if (product.variable && variant && variant.stock_quantity > 0) {
		return React.createElement(
			'button',
			{
				type: 'button',
				className: 'button',
				style: buttonStyle,
				onClick: addCartItem
			},
			addToCartText
		);
	}
	if (product.variable && !isAllOptionsSelected) {
		return React.createElement(
			'button',
			{ type: 'button', className: 'button', style: buttonStyle, disabled: true },
			text.optionsRequired
		);
	}
	if (product.variable && !product.stock_backorder) {
		return React.createElement(
			'button',
			{ type: 'button', className: 'button', style: buttonStyle, disabled: true },
			text.outOfStock
		);
	}
	if (product.stock_status === 'available') {
		return React.createElement(
			'button',
			{
				type: 'button',
				className: 'button',
				style: buttonStyle,
				onClick: addCartItem
			},
			addToCartText
		);
	}
	if (product.stock_status === 'out_of_stock') {
		return React.createElement(
			'button',
			{ type: 'button', className: 'button', style: buttonStyle, disabled: true },
			text.outOfStock
		);
	}
	return null;
};

export default AddToCartButton;