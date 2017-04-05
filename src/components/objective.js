import React, { Component } from 'react';

import { Row, Col, Panel, Button, ListGroupItem, Form, FormControl, FormGroup, Checkbox, ControlLabel } from 'react-bootstrap';
import SortableGrades from './objective-grades';

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

    handleSubmit(e) {
      e.preventDefault();    
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
        let listItem = null;
        /*let grades = (
            <EditableListBoxes
                decision={decision} //this might need to be objective
                updateListItem={} //this.props.updateGrades
                addListItem={} //this.props.addGrade
                removeListItem={} //this.props.removeGrade
                panelTitle="Grades"
                panelText=""
                listItems={} //this.props.grades
                itemsType="grades"/>
        )*/

        if (this.state.mode === "view") {
            listItem = (
                <ListGroupItem onClick={this.handleClick}>{this.state.title}</ListGroupItem>
            );
        } else {
            listItem = (
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
                    <Checkbox
                        name="isNumericScale" 
                        checked={this.state.isNumericScale} 
                        onChange={this.handleInputChange}>
                        Use a numeric scale
                    </Checkbox>
                    <p>Alternative scale in rank order</p>                    
                    <Row>
                        <Col sm={6}>
                            <ol>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                            </ol>
                        </Col>
                    </Row>
                    <Button bsStyle="primary" bsSize="small" onClick={this.handleClick}>Save</Button>
                    <Button bsStyle="danger" bsSize="small" onClick={this.handleRemoveItem.bind(this, this.props.listItem.id)} className="pull-right">Delete</Button>

                </Panel>
            );
        }

        return (
            <div>{listItem}</div>
        );
    }
}

export default Objective;
