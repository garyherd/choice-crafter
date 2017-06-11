import React, { Component } from 'react';

import { Row, Col, Panel, Button, Table, FormGroup, FormControl } from 'react-bootstrap';

class RemoveObjectivePanel extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedObjective: 'None selected'};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.findObjectiveByTitle = this.findObjectiveByTitle.bind(this);
  }

  handleChange(event) {
    this.setState({ selectedObjective: event.target.value });
  }

  findObjectiveByTitle = (title) => {
    
    const foundObjective = this.props.decision.objectives.filter(
      objective => objective.title === title
    );

    return foundObjective[0];
  };

  handleClick(event) {
    const title = this.state.selectedObjective;
    this.setState(
      { selectedObjective: 'None selected' },
      () => {
        const foundObjective = this.findObjectiveByTitle(title);
        this.props.updateObjective(this.props.decision.decisionId, foundObjective.id, { enabled: false });
      });
  }

  render() {
    const labelStyle = {
      marginTop: '0.7em'
    };

    const objectivesSelectOptions = this.props.objectives.map(objective =>
      <option value={objective.title} key={objective.id}>{objective.title}</option>
    );

    const scores = this.props.decision.alternatives.map(alternative =>
      <tr key={alternative.id}>
        <td><strong>{alternative.title}</strong></td>
        <td key={alternative.title + "0_irrelevant"}>{this.props.getActiveConsequence(this.state.selectedObjective, alternative.title).score}</td>
      </tr>
    );

    return (
      <Panel>
        <Row>
          <Col md={6} sm={6} className="text-center" style={labelStyle}>Irrelevant Objective</Col>

          <Col md={6} sm={6}>
            <FormGroup controlId="objectiveIrrelevant">
              <FormControl 
                componentClass="select" 
                value={this.state.selectedObjective}
                onChange={this.handleChange}>
                <option>Select</option>
                {objectivesSelectOptions}
              </FormControl>
            </FormGroup>
          </Col>
        </Row>

        <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>{this.state.selectedObjective}</th>
              </tr>
            </thead>
            <tbody>
              {scores}
            </tbody>
        </Table>
        <Button 
          bsStyle="primary" 
          bsSize="small" 
          onClick={this.handleClick} 
          disabled={this.state.selectedObjective === 'None selected' || this.state.selectedObjective === 'Select'}>
          Remove&nbsp;{this.state.selectedObjective}
        </Button>
      </Panel>
    );
  }
}

export { RemoveObjectivePanel };