import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',

            placeholder: this.props.placeholder,

        }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })

    }

    render() {
        return (<input className={this.props.className} placeholder={this.state.placeholder} onChange={this.handleChange} value={this.state.value} />);
    }
}

export default Input;