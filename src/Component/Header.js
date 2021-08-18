import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" style={{color:'white', fontSize:'28px'}}>Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link  >   </Nav.Link>
      <Nav.Link >    </Nav.Link>
      <Nav.Link ><Link to="/" style={{textDecoration:"none", color:'white'}} >Home</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar> 
        </div>
    )
}

export default Header;