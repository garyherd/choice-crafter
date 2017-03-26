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
    this.renderChildren = this.renderChildren.bind(this);
    this.handleUpdateProblem = this.handleUpdateProblem.bind(this);
    this.handleUpdateObjective = this.handleUpdateObjective.bind(this);
    this.handleAddObjective = this.handleAddObjective.bind(this);
    this.handleUpdateAlternative = this.handleUpdateAlternative.bind(this);
    this.handleAddAlternative = this.handleAddAlternative.bind(this);
    this.handleRemoveObjective = this.handleRemoveObjective.bind(this);
    this.handleRemoveAlternative = this.handleRemoveAlternative.bind(this);
  }

  handleUpdateProblem(decisionId, newShortDesc, newLongDesc) {

    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId == decisionId
    })[0];

    if (newShortDesc) {
      targetDecision.decisionShort = newShortDesc;   
    }

    if (newLongDesc) {
      targetDecision.decisionLong = newLongDesc;   
    }
     
    let spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId == decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});
  }
 

  handleUpdateObjective(decisionId, objectiveId, newTitle) {

    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId == decisionId;
    })[0];

    let targetObjective = targetDecision.objectives.filter((objective) => {
      return objective.id == objectiveId;
    })[0];

    if (newTitle) {
      targetObjective.title = newTitle;
    }

    let spliceStart = targetDecision.objectives.findIndex((objectiveObj) => {
      return objectiveObj.id == objectiveId;
    });

    targetDecision.objectives.splice(spliceStart, 1);
    targetDecision.objectives.splice(spliceStart, 0, targetObjective);

    spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId == decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});     
  }

  handleAddObjective(decisionId, newObjective) {
    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId == decisionId;
    })[0];

    targetDecision.objectives.push(newObjective);

    let spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId == decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});       
  }

  handleRemoveObjective(decisionId, objectiveId) {

    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId == decisionId;
    })[0];

    let targetObjective = targetDecision.objectives.filter((objective) => {
      return objective.id == objectiveId;
    })[0];

    let spliceStart = targetDecision.objectives.findIndex((objective) => {
      return objective.id == objectiveId;
    });

    targetDecision.objectives.splice(spliceStart, 1);

    spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId == decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});    
  }

  handleUpdateAlternative(decisionId, alternativeId, newTitle) {

    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId == decisionId;
    })[0];

    let targetAlternative = targetDecision.alternatives.filter((alternative) => {
      return alternative.id == alternativeId;
    })[0];

    if (newTitle) {
      targetAlternative.title = newTitle;
    }

    let spliceStart = targetDecision.alternatives.findIndex((alternative) => {
      return alternative.id == alternativeId;
    });

    targetDecision.alternatives.splice(spliceStart, 1);
    targetDecision.alternatives.splice(spliceStart, 0, targetAlternative);

    spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId == decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});
  } 

  handleAddAlternative(decisionId, newAlternative) {
    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId == decisionId;
    })[0];

    targetDecision.alternatives.push(newAlternative);

    let spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId == decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});  
  }

  handleRemoveAlternative(decisionId, alternativeId) {

    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId == decisionId;
    })[0];

    let targetAlternative = targetDecision.alternatives.filter((alternative) => {
      return alternative.id == alternativeId;
    })[0];

    let spliceStart = targetDecision.alternatives.findIndex((alternative) => {
      return alternative.id == alternativeId;
    });

    targetDecision.alternatives.splice(spliceStart, 1);

    spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId == decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});    
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        decisions: this.state.decisions,
        updateProblem: this.handleUpdateProblem,
        updateObjective: this.handleUpdateObjective,
        addObjective: this.handleAddObjective,
        removeObjective: this.handleRemoveObjective,
        updateAlternative: this.handleUpdateAlternative,
        addAlternative: this.handleAddAlternative,
        removeAlternative: this.handleRemoveAlternative
      });
    });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      firebaseUser ? this.setState({ isLoggedIn: true, firebaseUser: firebaseUser, decisions: DECISIONS_Arr }) 
      : this.setState({ isLoggedIn: false, firebaseUser: firebaseUser, decisions: DECISIONS_Arr });
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
        <NavbarInstance fireBaseSignOut={this.handleFireBaseSignOut} 
                        isLoggedIn={this.state.isLoggedIn} 
                        firebaseUser={this.state.firebaseUser}
        />
        <main>
          {this.renderChildren() || "Welcome to Choice Crafter"}
        </main>
      </div>
    );
  }
}

export default App;


