import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: this.props.placeholder,
        }
    }
    render() {
        return (<input placeholder={this.state.placeholder} />);
    }
}

export default Input;