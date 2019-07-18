import React, { Component } from 'react';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <span className='logo'><strong>NBA</strong> stats app</span>
        );
    }
}

export default Logo;