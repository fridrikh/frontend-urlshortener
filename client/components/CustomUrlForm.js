import React, { Component } from 'react';
import { Card, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const CustomUrlForm = ({
    onSubmit,
    changeUrl,
    url
}) => (
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <Card className="container">
                    <Form onSubmit={ onSubmit }>
                        <h2 className="card-heading">Create Custom Url</h2>
                        <FormGroup>
                            <Label for = "originalUrl">Input URL:</Label>
                            <Input
                                value={ url.originalUrl }
                                onChange={ changeUrl }
                                type="originalUrl"
                                name="originalUrl"
                                id="originalUrl"
                                placeholder="Input this url"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for = "customShortUrl">Input your custom short url:</Label>
                            <Input
                                value={ url.customShortUrl }
                                onChange={ changeUrl }
                                type="customShortUrl"
                                name="customShortUrl"
                                id="customShortUrl"
                                placeholder="Input your custom short url"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for = "shortUrl">Short URL:</Label>
                            <Input
                                value={ url.shortUrl }
                                type="shortUrl"
                                name="shortUrl"
                                id="shortUrl"/>
                        </FormGroup>
                        <Button color="primary">Send</Button>
                    </Form>
                </Card>
            </div>
        </div>
    </div>
);

export default CustomUrlForm;

