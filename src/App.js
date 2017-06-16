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
    //this.createNewConsequences = this.createNewConsequences.bind(this);
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
    const updater = {
      decisionId: decisionId,
      alternativeId: alternativeId,
      newItem: newItem,
      successCallback: this.refreshDecisions,
      itemUpdater: (decision) => {
        const alternativeIndex = decision.alternatives.findIndex(alternative => alternative.id === alternativeId);

        if (newItem) {
          decision.alternatives[alternativeIndex]["enabled"] = true;
          const key = Object.keys(newItem)[0];
          decision.alternatives[alternativeIndex][key] = newItem[key];
        };
      }
    }
    //choiceCrafterDb.updateAlternative(decisionId, alternativeId, newItem, this.refreshDecisions);
    choiceCrafterDb.decisionUpdater(updater);
  } 

  handleAddAlternative(decisionId, newAlternative) {
    const updater = {
      decisionId: decisionId,
      newAlternative: newAlternative,
      successCallback: this.refreshDecisions,
      createNewConsequences: this.createNewConsequences,
      itemUpdater: (decision) => {
        newAlternative["enabled"] = true;
        decision.alternatives.push(newAlternative);
        const newObjConsequences = this.createNewConsequences(newAlternative.title, decision.objectives, "alternative");
        const newDecisionConsequences = decision.consequences.concat(newObjConsequences);
        decision.consequences = newDecisionConsequences;
      }     
    }
    //choiceCrafterDb.addAlternative(decisionId, newAlternative, this.createNewConsequences, this.refreshDecisions);
    choiceCrafterDb.decisionUpdater(updater);
  }

  handleRemoveAlternative(decisionId, alternativeId) {
    const updater = {
      decisionId: decisionId,
      alternativeId: alternativeId,
      successCallback: this.refreshDecisions,
      itemUpdater: (decision) => {
        decision.alternatives = decision.alternatives.filter(alternative => alternative.id !== alternativeId);
      }
    }
    //choiceCrafterDb.removeAlternative(decisionId, alternativeId, this.refreshDecisions);
    choiceCrafterDb.decisionUpdater(updater);
  }

  handleUpdateConsequence(decisionId, consequenceId, newItem) {
    const updater = {
      decisionId: decisionId,
      consequenceId: consequenceId,
      newItem: newItem,
      successCallback: this.refreshDecisions,
      itemUpdater: (decision) => {
        const consequenceIndex = decision.consequences.findIndex(consequence => (consequence.id === consequenceId && consequence.isActive === true));

        if (newItem) {
          const key = Object.keys(newItem)[0];
          decision.consequences[consequenceIndex][key] = newItem[key];
        };
      }
    }
    //choiceCrafterDb.updateConsequence(decisionId, consequenceId, newItem, this.refreshDecisions);
    choiceCrafterDb.decisionUpdater(updater);    
  }

  handleAddVirtualConsequence(decisionId, newConsequence) {
    const updater = {
      decisionId: decisionId,
      newConsequence: newConsequence,
      successCallback: this.refreshDecisions,
      itemUpdater: (decision) => {
        newConsequence["isActive"] = true;
        newConsequence.id = uuid.v4();
        decision.consequences.push(newConsequence);
      }
    };

    //choiceCrafterDb.addVirtualConsequence(decisionId, newConsequence, this.refreshDecisions);
    choiceCrafterDb.decisionUpdater(updater);
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


