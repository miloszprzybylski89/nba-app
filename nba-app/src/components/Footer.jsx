import React, { Component } from 'react';
import Logo from './Logo';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='footer'>
                <Logo />
                <span className='copyright'>Copyright Miłosz Przybylski</span>
            </div>
        );
    }
}

export default Footer;