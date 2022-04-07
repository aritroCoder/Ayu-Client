import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import bg from '../Assets/img/bg.jpg'

// const host = 'http://localhost:5000';
const host = 'https://ayubackend.herokuapp.com';

var radioNumber;

const radios = [
    { name: '08:00', value: '1' },
    { name: '10:00', value: '2' },
    { name: '14:00', value: '3' },
];
var time = ['08:00', '10:00', '14:00']

const bookAppointment = async () => {
    let body = {
        "ph_doc": document.getElementById('doctor-phone-number').value,
        "date": document.getElementById('date').value,
        "time": time[radioNumber-1]
    }
    const token = JSON.stringify(JSON.parse(localStorage.getItem('user')).authtoken)
    const response = await fetch(`${host}/api/appointment/schedule`, {
        method: 'POST',
        headers: { 
            // 'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json' ,
            'auth-token': JSON.parse(localStorage.getItem('user')).authtoken
        },
        body: JSON.stringify(body)
    });
    const json = await response.json();
    console.log(json);
    if (response.status !== 200) {
        alert(json.error);
        return alert(json.errors[0].msg);
    }else{
        alert("Appointment Scheduled successfully")
    }
}

const Appointment = () => {
    const [radioValue, setRadioValue] = useState('1');
    const [checked, setChecked] = useState(false);
    return (
        <div style={{ backgroundImage: `url(${bg})`, padding: '20px 0' }}>
            <h1 style={{ textAlign: 'center' }}>Schedule your next appointment</h1>
            <Form className='container' onSubmit={(e)=>{
                e.preventDefault();
                radioNumber = radioValue;
                bookAppointment();
            }}>
                <Form.Group className="mb-3">
                    <Form.Label>Doctor's Phone Number</Form.Label>
                    <Form.Control id="doctor-phone-number" type="number" placeholder="Enter phone number of doctor" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Date</Form.Label>
                    <Form.Control id="date" type="date" placeholder="Select a date of appointment" />
                </Form.Group>

                <ButtonGroup style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Form.Label style={{ marginRight: '10px' }}>Select time (24hr clock format)</Form.Label>
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