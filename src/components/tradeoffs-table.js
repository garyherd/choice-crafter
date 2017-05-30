import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

class TradeOffsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {view: "changeCell" };
    }

    render() {
        return (
            <Table responsive bordered>
                <thead>
                    <tr>
                        <th></th>
                        <th>Objective 1</th>
                        <th>Objective 2</th>
                        <th>Objective 3</th>
                        <th>Objective 4</th>
                        <th>Objective 5</th>
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