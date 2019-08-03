import React, { Component } from 'react';
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactLoading from "react-loading";

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
        this.props.history.push({
            pathname: '/teamInfo',
            state: { id: id }
        })
    }

    render() {
        const { isLoading, data } = this.state;
        if (isLoading) {
            return (
                <div className='teams'>
                    <Header />
                    <ReactLoading type='spinningBubbles' />

                    <Footer />
                </div>
            );
        }

        return (
            <div className='teams'>
                <Header />
                <ul className='teamsList'>
                    {data.map(element => (
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