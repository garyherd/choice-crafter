import React, { Component } from 'react';

import { Panel, Button, ListGroupItem, Form, FormControl, FormGroup } from 'react-bootstrap';



class EditableListBox extends Component {
    constructor(props) {
        super(props);
        this.state = {mode: "view", title: this.props.listItem.title};
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleRemoveItem = this.handleRemoveItem.bind(this, this.props.listItem.id);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.state.mode === "view" ? this.setState({mode: "edit"}) : this.setState({mode: "view"});
    }

    handleSubmit(e) {
      e.preventDefault();
      
      
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({[name]: value}, () => {
            this.props.update(this.props.decisionId, this.props.listItem.id, this.state.title);
        });
    }

    handleRemoveItem(itemId) {
      //TODO: render message box verifying

      this.props.remove(itemId);
      this.setState({mode: "view"});
    }

    render() {
        let listItem = null;

        if (this.state.mode === "view") {
            listItem = (
                <ListGroupItem onClick={this.handleClick}>{this.state.title}</ListGroupItem>
            );
        } else {
            listItem = (
                <Panel>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="editListItem">
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
                    </Form>
                </Panel>
            );
        }
        return (
            <div>{listItem}</div>
        );
    }
}

export default EditableListBox;
