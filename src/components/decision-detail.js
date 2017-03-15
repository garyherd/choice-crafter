import React, { Component } from 'react';

import { Link, browserHistory } from 'react-router';

import { Grid, Row, Col, Panel, Button, Nav, NavItem } from 'react-bootstrap';

import DECISIONS_Arr from '../data.js';
import Problems, {Consequences, TradeOffs} from './prob-obj-alt';


class DecisionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {decision: DECISIONS_Arr.filter((decision) => {
      return decision.decisionId == this.props.params.decisionId
    })[0]};
  }

  componentDidMount() {
      console.log(this.props.params.userId);
      console.log(this.props.params.decisionId);
      console.log(this.state.decision);
  }


  
  render() {
    return (
        <Grid>
          <Row>
            <Col xs={12}>
                <NavTabs/>
                <div>{this.props.children}</div>
            </Col>
          </Row>
        </Grid>
      );
  }
}

class NavTabs extends Component {

    handleSelect(eventKey) {
        event.preventDefault();
        alert(`selected ${eventKey}`);

        switch(eventKey) {
            case 1:
                browserHistory.push('/decisions/' + this.state.firebaseUser.uid);
                break;
            case 2:
                this.fireBaseSignOut();
                break
            case 3:
                browserHistory.push("/signin");
                break;
            default:
                browserHistory.push("/");
        }
    }

    render() {
        return (
            <Nav bsStyle="tabs" activeKey={this.props.activeKey} onSelect={this.handleSelect}>
                <NavItem eventKey={1}>Problem/Objectives/Alternatives</NavItem>
                <NavItem eventKey={2}>Consequnces</NavItem>
                <NavItem eventKey={3}>Tradeoffs</NavItem>
            </Nav>
        );
    }
}


export default DecisionDetail;