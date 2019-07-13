import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
    // since we took out binding we don't really need constructor.
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //     isOpen: false
    //   }
    // default methods like lifecycle methods or render, "this" is available
    // other functions do not have "this available"
    //  this binding is unecessary when using an arrow function
    // this.toggle = this.toggle.bind(this);
    //  }
    state = {
      isOpen: false
    }

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">ShoppingList</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/parmejon">Github</NavLink>
                </NavItem>
                <NavItem>
                  <RegisterModal />
                </NavItem>
                <NavItem>
                  <Logout />
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
      )
    }


}

export default AppNavbar;
