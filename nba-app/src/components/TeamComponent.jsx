import React, { Component } from 'react';
import axios from "axios";


const API = 'https://www.balldontlie.io/api/v1/teams'


class TeamComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
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
            return null;
        } else {
            return (
                <div className='teamComponent'>
                    <div className='teamComponent__logo' style={{ backgroundImage: `url("https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.state.data.abbreviation.toLowerCase()}.png")` }}> </div>
                    <span className='teamComponent__teamName'>{this.state.data.name}</span>
                    <span className='teamComponent__info'>From: {this.state.data.city}</span>
                    <span className='teamComponent__info'>Conference: {this.state.data.conference}</span>
                    <span className='teamComponent__info'>Division: {this.state.data.division}</span>
                    <span className='teamComponent__abbreviation'>Abbreviation: {this.state.data.abbreviation}</span>
                </div>
            );

        }

    }
}

export default TeamComponent;
