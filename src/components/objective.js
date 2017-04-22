import React, { Component } from 'react';

import { Row, Col, Panel, Button, ListGroupItem, Form, FormControl, FormGroup, Checkbox, ControlLabel } from 'react-bootstrap';


class Objective extends Component {
    constructor(props) {
        super(props);
        this.state = {mode: "view", title: this.props.listItem.title, isNumericScale: this.props.listItem.isNumericScale};
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.state.mode === "view" ? this.setState({mode: "edit"}) : this.setState({mode: "view"});
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({[name]: value}, () => {
            this.props.update(this.props.decisionId, this.props.listItem.id, this.state[name]);
        });
    }

    handleRemoveItem(itemId) {
      if (window.confirm("Are you sure you want to delete this item?")) {
        this.props.remove(itemId);
        this.setState({mode: "view"});
      }
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
                    <FormGroup controlId="editListItem">
                        <ControlLabel srOnly={true}>Objective Title</ControlLabel>
                        <FormControl
                            type="text"
                            name="title"
                            placeholder={this.props.placeholderText}
                            value={this.state.title}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup> 
                    <Button bsStyle="primary" bsSize="small" onClick={this.handleClick}>Save</Button>
                    <Button bsStyle="danger" bsSize="small" onClick={this.handleRemoveItem.bind(this, this.props.listItem.id)} className="pull-right">Delete</Button>
                </Panel>
            );
        }

        return (
            <div>{objective}</div>
        );
    }
}

export default Objective;
