import React from 'react';
import home from '../images/home.jpg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle=()=> {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const mystyle = {
        height:"100%",
        width:"100%"
      };
    return (
      <div>
        <Navbar color="primary" light expand="md">
          <NavbarBrand href="/" className="text-white">Library Management System</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <Form inline>
                <FormGroup>
                <Label for="username" hidden>User Name</Label>
                <Input type="text" name="username" id="username" placeholder="User Name" />
                </FormGroup>
                {' '}
                <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                <NavLink href="/components/"><Button color="success">Login</Button></NavLink>
             </Form>
              <NavItem>
                <NavLink href=""><Button color="warning">Create Account</Button></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <img src={home} alt="" style={mystyle}/>
      </div>
    );
  }
}
export default Login;