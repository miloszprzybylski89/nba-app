import React, { Component } from 'react';
import Header from '../components/Header';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Header />
                <h1>Main page</h1>
            </>
        );
    }
}

export default Main;