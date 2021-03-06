import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import { TableHeaders } from './table-parts'

class TradeOffsTable extends Component {

  render() {

    const lineThru = {
      textDecoration: 'line-through'
    };

    const scores = this.props.alternatives.map(alternative =>
      <tr key={alternative.id}>

        <td><strong>{alternative.title}</strong></td>

        {this.props.objectives.map(objective =>
          <td key={objective.id}>

            {this.props.getInactiveConsequences(objective.id, alternative.id).map(
              consequence => <div key={consequence.id} style={lineThru}>{consequence.score}</div>)}

            <div key={this.props.getActiveConsequence(objective.id, alternative.id).id}>
              {this.props.getActiveConsequence(objective.id, alternative.id).score}
            </div>

          </td>
        )}
      </tr>
    )
    return (
      <Table responsive bordered>
        <TableHeaders objectArray={this.props.objectives} />

        <tbody>
          {scores}
        </tbody>

      </Table>)
  }
}

export { TradeOffsTable };