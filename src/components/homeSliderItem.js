import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { themeSettings } from '../lib/settings';


const HomeSliderItem = ({item}) => (
				<div
					className="image-gallery__item"
					style={{
						color: themeSettings.home_slider_color || '#000',
						// backgroundImage: `url(${item.original})`
					}}
				>
					<div className="cart cart-gallery">
						<div className="cart-gallery__item">
							<div className="cart-gallery__image">
								<img src={item.original} alt='tara' />
							</div>
						</div>
						<div className="cart-gallery__item">
							<div className="image-gallery__title">{item.title1}</div>
							<div className="image-gallery__description">	
								{item.description}
								{item.description && item.description.length > 0 && (
									<NavLink to={item.path || ''}>
										<button
											type="button"
											to={item.path || ''}
											className="button image-gallery__button"
										>
											Перейти в каталог
										</button>
									</NavLink>
								)}
							</div>
						</div>
					</div>
				</div>
)
export default HomeSliderItem;
