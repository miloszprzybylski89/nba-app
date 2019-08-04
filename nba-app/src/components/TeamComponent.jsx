import React, { Component } from 'react';
import axios from "axios";
import ReactLoading from 'react-loading'
import ImgInBg from './ImgInBg';
import Spinner from '../components/Spinner'


const API = 'https://www.balldontlie.io/api/v1/teams'


class TeamComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
        }
    }

    componentDidMount() {
        axios.get(`${API}/${this.props.id}`)
            .then(resp => resp.data)
            .then(data => { this.setState({ data: data }) })
            .then(() => { this.setState({ isLoading: false }) })
    }


    render() {
        const { isLoading } = this.state;
        if (isLoading) {
            return <ReactLoading type='spinningBubbles' />
        } else {
            const backgroundImage = `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.state.data.abbreviation.toLowerCase()}.png`
            return (
                <div className='teamComponent'>
                    <ImgInBg
                        className='teamComponent__logo'
                        src={backgroundImage}
                        renderLoader={() => <Spinner />} />
                    <span className='teamComponent__teamName'>{this.state.data.full_name}</span>
                    <div className='teamComponent__info-container'>
                        <span className='teamComponent__info'>From: {this.state.data.city}</span>
                        <span className='teamComponent__info'>Conference: {this.state.data.conference}</span>
                        <span className='teamComponent__info'>Division: {this.state.data.division}</span>
                    </div>
                    <span className='teamComponent__abbreviation'>Acronym: {this.state.data.abbreviation}</span>
                </div>
            );

        }

    }
}

export default TeamComponent;
