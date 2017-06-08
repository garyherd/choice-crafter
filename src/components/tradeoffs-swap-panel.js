import React, { Component } from 'react';

import {Panel, Button, FormGroup, FormControl, ButtonToolbar, ControlLabel } from 'react-bootstrap';

class SwapPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {currentSelectedAlternative: 'Select', currentSelectedSwapChoice: 'Select'};
    this.handleSelectedAlternativeChange = this.handleSelectedAlternativeChange.bind(this);
  }

  handleSelectedAlternativeChange(event) {
    this.setState({ currentSelectedAlternative: event.target.value });
  }

  handleSelectedSwapChoiceChange(event) {
    this.setState({ currentSelectedSwapChoice: event.target.value });
  }

  render() {

    const alternativesSelectOptions = this.props.alternatives.map(alternative =>
      <option value={alternative.title} key={alternative.id}>{alternative.title}</option>
    );

    const objectivesSelectOptions = this.props.objectives.map(objective =>
      <option value={objective.title} key={objective.id}>{objective.title}</option>
    );

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
          <strong>The change in&nbsp;</strong>
          <FormControl
            componentClass="select"
            bsSize="small"
            value={this.state.currentSelectedAlternative}
            onChange={this.handleSelectedAlternativeChange}>
            <option value="Select">Select</option>
            {objectivesSelectOptions}
          </FormControl>
        </p>
        <p><strong>From&nbsp;</strong>1700<strong>&nbsp;To&nbsp;</strong><input type="text" name="newSwapFront" value={1500} /></p>
        <p><strong>can be compensated for by a change in&nbsp;</strong>Benefits</p>
        <p><strong>From&nbsp;</strong>A<strong>&nbsp;To&nbsp;</strong><input type="text" name="newSwapBack" value="B" /></p>
        <ButtonToolbar>
          <Button bsStyle="primary" type="button">OK</Button>
          <Button type="button" className="pull-right">Cancel</Button>
        </ButtonToolbar>
      </Panel>
    );
  }
}

export { SwapPanel };