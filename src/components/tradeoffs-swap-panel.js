import React, { Component } from 'react';

import {Panel, Button, FormGroup, FormControl, ButtonToolbar, ControlLabel } from 'react-bootstrap';

class SwapPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSelectedAlternative: 'Select', 
      currentSelectedSwapChoice: 'Select',
      currentSelectedSecondSwapChoice: 'Select',
      newSwapFront: '',
      newSwapBack: ''
    };
    this.handleSelectedAlternativeChange = this.handleSelectedAlternativeChange.bind(this);
    this.handleSelectedSwapChoiceChange = this.handleSelectedSwapChoiceChange.bind(this);
    this.handleSelectedSecondSwapChoiceChange = this.handleSelectedSecondSwapChoiceChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSelectedAlternativeChange(event) {
    this.setState(
      {
        currentSelectedAlternative: event.target.value,
      });
  }

  handleSelectedSwapChoiceChange(event) {
    this.setState({ currentSelectedSwapChoice: event.target.value });
  }

  handleSelectedSecondSwapChoiceChange(event) {
    this.setState({ currentSelectedSecondSwapChoice: event.target.value });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value
    this.setState({ [name]: value }, () => {
      //this.props.update(this.props.decisionId, this.props.id, { [name]: value });
      console.log("name: " + name + '; new score: ' + value);
    });
  }

  handleClick(event) {
    console.log("update front swap to: " + this.state.newSwapFront);
    console.log("updating back swap to: " + this.state.newSwapBack);
    const updatedScores = {
      firstTitle: this.state.currentSelectedSwapChoice,
      secondTitle: this.state.currentSelectedSecondSwapChoice,
      newSwapFront: this.state.newSwapFront,
      newSwapBack: this.state.newSwapBack
    };

    this.props.updateTable(updatedScores);
  }

  render() {

    const alternativesSelectOptions = this.props.alternatives.map(alternative =>
      <option value={alternative.title} key={alternative.id}>{alternative.title}</option>
    );

    //TODO: filter out 'other' objective, so user can't select
    //same objectives for swap
    const objectivesSelectOptions = this.props.objectives.map(objective =>
      <option value={objective.title} key={objective.id}>{objective.title}</option>
    );

    let firstScore = this.props.getActiveConsequence(this.state.currentSelectedSwapChoice, this.state.currentSelectedAlternative).score;

    let secondScore = this.props.getActiveConsequence(this.state.currentSelectedSecondSwapChoice, this.state.currentSelectedAlternative).score;    

    return (
      <Panel>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Alternative</ControlLabel>
          <FormControl 
            componentClass="select" 
            value={this.state.currentSelectedAlternative}
            onChange={this.handleSelectedAlternativeChange}>
            <option value="Select">Select</option>
            {alternativesSelectOptions}
          </FormControl>
        </FormGroup>

        <p>
          <strong>The change in:&nbsp;</strong>
          <select
            value={this.state.currentSelectedSwapChoice}
            onChange={this.handleSelectedSwapChoiceChange}>
            <option value="Select">Select</option>
            {objectivesSelectOptions}
          </select>
        </p>

        <p>
          <strong>From:&nbsp;</strong>
          {firstScore}
          <strong>&nbsp;To&nbsp;</strong>
          <input 
            type="text" 
            name="newSwapFront"
            value={this.state.newSwapFront}
            onChange={this.handleInputChange}/>
        </p>

        <p>
          <strong>can be compensated for by a change in:&nbsp;</strong>
          <select
            value={this.state.currentSelectedSecondSwapChoice}
            onChange={this.handleSelectedSecondSwapChoiceChange}>
            <option value="Select">Select</option>
            {objectivesSelectOptions}
          </select>
        </p>
        <p>
          <strong>From&nbsp;</strong>
          {secondScore}
          <strong>&nbsp;To&nbsp;</strong>
          <input 
            type="text" 
            name="newSwapBack"
            value={this.state.newSwapBack}
            onChange={this.handleInputChange}/>
          </p>
        <ButtonToolbar>
          <Button bsStyle="primary" type="button" onClick={this.handleClick}>OK</Button>
          <Button type="button" className="pull-right">Cancel</Button>
        </ButtonToolbar>
      </Panel>
    );
  }
}

export { SwapPanel };