import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        }
    }

    handleLogoClick = () => {
        this.setState({ redirect: true })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='./' />
        }
    }

    render() {
        return (
            <>
                {this.renderRedirect()}
                <span onClick={this.handleLogoClick} className='logo'><strong>NBA</strong> stats app</span>
            </>
        );
    }
}

export default Logo;