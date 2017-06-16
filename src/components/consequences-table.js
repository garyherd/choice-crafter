import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import { TableHeaders } from './table-parts'

import { EditableCell } from './editable-cell';

class ConsequencesTable extends Component {
  constructor(props) {
    super(props);
    this.state = { newItem: {} };
  }


  render() {

    const scales = this.props.objectives.map(objective =>
      <EditableCell
        decisionId={this.props.decisionId}
        key={objective.id}
        id={objective.id}
        cellData={objective.scale}
        updateField="scale"
        update={this.props.update} />
    );

    const minsMaxs = this.props.objectives.map(objective =>
      <EditableCell
        decisionId={this.props.decisionId}
        key={objective.id}
        id={objective.id}
        cellData={objective.minMax}
        updateField="minMax"
        update={this.props.update} />
    );

    const units = this.props.objectives.map(objective =>
      <EditableCell
        decisionId={this.props.decisionId}
        key={objective.id}
        id={objective.id}
        cellData={objective.unit}
        updateField="unit"
        update={this.props.update} />
    );

    const dividerRow = this.props.objectives.map(objective =>
      <td key={objective.id}>-----</td>
    );

    const scores = this.props.alternatives.map(alternative =>
      <tr key={alternative.id}>
        <td><strong>{alternative.title}</strong></td>
        {this.props.objectives.map(objective =>
          <EditableCell
            decisionId={this.props.decisionId}
            //key={this.props.getInitialConsequence(objective.title, alternative.title).id}
            key={objective.title + '_' + alternative.title}
            id={this.props.getInitialConsequence(objective.id, alternative.id).id}
            cellData={this.props.getInitialConsequence(objective.id, alternative.id).score}
            updateField="score"
            update={this.props.updateConsequence} />
        )}
      </tr>
    );

    return (
      <Table responsive>
        <TableHeaders objectArray={this.props.objectives} />

        <tbody>
          <tr>
            <td><strong>Scale</strong></td>
            {scales}
          </tr>
          <tr>
            <td><strong>Min/Max</strong></td>
            {minsMaxs}
          </tr>
          <tr>
            <td><strong>Unit</strong></td>
            {units}
          </tr>
          <tr>
            <td>-----</td>
            {dividerRow}
          </tr>
          {scores}
        </tbody>
      </Table>
    );
  }
}

export { ConsequencesTable };