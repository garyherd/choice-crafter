import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

class TradeOffsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {view: "changeCell" };
    }

    render() {

        let headers = this.props.objectives.map((objective) => 
            <th key={objective.id}>{objective.title}</th>
        );

        let consequence = (objTitle, altTitle) => {
            let result = {};
            let dummyId = Math.random() * Math.random();
            let foundItem = this.props.consequences.filter((item) => {
                return ((item.objTitle === objTitle) && (item.altTitle === altTitle))
            });
            
            foundItem.length > 0 ? result = foundItem[0] : result = {};

            return result;

        };

        let scores = this.props.alternatives.map((alternative) => 
            <tr key={alternative.id}>
                <td><strong>{alternative.title}</strong></td>
                {this.props.objectives.map((objective) =>
                    <td>{consequence(objective.title, alternative.title).score}</td>
                )}
            </tr>
        )
        return (
            <Table responsive bordered>
                <thead>
                    <tr>
                        <th></th>
                        {headers}    
                    </tr>
                </thead>
                
                <tbody>
                    {scores}
                </tbody>
            </Table>)
    }
}

export { TradeOffsTable };