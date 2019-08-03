import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import Button from "../components/Button";
import Input from '../components/Input';
import Header from '../components/Header';

import Slider from "react-animated-slider";

import lebronBg from '../assets/images/background/LebronJames.jpg';
import lakersBg from '../assets/images/background/LosAngelesLakers.jpg';
import Footer from '../components/Footer';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            redirectId: null,
            landingPageOptions: [
                {
                    id: 1,
                    placeholder: `Type name of some player e.g. Lebron James`,
                    buttonText: 'Search for player',
                    background: `url('${lebronBg}')`,
                    inputName: 'player',
                },
                {
                    id: 2,
                    placeholder: `Type name of some team e.g. Los Angeles Lakers`,
                    buttonText: 'Search for team',
                    background: `url('${lakersBg}')`,
                    inputName: 'team',
                },
            ],
            player: '',
            team: '',

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ redirect: true, redirectId: parseFloat(e.target.id) })
    }

    handleInputChange = (e) => {
        console.log(e.target.name, e.target.value);

        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { redirect, redirectId, team, player, landingPageOptions } = this.state;

        if (redirect && redirectId === 1) {
            if (player !== '') {
                return <Redirect to={{
                    pathname: './playerStats',
                    state: { searchQuery: this.state.player }
                }}
                />
            }
            return <Redirect to={{
                pathname: './randomPlayers',
            }} />
        } else if (redirect && redirectId === 2) {
            if (team !== '') {
                return <Redirect to={{
                    pathname: './teamInfo',
                    state: { searchQuery: this.state.team }
                }}
                />
            }
            return <Redirect to={{
                pathname: './teams',
            }} />
        }

        return (
            <>
                <Header />
                <Slider
                    className='slider'
                    previousButton={<i className="fas fa-chevron-left"></i>}
                    nextButton={<i className="fas fa-chevron-right"></i>}
                    infinite={true}>
                    {landingPageOptions.map((e) => (
                        <div key={e.id} className='landingPage slide' style={{ backgroundImage: e.background }} >
                            <form id={e.id} className='landingPage__form' onSubmit={this.handleSubmit}>
                                <Input
                                    className='landingPage__form-input'
                                    changeParentInput={this.handleInputChange}
                                    name={e.inputName}
                                    value={this.state.inputValue}
                                    placeholder={e.placeholder} />
                                <Button
                                    className='button'
                                    buttonText={e.buttonText} />
                            </form>
                        </div>
                    ))}
                </Slider>
                <Footer />
            </>
        );
    }
}

export default LandingPage;