import React, { Component } from 'react';

import { Row, Col, Panel, ButtonToolbar, Button } from 'react-bootstrap';

import { TradeOffsTable } from './tradeoffs-table';

class SwapPane extends Component {
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


class TradeOffs extends Component {
  render() {

    let table = <TradeOffsTable
      decisionId={this.props.decision.decisionId}
      objectives={this.props.decision.objectives}
      alternatives={this.props.decision.alternatives}
      consequences={this.props.decision.consequences}
      getConsequence={this.props.getConsequence} />;

    let dominatedPane = <div>dominated pane here</div>;

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
                <Button bsStyle="primary" type="button">Remove dominated alternative</Button>
                <Button bsStyle="primary" type="button" className="pull-right">Make even swap</Button>
              </ButtonToolbar>
            </Panel>
          </Col>
          <Col sm={6}>
            <SwapPane />
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