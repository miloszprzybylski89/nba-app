import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink exact to='./main'>Main</NavLink></li>
                    <li><NavLink exact to='./player'>Player</NavLink></li>
                    <li><NavLink exact to='./team'>Team</NavLink></li>
                    <li><NavLink exact to='./game'>Game</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;