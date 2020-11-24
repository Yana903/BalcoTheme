import React from 'react';
import Button from '@material-ui/core/Button';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Room from '@material-ui/icons/Room';
import Typography from '@material-ui/core/Typography';

const Contacts = () => {
	return (
		<div className="contactBlock">
			<div className="heading-secondary">
				<Typography variant="h2">Контакты</Typography>
			</div>
			<div className="phonesBlock">
				<div className="blockTitle">
					<PhoneIphone />
					<Typography variant="h3">Телефоны</Typography>
				</div>
				<p>+380(50)302-55-22</p>
				<p>+380(57)717-61-17</p>
				<p>+380(57)717-50-27</p>
			</div>
			<div className="addressBlock">
				<div className="blockTitle">
					<Room />
					<Typography variant="h3">Адрес предприятия</Typography>
				</div>
				<p>Харьков, проспект Московский, д. 257Б</p>
				<p>Пн. – Пт. с 9:00 до 17:00</p>
				<a href="yyy">sales@tara.kh.ua</a>
			</div>
			<Button variant="contained" color="primary">
				Нужна консультация
			</Button>
		</div>
	);
};

export default Contacts;
