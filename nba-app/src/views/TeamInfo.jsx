import React, { Component } from 'react';
import Header from '../components/Header';
import TeamComponent from '../components/TeamComponent';
import Footer from '../components/Footer';

class TeamInfo extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {}
    }
    render() {
        return (
            <div className='teams'>
                <Header />
                <TeamComponent id={this.props.location.state.id} />
                <Footer />
            </div>
        );
    }
}

export default TeamInfo;