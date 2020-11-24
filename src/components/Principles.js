import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Principles = () => {
	return (
		<section className="sectionPrinciples">
			<Container>
				<div className="heading-primary">
					<Typography variant="h2">Наши принципы</Typography>
				</div>
				<div className="gridPrinc">
					<div className="gridItem">
						<div className="cardPrinc">
							<div className="cardImage">
								<img src="/assets/images/princ1.png" alt="image1" />
							</div>
							<div className="cardDescription">
								<p>Баланс цены и качества предлагаемой тары и упаковки</p>
							</div>
						</div>
					</div>
					<div className="gridItem">
						<div className="cardPrinc">
							<div className="cardImage">
								<img src="/assets/images/princ2.png" alt="image1" />
							</div>
							<div className="cardDescription">
								<p>Оперативность поставок</p>
							</div>
						</div>
					</div>
					<div className="gridItem">
						<div className="cardPrinc">
							<div className="cardImage">
								<img src="/assets/images/princ3.png" alt="image1" />
							</div>
							<div className="cardDescription">
								<p>
									Качественные консультации для правильного выбора тары и
									упаковки
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Principles;
