import React, { Component } from 'react';
import axios from "axios";
import Header from '../components/Header';
import { teamsBackground } from '../assets/images/background/teamsList.jpg'

const API = 'https://www.balldontlie.io/api/v1/teams'


class TeamStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
        }
    }

    componentDidMount() {
        axios.get(API)
            .then(resp => resp.data)
            .then(json => this.setState({ data: json.data }))
            .then(() => { this.setState({ isLoading: false }) })
    }

    render() {
        const { isLoading, data } = this.state;
        console.log(this.state.data);
        if (isLoading) {
            return null;
        }

        return (
            <div className='teams'>
                <Header />
                <ul className='teamsList'>
                    {data.map(e => (
                        <li
                            key={e.id}
                            index={e.id}
                            className='teamsList__element' ><h1> {e.full_name}</h1> </li>
                    ))}
                </ul>
                <h1>Team Stats page</h1>

            </div>
        );
    }
}

export default TeamStats;