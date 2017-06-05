import React, { Component } from 'react';

import { Row, Col, Panel, ButtonToolbar, Button, Table, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import { TradeOffsTable } from './tradeoffs-table';

class SwapPanel extends Component {
  render() {
    return (
      <Panel>
        <p><strong>Alternative:&nbsp;</strong>Job A</p>
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

class RemoveAlternativePanel extends Component {



  render() {
    const labelStyle = {
      marginTop: '0.7em'
    };

    return (
      <Panel>
        <Row>
          <Col sm={5}>
            <FormGroup controlId="alternativeDominates">
              <FormControl componentClass="select" placeholder="Job A">
                <option value="jobA_id">Job A</option>
                <option value="jobB_id">Job B</option>
                <option value="jobCid">Job C</option>
              </FormControl>
            </FormGroup>
          </Col>

          <Col sm={2} className="text-center" style={labelStyle}>dominates</Col>

          <Col sm={5}>
            <FormGroup controlId="alternativeDominated">
              <FormControl componentClass="select" placeholder="Job A">
                <option value="jobA_id">Job A</option>
                <option value="jobB_id">Job B</option>
                <option value="jobCid">Job C</option>
              </FormControl>
            </FormGroup>
          </Col>
        </Row>

        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th>Job A</th>
              <th>Job B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alt 1</td>
              <td>Score</td>
              <td>Score</td>
            </tr>
              <tr>
              <td>Alt 2</td>
              <td>Score</td>
              <td>Score</td>
            </tr>
              <tr>
              <td>Alt 3</td>
              <td>Score</td>
              <td>Score</td>
            </tr>
          </tbody>
        </Table>
        <Button bsStyle="primary" bsSize="small">Remove Alternative</Button>
      </Panel>
    );
  }
}


class TradeOffs extends Component {
  constructor(props) {
    super(props)
    this.state = {mode: "removeAlternative"}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.mode === "evenSwap") {
      this.setState({mode: "removeAlternative"});
    } else {
      this.setState({mode: "evenSwap"});
    }
  }

  render() {

    const table = <TradeOffsTable
      decisionId={this.props.decision.decisionId}
      objectives={this.props.decision.objectives}
      alternatives={this.props.decision.alternatives}
      consequences={this.props.decision.consequences}
      getConsequence={this.props.getConsequence} />;

    const renderTypes = {
      "evenSwap": <SwapPanel/>,
      "removeAlternative": <RemoveAlternativePanel/>,
      "default": <SwapPanel/>
    };

    const buttonTextOptions = {
      "evenSwap": "Remove dominated alternative",
      "removeAlternative": "Make even swap",
    };

    return (
      <section>
        <Row>
          <Col sm={6}>
            <Panel>
              <p><strong>Your best alternative comes from eliminating the others. To find it, keep switching between:</strong></p>
              <ol>
                <li>Removing alternatives dominated by at least one other.</li>
                <li>Making objectives irrelevant through even swaps</li>
              </ol>
              <ButtonToolbar>
                <Button bsStyle="primary" type="button" onClick={this.handleClick}>{buttonTextOptions[this.state.mode]}</Button>
              </ButtonToolbar>
            </Panel>
          </Col>
          <Col sm={6}>
            {renderTypes[this.state.mode]}
          </Col>
        </Row>
        <Row>
          <Col xs={12}>{table}</Col>
        </Row>
      </section>
    );
  }
}

export { TradeOffs };