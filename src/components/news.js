import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
// import SidebarMenu from "../AboutPage/SidebarMenu";
// import Consulting from "../Consulting/Consulting";
import Typography from '@material-ui/core/Typography';

const NewsPage = () => {
	return (
		<Fragment>
			<section className="section-about">
				<Container>
					<div className="layout-about">
						{/* <div className={classesAbout.layoutItem}>
              <div className={classesAbout.sidebar}>
                <SidebarMenu />
              </div>
            </div> */}
						<div className="layout-item">
							<div className="headingSecondary">
								<Typography variant="h2">
									Добро пожаловать на новый сайт!
								</Typography>
							</div>
							<p className="date">28.05.2020</p>
							<p className="description">
								Дорогие друзья и наши постоянные покупатели!
							</p>
							<p className="description">
								Мы изменили полностью внешний вид сайта и рады приветствовать
								Вас здесь.
							</p>
							<p className="description">
								В течении месяца мы будем проводить работы по наполнению новым
								фирменным контентом, поэтому не обращайте внимания на временные
								разнообразные по стилю картинки.
							</p>
							<p className="description">
								По любым вопросам обращайтесь по телефонам, указанным в
								«Контактах».
							</p>
							<p className="description">
								Если у Вас есть пожелания, предложения или замечания по сайту,
								присылайте их на электронный адрес. Мы будем Вам благодарны за
								это.
							</p>
							<p className="description">С уважением, команда «BALCo».</p>
						</div>
					</div>
				</Container>
			</section>
			{/* <Consulting />
      <Footer /> */}
		</Fragment>
	);
};

export default NewsPage;
