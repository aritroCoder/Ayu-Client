import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignupBg from './SignupBg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Alert from 'react-bootstrap/Alert'
import { LoginContext } from '../Contexts/LoginContext'
import { useHistory } from 'react-router-dom';

// const host = 'http://localhost:5000';
const host = 'https://ayubackend.herokuapp.com';


const getLogin = async (setLoggedIn, setAuthtoken, setError, setUsername, history) => {
    let body = {
        'email': document.getElementById('email').value,
        'password': document.getElementById('password').value
    }
    const response = await fetch(`${host}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    const json = await response.json();
    console.log(json)
    if (response.status !== 200) {
        // alert(json.error);
        // return alert(json.errors[0].msg);
        setLoggedIn(false);
        if(json.error) setError(json.error);
        else setError(json.errors[0].msg);
        setUsername("");
    } else {
        // localStorage.setItem('user', JSON.stringify(json));
        setLoggedIn(true);
        setError(null);
        setAuthtoken(json.authtoken);
        setUsername(json.user.name);
        history.push('/')
    }
}

const Login = () => {

    const { loggedIn, setLoggedIn, setAuthtoken, setUsername } = useContext(LoginContext);
    const [ error, setError ] = useState('');
    let history = useHistory();

    return (
        <>
            <SignupBg text='Welcome. We are happy to see you back' />
            <div className="container">
                <div style={{ height: '100px' }}></div>
                {/* <h1 style={{ fontFamily: 'roboto', textAlign: 'center' }}></h1> */}
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    getLogin(setLoggedIn, setAuthtoken, setError, setUsername, history);
                }}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control id='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control id='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Log In
                    </Button><br />
                </Form>
                <Link to='/forgot' style={{ marginTop: '10px', textDecoration: 'none' }}>Forgot Password?</Link>
                {loggedIn &&
                    <Alert variant="success" style={{ marginTop: '10px' }}>
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            You have logged in successfully.
                        </p>
                    </Alert>}
                {error &&
                    <Alert variant="danger" style={{ marginTop: '10px' }}>
                        <Alert.Heading>Oops, some error has occurred</Alert.Heading>
                        <p>
                            {error}
                        </p>
                    </Alert>}
                <div style={{ height: '100px' }}></div>
            </div>
        </>
    )
}

export default Login