import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import { EditableCell } from './editable-cell';

class ConsequencesTable extends Component {

    render() {

        let headers = this.props.objectives.map((objective) => 
            <th key={objective.id}>{objective.title}</th>
        );

        let scales = this.props.objectives.map((objective) => 
            <EditableCell 
                decisionId={this.props.decisionId} 
                key={objective.id} 
                id={objective.id} 
                cellData={objective.scale} 
                updateField="scale" 
                update={this.props.update} />
        );

        let minsMaxs = this.props.objectives.map((objective) => 
            <EditableCell 
                decisionId={this.props.decisionId} 
                key={objective.id} 
                id={objective.id} 
                cellData={objective.minMax} 
                updateField="minMax" 
                update={this.props.update} />
        );

        let units = this.props.objectives.map((objective) => 
            <EditableCell 
                decisionId={this.props.decisionId} 
                key={objective.id} 
                id={objective.id} 
                cellData={objective.unit} 
                updateField="unit" 
                update={this.props.update} />            
        );

        let dividerRow = this.props.objectives.map((objective) => 
            <td key={objective.id}>-----</td>
        );             

        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        {headers}    
                    </tr>
                </thead>
                
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
                </tbody>
            </Table>
        );
    }
}

export { ConsequencesTable };