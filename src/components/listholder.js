import React, { Component } from 'react';

import { Panel, Button, ListGroupItem, ListGroup, Form, FormControl, FormGroup, Checkbox, ControlLabel } from 'react-bootstrap';

import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';

import ObjectiveGrade from './objective-grade';

// const DragHandle = SortableHandle(() => <span>:: </span>);

const cursorStyle = {
  cursor: 'ns-resize'
}

const SortableGrade = SortableElement(ObjectiveGrade);

const SortableItem = SortableElement(({value}) =>
  <li style={cursorStyle}>{value}</li>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

const SortableGradeList = SortableContainer(({items}) => {
  return (
    <ListGroup>
      {items.map((item, index) => (
        <SortableGrade key={item.id} index={index} title={item.title} />
      ))}
    </ListGroup>
  );
});

class SortableGradesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {items: this.props.items, newGrade: {title: "", description: ""}};
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {

    const addButton = (
      <Button onClick={this.addItem} bsStyle="primary" bsSize="small">Add</Button> 
    );

    return (

        <Panel header="Alternative scale in rank order">
          <SortableGradeList items={this.state.items} onSortEnd={this.onSortEnd}/>
          <div className="form-inline">
            <FormGroup controlId="newObjective">
                <FormControl
                    type="text"
                    name="title"
                    placeholder="Enter new grade"
                    onChange={this.handleInputChange}
                    value={this.state.newGrade.title || ''}
                />
            </FormGroup>
            {addButton}
          </div>                  
        </Panel>        
    );
  }
}

class SortableComponent extends Component {
  state = {
    items: ['Sometimes', 'Maybe', 'Always'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return (
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd}/>
    );
  }
}

class ListHolder extends Component {
  render() {

    return (
      <div>
        <SortableComponent/>
      </div>
    );
  }
}

export {ListHolder, SortableItem, SortableList, SortableGradesComponent, SortableGrade};