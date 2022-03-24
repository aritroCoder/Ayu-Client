import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CardDoc = () => {
  return (
    <Card style={{ width: '18rem', margin: '5px 0' }}>
    <Card.Img variant="top" src="https://myupchar-banner.s3.ap-south-1.amazonaws.com/widget/avatar/doctor-avatar-male.png" />
    <Card.Body>
      <Card.Title>Dr. Amit Ghosh</Card.Title>
      <Card.Text>
          Specialization - General<br/> Years of experience - 5
      </Card.Text>
      <Button variant="primary">Read more</Button>
    </Card.Body>
  </Card>
  )
}

export default CardDoc