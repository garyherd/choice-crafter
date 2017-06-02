import React, { Component } from 'react';

import { Row, Col, Panel, ButtonToolbar, Button } from 'react-bootstrap';

import { TradeOffsTable } from './tradeoffs-table';



class TradeOffs extends Component {
    render() {

        let table = <TradeOffsTable
                        decisionId={this.props.decision.decisionId} 
                        objectives={this.props.decision.objectives}
                        alternatives={this.props.decision.alternatives}
                        consequences={this.props.decision.consequences}/>;

        return (
            <section>
                <Row>
                    <Col sm={6}>
                        <Panel>
                            <p><strong>To make and Even Swap trade-off:</strong></p>
                            <ol>
                                <li>Choose three cells from the consequences table</li>
                                <li>When ready, press the Even Swap button below</li>
                            </ol>
                        </Panel>
                    </Col>
                    <Col sm={6}>
                        <Panel>
                            <p><strong>Alternative:&nbsp;</strong>Job A</p>
                            <hr/>
                            <p><strong>The change in&nbsp;</strong>Monthly Salary</p>
                            <p><strong>From&nbsp;</strong>1700<strong>&nbsp;To&nbsp;</strong>1500</p>
                            <p><strong>can be compensated for by a change in&nbsp;</strong>Benefits</p>
                            <p><strong>From&nbsp;</strong>A<strong>&nbsp;To&nbsp;</strong><input type="text" name="newConsequence" value="B"/></p>
                            <ButtonToolbar>
                                <Button bsStyle="primary" type="button">OK</Button>
                                <Button type="button" className="pull-right">Cancel</Button>
                            </ButtonToolbar>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>{table}</Col>
                </Row>
            </section>
        );
    }
}




export { TradeOffs };