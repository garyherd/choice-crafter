import React, { Component } from 'react';
// import { Navbar, Nav, NavItem} from 'react-bootstrap';

import { browserHistory } from 'react-router';
import uuid from 'uuid';

import NavbarInstance from './components/navbar';
import { DECISIONS_Arr, decisionsDB, refreshDecisions } from './data.js';

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
  }

  handleUpdateProblem(decisionId, newShortDesc, newLongDesc) {

    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId === decisionId
    })[0];

    if (newShortDesc) {
      targetDecision.decisionShort = newShortDesc;   
    }

    if (newLongDesc) {
      targetDecision.decisionLong = newLongDesc;   
    }
     
    let spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId === decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});
  }
 

  handleUpdateObjective(decisionId, objectiveId, newItem) {

    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId === decisionId;
    })[0];

    let targetObjective = targetDecision.objectives.filter((objective) => {
      return objective.id === objectiveId;
    })[0];


    if (newItem) {
      targetObjective["enabled"] = true;
      let key = Object.keys(newItem)[0];
      targetObjective[key] = newItem[key];
    }

    let spliceStart = targetDecision.objectives.findIndex((objectiveObj) => {
      return objectiveObj.id === objectiveId;
    });

    targetDecision.objectives.splice(spliceStart, 1);
    targetDecision.objectives.splice(spliceStart, 0, targetObjective);

    spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId === decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});     
  }

  handleAddObjective(decisionId, newObjective) {
    newObjective.id = uuid.v4();
    newObjective.scale = "(required)";
    newObjective.minMax = "(required)";
    newObjective.unit = "(required)";
    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId === decisionId;
    })[0];

    newObjective["enabled"] = true;

    targetDecision.objectives.push(newObjective);

    let newObjConsequences = this.createNewConsequences(newObjective.title, targetDecision.alternatives, "objective");
    let newDecisionConsequences = targetDecision.consequences.concat(newObjConsequences);
    targetDecision.consequences = newDecisionConsequences;

    let spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId === decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});
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
            isActive: true
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
            isActive: true
          });
        })
      }
    };

    processor[objectStr]();

    return consequences;
  }

  handleRemoveObjective(decisionId, objectiveId) {

    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId === decisionId;
    })[0];

    targetDecision.objectives = targetDecision.objectives.filter((objective) => {
      return objective.id !== objectiveId;
    });

    let spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId === decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});              
  }

  handleUpdateAlternative(decisionId, alternativeId, newItem) {

    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId === decisionId;
    })[0];

    let targetAlternative = targetDecision.alternatives.filter((alternative) => {
      return alternative.id === alternativeId;
    })[0];

    if (newItem) {
      targetAlternative["enabled"] = true;
      let key = Object.keys(newItem)[0];
      targetAlternative[key] = newItem[key];
    }

    

    let spliceStart = targetDecision.alternatives.findIndex((alternative) => {
      return alternative.id === alternativeId;
    });

    targetDecision.alternatives.splice(spliceStart, 1);
    targetDecision.alternatives.splice(spliceStart, 0, targetAlternative);

    spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId === decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});
  } 

  handleAddAlternative(decisionId, newAlternative) {

    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId === decisionId;
    })[0];

    newAlternative["enabled"] = true;

    targetDecision.alternatives.push(newAlternative);

    let newObjConsequences = this.createNewConsequences(newAlternative.title, targetDecision.objectives, "alternative");
    let newDecisionConsequences = targetDecision.consequences.concat(newObjConsequences);
    targetDecision.consequences = newDecisionConsequences;

    let spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId === decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});  
  }

  handleRemoveAlternative(decisionId, alternativeId) {

    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId === decisionId;
    })[0];

    targetDecision.alternatives = targetDecision.alternatives.filter((alternative) => {
      return alternative.id !== alternativeId;
    });

    let spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId === decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});    
  }

  handleUpdateConsequence(decisionId, consequenceId, newItem) {
    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId === decisionId;
    })[0];

    let targetConsequence = targetDecision.consequences.filter((consequence) => {
      return consequence.id === consequenceId;
    })[0];

    if (newItem) {
      let key = Object.keys(newItem)[0];
      targetConsequence[key] = newItem[key];
    }

    let spliceStart = targetDecision.consequences.findIndex((consequenceObj) => {
      return consequenceObj.id === consequenceId;
    });

    targetDecision.consequences.splice(spliceStart, 1);
    targetDecision.consequences.splice(spliceStart, 0, targetConsequence);

    spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId === decisionId;
    });

    decisionsCopy.splice(spliceStart, 1);
    decisionsCopy.splice(spliceStart, 0, targetDecision);

    this.setState({decisions: decisionsCopy});        
  }

  handleAddVirtualConsequence(decisionId, newConsequence) {
    let decisionsCopy = this.state.decisions.slice();
    let targetDecision = decisionsCopy.filter((decision) => {
      return decision.decisionId === decisionId;
    })[0];

    newConsequence["isActive"] = true;
    newConsequence.id = uuid.v4();

    targetDecision.consequences.push(newConsequence);

    let spliceStart = decisionsCopy.findIndex((decisionObj) => {
      return decisionObj.decisionId === decisionId;
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
        removeAlternative: this.handleRemoveAlternative,
        updateConsequence: this.handleUpdateConsequence,
        addVirtualConsequence: this.addVirtualConsequence
      });
    });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      firebaseUser ? this.setState({ isLoggedIn: true, firebaseUser: firebaseUser, decisions: DECISIONS_Arr }) 
      : this.setState({ isLoggedIn: false, firebaseUser: firebaseUser, decisions: [] });
    });

    decisionsDB.open(refreshDecisions);

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


