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
                    ),
                    React.createElement(
                        'div',
                        { className: 'description' },
                        React.createElement(
                            'p',
                            null,
                            '\u0422\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0437\u0430'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u043C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043B\u0435\u0434\u0438\u043C'
                        )
                    ),
                    React.createElement(
                        'button',
                        {
                            type: 'button'
                            // onClick={this.catalogToggle}
                            , className: 'navigation__catalog-button button button_catalog'
                        },
                        '\u0412 \u043A\u0430\u0442\u0430\u043B\u043E\u0433'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'layout-item' },
                    React.createElement(
                        'div',
                        { className: 'hero-image' },
                        React.createElement('img', { src: '/assets/images/imgHero.png', alt: 'imgHero' })
                    )
                )
            )
        )
    );
};

export default Hero;