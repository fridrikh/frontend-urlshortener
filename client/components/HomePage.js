import React, { Component } from 'react';
import { Link } from 'react-router';

const HomePage = () => (
    <div>
        <h1>Routing</h1>
        <ul role="nav">
            <li><Link to="/url">Create Url</Link></li>
            <li><Link to="/custom">Create Custom Url</Link></li>
        </ul>
    </div>
);

export default HomePage;
