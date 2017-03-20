import React, { Component } from 'react';

import { Button, Panel, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';


class Problem extends Component {
    constructor(props) {
        super(props);
        this.state = {title: this.props.title, description: this.props.description, editMode: "Edit", value: "Initial value"};
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleButtonClick() {
        this.state.editMode === "Edit" ? this.setState({editMode: "Save"}) : this.setState({editMode: "Edit"})
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({[name]: value});
    }

    render() {
        let panel = null;
        if (this.state.editMode === "Edit") {
            panel = (
                <Panel>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.description}</p>
                    <Button bsStyle="primary" bsSize="small" onClick={this.handleButtonClick}>{this.state.editMode}</Button>
                </Panel>              
            );
        } else {
             panel = (
                <Panel>
                    <h3>Editing the Problem</h3>
                    <Form>
                        <FormGroup controlId="newTitle">
                            <ControlLabel>Title:</ControlLabel>
                            <FormControl
                                type="text"
                                name="title"
                                placeholder="Enter title"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="newDescription">
                            <ControlLabel>Description:</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                name="description"
                                placeholder="Enter title"
                                value={this.state.description}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>                        
                    </Form>
                    <Button bsStyle="primary" bsSize="small" onClick={this.handleButtonClick}>{this.state.editMode}</Button>
                </Panel>              
            );           
        }
        return (
            <div>{panel}</div>
        );
    }
}

export default Problem;