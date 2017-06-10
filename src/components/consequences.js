import React, { Component } from 'react';

import { ConsequencesTable } from './consequences-table';

class Consequences extends Component {

  render() {

    const initialConsequences = this.props.decision.consequences.filter(
      consequence => consequence.isInitial === true);


    let table = <ConsequencesTable
      decisionId={this.props.decision.decisionId}
      objectives={this.props.decision.objectives}
      alternatives={this.props.decision.alternatives}
      consequences={initialConsequences}
      update={this.props.updateObjective}
      updateConsequence={this.props.updateConsequence}
      addConsequence={this.props.addConsequence}
      getActiveConsequence={this.props.getActiveConsequence}
      getInitialConsequence={this.props.getInitialConsequence} />;

    return (
      <div>
        {table}
      </div>
    );
  }
}

export { Consequences };