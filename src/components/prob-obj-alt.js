import React, { Component } from 'react';

import { Grid, Row, Col, Panel, Button, Nav, NavItem } from 'react-bootstrap';

class Problem extends Component {
    render() {
        return (
            <div>
                This is the Problem/Objectives/Alternatives tab
            </div>
        );
    }
}

class Objectives extends Component {
    render() {
        return (
            <div>
                These are objectives
            </div>
        );
    }
}

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

    problemTitle = (
        <h2>This is the problem title</h2>
    );

    render() {
        return (
            <Row>
                <Col xs={12}>
                    {this.problemTitle}
                    <p>This will be the problem description</p>
                    <span className="glyphicon glyphicon-pencil"></span>&nbsp;Edit
                </Col>
                <hr/>
                
            </Row>
        );
    }
}





export { ProbObjsAlts, Consequences, TradeOffs };