import React, { Component } from 'react';

import { Link, browserHistory } from 'react-router';

import { Grid, Row, Col, Panel, Button, Nav, NavItem } from 'react-bootstrap';

import DECISIONS_Arr from '../data.js';
import Problems, {Consequences, TradeOffs} from './prob-obj-alt';
import NavTabs from './nav-tabs';


class DecisionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {decision: DECISIONS_Arr.filter((decision) => {
      return decision.decisionId == this.props.params.decisionId
    })[0]};
  }

  render() {
    return (
        <Grid>
          <Row>
            <Col xs={12}>
                <NavTabs decision={this.state.decision}/>
            </Col>
          </Row>
          {this.props.children}
        </Grid>
      );
  }
}

export default DecisionDetail;