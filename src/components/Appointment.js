import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import bg from '../Assets/img/bg.jpg'

const radios = [
    { name: '8:00', value: '1' },
    { name: '10:00', value: '2' },
    { name: '14:00', value: '3' },
];

const Appointment = () => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    return (
        <div style={{ backgroundImage: `url(${bg})`, padding: '20px 0' }}>
            <h1 style={{ textAlign: 'center' }}>Schedule your next appointment</h1>
            <Form className='container'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Doctor's Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter phone number of doctor" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Select a date of appointment" />
                </Form.Group>

                <ButtonGroup style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Form.Label style={{marginRight: '10px'}}>Select time (24hr clock format)</Form.Label> 
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>

                <br />

                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Appointment  