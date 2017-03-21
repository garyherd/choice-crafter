import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

import Problem from './problem';
import Alternatives from './alternatives';
import Objectives from './objectives';



class Consequences extends Component {
    render() {
        return (
            <div>
                This will be the Consequnces tab
            </div>
        );
    }
}

class TradeOffs extends Component {
    render() {
        return (
            <div>
                This will be the TradeOffs tab
            </div>
        );
    }
}


class ProbObjsAlts extends Component {

    render() {
        return (
            <Row>              
                <Col sm={12}>
                    <Problem title={this.props.decision.decisionShort} description={this.props.decision.decisionLong}/>
                </Col>
                <Col sm={6}>
                    <Objectives objectives={this.props.decision.objectives}/>
                </Col>
                <Col sm={6}>
                    <Alternatives/>
                </Col>                    
            </Row>

        );
    }
}





export { ProbObjsAlts, Consequences, TradeOffs };