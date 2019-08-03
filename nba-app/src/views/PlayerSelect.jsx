import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PlayerComponent from "../components/PlayerComponent";
import ReactLoading from 'react-loading'

class PlayerSelect extends Component {

    render() {

        if (this.props.location.state === undefined) {
            return (
                <div className='playerStats'>
                    <Header />
                    <ReactLoading type='spinnigBubbles' />
                    <Footer />
                </div>
            )
        } else if (this.props.location.state.foundPlayer !== undefined) {
            let { foundPlayer, headshot } = this.props.location.state;

            return (
                <div className='playerStats'>
                    <Header />
                    <PlayerComponent
                        name={foundPlayer.name}
                        team_name={foundPlayer.team_name}
                        team_acronym={foundPlayer.team_acronym}
                        games_played={foundPlayer.games_played}
                        minutes_per_game={foundPlayer.minutes_per_game}
                        field_goal_percentage={foundPlayer.field_goal_percentage}
                        field_goals_attempted_per_game={foundPlayer.field_goals_attempted_per_game}
                        field_goals_made_per_game={foundPlayer.field_goals_made_per_game}
                        headshot={headshot}
                        points_per_game={foundPlayer.points_per_game}
                        player_efficiency_rating={foundPlayer.player_efficiency_rating}
                        turnovers_per_game={foundPlayer.turnovers_per_game}
                        blocks_per_game={foundPlayer.blocks_per_game}
                        three_point_attempted_per_game={foundPlayer.three_point_attempted_per_game}
                        free_throw_percentage={foundPlayer.free_throw_percentage}
                        three_point_made_per_game={foundPlayer.three_point_made_per_game}
                        three_point_percentage={foundPlayer.three_point_percentage}
                        offensive_rebounds_per_game={foundPlayer.offensive_rebounds_per_game}
                        defensive_rebounds_per_game={foundPlayer.defensive_rebounds_per_game}
                        rebounds_per_game={foundPlayer.rebounds_per_game}
                        assists_per_game={foundPlayer.assists_per_game}
                        steals_per_game={foundPlayer.steals_per_game}
                    />
                    <Footer />
                </div>
            )
        }
    }
}
export default PlayerSelect;