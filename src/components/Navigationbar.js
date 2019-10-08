import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar,NavbarBrand,Nav} from 'reactstrap';

class Navigationbar extends Component {
      render() {
        return (
          <div>
            <Navbar color="primary" light expand="md">
              <NavbarBrand href="/" className="text-white">Library Management System</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <Link to="/" color="white"><span style={{color:"white", fontSize:"20px", fontWeight:"bold"}}>Search Books</span> </Link>
                    <Link to="/cart" color="white"><span style={{color:"white", fontSize:"20px", fontWeight:"bold", padding:"50px"}}> Cart</span> </Link>
                </Nav>
            </Navbar>
          </div>
        );
      }
    }

export default Navigationbar
