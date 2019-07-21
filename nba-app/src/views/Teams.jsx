import React, { Component } from 'react';
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { } from "react-router-dom";

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
            .then(() => this.setState({ isLoading: false }))
    }

    handleChosenTeam = (id) => {
        this.props.history.replace({
            pathname: './team',
            state: { id: id }
        })
    }

    render() {
        const { isLoading, data } = this.state;
        if (isLoading) {
            return null;
        }

        return (
            <div className='teams'>
                <Header />
                <ul className='teamsList'>
                    {data.map(elem => (
                        <li
                            onClick={() => this.handleChosenTeam(elem.id)}
                            key={elem.id}
                            index={elem.id}
                            className='teamsList__element' ><h2> {elem.full_name}</h2> </li>
                    ))}
                </ul>
                <Footer />

            </div>
        );
    }
}

export default TeamStats;