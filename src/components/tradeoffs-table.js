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
        return (
            <Table responsive bordered>
                <thead>
                    <tr>
                        <th></th>
                        {headers}    
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Alternative 1</td>
                        <td>
                            <div>Consequence</div>
                            <div>
                                <label><input type="checkbox" name="cons" value="" />Select</label>
                            </div>
                        </td>
                        <td>
                            <div>Consequence</div>
                            <div>
                                <label>
                                    <input type="checkbox" name="cons" value="" />
                                    Select
                                </label>
                            </div>
                        </td>
                        <td>
                            <div>Consequence</div>
                            <div>
                                <label><input type="checkbox" name="cons" value=""/>Select</label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>)
    }
}

export { TradeOffsTable };