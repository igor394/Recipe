import React, {useContext} from 'react';
import {Navbar, Form, Button, FormControl, Nav} from "react-bootstrap";
import Context from "../context/context";
import {serchReq} from "../utils/request";

const Header = () => {
    const {setContx} = useContext(Context);
    const test = (e) => {
        e.preventDefault();
        let searchParams = e.target.elements[0].value;
        fetchSearch(searchParams)
    }
    const fetchSearch = async (params) => {
        const res = await serchReq(params)
        if(res)setContx(res);
        else return undefined;
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <div className="container">
                    <Navbar.Brand href="/">HEADER</Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
                    <Form onSubmit={test} inline>
                        <FormControl type="text" placeholder="Enter first letter" className="mr-sm-2"/>
                        <Button type="submit" variant="outline-info">Search</Button>
                    </Form>
                </div>

            </Navbar>
        </div>
    );
};

export default Header;