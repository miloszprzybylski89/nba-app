import React, { Component } from 'react';
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactLoading from "react-loading";
import TeamComponent from '../components/TeamComponent';
import { Button, Icon } from 'antd'

const API = 'https://www.balldontlie.io/api/v1/teams'


class TeamStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            teams: [],
            foundTeams: [],
        }
    }

    componentDidMount() {
        axios.get(API)
            .then(resp => resp.data)
            .then(json => {
                this.setState({ teams: json.data });
                if (this.props.location.state !== undefined && json.data) {
                    let { searchQuery } = this.props.location.state;
                    let teams = json.data;
                    teams && teams.forEach(team => {
                        return ['abbreviation', 'city', 'conference', 'division', 'full_name', 'name'].some(key => {
                            if (team[key].toLowerCase().includes(searchQuery.toLowerCase())) {
                                this.setState(prevState => ({ foundTeams: [...prevState.foundTeams, team] }));
                                // console.log("found tesm", team);
                                return true;
                            }
                        })
                    })
                }

            })
            .then(() => this.setState({ isLoading: false }))




    }

    handleChosenTeam = (id) => {
        this.props.history.push({
            pathname: '/teamInfo',
            state: { id: id }
        })
    }

    render() {
        const { isLoading, teams, foundTeams } = this.state;
        if (isLoading) {
            return (
                <div className='teams'>
                    <Header />
                    <ReactLoading type='spinningBubbles' />
                    <Footer />
                </div>
            );
        } else if (this.state.foundTeams.length === 1) {
            this.props.history.push({
                pathname: '/teamInfo',
                state: { id: this.state.foundTeams[0].id }
            })
        } else if (this.state.foundTeams.length > 1) {
            return (
                <div className='teams' >
                    <Header />
                    <ul className='teamsList'>
                        {foundTeams.map(element => (
                            <li
                                onClick={() => this.handleChosenTeam(element.id)}
                                key={element.id}
                                index={element.id}
                                className='teamsList__element' >{element.full_name}</li>
                        ))}
                    </ul>

                    <Footer />
                </div>
            )
        }

        return (
            <div className='teams' >
                <Header />
                <ul className='teamsList'>
                    {teams.map(element => (
                        <li
                            onClick={() => this.handleChosenTeam(element.id)}
                            key={element.id}
                            index={element.id}
                            className='teamsList__element' >{element.full_name}</li>
                    ))}
                </ul>

                <Footer />
            </div>
        );
    }
}

export default TeamStats;