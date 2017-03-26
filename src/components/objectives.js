import React, { Component } from 'react';

import { Grid, Row, Col, Panel, Button, Nav, NavItem, 
    ListGroup, ListGroupItem, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class Objective extends Component {
    constructor(props) {
        super(props);
        this.state = {mode: "view", title: this.props.objective.title};
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleClick() {
        this.state.mode === "view" ? this.setState({mode: "edit"}) : this.setState({mode: "view"});
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({[name]: value}, () => {
            this.props.update(this.props.decisionId, this.props.objective.id, this.state.title);
        });
    }

    render() {
        let objective = null;

        if (this.state.mode === "view") {
            objective = (
                <ListGroupItem onClick={this.handleClick}>{this.state.title}</ListGroupItem>
            );
        } else {
            objective = (
                <Panel>
                    <Form>
                        <FormGroup controlId="editObjective">
                            <FormControl
                                type="text"
                                name="title"
                                placeholder="Enter objective"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <Button bsStyle="primary" bsSize="small" onClick={this.handleClick}>Save</Button>
                    </Form>
                </Panel>
            );
        }
        return (
            <div>{objective}</div>
        );
    }
}



class Objectives extends Component {
    constructor(props) {
        super(props);
        // this.state = {objectives: this.props.decision.objectives};
        //this.addItem = this.addItem.bind(this);
    }

    // addItem(event) {
    //     let objectives = this.state.objectives.slice();
    //     const target = event.target;
    //     const value = target.value;
    //     console.log(value);
    //     let newObj = {id: objectives.length, title: value, description: ""};
    //     objectives.push(newObj);
    //     this.setState((prevState, props) => ({
    //         objectives: objectives
    //     }));
    // }

    render() {
        return (
            <Panel>
                <h3>Objectives</h3>
                <p>These are your decision criteria. What are you trying to accomplish with this decision?</p>
                <ListGroup>
                    {this.props.decision.objectives.map((objective, index) =>
                        <Objective key={index} 
                                    objective={objective} 
                                    update={this.props.updateObjective}
                                    decisionId={this.props.decision.decisionId}/>
                    )}
                </ListGroup>
                <Form onSubmit={this.addItem}>
                    <FormGroup controlId="newObjective">
                        <FormControl
                            type="text"
                            name="title"
                            placeholder="Enter new objective"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>
                    <Button type="submit" bsStyle="primary" bsSize="small">Add</Button>
                </Form>                
                <br/>
            </Panel>
        );
    }
}

export default Objectives;
