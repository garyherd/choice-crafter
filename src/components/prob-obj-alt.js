import React, { Component } from 'react';

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




export { Problem, Consequences, TradeOffs };