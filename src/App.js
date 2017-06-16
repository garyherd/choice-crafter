import React, { Component } from 'react';
// import { Navbar, Nav, NavItem} from 'react-bootstrap';

import { browserHistory } from 'react-router';
import uuid from 'uuid';

import NavbarInstance from './components/navbar';
import { choiceCrafterDb } from './data.js';

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
    this.handleUpdateConsequence = this.handleUpdateConsequence.bind(this);
    this.createNewConsequences = this.createNewConsequences.bind(this);
    this.handleAddVirtualConsequence = this.handleAddVirtualConsequence.bind(this);
    this.refreshDecisions = this.refreshDecisions.bind(this);
    this.loadDatabase = this.loadDatabase.bind(this);
  }

  handleUpdateProblem(decisionId, newShortDesc, newLongDesc) {
    choiceCrafterDb.updateProblem(decisionId, newShortDesc, newLongDesc, this.refreshDecisions)
  }
 

  handleUpdateObjective(decisionId, objectiveId, newItem) {
    choiceCrafterDb.updateObjective(decisionId, objectiveId, newItem, this.refreshDecisions)
  }

  handleAddObjective(decisionId, newObjective) {
    choiceCrafterDb.addObjective(decisionId, newObjective, this.createNewConsequences, this.refreshDecisions);
  }

  handleRemoveObjective(decisionId, objectiveId) {
    choiceCrafterDb.removeObjective(decisionId, objectiveId, this.refreshDecisions); 
  }

  handleUpdateAlternative(decisionId, alternativeId, newItem) {
    choiceCrafterDb.updateAlternative(decisionId, alternativeId, newItem, this.refreshDecisions);
  } 

  handleAddAlternative(decisionId, newAlternative) {
    choiceCrafterDb.addAlternative(decisionId, newAlternative, this.createNewConsequences, this.refreshDecisions);
  }

  handleRemoveAlternative(decisionId, alternativeId) {
    choiceCrafterDb.removeAlternative(decisionId, alternativeId, this.refreshDecisions);
  }

  handleUpdateConsequence(decisionId, consequenceId, newItem) {
    choiceCrafterDb.updateConsequence(decisionId, consequenceId, newItem, this.refreshDecisions);     
  }

  handleAddVirtualConsequence(decisionId, newConsequence) {
    // let decisionsCopy = this.state.decisions.slice();
    // let targetDecision = decisionsCopy.filter((decision) => {
    //   return decision.decisionId === decisionId;
    // })[0];

    // newConsequence["isActive"] = true;
    // newConsequence.id = uuid.v4();

    // targetDecision.consequences.push(newConsequence);

    // let spliceStart = decisionsCopy.findIndex((decisionObj) => {
    //   return decisionObj.decisionId === decisionId;
    // });

    // decisionsCopy.splice(spliceStart, 1);
    // decisionsCopy.splice(spliceStart, 0, targetDecision);

    // this.setState({decisions: decisionsCopy});

    choiceCrafterDb.addVirtualConsequence(decisionId, newConsequence, this.refreshDecisions);    
  }

  createNewConsequences(newObjectTitle, altsOrobjectives, objectStr) {
    let consequences = [];
    let processor = {
      "objective": () => {
        altsOrobjectives.forEach((item) => {
          consequences.push({
            id: uuid.v4(),
            objTitle: newObjectTitle,
            altTitle: item.title,
            score: '(required)',
            description: "",
            isActive: true,
            isInitial: true
          });
        })
      },
      "alternative": () => {
        altsOrobjectives.forEach((item) => {
          consequences.push({
            id: uuid.v4(),
            objTitle: item.title,
            altTitle: newObjectTitle,
            score: '(required)',
            description: "",
            isActive: true,
            isInitial: true
          });
        })
      }
    };

    processor[objectStr]();

    return consequences;
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
        removeAlternative: this.handleRemoveAlternative,
        updateConsequence: this.handleUpdateConsequence,
        addVirtualConsequence: this.handleAddVirtualConsequence
      });
    });
  }

  refreshDecisions() {
    choiceCrafterDb.fetchDecisions(decisions => this.setState({decisions: decisions}))
  }

  loadDatabase() {
    choiceCrafterDb.open(() => {
      choiceCrafterDb.getRecordCount(
        count => {
          if (count === 0) {
            choiceCrafterDb.loadExampleDecision(this.refreshDecisions);
          } else {
            this.refreshDecisions();
          }
        }
      )
    });
  }

  componentDidMount() {
 
    firebase.auth().onAuthStateChanged(firebaseUser => {
      firebaseUser ? this.setState({ isLoggedIn: true, firebaseUser: firebaseUser }, () => this.loadDatabase()) 
      : this.setState({ isLoggedIn: false, firebaseUser: firebaseUser, decisions: [] });
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


