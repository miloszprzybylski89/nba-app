import React, { Component } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';

class Header extends Component {

    render() {
        return (
            <header>
                <Logo />
                <Navigation />
            </header>
        );
    }
}

export default Header;