import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import { Nav, NavItem } from 'react-bootstrap';

class NavTabs extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.makeUrls = this.makeUrls.bind(this);
        this.state = {activeKey: 1};
    }

    navBarStyle = {
        "marginBottom": "15px"
    }

    makeUrls = (pageName) => {
        let baseUrl = `/decisions/${this.props.userDecision.uid}/${this.props.userDecision.decisionId}/`;
        return baseUrl + pageName;
    }

    componentDidMount() {
        browserHistory.push(this.makeUrls("problem"));
        this.setState({activeKey: 1});       
    }

    handleSelect(eventKey) {

        switch(eventKey) {
            case 1:
                browserHistory.push(this.makeUrls("problem"));
                this.setState({activeKey: 1});
                break;
            case 2:
                browserHistory.push(this.makeUrls("consequences"));
                this.setState({activeKey: 2});
                break
            case 3:
                browserHistory.push(this.makeUrls("tradeoffs"));
                this.setState({activeKey: 3});
                break;
            default:
                browserHistory.push(this.makeUrls("problem"));
                this.setState({activeKey: 1});
        }
    }

    render() {
        return (
            <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect} style={this.navBarStyle}>
                <NavItem eventKey={1}>Problem/Objectives/Alternatives</NavItem>
                <NavItem eventKey={2}>Consequences</NavItem>
                <NavItem eventKey={3}>Tradeoffs</NavItem>
            </Nav>
        );
    }
}


export default NavTabs;