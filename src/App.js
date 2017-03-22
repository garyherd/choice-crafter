import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

import { Link, browserHistory } from 'react-router';

import NavbarInstance from './components/navbar';
import DECISIONS_Arr from './data.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {decisions: []};

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="App">
        <NavbarInstance/>
        <main>
          {this.props.children || "Welcome to Choice Crafter"}
        </main>
      </div>
    );
  }
}



export default App;


