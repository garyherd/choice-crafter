import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

import { Link, browserHistory } from 'react-router';

import * as firebase from 'firebase';

import './App.css';

const logoutText = "Log Out";
const loginText = "Log In";

function MainLayout(props) {
    return (
      <div className="App">
        <NavbarInstance/>
        <main>
          {props.children || "Welcome to Choice Crafter"}
        </main>
      </div>
    );
}

class NavbarInstance extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: false, firebaseUser: {}};
    this.handleSelect = this.handleSelect.bind(this);
    this.fireBaseSignOut = this.fireBaseSignOut.bind(this);
  }

  changeLogInStatus(status, user) {
    this.setState((prevState, props) => ({
      isLoggedIn: status,
      firebaseUser: user
    }));
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      firebaseUser ? this.changeLogInStatus(true, firebaseUser) : this.changeLogInStatus(false, firebaseUser);
    });
  }

  fireBaseSignOut() {
    firebase.auth().signOut().then(
      (result) => {
        this.changeLogInStatus(false, {});
        browserHistory.push('/');
      }
    );
  }

  handleSelect(eventKey) {

    switch(eventKey) {
      case 4:
        browserHistory.push('/decisions/' + this.state.firebaseUser.uid);
        break;
      case 5:
        this.fireBaseSignOut();
        break
      case 6:
        browserHistory.push("/signin");
        break;
      default:
        browserHistory.push("/");
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Navbar default collapseOnSelect fluid onSelect={this.handleSelect}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Choice Crafter</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={4}>My Decisions</NavItem>
              <NavItem eventKey={5}>Log Out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    return (
      <Navbar default collapseOnSelect fluid onSelect={this.handleSelect}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Choice Crafter</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={6}>Log In</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}




export default MainLayout;

