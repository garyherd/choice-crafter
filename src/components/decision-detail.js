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
  }

  getDecision() {
    let userDecisions = [];
    let userDecision = {};

    userDecisions = this.props.decisions.filter((decision) => {
      return decision.uid === this.props.params.userId
    });

    userDecision = userDecisions.filter((decision) => {
      return decision.decisionId === this.props.params.decisionId
    })[0];

    return userDecision;
  }

  updateProblem(title, description) {
    let decision = this.getDecision();
    this.props.updateProblem(decision.decisionId, title, description);
  }

  getActiveConsequence(objTitle, altTitle) {
    let decision = this.getDecision();
    let foundItem = decision.consequences.filter(consequence => {
      return ((consequence.objTitle === objTitle) && (consequence.altTitle === altTitle) && (consequence.isActive === true))
    });

    return (foundItem.length > 0 ? foundItem[0] : {});
  }

  getInactiveConsequences(objTitle, altTitle) {
    let decision = this.getDecision();
    let foundItems = decision.consequences.filter(consequence => {
      return ((consequence.objTitle === objTitle) && (consequence.altTitle === altTitle) && (consequence.isActive === false))
    });

    return (foundItems.length > 0 ? foundItems : []);    
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
        getInactiveConsequences: this.getInactiveConsequences
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