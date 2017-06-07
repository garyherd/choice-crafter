import React, { Component } from 'react';

import { Row, Col, Panel, Button, Table, FormGroup, FormControl } from 'react-bootstrap';

class RemoveAlternativePanel extends Component {

  constructor(props) {
    super(props);
    this.state = {currentDominatesSelection: 'None selected', currentDominatedSelection: 'None selected'};
    this.handleDominatedChange = this.handleDominatedChange.bind(this);
    this.handleDominatesChange = this.handleDominatesChange.bind(this);
  }

  handleDominatesChange(event) {
    this.setState({currentDominatesSelection: event.target.value});
  }

  handleDominatedChange(event) {
    this.setState({currentDominatedSelection: event.target.value});
  }

  render() {
    const labelStyle = {
      marginTop: '0.7em'
    };

    const alternativesSelectOptions = this.props.alternatives.map(alternative =>
      <option key={alternative.id}>{alternative.title}</option>
    );

    const scores = this.props.objectives.map(objective =>
      <tr key={objective.id}>
        <td><strong>{objective.title}</strong></td>
        <td key={"0_domiantes"}>{this.props.getConsequence(objective.title, this.state.currentDominatesSelection).score}</td>
        <td key={"1_dominated"}>{this.props.getConsequence(objective.title, this.state.currentDominatedSelection).score}</td>
      </tr>
    );

    return (
      <Panel>
        <Row>
          <Col md={5} sm={7}>
            <FormGroup controlId="alternativeDominates">
              <FormControl 
                componentClass="select" 
                value={this.state.currentDominatesSelection}
                onChange={this.handleDominatesChange}>
                <option>Select</option>
                {alternativesSelectOptions}
              </FormControl>
            </FormGroup>
          </Col>

          <Col md={2} sm={4} className="text-center" style={labelStyle}>dominates</Col>

          <Col md={5} sm={7}>
            <FormGroup controlId="alternativeDominated">
              <FormControl 
                componentClass="select" 
                value={this.state.currentDominatedSelection}
                onChange={this.handleDominatedChange}>
                <option>Select</option>
                {alternativesSelectOptions}
              </FormControl>
            </FormGroup>
          </Col>
        </Row>

        <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>{this.state.currentDominatesSelection}</th>
                <th>{this.state.currentDominatedSelection}</th>
              </tr>
            </thead>
            <tbody>
              {scores}
            </tbody>
        </Table>
        <Button bsStyle="primary" bsSize="small">Remove&nbsp;{this.state.currentDominatedSelection}</Button>
      </Panel>
    );
  }
}

export { RemoveAlternativePanel };