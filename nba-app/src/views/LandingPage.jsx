import React, { Component } from 'react';
import Button from "../components/Button";
import Input from '../components/Input';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='LandingPage'>
                <Input className='LandingPage-input' placeholder='Type name of some player e.g. Lebron James' />
                <Button buttonText='Search for player' />
            </div>
        );
    }
}

export default LandingPage;