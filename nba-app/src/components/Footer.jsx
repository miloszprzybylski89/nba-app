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
            </div>
        );
    }
}

export default Footer;