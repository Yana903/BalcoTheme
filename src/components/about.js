import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
// import SidebarMenu from "./SidebarMenu";
// import Consulting from "../Consulting/Consulting";
import Typography from '@material-ui/core/Typography';

const AboutPage = () => {
	return (
		<Fragment>
			<section className="section-about">
				<Container>
					<div className="layout-about">
						{/* <div className="layout-item">
              <div className={classesAbout.sidebar}>
                <SidebarMenu />
              </div>
            </div> */}
						<div className="layout-item">
							<div className="heading-secondary">
								<Typography variant="h2">О нас</Typography>
								<p>
									Фирма BALCo является производителем пластиковой тары пищевого
									и не пищевого назначения.
								</p>
							</div>
							<p className="description">
								В сфере промышленной упаковки мы работаем уже 10 лет и имеем
								богатый опыт, который позволяет нам качественно консультировать
								наших клиентов и подбирать им наилучший вариант упаковки.
							</p>
							<p className="description">
								Мы активно сотрудничаем с производителями как пищевой продукции
								(мёд, халва, майонез, салаты, мороженное, молоко, сметана,
								творог, спортивное питание, таблетки, витамины, капсулы и
								порошки), так и не пищевой продукции (краски, лаки, клея,
								технические жидкости и масла, шпатлёвки, тубы для герметиков,
								косметика, крема и мази, косметические жидкости, косметические
								пасты).
							</p>
							<div className="headingSecondary">
								<p>Принципы нашей работы:</p>
							</div>
							<ul>
								<li>баланс цены и качества предлагаемой тары и упаковки,</li>
								<li>своевременность поставок,</li>
								<li>
									качественные консультации для правильного выбора тары и
									упаковки.
								</li>
							</ul>
							<div className="headingSecondary">
								<p>Характеристики продукции:</p>
							</div>
							<ul>
								<li>
									высокое качество товара и наличие санитарных документов,
								</li>
								<li>функциональный и привлекательный дизайн тары,</li>
								<li>системы контроля вскрытия упаковки,</li>
								<li>возможность индивидуальной колеровки тары под заказ,</li>
								<li>прочность предлагаемой тары.,</li>
							</ul>
							<p className="description">
								Приглашаем всех производителей к совместному процветанию.
							</p>
						</div>
					</div>
				</Container>
			</section>
			{/* <Consulting /> */}
		</Fragment>
	);
};

export default AboutPage;
