import React, { Component } from 'react';

import { Link, browserHistory } from 'react-router';

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

import DECISIONS_Arr from '../data.js';

class Decisions extends Component {
  constructor(props) {
    super(props);
    this.state = {decisions: DECISIONS_Arr.filter((decision) => {
      return decision.uid == this.props.params.userId
    })};
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className="page-header">
              <h1>Your Decisions</h1>
              <p>User ID - {this.props.params.userId}</p>
              <Button bsStyle="primary">New Decision</Button>
            </div>
          </Col>
        </Row>
        <Row>
          {this.state.decisions.map((decision, index) =>
            <Col sm={12} key={index}>
              <DecisionPanel decision={decision} />
            </Col>
          )}
        </Row>
      </Grid>
    );
  }
}


const DecisionPanel = (props) => {

  const decisionDetailUrl = `/decisions/${props.decision.uid}/${props.decision.decisionId}`;

  return (
    <div>
      <Panel>        
        <Row>
          <Col sm={6}>
            <h3>{props.decision.decisionShort}</h3>
            <Row>
              <Col sm={6}><Link to={decisionDetailUrl}><span className="glyphicon glyphicon-folder-open"></span>&nbsp;&nbsp;Open decision</Link></Col>
              <Col sm={6}><span className="glyphicon glyphicon-trash"></span>&nbsp;Archive decision</Col>
            </Row>         
          </Col>
          <Col sm={6}>
            <Row>
              <Col xs={5}><strong>Created:</strong></Col>
              <Col xs={7}>{props.decision.createdDate}</Col>                
            </Row>
            <Row>
              <Col xs={5}><strong>Objectives:</strong></Col>
              <Col xs={7}>{props.decision.objectives.length}</Col>                
            </Row>              
            <Row>
              <Col xs={5}><strong>Alternatives:</strong></Col>
              <Col xs={7}>{props.decision.alternatives.length}</Col>                
            </Row>
            <Row>
              <Col xs={5}><strong>Consequences:</strong></Col>
              <Col xs={7}>In Progress</Col>                
            </Row>
            <Row>
              <Col xs={5}><strong>Trade offs:</strong></Col>
              <Col xs={7}>Not Started</Col>                
            </Row>                               
          </Col>            
        </Row>
      </Panel>
    </div>
  );
}


export default Decisions;
