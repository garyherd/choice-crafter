import React, { Component } from 'react';

import { Panel, Button, ListGroupItem, Form, FormControl, FormGroup } from 'react-bootstrap';


class EditableListBox extends Component {
  constructor(props) {
    super(props);
    // this.state = {mode: "view", title: this.props.listItem.title};
    this.state = { mode: "view" };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.state.mode === "view" ? this.setState({ mode: "edit" }) : this.setState({ mode: "view" });
  }

  handleSubmit(e) {
    e.preventDefault();


  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value
    this.setState({ [name]: value }, () => {
      this.props.update(this.props.decisionId, this.props.listItem.id, { [name]: value });
    });
  }

  handleRemoveItem(itemId) {
    //TODO: render message box verifying

    this.props.remove(itemId);
    this.setState({ mode: "view" });
  }

  render() {

    let viewState = (
      <ListGroupItem onClick={this.handleClick}>{this.props.listItem.title}</ListGroupItem>
    );

    let editState = (
      <Panel>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlId="editListItem">
            <FormControl
              type="text"
              name="title"
              placeholder={this.props.placeholderText}
              value={this.props.listItem.title}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleClick}>Save</Button>
          <Button bsStyle="danger" bsSize="small" onClick={this.handleRemoveItem.bind(this, this.props.listItem.id)} className="pull-right">Delete</Button>
        </Form>
      </Panel>
    );

    const renderTypes = {
      "view": viewState,
      "edit": editState,
      "default": editState
    };

    return renderTypes[this.state.mode] || renderTypes["default"];

  }
}

export default EditableListBox;
