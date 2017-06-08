import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import { TableHeaders } from './table-parts'

class TradeOffsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "changeCell",
    };
  }

  render() {

    const scores = this.props.alternatives.map(alternative =>
      <tr key={alternative.id}>
        <td><strong>{alternative.title}</strong></td>
        {this.props.decision.objectives.map(objective =>
          <td key={objective.id}>{this.props.getConsequence(objective.title, alternative.title).score}</td>
        )}
      </tr>
    )
    return (
      <Table responsive bordered>
        <TableHeaders objectArray={this.props.decision.objectives} />

        <tbody>
          {scores}
        </tbody>

      </Table>)
  }
}

export { TradeOffsTable };