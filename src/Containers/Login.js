import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";


// this is how to declare a class in JS or a big function for the entire web page
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // makes sure there is input in the fields
    function validateForm() {
        if (email.length > 0 && password.length > 0)
            return true;
        else
            return false;
    }


    // ???
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="Ig" controlled="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.Target.value)} />
                </Form.Group>
                <Form.Group size="Ig" controlled="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control autoFocus type="password" value={password} onChange={(e) => setPassword(e.Target.value)} />
                </Form.Group>
                <Button block size="Ig" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );

}