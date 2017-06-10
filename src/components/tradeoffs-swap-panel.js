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
      newSwapBack: '',
      okayToSwap: false
    };
    this.handleSelectedAlternativeChange = this.handleSelectedAlternativeChange.bind(this);
    this.handleSelectedSwapChoiceChange = this.handleSelectedSwapChoiceChange.bind(this);
    this.handleSelectedSecondSwapChoiceChange = this.handleSelectedSecondSwapChoiceChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.processSwap = this.processSwap.bind(this);
    this.cloneConsequence = this.cloneConsequence.bind(this);
  }

  handleSelectedAlternativeChange(event) {
    this.setState({ currentSelectedAlternative: event.target.value });
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
    this.setState({ [name]: value });
  }

  cloneConsequence(consequence) {
    const newObj = {};
    newObj.objTitle = consequence.objTitle;
    newObj.altTitle = consequence.altTitle;
    newObj.description = consequence.description;
    newObj.isActive = true;
    newObj.isInitial = false;

    return newObj;
  }

  processSwap() {
    const firstConsequence = this.props.getActiveConsequence(this.state.currentSelectedSwapChoice, this.state.currentSelectedAlternative);
    const secondConsequence = this.props.getActiveConsequence(this.state.currentSelectedSecondSwapChoice, this.state.currentSelectedAlternative);
    const copyOfFirst = this.cloneConsequence(this.props.getActiveConsequence(this.state.currentSelectedSwapChoice, this.state.currentSelectedAlternative));
    const copyOfSecond = this.cloneConsequence(this.props.getActiveConsequence(this.state.currentSelectedSecondSwapChoice, this.state.currentSelectedAlternative));

    this.props.updateConsequence(this.props.decision.decisionId, firstConsequence.id, {isActive: false});
    this.props.updateConsequence(this.props.decision.decisionId, secondConsequence.id, {isActive: false});

    copyOfFirst.score = this.state.newSwapFront;
    copyOfSecond.score = this.state.newSwapBack;

    this.props.addVirtualConsequence(this.props.decision.decisionId, copyOfFirst);
    this.props.addVirtualConsequence(this.props.decision.decisionId, copyOfSecond);
  }

  handleClick(event) {

    this.processSwap();

    this.setState({
      currentSelectedAlternative: 'Select', 
      currentSelectedSwapChoice: 'Select',
      currentSelectedSecondSwapChoice: 'Select',
      newSwapFront: '',
      newSwapBack: ''
    });

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

    let noFieldsBlank = (this.state.currentSelectedAlternative !== 'Select' && this.state.newSwapBack.length > 0 && this.state.newSwapFront.length > 0);

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
          <Button 
            bsStyle="primary" 
            type="button" 
            onClick={noFieldsBlank ? this.handleClick : null} 
            disabled={!noFieldsBlank}>
            OK
            </Button>
          <Button type="button" className="pull-right">Cancel</Button>
        </ButtonToolbar>
      </Panel>
    );
  }
}

export { SwapPanel };