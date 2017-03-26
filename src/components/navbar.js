import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

import { Link, browserHistory } from 'react-router';

import * as firebase from 'firebase';

class NavbarInstance extends Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this);
  }


  handleSelect(eventKey) {

    switch(eventKey) {
      case 4:
        browserHistory.push('/decisions/' + this.props.firebaseUser.uid);
        break;
      case 5:
        this.props.fireBaseSignOut();
        break
      case 6:
        browserHistory.push("/signin");
        break;
      default:
        browserHistory.push("/");
    }
  }

  render() {
    let nav = null;

    if (this.props.isLoggedIn) {
        nav = (
            <Nav pullRight>
                <NavItem eventKey={4}>My Decisions</NavItem>
                <NavItem eventKey={5}>Log Out</NavItem>
            </Nav>
        );

    } else {
        nav = (
          <Nav pullRight>
            <NavItem eventKey={6}>Log In</NavItem>
          </Nav>
        );
    }

    return (
    <Navbar inverse collapseOnSelect fluid onSelect={this.handleSelect}>
        <Navbar.Header>
        <Navbar.Brand>
            <Link to="/">Choice Crafter</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            {nav}
        </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavbarInstance;