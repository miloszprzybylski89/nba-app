import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: this.props.buttonText,
        }
    }

    render() {
        return (<button>{this.state.buttonText}</button>);
    }
}

export default Button;