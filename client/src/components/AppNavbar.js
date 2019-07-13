import React, { Component, Fragment } from 'react';
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
import PropTypes from 'prop-types';
import Logout from './auth/Logout';
import Login from './auth/LoginModal';
import { connect } from 'react-redux';

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

    static propTypes = {
      auth: PropTypes.object.isRequired
    }

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      const { isAuthenticated, user } =  this.props.auth

      const authLinks = (
        <Fragment>
          <NavItem>
            <span className="navbar-text mr-3">
              <strong>{ user ? `Welcome ${user.name}` : ''}</strong>
            </span>
          </NavItem>
          <NavItem>
            <Logout />
          </NavItem>
        </Fragment>
      );

      const guestLinks = (
        <Fragment>

          <NavItem>
            <RegisterModal />
          </NavItem>
          <NavItem>
            <Login />
          </NavItem>

        </Fragment>
      );

      return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">ShoppingList</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              { isAuthenticated ? authLinks : guestLinks }
                <NavItem>
                  <NavLink href="https://github.com/parmejon">Github</NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
      )
    }


}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar);
