import React, { Component } from 'react';
import HomePage from '../components/HomePage';
import Navigation from '../components/Navigation';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <HomePage/>
            </div>
        );
    }
}
