import React, { Component } from 'react';

import { Panel, Button, ListGroupItem, Form, FormControl, FormGroup } from 'react-bootstrap';
import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';




class ObjectiveGrade extends Component {
    constructor(props) {
        super(props);
        this.state = {mode: "view", title: this.props.title};
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
            this.props.update(this.props.decisionId, this.props.listItem.id, this.state[name]);
        });
    }

    handleRemoveItem(itemId) {
      //TODO: render message box verifying

      this.props.remove(itemId);
      this.setState({mode: "view"});
    }

    render() {
        let grade = null;

        let cursorStyle = {
            cursor: 'ns-resize'
        }

        if (this.state.mode === "view") {
            grade = (
                <ListGroupItem><a onClick={this.handleClick}>{this.state.title}</a></ListGroupItem>
            );
        } else {
            grade = (
                <Panel>
                    <FormGroup controlId="editListItem">
                        <FormControl
                            type="text"
                            name="title"
                            placeholder={this.props.placeholderText}
                            value={this.state.title}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>
                    <Button 
                        bsStyle="primary" 
                        bsSize="xs" 
                        onClick={this.handleClick}>
                        Save
                    </Button>
                    <Button 
                        bsStyle="danger" 
                        bsSize="xs" 
                        onClick={this.handleRemoveItem.bind(this, this.props.id)} 
                        className="pull-right">
                        Delete
                    </Button>
                </Panel>
            );
        }
        return (
            <div>{grade}</div>
        );
    }
}

export default ObjectiveGrade;
