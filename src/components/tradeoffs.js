import React, { Component } from 'react';

import { Row, Col, Panel } from 'react-bootstrap';



class TradeOffs extends Component {
    render() {
        return (
            /*<div>
                This will be the TradeOffs tab
            </div>*/
            <section>
                <Row>
                    <Col sm={6}>
                        <Panel>
                            <h5>To make and Even Swap trade-off:</h5>
                            <ol>
                                <li>choose three cells from the consequences table</li>
                                <li>when ready, press the Even Swap button below</li>
                            </ol>
                        </Panel>
                    </Col>
                    <Col sm={6}>This will be the tradeoff status/action section</Col>
                </Row>
                <Row>
                    <Col xs={12}>This will be the consequences grid</Col>
                </Row>
            </section>
        );
    }
}




export { TradeOffs };