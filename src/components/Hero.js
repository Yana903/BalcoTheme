import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
// import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Hero = () => {
	return (
		<section className="sectionHero">
			<div className="heroBackground"></div>
			<div className="heroForeground">
				{/* <Container style={{fontSize: '40px', marginTop: '0'}}> */}
				<div className="container">
					<div className="heroInform">
						<Typography
							variant="h1"
							style={{ fontSize: '40px', marginTop: '0' }}
						>
							Надёжный производтель пластиковой тары и упаковки
						</Typography>
						<p>
							В сфере промышленной упаковки мы работаем уже 10 лет и имеем
							богатый опыт, который позволяет нам качественно консультировать
							наших клиентов и подбирать им наилучший вариант упаковки.
						</p>
						<Button
							variant="contained"
							component={Link}
							to="/goods"
							color="primary"
						>
							Перейти в каталог
						</Button>
					</div>
				</div>
				<div className="heroImg">
					<img src="/assets/images/img-tara.png" alt="imgHero" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
