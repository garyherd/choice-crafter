import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import DECISIONS_Arr from '../data.js';
import NavTabs from './nav-tabs';


class DecisionDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {decision: DECISIONS_Arr.filter((decision) => {
      return decision.decisionId == this.props.params.decisionId
    })[0]};

    this.renderChildren = this.renderChildren.bind(this);
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        decision: this.state.decision
      });
    });
  }

  render() {
    return (
        <Grid>
          <Row>
            <Col xs={12}>
                <NavTabs decision={this.state.decision}/>
            </Col>
          </Row>
            <Col xs={12}>{this.renderChildren()}</Col>
        </Grid>
      );
  }
}

export default DecisionDetail;