import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Hero = () => {
    return (
        <div className='section section_hero'>
            <div className='container-balco'>
                <div className='layout layout_hero'>
                    <div className='layout-item'>
                        <div className='heading-primary'>
                            <h1>Пластиковая тара с доставкой по Украине</h1>
                        </div>
                        <div className='description'>
                            <p>Только качественные товары за</p>
                            <p>которыми мы всегда следим</p>
                        </div>

                        <button
								type="button" style={{fontSize: '20px'}}
								// onClick={this.catalogToggle}
								className="navigation__catalog-button button button_catalog"
							>
								{/* <BurgerButton className="navbar-burger navbar-burger_catalog is-hidden-mobile" />
								<img
									src="/assets/images/icons/icon_catalog.svg"
									className="catalog__icon is-hidden-tablet"
									alt=""
									title=""
								/>
								Catalog */}
                                В каталог
						</button>

                    </div>
                    <div className='layout-item'>
                        <div className='hero-image'>
                        <img src="/assets/images/imgHero.png" alt="imgHero" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;