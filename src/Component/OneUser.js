import React from 'react'
import { Spinner,Card,ListGroup } from 'react-bootstrap'

const OneUser = ({user, loaduser}) => {
    return (
        <div>
            {
                loaduser?(
                    <Spinner   animation="border" />
                    
                ):(
                    
<Card style={{ width: '18rem' , marginLeft:'40%' , ccxolor:'blak'}}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovb86cKzgTC1IxdqkGSkp2iw7uao99t7Fbg&usqp=CAU" />
  <Card.Body>
    <Card.Title>Name:{user.name}</Card.Title>
    <Card.Text>E_mail:{user.email} </Card.Text>
    <ListGroup variant="flush">
    <ListGroup.Item>Phone: {user.phone} </ListGroup.Item>
    <ListGroup.Item> webSite:{user.webSite} </ListGroup.Item>
  
  </ListGroup>
  </Card.Body>
</Card>

                )
            }
        </div>
    )
}

export default OneUser;
