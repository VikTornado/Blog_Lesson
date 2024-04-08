import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={"max-w-[500px] m-auto"}>
            <Form className={"w-full flex flex-col justify-center"}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control required type="text" placeholder="user name"/>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>This is an error!!!</p>
                <span>Don't you have an account?  
                    <Link to={"/register"}>Register</Link>
                </span>
            </Form>
        </div>
    );
};

export default Login;