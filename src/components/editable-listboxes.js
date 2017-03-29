import React, { Component } from 'react';

import { Panel, Button, Nav, NavItem, 
    ListGroup, ListGroupItem, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

import uuid from 'uuid';

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



class EditableListBoxes extends Component {
    constructor(props) {
        super(props);
        this.state = {newListItem: {title: "", description: ""} };
        this.addItem = this.addItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    addItem() {
        this.props.addListItem(this.props.decision.decisionId, this.state.newListItem);
        this.setState({newListItem: {}});
    }

    removeListItem(id) {
        this.props.removeListItem(this.props.decision.decisionId, id);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({newListItem: {id: uuid.v4(), title: value, description: ""}});
    }

    handleSubmit(e) {
      e.preventDefault();
    }

    render() {
        let items = [];
        console.log(this.props.listItems);
        if (this.props.listItems) {
            items = this.props.listItems.map((item) => {
                return (
                    <EditableListBox key={item.id} 
                        listItem={item} 
                        update={this.props.updateListItem}
                        remove={this.removeListItem.bind(this)}
                        decisionId={this.props.decision.decisionId}/>
                );
            });
        }
        return (
            <Panel>
                <h3>{this.props.panelTitle}</h3>
                <p>{this.props.panelText}</p>
                <ListGroup>
                    {items}
                </ListGroup>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="newObjective">
                        <FormControl
                            type="text"
                            name="title"
                            placeholder="Enter new objective"
                            onChange={this.handleInputChange}
                            value={this.state.newListItem.title || ''}
                        />
                    </FormGroup>
                    <Button onClick={this.addItem} bsStyle="primary" bsSize="small">Add</Button>
                </Form>                
                <br/>
            </Panel>
        );
    }
}

export default EditableListBoxes;
