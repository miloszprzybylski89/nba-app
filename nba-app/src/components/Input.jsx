import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: '',

            placeholder: this.props.placeholder,

        }
    }

    handleChange = (e) => {
        this.setState({ playerName: e.target.value })

    }

    render() {
        return (<input placeholder={this.state.placeholder} onChange={this.handleChange} value={this.state.playerName} />);
    }
}

export default Input;