import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: '',
            teams: '',
            placeholder: this.props.placeholder,
        };
    };


    render() {
        return (<input
            className={this.props.className}
            placeholder={this.state.placeholder}
            onChange={this.props.changeParentInput}
            name={this.props.name}
            value={this.props.value}
        />);
    };
};

export default Input;