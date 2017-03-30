import React, { Component } from 'react';
import { Alert } from 'reactstrap';

const Alerts = ({
    statusAlerts: { modalSuccess, modalDanger },
    dismissAlertSuccess,
    dismissAlertDanger,
    error
}) => (
    <div className="container">
        <Alert
            color="success"
            isOpen={ modalSuccess }
            toggle={ dismissAlertSuccess }>
            <strong>Successfully!</strong>
        </Alert>
        <Alert
            color="danger"
            isOpen={ modalDanger }
            toggle={ dismissAlertDanger }>
            <strong>Error! { error } </strong>
        </Alert>
    </div>
);

export default Alerts;
