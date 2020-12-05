import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Hero = () => {
    return React.createElement(
        'div',
        { className: 'section section_hero' },
        React.createElement(
            'div',
            { className: 'container-balco' },
            React.createElement(
                'div',
                { className: 'layout layout_hero' },
                React.createElement(
                    'div',
                    { className: 'layout-item' },
                    React.createElement(
                        'div',
                        { className: 'heading-primary' },
                        React.createElement(
                            'h1',
                            null,
                            '\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u0430\u044F \u0442\u0430\u0440\u0430 \u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u0439 \u043F\u043E \u0423\u043A\u0440\u0430\u0438\u043D\u0435'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'layout-item' },
                    'maks'
                )
            )
        )
    );
};

export default Hero;