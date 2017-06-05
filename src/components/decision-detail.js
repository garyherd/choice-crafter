import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import NavTabs from './nav-tabs';


class DecisionDetail extends Component {
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
    this.getDecision = this.getDecision.bind(this);
    this.updateProblem = this.updateProblem.bind(this);
    this.getConsequence = this.getConsequence.bind(this);
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

  getConsequence(objTitle, altTitle) {
    let decision = this.getDecision();
    let foundItem = decision.consequences.filter(consequence => {
      return ((consequence.objTitle === objTitle) && (consequence.altTitle === altTitle))
    });

    return (foundItem.length > 0 ? foundItem[0] : {});
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
        getConsequence: this.getConsequence,
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