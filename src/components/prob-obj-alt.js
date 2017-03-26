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
        let decision = this.props.decision;
        return (
            <Row>              
                <Col sm={12}>
                    <Problem
                        decisionId={decision.decisionId}
                        uid={decision.uid}
                        title={decision.decisionShort} 
                        description={decision.decisionLong}
                        updateProblem={this.props.updateProblem}
                        updateObjective={this.props.updateObjective}/>
                </Col>
                <Col sm={6}>
                    <Objectives decision={decision}
                                updateObjective={this.props.updateObjective}/>
                </Col>
                <Col sm={6}>
                    <Alternatives/>
                </Col>                    
            </Row>

        );
    }
}





export { ProbObjsAlts, Consequences, TradeOffs };