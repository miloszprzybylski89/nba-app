import React, { Component } from 'react';
import Header from '../components/Header';

class GameStats extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Header />
                <h1>Game Stats Page</h1>
            </>
        );
    }
}

export default GameStats;