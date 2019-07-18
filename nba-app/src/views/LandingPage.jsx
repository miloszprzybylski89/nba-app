import React, { Component } from 'react';
import Button from "../components/Button";
import Input from '../components/Input';


import Slider from "react-animated-slider";

import lebronBg from '../assets/images/background/LebronJames.jpg';
import lakersBg from '../assets/images/background/LosAngelesLakers.jpg';
import Header from '../components/Header';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            landingPageOptions: [
                {
                    id: 1,
                    placeholder: `Type name of some player e.g. Lebron James`,
                    buttonText: 'Search for player',
                    background: `url('${lebronBg}')`,
                    inputName: 'playerInput',
                },
                {
                    id: 2,
                    placeholder: `Type name of some team e.g. Los Angeles Lakers`,
                    buttonText: 'Search for team',
                    background: `url('${lakersBg}')`,
                    inputName: 'teamInput',
                },
            ]

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.inputValue);
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
        console.log(this.state.value);

    }

    render() {
        return (
            <>
                <Header />
                <Slider
                    className='slider'
                    autoplay={3000}
                    previousButton={<i className="fas fa-chevron-left"></i>}
                    nextButton={<i className="fas fa-chevron-right"></i>}
                    infinite={true}>
                    {this.state.landingPageOptions.map((e, i) => (
                        <div key={e.id} className='landingPage slide' style={{ backgroundImage: e.background }} >
                            <form className='landingPage__form' onSubmit={this.handleSubmit}>
                                <Input className='landingPage__form-input' name={e.inputName} placeholder={e.placeholder} />
                                <Button className='landingPage__form-button' buttonText={e.buttonText} />
                            </form>
                        </div>

                    ))}

                </Slider>
            </>
        );
    }
}

export default LandingPage;