import React from 'react';
import Contacts from './Contacts';

const Map = () => {
	return (
		<section className="sectionMap">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.0359782612354!2d36.42624011571278!3d49.93566617940772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270c1544ee7823%3A0xdf8e0cc0a742b458!2sMoskovs&#39;kyi%20Ave%2C%202576%2C%20Kharkiv%2C%20Kharkivs&#39;ka%20oblast%2C%2061000!5e0!3m2!1sen!2sua!4v1590509422462!5m2!1sen!2sua"
				title="MapPage"
				width="100%"
				height="100%"
				frameBorder="0"
				style={{ border: 0 }}
				allowFullScreen=""
				aria-hidden="false"
				tabIndex="0"
			></iframe>
			<Contacts />
		</section>
	);
};

export default Map;
