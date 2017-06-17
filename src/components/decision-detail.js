import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import NavTabs from './nav-tabs';


class DecisionDetail extends Component {
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
    this.getDecision = this.getDecision.bind(this);
    this.updateProblem = this.updateProblem.bind(this);
    this.getActiveConsequence = this.getActiveConsequence.bind(this);
    this.getInactiveConsequences = this.getInactiveConsequences.bind(this);
    this.getInitialConsequence = this.getInitialConsequence.bind(this);
    this.findAlternativeByTitle = this.findAlternativeByTitle.bind(this);
    this.findObjectiveByTitle = this.findObjectiveByTitle.bind(this);
    this.resetTradeoffs = this.resetTradeoffs.bind(this);
  }

  getDecision() {
    let userDecisions = [];
    let userDecision = {};

    userDecisions = this.props.decisions.filter(decision => decision.uid === this.props.params.userId);
    userDecision = userDecisions.filter(decision => decision.decisionId === this.props.params.decisionId)[0];

    return userDecision;
  }

  findAlternativeByTitle(title) {
    const decision = this.getDecision();
    const foundAlternative = decision.alternatives.filter(alternative => alternative.title === title);

    return foundAlternative[0] || {id: ""};
  };

  findObjectiveByTitle(title) {
    const decision = this.getDecision();
    const foundObjective = decision.objectives.filter(objective => objective.title === title);

    return foundObjective[0] || {id: ""};
  };

  updateProblem(title, description) {
    let decision = this.getDecision();
    this.props.updateProblem(decision.decisionId, title, description);
  }

  getInitialConsequence(objId, altId) {
    let decision = this.getDecision();
    let foundItem = decision.consequences.filter(consequence => {
      return ((consequence.objId === objId) && (consequence.altId === altId) && (consequence.isInitial === true))
    });

    return (foundItem.length > 0 ? foundItem[0] : {});    
  }

  getActiveConsequence(objId, altId) {
    let decision = this.getDecision();
    let foundItem = decision.consequences.filter(consequence => {
      return ((consequence.objId === objId) && (consequence.altId === altId) && (consequence.isActive === true))
    });

    return (foundItem.length > 0 ? foundItem[0] : {});
  }

  getInactiveConsequences(objId, altId) {
    let decision = this.getDecision();
    let foundItems = decision.consequences.filter(consequence => {
      return ((consequence.objId === objId) && (consequence.altId === altId) && (consequence.isActive === false))
    });

    return (foundItems.length > 0 ? foundItems : []);    
  }

  resetTradeoffs() {
    let decision = this.getDecision();
    this.props.resetTradeoffs(decision.decisionId);
  }

  renderChildren() {

    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        decision: this.getDecision(),
        updateProblem: this.updateProblem,
        updateObjective: this.props.updateObjective,
        addObjective: this.props.addObjective,
        removeObjective: this.props.removeObjective,
        updateAlternative: this.props.updateAlternative,
        addAlternative: this.props.addAlternative,
        removeAlternative: this.props.removeAlternative,
        updateConsequence: this.props.updateConsequence,
        addVirtualConsequence: this.props.addVirtualConsequence,
        getActiveConsequence: this.getActiveConsequence,
        getInactiveConsequences: this.getInactiveConsequences,
        getInitialConsequence: this.getInitialConsequence,
        findAlternativeByTitle: this.findAlternativeByTitle,
        findObjectiveByTitle: this.findObjectiveByTitle,
        resetTradeoffs: this.resetTradeoffs
      });
    });
  }

  render() {

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <NavTabs userDecision={this.getDecision()} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>{this.renderChildren()}</Col>
        </Row>

      </Grid>
    );
  }
}

export default DecisionDetail;