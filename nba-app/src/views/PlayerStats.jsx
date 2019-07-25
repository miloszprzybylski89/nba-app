import React, { Component } from 'react';
import Header from '../components/Header';

class PlayerStats extends Component {
    render() {
        console.log(this.props.location.state.searchQuery);

        return (
            <>
                <Header />

                <h1>Player stats page</h1>
            </>
        );
    }
}

export default PlayerStats;