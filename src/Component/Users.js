import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Users = ({user}) => {
    return (
      <div>
      <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHr9n6JtvzTek_z5cPF1RAPUai7qYLA-rtA&usqp=CAU" />
<Card.Body>
<Card.Title>{user.name}</Card.Title>
<Card.Title>{user.username}</Card.Title>
<Card.Text>{user.email}</Card.Text>
<Button variant="info">
  <Link to={`users/${user.id}`}>user Details</Link>
</Button>
</Card.Body>
</Card>
  </div>
    )
}

export default Users;
