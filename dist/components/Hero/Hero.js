import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
// import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Hero = () => {
    return React.createElement(
        'div',
        { className: 'section section__hero' },
        React.createElement(
            'div',
            { className: 'layout layout__hero' },
            React.createElement(
                'div',
                { className: 'layout_item' },
                'yana'
            ),
            React.createElement(
                'div',
                { className: 'layout_item' },
                'maks'
            )
        )
    );
};

export default Hero;