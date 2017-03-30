import React, { Component, PropTypes } from 'react';
import UrlForm from '../components/UrlForm';
import Alerts from '../components/Alerts';

export default class UrlPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: {
                originalUrl: '',
                shortUrl: ''
            },
            error: '',
            modalSuccess: false,
            modalDanger: false,
        };

        this.processForm = this.processForm.bind(this);
        this.changeUrl = this.changeUrl.bind(this);
        this.resetState = this.resetState.bind(this);
        this.dismissAlertSuccess = this.dismissAlertSuccess.bind(this);
        this.dismissAlertDanger = this.dismissAlertDanger.bind(this);
        this.getShortUrl = this.getShortUrl.bind(this);
    }

    processForm(event) {
        event.preventDefault();
        this.resetState();

        this.getShortUrl()
            .then(response => response.json())
            .then(body => JSON.parse(JSON.stringify(body)))
            .then(result => {
                if(result.success) {
                    this.setState({
                        modalSuccess: true,
                        url: {
                            originalUrl: this.state.url.originalUrl,
                            shortUrl: result.url.shortUrl
                        }
                    });
                }
                else this.setState({ modalDanger: true, error: result.error.message });
            })
            .catch(e => {
                console.log(e);
            });

    }

    async getShortUrl() {
        try {
            return await fetch('http://94.142.141.165/url/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: "originalUrl=" + this.state.url.originalUrl,
                mode: 'cors'
            });
        } catch(error) {
            console.error(error);
        }
    }

    resetState() {
        this.setState({
            modalDanger: false,
            modalSuccess: false,
            error: '',
            url: {
                originalUrl: this.state.url.originalUrl,
                shortUrl: ''
            }
        })
    }

    changeUrl(event) {
        const field = event.target.name;
        const url = this.state.url;
        url[field] = event.target.value;

        this.setState({
            url
        });
    }

    dismissAlertSuccess() {
        this.setState({ modalSuccess: false });
    }

    dismissAlertDanger() {
        this.setState({ modalDanger: false });
    }

    render() {
        return (
        <div className="container">
            <Alerts
                statusAlerts={ { modalSuccess: this.state.modalSuccess, modalDanger: this.state.modalDanger } }
                dismissAlertSuccess={ this.dismissAlertSuccess }
                dismissAlertDanger={ this.dismissAlertDanger }
                error={ this.state.error }
            />
            <UrlForm
                onSubmit={ this.processForm }
                changeUrl={ this.changeUrl }
                url={ this.state.url }
            />
        </div>
        );
    }
}
