import React, { Component } from 'react';

import { Row, Col, Panel, ButtonToolbar, Button } from 'react-bootstrap';

import { TradeOffsTable } from './tradeoffs-table';
import { RemoveAlternativePanel } from './tradeoffs-remove-alt-panel';
import { RemoveObjectivePanel } from './tradeoffs-remove-obj-panel';
import { SwapPanel } from './tradeoffs-swap-panel';



class TradeOffs extends Component {
  constructor(props) {
    super(props)
    this.state = {mode: "removeAlternative"}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(msg) {
    const options = {
      "evenSwap": () => this.setState({ mode: "evenSwap" }),
      "removeAlternative": () => this.setState({ mode: "removeAlternative" }),
      "removeObjective": () => this.setState({ mode: "removeObjective" })
    };

    options[msg]();
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
      objectives={enabledObjectives}
      findAlternativeByTitle={this.props.findAlternativeByTitle}
      findObjectiveByTitle={this.props.findObjectiveByTitle}
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
                    findObjectiveByTitle={this.props.findObjectiveByTitle}
                    findAlternativeByTitle={this.props.findAlternativeByTitle}
                    updateTable={this.updateTable}/>,
      "removeAlternative": <RemoveAlternativePanel
                              getActiveConsequence={this.props.getActiveConsequence}
                              updateObjective={this.props.updateObjective}
                              updateAlternative={this.props.updateAlternative}
                              alternatives={enabledAlternatives}
                              objectives={enabledObjectives}
                              decision={this.props.decision} />,
      "removeObjective": <RemoveObjectivePanel
                              getActiveConsequence={this.props.getActiveConsequence}
                              updateObjective={this.props.updateObjective}
                              objectives={enabledObjectives}
                              alternatives={enabledAlternatives}
                              decision={this.props.decision} />,
      "default": <SwapPanel
        alternatives={enabledAlternatives}/>
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
              <div className="form-group"><Button bsStyle="primary" type="button" onClick={() => this.handleClick("evenSwap")}>Make Even Swap</Button></div>
              <div className="form-group"><Button bsStyle="primary" type="button" onClick={() => this.handleClick("removeObjective")}>Remove Irrelevant Objective</Button></div>
              <div className="form-group"><Button bsStyle="primary" type="button" onClick={() => this.handleClick("removeAlternative")}>Remove Dominated Alternative</Button></div>
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