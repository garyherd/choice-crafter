import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import uuid from 'uuid';

import { EditableCell } from './editable-cell';

class ConsequencesTable extends Component {
    constructor(props) {
        super(props);
        this.state = {newItem: {} };
    }


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

        let consequence = (objTitle, altTitle) => {
            let dummyId = Math.random() * Math.random();
            let foundItem = this.props.consequences.filter((item) => {
                return ((item.objTitle === objTitle) && (item.altTitle === altTitle))
            });

            if (foundItem.length > 0) {
                return foundItem[0]
            } 
            
            // else {
            //     // return {id: dummyId.toString(), score: "(required)"}; // TODO: change this to insert a new consequence
            //     this.props.addConsequence(this.props.decisionId, this.state.newItem);
            //     this.setState({newItem: {id: uuid.v4(), objTitle: objTitle, altTitle: altTitle, score: "(required)", description: ""}});
            //     return this.state.newItem;
            // }
        };

        let scores = this.props.alternatives.map((alternative) => 
            <tr key={alternative.id}>
                <td><strong>{alternative.title}</strong></td>
                {this.props.objectives.map((objective) =>
                    <EditableCell
                        decisionId={this.props.decisionId}
                        key={consequence(objective.title, alternative.title).id}
                        id={consequence(objective.title, alternative.title).id}
                        cellData={consequence(objective.title, alternative.title).score}
                        updateField="score"
                        update={this.props.updateConsequence} />
                )}
            </tr>
        )   

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
                    {scores}
                </tbody>
            </Table>
        );
    }
}

export { ConsequencesTable };