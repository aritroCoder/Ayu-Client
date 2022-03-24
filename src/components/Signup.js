import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SignupBg from './SignupBg';

const signup = () => {
    return (
        <>
            <SignupBg text="Create a free account now" /> 
            <div className="container">
                <div style={{ height: '100px' }}></div>
                <Tabs defaultActiveKey="patient" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab variant="success" className="text-success" eventKey="patient" title="Patient">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your full name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                                <Form.Text className="text-muted">
                                    We'll never share your details with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="number" placeholder="Enter your contact number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Write your age" />
                            </Form.Group>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                <label class="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label class="form-check-label" htmlFor="flexRadioDefault2">
                                    Others
                                </label>
                            </div>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Tab>
                    <Tab className="text-success" eventKey="doctor" title="Doctor">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your full name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                                <Form.Text className="text-muted">
                                    We'll never share your details with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="number" placeholder="Enter your contact number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Write your age" />
                            </Form.Group>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                <label class="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label class="form-check-label" htmlFor="flexRadioDefault2">
                                    Others
                                </label>
                            </div>

                            <Form.Group className="mb-3" controlId="formBasicExp">
                                <Form.Label>Years of experience</Form.Label>
                                <Form.Control type="number" placeholder="For how many years are you treating patients?" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicSpe">
                                <Form.Label>Field of Specialization</Form.Label>
                                <Form.Control type="text" placeholder="Write your specialization" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicReg">
                                <Form.Label>Registration Number</Form.Label>
                                <Form.Control type="text" placeholder="Write your government issued registration number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="success" type="submit">
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