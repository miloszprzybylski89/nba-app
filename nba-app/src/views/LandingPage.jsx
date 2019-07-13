import React, { Component } from 'react';
import Button from "../components/Button";
import Input from '../components/Input';
import { Redirect } from "react-router-dom";

import { Slider } from "react-animated-slider";
import 'react-animated-slider/build/horizontal.css'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }




    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        return <Redirect to='./player' />
    }

    render() {
        return (
            <div className='LandingPage'>
                <form onSubmit={this.handleSubmit}>
                    <Input className='LandingPage-input' placeholder={`Type name of some player e.g. Lebron James`} />
                    <Button buttonText='Search for player' />
                </form>
            </div>
        );
    }
}

export default LandingPage;