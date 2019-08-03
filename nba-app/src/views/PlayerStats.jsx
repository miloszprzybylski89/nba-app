import React, { Component } from 'react';
import Axios from 'axios';
import ReactLoading from "react-loading";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PlayerComponent from '../components/PlayerComponent';

const playerUrl = 'https://nba-players.herokuapp.com/players-stats/'

class PlayerStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            foundPlayers: [],
            foundPlayer: [],
        }
    }

    componentDidMount() {
        Axios.get(playerUrl)
            .then(response => response.data)
            .then(data => this.setState({
                data: data,
                isLoading: false,
            })
            )
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

    render() {
        if (this.state.isLoading) {
            return (
                <div className='playerStats'>
                    <Header />
                    <ReactLoading type='spinningBubbles' />
                    <Footer />
                </div>
            )
        }

        if (this.props.location.state === undefined) {
            return (
                <div className='playerStats'>
                    <Header />
                    <span className='error'>You didn`t select a player</span>
                    <Footer />
                </div>
            );
        } else if (this.props.location.state.searchQuery !== undefined) {
            let foundPlayers = this.state.data.filter(player => player.name.toLowerCase().includes(this.props.location.state.searchQuery.toLowerCase()))
            if (foundPlayers.length === 1) {
                let firstName = foundPlayers[0].name.split(' ').slice(0, -1).join(' ').toLowerCase();
                let lastName = foundPlayers[0].name.split(' ').slice(-1).join(' ').toLowerCase();

                return (
                    <div className='playerStats'>
                        <Header />
                        <PlayerComponent
                            name={foundPlayers[0].name}
                            team_name={foundPlayers[0].team_name}
                            team_acronym={foundPlayers[0].team_acronym}
                            games_played={foundPlayers[0].games_played}
                            minutes_per_game={foundPlayers[0].minutes_per_game}
                            field_goal_percentage={foundPlayers[0].field_goal_percentage}
                            field_goals_attempted_per_game={foundPlayers[0].field_goals_attempted_per_game}
                            field_goals_made_per_game={foundPlayers[0].field_goals_made_per_game}
                            headshot={`https://nba-players.herokuapp.com/players/${lastName}/${firstName}`}
                            points_per_game={foundPlayers[0].points_per_game}
                            player_efficiency_rating={foundPlayers[0].player_efficiency_rating}
                            turnovers_per_game={foundPlayers[0].turnovers_per_game}
                            blocks_per_game={foundPlayers[0].blocks_per_game}
                            three_point_attempted_per_game={foundPlayers[0].three_point_attempted_per_game}
                            free_throw_percentage={foundPlayers[0].free_throw_percentage}
                            three_point_made_per_game={foundPlayers[0].three_point_made_per_game}
                            three_point_percentage={foundPlayers[0].three_point_percentage}
                            offensive_rebounds_per_game={foundPlayers[0].offensive_rebounds_per_game}
                            defensive_rebounds_per_game={foundPlayers[0].defensive_rebounds_per_game}
                            rebounds_per_game={foundPlayers[0].rebounds_per_game}
                            assists_per_game={foundPlayers[0].assists_per_game}
                            steals_per_game={foundPlayers[0].steals_per_game}
                        />
                        <Footer />
                    </div>
                )
            }
            return (
                <div className='playerSelect'>
                    <Header />
                    <span className='error'>Pick up a player</span>
                    <ul className='playerSelect__list'>
                        {foundPlayers.map((element, index) => (
                            <li
                                key={index}
                                className='playerSelect__element'
                                onClick={() => this.handleChosenPlayer(element)}>{element.name}
                            </li>
                        ))}
                    </ul>
                    <Footer />
                </div>
            )
        }
        return (
            <>
                <Header />
                <span className='error'>Player stats page</span>
                <Footer />
            </>
        );
    }
}

export default PlayerStats;