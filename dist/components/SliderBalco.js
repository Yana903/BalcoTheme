import React from 'react';
import { Link } from "react-router-dom";
import CategoriesGallery from './categoriesGallery/index';

const Hero = () => {
    return React.createElement(
        'div',
        { className: 'section section_slider' },
        React.createElement(
            'div',
            { className: 'container-balco' },
            React.createElement(CategoriesGallery, null)
        )
    );
};

export default Hero;