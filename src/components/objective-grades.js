import React, { Component } from 'react';

import { Panel, Button, ListGroup, Form, FormControl, FormGroup } from 'react-bootstrap';
import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';

import uuid from 'uuid';

import EditableListBox from './editable-listbox';
import ObjectiveGrade from './objective-grade';

class Grades extends Component {
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
        /*let items = [];

        if (this.props.listItems) {
            items = this.props.listItems.map((item) => {

              return (
                <ObjectiveGrade key={item.id} 
                    listItem={item} 
                    update={this.props.updateListItem}
                    remove={this.removeListItem.bind(this)}
                    decisionId={this.props.decision.decisionId}/>
              );                     
            });
        }*/

        /*const sortableList = SortableContainer(({items}) => {
          return (
            <ListGroup>
              {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
              ))}
            </ListGroup>
          )
        });*/

        return (
            <Panel>
                <h3>{this.props.panelTitle}</h3>
                <p>{this.props.panelText}</p>
                {/*{sortableList}*/}
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

class SortableGrades extends Component {
  constructor(props) {
    super(props);
    this.state = { grades: this.props.grades};
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.grades, oldIndex, newIndex),
    });
  };
  render() {
    return <Grades items={this.state.grades} onSortEnd={this.onSortEnd}/>;
  }  

}

export default SortableGrades;
