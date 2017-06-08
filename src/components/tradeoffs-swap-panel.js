import React, { Component } from 'react';

import { Row, Col, Panel, Button, Table, FormGroup, FormControl, ButtonToolbar, ControlLabel } from 'react-bootstrap';

class SwapPanel extends Component {
  render() {

    const alternativesSelectOptions = this.props.alternatives.map(alternative =>
      <option value={alternative.title} key={alternative.id}>{alternative.title}</option>
    );

    return (
      <Panel>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Alternative</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
        <hr />
        <p><strong>The change in&nbsp;</strong>Monthly Salary</p>
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