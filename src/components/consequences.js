import React, { Component } from 'react';

import { Row, Col, Table, FormControl } from 'react-bootstrap';

class ConsequencesTable extends Component {

    render() {

        let headers = this.props.objectives.map((objective) => 
            <th key={objective.id}>{objective.title}</th>
        );

        let scales = this.props.objectives.map((objective) => 
            <td key={objective.id}><input type="text" value={objective.scale} className="form-control"/></td>
        );

        let minsMaxs = this.props.objectives.map((objective) => 
            <td key={objective.id}>{objective.minMax}</td>
        );  

        let units = this.props.objectives.map((objective) => 
            <td key={objective.id}>{objective.unit}</td>
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
                </tbody>
            </Table>
        );
    }
}




class Consequences extends Component {

    render() {

        let table = <ConsequencesTable objectives={this.props.decision.objectives} />;

        return (
            <div>
                {table}
            </div>
        );
    }
}

export { Consequences };