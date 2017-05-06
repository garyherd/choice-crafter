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

    // handleInputChange(event) {
    //     this.setState({data: event.target.value});
    // }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({[name]: value}, () => {
            this.props.update(this.props.decisionId, this.props.id, { [name]:value});
        });
        //this.setState({data: value});
    }   

    render() {

        let data = null;

        let viewState = (
          <div onClick={this.handleClick}>{this.props.cellData}</div>
        );

        let newObjEditState = (
          <Form inline onSubmit={this.handleSubmit}>
              <FormGroup controlId="editCellData">
                      <FormControl
                          type="text"
                          name={this.props.updateField}
                          placeholder="required"
                          value=""
                          onChange={this.handleInputChange}
                      />
              </FormGroup>
              <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleClick}>Save</Button>
          </Form>          
        );

        let existingObjEditState = (
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
        )

        if (this.state.mode === "view") { data = viewState };

        if (this.state.mode === "edit") {
          this.props.cellData === "(required)" ? data = newObjEditState : data = existingObjEditState;
        } else {
          data = viewState
        }

        


        /*} else {
            data = (
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup controlId="editCellData">
                            <FormControl
                                type="text"
                                name={this.props.updateField}
                                value={this.props.cellData}
                                onChange={this.handleInputChange}
                            />
                    </FormGroup>
                    <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleClick}>Save</Button>
                </Form>
            );            
        }   */

        return (
            <td>{data}</td>
        );
    }
}

export { EditableCell };