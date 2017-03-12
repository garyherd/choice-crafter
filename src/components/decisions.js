import React, { Component } from 'react';

import { Link, browserHistory } from 'react-router';

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

var DECISIONS_Arr = [
  {uid: 'Fg7D7hAan5QHE3jcdo6n64QYS4a2', decisionShort: "Should I move to a new city?"},
  {uid: 'Fg7D7hAan5QHE3jcdo6n64QYS4a2', decisionShort: "Which office should we move to?"},
  {uid: 'Fg7D7hAan5QHE3jcdo6n64QYS4a2', decisionShort: "Which apartment should I move into?"},
  {uid: '4', decisionShort: "Which programming language should I learn?"},
]

var DECISIONS_Arr_2 = [
  {
    decisionId: 0,
    uid: 'Fg7D7hAan5QHE3jcdo6n64QYS4a2', 
    decisionShort: "Which job should I take?",
    decisionLong: "Planning to take time off from college to help relative recover from a serious illness",
    objectives: [
      {id: 0, title: "Monthly Salary", description: ""},
      {id: 1, title: "Flexibility", description: "need to able to deal with emergencies"},
      {id: 2, title: "Business Skills Development", description: "gain some experience that will useful when I return school"},
      {id: 3, title: "Annual vacation days", description: ""},
      {id: 4, title: "Benefits", description: ""},
      {id: 5, title: "Enjoyment", description: ""}
    ],
    alternatives: [
      {id: 0, title: "Job A", description: ""},
      {id: 1, title: "Job B", description: ""},
      {id: 2, title: "Job C", description: ""},
      {id: 3, title: "Job D", description: ""},
      {id: 4, title: "Job E", description: ""},
    ],
    consequences: [
      {objId: 0, altId: 0, title: 2000, description: ""},
      {objId: 0, altId: 1, title: 2400, description: ""},
      {objId: 0, altId: 2, title: 1800, description: ""},
      {objId: 0, altId: 3, title: 1900, description: ""},
      {objId: 0, altId: 4, title: 2200, description: ""},
      {objId: 1, altId: 0, title: "moderate", description: ""},
      {objId: 1, altId: 1, title: "low", description: ""},
      {objId: 1, altId: 2, title: "high", description: ""},
      {objId: 1, altId: 3, title: "moderate", description: ""},
      {objId: 1, altId: 4, title: "none", description: ""},
      {objId: 2, altId: 0, title: "computer", description: ""},
      {objId: 2, altId: 1, title: "people management, computer", description: ""},
      {objId: 2, altId: 2, title: "operations, computer", description: ""},
      {objId: 2, altId: 3, title: "organization", description: ""},
      {objId: 2, altId: 4, title: "time management, multitasking", description: ""}, 
      {objId: 3, altId: 0, title: 14, description: ""},
      {objId: 3, altId: 1, title: 12, description: ""},
      {objId: 3, altId: 2, title: 10, description: ""},
      {objId: 3, altId: 3, title: 15, description: ""},
      {objId: 3, altId: 4, title: 12, description: ""},   
      {objId: 4, altId: 0, title: "health, dental, retirement", description: ""},
      {objId: 4, altId: 1, title: "health, dental", description: ""},
      {objId: 4, altId: 2, title: "health", description: ""},
      {objId: 4, altId: 3, title: "health, retirement", description: ""},
      {objId: 4, altId: 4, title: "health, dental", description: ""}, 
      {objId: 5, altId: 0, title: "great", description: ""},
      {objId: 5, altId: 1, title: "good", description: ""},
      {objId: 5, altId: 2, title: "good", description: ""},
      {objId: 5, altId: 3, title: "great", description: ""},
      {objId: 5, altId: 4, title: "boring", description: ""},                           
    ],
    isActive: true,
    createdDate: "3/10/2017",
  },
  {
    decisionId: 1,
    uid: '4', 
    decisionShort: "Which job should I take?",
    decisionLong: "Planning to take time off from college to help relative recover from a serious illness",
    objectives: [
      {id: 0, title: "Monthly Salary", description: ""},
      {id: 1, title: "Flexibility", description: "need to able to deal with emergencies"},
      {id: 2, title: "Business Skills Development", description: "gain some experience that will useful when I return school"},
      {id: 3, title: "Annual vacation days", description: ""},
      {id: 4, title: "Benefits", description: ""},
      {id: 5, title: "Enjoyment", description: ""}
    ],
    alternatives: [
      {id: 0, title: "Job A", description: ""},
      {id: 1, title: "Job B", description: ""},
      {id: 2, title: "Job C", description: ""},
      {id: 3, title: "Job D", description: ""},
      {id: 4, title: "Job E", description: ""},
    ],
    consequences: [
      {objId: 0, altId: 0, title: 2000, description: ""},
      {objId: 0, altId: 1, title: 2400, description: ""},
      {objId: 0, altId: 2, title: 1800, description: ""},
      {objId: 0, altId: 3, title: 1900, description: ""},
      {objId: 0, altId: 4, title: 2200, description: ""},
      {objId: 1, altId: 0, title: "moderate", description: ""},
      {objId: 1, altId: 1, title: "low", description: ""},
      {objId: 1, altId: 2, title: "high", description: ""},
      {objId: 1, altId: 3, title: "moderate", description: ""},
      {objId: 1, altId: 4, title: "none", description: ""},
      {objId: 2, altId: 0, title: "computer", description: ""},
      {objId: 2, altId: 1, title: "people management, computer", description: ""},
      {objId: 2, altId: 2, title: "operations, computer", description: ""},
      {objId: 2, altId: 3, title: "organization", description: ""},
      {objId: 2, altId: 4, title: "time management, multitasking", description: ""}, 
      {objId: 3, altId: 0, title: 14, description: ""},
      {objId: 3, altId: 1, title: 12, description: ""},
      {objId: 3, altId: 2, title: 10, description: ""},
      {objId: 3, altId: 3, title: 15, description: ""},
      {objId: 3, altId: 4, title: 12, description: ""},   
      {objId: 4, altId: 0, title: "health, dental, retirement", description: ""},
      {objId: 4, altId: 1, title: "health, dental", description: ""},
      {objId: 4, altId: 2, title: "health", description: ""},
      {objId: 4, altId: 3, title: "health, retirement", description: ""},
      {objId: 4, altId: 4, title: "health, dental", description: ""}, 
      {objId: 5, altId: 0, title: "great", description: ""},
      {objId: 5, altId: 1, title: "good", description: ""},
      {objId: 5, altId: 2, title: "good", description: ""},
      {objId: 5, altId: 3, title: "great", description: ""},
      {objId: 5, altId: 4, title: "boring", description: ""},                           
    ],
    isActive: true,
    createdDate: "3/10/2017",
  },  
]

class Decisions extends Component {
  constructor(props) {
    super(props);
    this.state = {decisions: DECISIONS_Arr_2.filter((decision) => {
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
              <DecisionPanel decision={decision} />
            </Col>
          )}
        </Row>
      </Grid>
    );
  }
}


const DecisionPanel = (props) => {

  const decisionDetailUrl = "/decisions/" + props.decision.uid + "/" + props.decision.decisionId;
  console.log(decisionDetailUrl);

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
