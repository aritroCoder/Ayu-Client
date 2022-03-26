import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SignupBg from './SignupBg';

// const host = 'http://localhost:5000';
const host = 'https://ayubackend.herokuapp.com/';

const submitPatient = async (event) => {
    event.preventDefault();
    //validation
    if(document.getElementById('Ppassword').value.localeCompare(document.getElementById('PconfirmPassword').value)!==0){
        return alert("Password must match with confirm Password")
    }
    let gender = null;
    if (document.getElementById('PflexRadioDefault1').checked) {
        gender = document.getElementById('PflexRadioDefault1').value
    }
    else if (document.getElementById('PflexRadioDefault2').checked) {
        gender = document.getElementById('PflexRadioDefault2').value
    }
    else if (document.getElementById('PflexRadioDefault3').checked) {
        gender = document.getElementById('PflexRadioDefault3').value
    }
    let body = {
        'name': document.getElementById('Pname').value,
        'password': document.getElementById('Ppassword').value,
        'ph_number': document.getElementById('Pph_number').value.toString(),
        'email': document.getElementById('Pemail').value,
        'gender': gender,
        'age': document.getElementById('Page').value.toString()
    };
    const signupRes = await fetch(`${host}/api/auth/usersignup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const json = await signupRes.json();
    console.log(json);
    if(signupRes.status !== 200){
        return alert(json.errors[0].msg);
    }else{
        localStorage.setItem('user', JSON.stringify(json));
    }
}

const submitDoc = async (event) => {
    event.preventDefault();
    //validation
    if(document.getElementById('password').value.localeCompare(document.getElementById('confirmPassword').value)!==0){
        return alert("Password must match with confirm Password")
    }
    let gender = null;
    if (document.getElementById('flexRadioDefault1').checked) {
        gender = document.getElementById('flexRadioDefault1').value
    }
    else if (document.getElementById('flexRadioDefault2').checked) {
        gender = document.getElementById('flexRadioDefault2').value
    }
    else if (document.getElementById('flexRadioDefault3').checked) {
        gender = document.getElementById('flexRadioDefault3').value
    }
    let body = {
        'name': document.getElementById('name').value,
        'password': document.getElementById('password').value,
        'ph_number': document.getElementById('ph_number').value.toString(),
        'email': document.getElementById('email').value,
        'gender': gender,
        'age': document.getElementById('age').value.toString(),
        'years_of_exp': document.getElementById('years_of_exp').value.toString(),
        'field_of_specialization': document.getElementById('field_of_specialization').value,
        'reg_no': document.getElementById('reg_no').value
    };
    const signupRes = await fetch(`${host}/api/auth/docsignup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const json = await signupRes.json();
    console.log(json);
    if(signupRes.status !== 200){
        alert(json.error);
        return alert(json.errors[0].msg);
    }else{
        localStorage.setItem('user', JSON.stringify(json));
    }
}


const signup = () => {
    return (
        <>
            <SignupBg text="Create a free account now" />
            <div className="container">
                <div style={{ height: '100px' }}></div>
                <Tabs defaultActiveKey="patient" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab variant="success" className="text-success" eventKey="patient" title="Patient">
                        <Form onSubmit={submitPatient}>
                            <Form.Group className="mb-3" nothing="formBasicName">
                                <Form.Label>Your full name</Form.Label>
                                <Form.Control id="Pname" type="text" placeholder="Enter your name" />
                                <Form.Text className="text-muted">
                                    We'll never share your details with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" nothing="formBasicNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control id="Pph_number" type="number" placeholder="Enter your contact number" />
                            </Form.Group>

                            <Form.Group className="mb-3" nothing="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control id="Pemail" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" nothing="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control id="Page" type="number" placeholder="Write your age" />
                            </Form.Group>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="PflexRadioDefault1" value="male" checked />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="PflexRadioDefault2" value="female" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="PflexRadioDefault3" value="other" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Others
                                </label>
                            </div>

                            <Form.Group className="mb-3" nothing="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="Ppassword" type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" nothing="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control id="PconfirmPassword" type="password" placeholder="Password" />
                            </Form.Group>

                            <Button id="btnPatient" variant="success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Tab>
                    <Tab className="text-success" eventKey="doctor" title="Doctor">
                        <Form onSubmit={submitDoc}>
                            <Form.Group className="mb-3" nothing="formBasicName">
                                <Form.Label>Your full name</Form.Label>
                                <Form.Control id="name" type="text" placeholder="Enter your name" />
                                <Form.Text className="text-muted">
                                    We'll never share your details with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" nothing="formBasicNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control id="ph_number" type="number" placeholder="Enter your contact number" />
                            </Form.Group>

                            <Form.Group className="mb-3" nothing="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control id="email" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" nothing="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control id="age" type="number" placeholder="Write your age" />
                            </Form.Group>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Others
                                </label>
                            </div>

                            <Form.Group className="mb-3" nothing="formBasicExp">
                                <Form.Label>Years of experience</Form.Label>
                                <Form.Control id="years_of_exp" type="number" placeholder="For how many years are you treating patients?" />
                            </Form.Group>

                            <Form.Group className="mb-3" nothing="formBasicSpe">
                                <Form.Label>Field of Specialization</Form.Label>
                                <Form.Control id="field_of_specialization" type="text" placeholder="Write your specialization" />
                            </Form.Group>

                            <Form.Group className="mb-3" nothing="formBasicReg">
                                <Form.Label>Registration Number</Form.Label>
                                <Form.Control id="reg_no" type="text" placeholder="Write your government issued registration number" />
                            </Form.Group>

                            <Form.Group className="mb-3" nothing="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="password" type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" nothing="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control id="confirmPassword" type="password" placeholder="Password" />
                            </Form.Group>

                            <Button id="btnDoc" variant="success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Tab>
                </Tabs >
                <div style={{ height: '100px' }}></div>
            </div>
        </>
    )
}

export default signup