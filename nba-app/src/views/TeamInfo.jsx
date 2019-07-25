import React, { Component } from 'react';
import Header from '../components/Header';
import TeamComponent from '../components/TeamComponent';
import Footer from '../components/Footer';
import { Button, Icon } from 'antd';

class TeamInfo extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {}
    }
    render() {
        if (this.props.location.state === undefined) {
            return (
                <div className='teams'>
                    <Header />
                    <span className='teams__error'>UPS! You didn`t pick up a team</span>
                    <Button
                        ghost
                        size='large'
                        href='.#/teams'
                        type="default">
                        <Icon type="rollback" />
                        Go back to teams list!
                </Button>
                    <Footer />
                </div>
            )
        } else {

        }
        return (
            <div className='teams'>
                <Header />
                <TeamComponent id={this.props.location.state.id} />
                <Button
                    ghost
                    size='large'
                    href='#/teams'
                    type="default">
                    <Icon type="rollback" />
                    Go back to teams list!
                </Button>
                <Footer />
            </div>
        );
    }
}

export default TeamInfo;