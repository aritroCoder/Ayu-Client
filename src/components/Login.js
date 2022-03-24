import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignupBg from './SignupBg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
    return (
        <>
            <SignupBg text='Welcome. We are happy to see you back'/>
            <div className="container">
                <div style={{ height: '100px' }}></div>
                {/* <h1 style={{ fontFamily: 'roboto', textAlign: 'center' }}></h1> */}
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Log In
                    </Button><br/>
                </Form>
                    <Link to='/forgot' style={{marginTop:'10px', textDecoration: 'none'}}>Forgot Password?</Link>
                <div style={{ height: '100px' }}></div>
            </div>
        </>
    )
}

export default Login