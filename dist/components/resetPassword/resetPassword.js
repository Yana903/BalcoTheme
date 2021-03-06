var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { themeSettings, text } from '../../lib/settings';
import { Link, Redirect, NavLink } from 'react-router-dom';
import Lscache from 'lscache';

const validateRequired = value => value && value.length > 0 ? undefined : text.required;

const validateEmail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? text.emailInvalid : undefined;

const InputField = field => React.createElement(
	'div',
	{ className: field.className },
	React.createElement('input', _extends({}, field.input, {
		placeholder: field.label,
		type: field.type,
		id: field.id,
		className: field.meta.touched && field.meta.error ? 'invalid' : ''
	})),
	React.createElement(
		'label',
		{ htmlFor: field.id },
		field.meta.touched && field.meta.error && React.createElement(
			'span',
			{ className: 'error' },
			field.meta.error
		),
		React.createElement(
			'span',
			{ className: 'login__label' },
			field.label
		)
	)
);

class ResetPassword extends React.Component {
	constructor(props) {
		super(props);

		this.passwordTemp = value => {
			this.setState({ comparePassword: value.currentTarget.defaultValue });
		};

		this.getField = fieldName => {
			const fields = this.props.checkoutFields || [];
			const field = fields.find(item => item.name === fieldName);
			return field;
		};

		this.getFieldStatus = fieldName => {
			const field = this.getField(fieldName);
			return field && field.status ? field.status : 'required';
		};

		this.isFieldOptional = fieldName => {
			return this.getFieldStatus(fieldName) === 'optional';
		};

		this.isFieldHidden = fieldName => {
			return this.getFieldStatus(fieldName) === 'hidden';
		};

		this.getFieldValidators = fieldName => {
			const isOptional = this.isFieldOptional(fieldName);
			let validatorsArray = [];
			if (!isOptional) {
				validatorsArray.push(validateRequired);
			}
			if (fieldName === 'email') {
				validatorsArray.push(validateEmail);
			}
			if (fieldName === 'password_verify') {
				validatorsArray.push(this.confirmPassword);
			}

			return validatorsArray;
		};

		this.confirmPassword = value => {
			if (value !== this.state.comparePassword) {
				return text.password_verify_failed;
			}
			return undefined;
		};

		this.getFieldPlaceholder = fieldName => {
			const field = this.getField(fieldName);
			return field && field.placeholder && field.placeholder.length > 0 ? field.placeholder : '';
		};

		this.getFieldLabelText = fieldName => {
			const field = this.getField(fieldName);
			if (field && field.label && field.label.length > 0) {
				return field.label;
			}
			switch (fieldName) {
				case 'password':
					return text.password;
					break;
				case 'password_verify':
					return text.password_verify;
					break;
				default:
					return 'Unnamed field';
			}
		};

		this.getFieldLabel = fieldName => {
			const labelText = this.getFieldLabelText(fieldName);
			return this.isFieldOptional(fieldName) ? `${labelText} (${text.optional})` : labelText;
		};

		this.state = {
			comparePassword: ''
		};
	}

	render() {
		const {
			handleSubmit,
			forgotPasswordProperties,
			resetPasswordProperties
		} = this.props;

		const inputClassName = 'login-input-field input__text-field';
		const loginTitleClassName = 'login__title';
		const loginSuccessTitleClassName = 'login__title login__title_success';
		const loginButtonClass = 'login__button button button_login';
		return React.createElement(
			'section',
			{ className: 'login-container section-container' },
			React.createElement(
				'div',
				{ className: 'login__section' },
				React.createElement(
					'form',
					{ onSubmit: handleSubmit, className: 'login__form' },
					React.createElement(
						'h1',
						{ className: loginTitleClassName },
						text.reset_password
					),
					React.createElement(
						'p',
						{
							className: !resetPasswordProperties.verified ? loginTitleClassName : loginSuccessTitleClassName
						},
						!resetPasswordProperties.verified ? text.reset_password_subtitle : text.reset_password_subtitle_success
					),
					!resetPasswordProperties.verified && React.createElement(Field, {
						className: inputClassName,
						name: 'password',
						id: 'customer.password',
						component: InputField,
						type: 'password',
						autoComplete: 'new-password',
						onBlur: this.passwordTemp,
						label: this.getFieldLabel('password'),
						validate: this.getFieldValidators('password'),
						placeholder: this.getFieldPlaceholder('password')
					}),
					!resetPasswordProperties.verified && React.createElement(Field, {
						className: inputClassName,
						name: 'password_verify',
						id: 'customer.password_verify',
						component: InputField,
						type: 'password',
						autoComplete: 'new-password',
						onBlur: this.passwordTemp,
						label: this.getFieldLabel('password_verify'),
						validate: this.getFieldValidators('password_verify'),
						placeholder: this.getFieldPlaceholder('password_verify')
					}),
					!resetPasswordProperties.verified && React.createElement(
						'button',
						{ type: 'submit', className: loginButtonClass },
						text.forgot_password_submit
					),
					resetPasswordProperties.verified && React.createElement(
						Link,
						{
							to: '/login',
							style: { textDecoration: 'none' },
							key: 'back-to-login',
							className: loginButtonClass
						},
						text.back_to_login
					)
				)
			)
		);
	}
}
export default reduxForm({
	form: 'ResetPassword'
})(ResetPassword);