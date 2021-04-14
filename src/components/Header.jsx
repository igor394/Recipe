import React from 'react';
import {Navbar, Form, Button, FormControl, Nav} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <div className="container">
                    <Navbar.Brand href="#home">HEADER</Navbar.Brand>
                    <Nav className="mr-auto">

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Enter first letter" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </div>

            </Navbar>
        </div>
    );
};

export default Header;