import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import { TableHeaders } from './table-parts'

class TradeOffsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "changeCell",
      initialTableScores: this.props.decision.consequences
    };
  }

  render() {

    const lineThru = {
      textDecoration: 'line-through'
    };

    const scores = this.props.alternatives.map(alternative =>
      <tr key={alternative.id}>

        <td><strong>{alternative.title}</strong></td>

        {this.props.decision.objectives.map(objective =>
          <td key={objective.id}>

            {this.props.getInactiveConsequences(objective.title, alternative.title).map(
              consequence => <div key={consequence.id} style={lineThru}>{consequence.score}</div>)}

            <div key={this.props.getActiveConsequence(objective.title, alternative.title).id}>
              {this.props.getActiveConsequence(objective.title, alternative.title).score}
            </div>

          </td>
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