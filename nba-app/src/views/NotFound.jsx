import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class NotFound extends Component {

    render() {
        return (
            <div>
                <Header />
                <span className='error'>UPS!!</span>
                <Footer />
            </div>
        )
    }
}

export default NotFound;