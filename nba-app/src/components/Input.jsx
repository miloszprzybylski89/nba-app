import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: '',
            team: '',
            placeholder: this.props.placeholder,
        };
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                player: 'Lebron James',
                team: 'Los Angeles Lakers',
            });

        }, 2000);
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (<input
            className={this.props.className}
            placeholder={this.state.placeholder}
            onChange={this.handleChange}
            name={this.props.name}
            value={this.state[`${this.props.name}`]}
        />);
    };
};

export default Input;