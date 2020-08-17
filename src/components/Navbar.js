import React from 'react';
import Nav from 'react-bootstrap/Nav'

const axios = require('axios').default;
const Navbar = (props) => {
const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }

  return (  
        <div>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/login">Log In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/myAccount">My Account</Nav.Link>
                </Nav.Item>
                { 
                    props.loggedInStatus ? 
                    <Nav.Item>
                        <Nav.Link href="/logout" onClick={handleClick} >Logout</Nav.Link> 
                    </Nav.Item> :
                    null
                }
            </Nav>
        </div>
    )      
};

export default Navbar;