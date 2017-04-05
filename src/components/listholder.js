import React, { Component } from 'react';

import { Panel, Button, ListGroupItem, Form, FormControl, FormGroup, Checkbox, ControlLabel } from 'react-bootstrap';

import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';

// const DragHandle = SortableHandle(() => <span>:: </span>);

const cursorStyle = {
  cursor: 'ns-resize'
}

const SortableItem = SortableElement(({value}) =>
  <ListGroupItem style={cursorStyle}>{value}</ListGroupItem>
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

class SortableComponent extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd}/>;
  }
}

class ListHolder extends Component {
  render() {

    return (
      <div>
        This is the ListHolder component
      </div>
    );
  }
}

export default ListHolder;