import React, { Component } from 'react';
import Header from '../components/Header';
import TeamComponent from '../components/TeamComponent';
import Footer from '../components/Footer';

import ReactLoading from "react-loading";
import { Button, Icon } from 'antd';

class TeamInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isloading: true,
        }
    }

    componentDidMount() {
        this.setState({ isloading: false })
    }
    render() {

        if (this.props.location.state === undefined) {
            return (
                <div className='teams'>
                    <Header />
                    <span className='error'>UPS! You didn`t pick up a team</span>
                    <Button
                        className='button'
                        size='large'
                        href='.#/teams'
                    >
                        <Icon type="rollback" />
                        Go back to teams list!
                </Button>
                    <Footer />
                </div>
            )
        } else if (this.state.isLoading && this.props.location.state.id !== undefined) {
            return (
                <div className='teams'>
                    <Header />
                    <ReactLoading type='spinningBubbles' />
                    <Footer />
                </div>

            )
        }
        return (
            <div className='teams' >
                <Header />
                <TeamComponent id={this.props.location.state.id}
                />
                <Button
                    className='button'
                    size='large'
                    href='#/teams'
                >
                    <Icon type="rollback" />
                    Go back to teams list!
                </Button>
                <Footer />
            </div>
        );
    }
}

export default TeamInfo;