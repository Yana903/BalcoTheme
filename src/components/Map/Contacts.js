import React from 'react';
import Button from '@material-ui/core/Button';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Room from '@material-ui/icons/Room';

const Contacts = () => {
	return (
		<div className="contact-block">
			<div className="contact-block__address">
				<div className="heading-map">
					<p>Адрес:</p>
				</div>
				<p>Харьков</p>
				<p>пр. Московский, 257-Б</p>
			</div>
			<div className="contact-block__phones">
				<div className="heading-map">
					<p>Телефоны:</p>
				</div>
				<p>+380(50)302-55-22</p>
				<p>+380(57)717-61-17</p>
				<p>+380(57)717-50-27</p>
			</div>
			{/* <Button variant="contained" color="primary">
				Нужна консультация
			</Button> */}
		</div>
	);
};

export default Contacts;
