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
            <nav className='navigation'>
                <ul className='navigation__list'>
                    <li className='navigation__list-element'><NavLink className='anchor' exact to='./randomPlayers'>Player</NavLink></li>
                    <li className='navigation__list-element'><NavLink className='anchor' exact to='./teams'>Team</NavLink></li>
                    <li className='navigation__list-element'><NavLink className='anchor' exact to='./gameStats'>Game</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;