import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignupBg from './SignupBg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// const host = 'http://localhost:5000';
const host = 'https://ayubackend.herokuapp.com/';

const getLogin = async(event) => {
    event.preventDefault();
    let body = {
        'email': document.getElementById('email').value,
        'password': document.getElementById('password').value
    }
    const response = await fetch(`${host}/api/auth/login`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    const json = await response.json();
    console.log(json)
    if(response.status !== 200){
        alert(json.error);
        return alert(json.errors[0].msg);
    }else{
        localStorage.setItem('user', JSON.stringify(json));
    }
}

const Login = () => {
    return (
        <>
            <SignupBg text='Welcome. We are happy to see you back'/>
            <div className="container">
                <div style={{ height: '100px' }}></div>
                {/* <h1 style={{ fontFamily: 'roboto', textAlign: 'center' }}></h1> */}
                <Form onSubmit={getLogin}>
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
                    </Button><br/>
                </Form>
                    <Link to='/forgot' style={{marginTop:'10px', textDecoration: 'none'}}>Forgot Password?</Link>
                <div style={{ height: '100px' }}></div>
            </div>
        </>
    )
}

export default Login