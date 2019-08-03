// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactLoading from "react-loading";


const playerUrl = 'https://nba-players.herokuapp.com/players-stats/'

class RandomPlayers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            randomPlayerNumbers: [],
        }
    }

    handleChosenPlayer = (player) => {
        let firstName = player.name.split(' ').slice(0, -1).join(' ').toLowerCase();
        let lastName = player.name.split(' ').slice(-1).join(' ').toLowerCase();

        this.props.history.push({
            pathname: '/playerSelect',
            state: {
                foundPlayer: player,
                headshot: `https://nba-players.herokuapp.com/players/${lastName}/${firstName}`
            }
        })
    }

    componentDidMount() {
        Axios.get(playerUrl)
            .then(response => response.data)
            .then(data => this.setState({ data: data }));

        let randomPlayerNumbers = [];
        for (let i = 0; randomPlayerNumbers.length < 12; i++) {
            let e = Math.floor(Math.random() * 491)
            if (!randomPlayerNumbers.includes(e)) {
                randomPlayerNumbers.push(e)
            }
            this.setState({ randomPlayerNumbers: randomPlayerNumbers })
        }
    }

    render() {
        if (this.state.data.length === 0) {
            return (
                <div className='playerStats'>
                    <Header />
                    <ReactLoading type='spinningBubbles' />
                    <Footer />
                </div>
            )
        }

        return (
            <div className='playerStats'>
                <div className='playerSelect'>
                    <Header />
                    <span className='error'>Pick up a player</span>
                    <ul className='playerSelect__list'>
                        {this.state.randomPlayerNumbers.map(number => {
                            console.log(this.state.data[number])
                            return (
                                <li
                                    key={number}
                                    className='playerSelect__element'
                                    onClick={() => this.handleChosenPlayer(this.state.data[number])}>{this.state.data[number].name}
                                </li>
                            )
                        })}
                    </ul>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default RandomPlayers;