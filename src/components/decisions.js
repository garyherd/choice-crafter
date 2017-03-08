import React, { Component } from 'react';

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

var DECISIONS_Arr = [
  {uid: 'Fg7D7hAan5QHE3jcdo6n64QYS4a2', decisionShort: "Should I move to a new city?"},
  {uid: 'Fg7D7hAan5QHE3jcdo6n64QYS4a2', decisionShort: "Which office should we move to?"},
  {uid: 'Fg7D7hAan5QHE3jcdo6n64QYS4a2', decisionShort: "Which apartment should I move into?"},
  {uid: '4', decisionShort: "Which programming language should I learn?"},
]

class Decisions extends Component {
  constructor(props) {
    super(props);
    this.state = {decisions: DECISIONS_Arr.filter((decision) => {
      return decision.uid === this.props.params.userId
    })};
  }

  componentDidMount() {

    console.log(this.state.decisions);
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
              <DecisionPanel title={decision.decisionShort} />
            </Col>
          )}
        </Row>
      </Grid>
    );
  }
}


const DecisionPanel = (props) => {

  return (
    <div>
        <Panel header={props.title} bsStyle="primary">
          long description maybe, list of objectives maybe
        </Panel>
    </div>
  );
}

export default Decisions;
