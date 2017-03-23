import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

import { Link, browserHistory } from 'react-router';

import NavbarInstance from './components/navbar';
import DECISIONS_Arr from './data.js';

import * as firebase from 'firebase';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decisions: [],
      isLoggedIn: false, 
      firebaseUser: {}
    };
    this.handleFireBaseSignOut = this.handleFireBaseSignOut.bind(this);

  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      firebaseUser ? this.setState({ isLoggedIn: true, firebaseUser: firebaseUser }) 
      : this.setState({ isLoggedIn: false, firebaseUser: firebaseUser });
    });
  } 

  handleFireBaseSignOut() {
    firebase.auth().signOut().then(
      (result) => {
        this.setState((prevState, props) => ({ isLoggedIn: false, firebaseUser: {} }));
        browserHistory.push('/');
      }
    );
  }    

  render() {
    return (
      <div className="App">
        <NavbarInstance fireBaseSignOut={this.handleFireBaseSignOut} isLoggedIn={this.state.isLoggedIn} firebaseUser={this.state.firebaseUser} />
        <main>
          {this.props.children || "Welcome to Choice Crafter"}
        </main>
      </div>
    );
  }
}

export default App;


