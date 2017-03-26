import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

import Problem from './problem';
import EditableListBoxes from './editable-listboxes';

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

        let problem = (
            <Problem
                decisionId={decision.decisionId}
                uid={decision.uid}
                title={decision.decisionShort} 
                description={decision.decisionLong}
                updateProblem={this.props.updateProblem}
                updateObjective={this.props.updateObjective}/>
        );

        let alternatives = (
            <EditableListBoxes 
                decision={decision}
                updateListItem={this.props.updateAlternative}
                addListItem={this.props.addAlternative}
                removeListItem={this.props.removeAlternative}
                panelTitle="Alternatives"
                panelText="Some placeholder text with a quick summary of what alternatives are"
                listItems={decision.alternatives}/>
        );

        let objectives = (
            <EditableListBoxes 
                decision={decision}
                updateListItem={this.props.updateObjective}
                addListItem={this.props.addObjective}
                removeListItem={this.props.removeObjective}
                panelTitle="Objectives"
                panelText="These are your decision criteria. What are you trying to accomplish with this decision?"
                listItems={decision.objectives}/>
        );

        return (
            <Row>              
                <Col sm={12}>
                    {problem}
                </Col>
                <Col sm={6}>
                    {objectives}
                </Col>
                <Col sm={6}>
                    {alternatives}
                </Col>                    
            </Row>

        );
    }
}

export { ProbObjsAlts, Consequences, TradeOffs };