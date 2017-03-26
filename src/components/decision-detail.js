import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import DECISIONS_Arr from '../data.js';
import NavTabs from './nav-tabs';


class DecisionDetail extends Component {
  constructor(props) {
    super(props);

    // this.state = {decision: DECISIONS_Arr.filter((decision) => {
    //   return decision.decisionId == this.props.params.decisionId
    // })[0]};

    this.renderChildren = this.renderChildren.bind(this);
    this.getDecision = this.getDecision.bind(this);
  }

  getDecision() {
    let userDecisions = [];
    let userDecision = {};

    userDecisions = this.props.decisions.filter((decision) => {
      return decision.uid == this.props.params.userId
    });

    userDecision = userDecisions.filter((decision) => {
      return decision.decisionId == this.props.params.decisionId
    })


    return userDecision[0];
  }

  renderChildren() {

    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        decision: this.getDecision(),
        updateProblem: this.props.updateProblem,
        updateObjective: this.props.updateObjective,
        addObjective: this.props.addObjective,
        removeObjective: this.props.removeObjective,
        updateAlternative: this.props.updateAlternative,
        addAlternative: this.props.addAlternative,
        removeAlternative: this.props.removeAlternative
      });
    });
  }

  render() {

    return (
        <Grid>
          <Row>
            <Col xs={12}>
                <NavTabs userDecision={this.getDecision()}/>
            </Col>
          </Row>
            <Col xs={12}>{this.renderChildren()}</Col>
        </Grid>
    );
  }
}

export default DecisionDetail;