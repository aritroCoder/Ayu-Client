import React from 'react'
import Card from 'react-bootstrap/Card'
import TeamsBg from './TeamsBg'

const Aritra = require('../Assets/img/Teams/Aritra.jpg');
const Asmit = require('../Assets/img/Teams/Asmit.jpg');
const Praveen = require('../Assets/img/Teams/Praveen.png');
const Raj = require('../Assets/img/Teams/Raj.jpg');
const Sachin = require('../Assets/img/Teams/Sachin.jpeg');

const Members = [
    {
        name: 'Prathipati Yadu Vamsi Venkata Sai (Sachin)',
        task: 'Idea formulation, business model development',
        designation: 'Student, IIT Patna Electrical and Electronics Engineering',
        image: Sachin
    },
    {
        name: 'Raj Kamal',
        task: 'Idea formulation, business and marketing operations',
        designation: 'Student, IIT Patna Civil Engineering',
        image: Raj
    },
    {
        name: 'Asmit Ganguly',
        task: 'Idea formulation, Technical advisor',
        designation: 'Student, IIT Patna Mathematics and computing',
        image: Asmit
    },
    {
        name: 'Aritra Bhaduri',
        task: 'Full Stack Web developer, Frontend design and Backend APIs for website and android app',
        designation: 'Student, IIT Patna Electrical and Electronics Engineering',
        image: Aritra
    },
    {
        name: 'Praveen Kumar',
        task: 'Android app developer',
        designation: 'Student, IIT Patna Computer Science and Engineering',
        image: Praveen
    },
    {
        name: 'Abhraneel Saha',
        task: 'Financial Advisor',
        designation: 'Student, IIT Patna Civil Engineering',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg'
    },
    {
        name: 'Anurag Das Group',
        task: 'Creatives and design',
        designation: 'Student, IIT Patna Civil Engineering',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg'
    },
]

const Team = () => {
    return (
        <>
            <TeamsBg text="Meet our enthusiastic team" />
            <div style={{ height: '10px' }}></div>
            <div  style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', alignItems: 'center', justifyContent: 'center'}}>
                {Members.map(member=>{ return(
                    <Card style={{ width: '18rem', margin: '15px' }}  >
                    <Card.Img variant="top" src={member.image} />
                    <Card.Body>
                        <Card.Title>{member.name}</Card.Title>
                        <Card.Text>
                            {member.task}
                            <br /><br/>
                            {member.designation}
                        </Card.Text>
                    </Card.Body>
                </Card>)
                })}
            </div>
        </>
    )
}

export default Team