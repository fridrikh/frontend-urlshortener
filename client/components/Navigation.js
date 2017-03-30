import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.handleNav = this.handleNav.bind(this);

        this.state = {
            isOpen: false
        };
    }

    handleNav() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarToggler right onClick={ this.handleNav } />
                    <NavbarBrand href="/">Url Shortener Project</NavbarBrand>
                    <Collapse navbar isOpen={ this.state.isOpen }>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={ Link } to="/url">Create Url</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={ Link } to="/custom">Create Custom Url</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
