import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',

            placeholder: this.props.placeholder,

        }
    }

    componentDidMount() {
        this.setState({ value: 'whatever' })
    }

    handleChange = (e) => {
        console.log(e.target.name);

        this.setState({ [e.target.name]: e.target.value })

    }

    render() {
        return (<input className={this.props.className} placeholder={this.state.placeholder} onChange={this.handleChange} name={this.props.name} />);
    }
}

export default Input;