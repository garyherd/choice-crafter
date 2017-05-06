import React, { Component } from 'react';

import { ConsequencesTable } from './consequences-table';

class Consequences extends Component {

    render() {

        let table = <ConsequencesTable decisionId={this.props.decision.decisionId} objectives={this.props.decision.objectives} update={this.props.updateObjective} />;

        return (
            <div>
                {table}
            </div>
        );
    }
}

export { Consequences };