import React, { Component } from 'react';

import { ConsequencesTable } from './consequences-table';

class Consequences extends Component {

  render() {

    let table = <ConsequencesTable
      decisionId={this.props.decision.decisionId}
      objectives={this.props.decision.objectives}
      alternatives={this.props.decision.alternatives}
      consequences={this.props.decision.consequences}
      update={this.props.updateObjective}
      updateConsequence={this.props.updateConsequence}
      addConsequence={this.props.addConsequence}
      getActiveConsequence={this.props.getActiveConsequence} />;

    return (
      <div>
        {table}
      </div>
    );
  }
}

export { Consequences };