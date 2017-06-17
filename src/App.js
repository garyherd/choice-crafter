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
    this.handleAddVirtualConsequence = this.handleAddVirtualConsequence.bind(this);
    this.refreshDecisions = this.refreshDecisions.bind(this);
    this.loadDatabase = this.loadDatabase.bind(this);
    this.handleResetTradeOffs = this.handleResetTradeOffs.bind(this);
    this.handleCreateNewDecision = this.handleCreateNewDecision.bind(this);
    this.handleArchiveDecision = this.handleArchiveDecision.bind(this);
  }

  handleUpdateProblem(decisionId, newShortDesc, newLongDesc) {
    const updater = {
      decisionId: decisionId,
      newShortDesc: newShortDesc,
      newLongDesc: newLongDesc,
      successCallback: this.refreshDecisions,
      itemUpdater: (decision) => {
        if (newShortDesc) {
          decision.decisionShort = newShortDesc;
        }

        if (newLongDesc) {
          decision.decisionLong = newLongDesc;
        }
      }
    }
    //choiceCrafterDb.updateProblem(decisionId, newShortDesc, newLongDesc, this.refreshDecisions)
    choiceCrafterDb.decisionUpdater(updater);
  }
 
  handleArchiveDecision(decisionId) {
    const updater = {
      decisionId: decisionId,
      successCallback: this.refreshDecisions,
      itemUpdater: (decision) => {
        decision.isActive = false;
      }
    };

    choiceCrafterDb.decisionUpdater(updater);
  }

  handleUpdateObjective(decisionId, objectiveId, newItem) {
    const updater = {
      decisionId: decisionId,
      objectiveId: objectiveId,
      newItem: newItem,
      successCallback: this.refreshDecisions,
      itemUpdater: (decision) => {
        const targetObjectIndex = decision.objectives.findIndex(objective => objective.id === objectiveId);

        if (newItem) {
          decision.objectives[targetObjectIndex]["enabled"] = true;
          const key = Object.keys(newItem)[0];
          decision.objectives[targetObjectIndex][key] = newItem[key];
        };
      }
    }

    choiceCrafterDb.decisionUpdater(updater);
  }

  handleAddObjective(decisionId, newObjective) {
    const updater = {
      decisionId: decisionId,
      newObjective: newObjective,
      successCallback: this.refreshDecisions,
      createNewConsequences: this.createNewConsequences,
      itemUpdater: (decision) => {
        newObjective["enabled"] = true;
        newObjective.id = uuid.v4();
        newObjective.scale = "(required)";
        newObjective.minMax = "(required)";
        newObjective.unit = "(required)";

        decision.objectives.push(newObjective);

        const newObjConsequences = this.createNewConsequences(newObjective.title, decision.alternatives, "objective");
        const newDecisionConsequences = decision.consequences.concat(newObjConsequences);
        decision.consequences = newDecisionConsequences;
      }
    }

    choiceCrafterDb.decisionUpdater(updater);
  }

  handleRemoveObjective(decisionId, objectiveId) {
    const updater = {
      decisionId: decisionId,
      objectiveId: objectiveId,
      successCallback: this.refreshDecisions,
      itemUpdater: (decision) => {
        decision.objectives = decision.objectives.filter(objective => objective.id !== objectiveId);
      }
    }

    choiceCrafterDb.decisionUpdater(updater);
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

    choiceCrafterDb.decisionUpdater(updater);
  }

  handleResetTradeOffs(decisionId) {

    const updater = {
      decisionId: decisionId,
      successCallback: this.refreshDecisions,
      itemUpdater: (decision) => {
        decision.consequences = decision.consequences.filter(item => item.isInitial === true);
        decision.consequences.forEach(element => element.isActive = true);
        decision.objectives.forEach(element => element.enabled = true);
        decision.alternatives.forEach(element => element.enabled = true);
      }
    };

    choiceCrafterDb.decisionUpdater(updater);
  }

  handleCreateNewDecision(userId) {
    let today = new Date();
    const updater = {
      userId: userId,
      successCallback: this.refreshDecisions,
      newDecision: {
        decisionId: uuid.v4(),
        uid: userId,
        decisionShort: "Type short description of problem",
        decisionLong: "Enter more information about decision as needed",
        objectives: [],
        alternatives: [],
        consequences: [],
        isActive: true,
        createdDate: today.toDateString(),
      }
    };

    choiceCrafterDb.newDecision(updater);
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
        addVirtualConsequence: this.handleAddVirtualConsequence,
        resetTradeoffs: this.handleResetTradeOffs,
        createNewDecision: this.handleCreateNewDecision,
        archiveDecision: this.handleArchiveDecision
      });
    });
  }

  refreshDecisions() {
    choiceCrafterDb.fetchDecisions(decisions => {
      decisions = decisions.filter(item => item.isActive === true);
      this.setState({decisions: decisions});
    }); 
  }

  loadDatabase() {
    choiceCrafterDb.open(() => {
      // choiceCrafterDb.getRecordCount(count => {
      //   if (count === 0) {
      //     choiceCrafterDb.loadExampleDecision(this.refreshDecisions, this.state.firebaseUser.uid);
      //   } else {
      //     this.refreshDecisions();
      //   }
      // });
      choiceCrafterDb.fetchDecisions(decisions => {
        decisions = decisions.filter(item => (item.uid === this.state.firebaseUser.uid) );
        if (decisions.length === 0) {
          choiceCrafterDb.loadExampleDecision(this.refreshDecisions, this.state.firebaseUser.uid);
        } else {
          this.refreshDecisions();
        }
      });
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


