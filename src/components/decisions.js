import React from 'react';

import { Link } from 'react-router';

import { Grid, Row, Col, Panel, Button, Glyphicon } from 'react-bootstrap';

const Decisions = props => {

  const handleClick = (event) => {
    const userId = props.params.userId;
    props.createNewDecision(userId);
  }

  let userDecisions = props.decisions.filter(decision => decision.uid === props.params.userId);

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <div className="page-header">
            <h1>Your Decisions</h1>
            <p>{props.userInfo.displayName || props.userInfo.email}</p>
            <Button bsStyle="primary" onClick={handleClick}>New Decision</Button>
          </div>
        </Col>
      </Row>
      <Row>
        {userDecisions.map((decision) =>
          <Col sm={12} key={decision.decisionId}>
            <DecisionPanel decision={decision} archiveDecision={props.archiveDecision}/>
          </Col>
        )}
      </Row>
    </Grid>
  );
}


const DecisionPanel = (props) => {

  const decisionDetailUrl = `/decisions/${props.decision.uid}/${props.decision.decisionId}`;

  const handleClick = event => {
    props.archiveDecision(props.decision.decisionId);
  }

  return (
    <div>
      <Panel>
        <Row>
          <Col sm={6}>
            <h3>{props.decision.decisionShort}</h3>
            <Row>
              <Col sm={6}><Link to={decisionDetailUrl}><Glyphicon glyph="folder-open" />&nbsp;&nbsp;Open decision</Link></Col>
              <Col sm={6}><a href="#" onClick={handleClick}><Glyphicon glyph="trash" />&nbsp;Archive decision</a></Col>
            </Row>
          </Col>
          <Col sm={6}>
          <h4></h4>
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
            {/*<Row>
              <Col xs={5}><strong>Consequences:</strong></Col>
              <Col xs={7}>In Progress</Col>
            </Row>
            <Row>
              <Col xs={5}><strong>Trade offs:</strong></Col>
              <Col xs={7}>Not Started</Col>
            </Row>*/}
          </Col>
        </Row>
      </Panel>
    </div>
  );
}

export { Decisions, DecisionPanel };
