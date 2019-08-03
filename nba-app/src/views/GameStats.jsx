import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class GameStats extends Component {


    render() {
        return (
            <div className='playerSelect'>
                <Header />
                <span className='error'>Game Stats Page</span>
                <span className='error'>In progress</span>
                <Footer />
            </div>
        );
    }
}

export default GameStats;