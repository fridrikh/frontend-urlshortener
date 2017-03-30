import React, { Component, PropTypes } from 'react';

export default class UrlPage extends Component {
    constructor(props) {
        super(props);
        console.log(props.params.id);
        this.toRedirect = this.toRedirect.bind(this);
    }

    componentWillMount() {
        console.log('Will Mount');
    }

    componentDidMount() {
        console.log('Did Mount');

        this.toRedirect()
            .then(response => response.json())
            .then(body => JSON.parse(JSON.stringify(body)))
            .then(json => {
                if(json.success) window.location.assign(json.url.redirectTo);
                else window.location.assign('/');
            })
            .catch(err => console.log(err))
    }

    async toRedirect() {
        try {
            return await fetch('http://94.142.141.165/' + this.props.params.id, {
                method: 'GET',
                mode: 'cors',
            });
        } catch(error) {
            console.error(error);
        }
    }

    render() {
        return (
            <h1>Redirecting...</h1>
        );
    }
}

