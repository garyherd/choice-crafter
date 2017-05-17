import React, { Component } from 'react';

import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';

class EditableCell extends Component {
    constructor(props) {
        super(props);
        this.state = {mode: "view"};
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleClick() {
        this.state.mode === "view" ? this.setState({mode: "edit"}) : this.setState({mode: "view"});
        //this.props.update(this.props.decisionId, this.props.id, { [this.props.updateField]:this.state.data});
    }

    handleSubmit(e) {
      e.preventDefault();  
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({[name]: value}, () => {
            this.props.update(this.props.decisionId, this.props.id, { [name]:value});
        });
    }   

    render() {

        let viewState = (
          <td onClick={this.handleClick}>{this.props.cellData || "(required)"}</td>
        );

        let editState = (
          <td>
              <Form inline onSubmit={this.handleSubmit}>
                <FormGroup controlId="editCellData">
                        <FormControl
                            type="text"
                            name={this.props.updateField}
                            value={this.props.cellData}
                            onChange={this.handleInputChange}
                            placeholder="required"
                        />
                </FormGroup>
                <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleClick}>Save</Button>
            </Form>
          </td>
        );

        let renderTypes = {
            "view": viewState,
            "edit": editState,
            "default": editState
        };

        return renderTypes[this.state.mode] || renderTypes["default"];
    }
}

export { EditableCell };