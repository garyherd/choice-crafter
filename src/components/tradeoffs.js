import React, { Component } from 'react';

import { Row, Col, Panel, ButtonToolbar, Button } from 'react-bootstrap';

import { TradeOffsTable } from './tradeoffs-table';
import { RemoveAlternativePanel } from './tradeoffs-remove-alt-panel';
import { SwapPanel } from './tradeoffs-swap-panel';



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

  updateTable(updateObject) {
    //not sure yet if this goes here
    console.log(updateObject);
  }

  render() {
    const enabledAlternatives = this.props.decision.alternatives.filter(
      (alternative) => alternative.enabled === true
    );

    const enabledObjectives = this.props.decision.objectives.filter(
      (objective) => objective.enabled === true
    );

    const table = <TradeOffsTable
      alternatives={enabledAlternatives}
      getActiveConsequence={this.props.getActiveConsequence}
      getInactiveConsequences={this.props.getInactiveConsequences}
      decision={this.props.decision} />;

    const renderTypes = {
      "evenSwap": <SwapPanel 
                    alternatives={enabledAlternatives}
                    objectives={enabledObjectives}
                    getActiveConsequence={this.props.getActiveConsequence}
                    addVirtualConsequence={this.props.addVirtualConsequence}
                    updateConsequence={this.props.updateConsequence}
                    decision={this.props.decision}
                    updateTable={this.updateTable}/>,
      "removeAlternative": <RemoveAlternativePanel
                              getActiveConsequence={this.props.getActiveConsequence}
                              updateObjective={this.props.updateObjective}
                              updateAlternative={this.props.updateAlternative}
                              alternatives={enabledAlternatives}
                              decision={this.props.decision} />,
      "default": <SwapPanel
        alternatives={enabledAlternatives}/>
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