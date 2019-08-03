import React, { Component } from 'react';
import Spinner from './Spinner';
import ImgInBg from '../components/ImgInBg'

class PlayerComponent extends Component {

    componentDidMount() {
        console.log(this.props);

    }
    render() {
        const {
            name, team_name, games_played,
            minutes_per_game, field_goal_percentage,
            field_goals_attempted_per_game, field_goals_made_per_game,
            points_per_game, player_efficiency_rating, turnovers_per_game,
            blocks_per_game, three_point_attempted_per_game, free_throw_percentage,
            headshot, team_acronym, three_point_made_per_game, three_point_percentage,
            offensive_rebounds_per_game, defensive_rebounds_per_game, rebounds_per_game,
            assists_per_game, steals_per_game
        } = this.props;
        return (
            <div className='playerComponent'>
                <div className='playerComponent__inner'>
                    <div className='playerComponent__inner-front'>
                        <ImgInBg
                            className='player__headshot'
                            src={headshot}
                            renderLoader={() => <Spinner />}
                        />
                        <div className='player__data'>
                            <span className='player__name'>Name: {name}</span>
                            <span className='player__teamName'>From: {team_name}</span>
                            <ImgInBg
                                className='player__teamLogo'
                                src={`https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${team_acronym}.png`}
                                renderLoader={() => <Spinner />}
                            />
                        </div>
                    </div>
                    <div className='playerComponent__inner-back'>
                        <div className='player__data'>
                            <span className='player__stats'>Games played: {games_played}</span>
                            <span className='player__stats'>Minutes in every match: {minutes_per_game}</span>
                            <span className='player__stats'>Points per game: {points_per_game}</span>
                            <div className='player__FG-container'>
                                <span className='player__FG'>FG attempts: {field_goals_attempted_per_game}</span>
                                <span className='player__FG'>FG success: {field_goals_made_per_game}</span>
                                <span className='player__FG'>FG %: {field_goal_percentage}</span>
                                <span className='player__FG'>Free throw percentage: {free_throw_percentage}</span>
                            </div>
                            <div className='player__3P-container'>
                                <span className='player__3P'>3P attempts: {three_point_attempted_per_game}</span>
                                <span className='player__3P'>3P success: {three_point_made_per_game}</span>
                                <span className='player__3P'>3P %: {three_point_percentage}</span>
                            </div>
                            <div className='player__reb-container'>
                                <span className='player__reb'>Offensive Rebounds: {offensive_rebounds_per_game}</span>
                                <span className='player__reb'>Defensive Rebounds: {defensive_rebounds_per_game}</span>
                                <span className='player__reb'>Rebounds per game: {rebounds_per_game}</span>
                            </div>
                            <div className='player__stats-container'>
                                <span className='player__stats'>Assists per game: {assists_per_game}</span>
                                <span className='player__stats'>Steals per game: {steals_per_game}</span>
                                <span className='player__stats'>Blocks per game: {blocks_per_game}</span>
                                <span className='player__stats'>Turnovers per game: {turnovers_per_game}</span>
                            </div>
                            <span className='player__efficency'>Efficency rating: {player_efficiency_rating}</span>
                        </div>
                        <ImgInBg
                            className='player__headshot'
                            src={headshot}
                            renderLoader={() => <Spinner />}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default PlayerComponent;