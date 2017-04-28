import React, { Component } from 'react';

import { Row, Col, Table, Form, FormControl, FormGroup, Button } from 'react-bootstrap';

class EditableCell extends Component {
    constructor(props) {
        super(props);
        this.state = {mode: "view", data: this.props.cellData};
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
        const value = target.value
        this.setState({cellData: event.target.value});
    }    

    render() {

        let data = null;

        if (this.state.mode === "view") {
            data = (<div onClick={this.handleClick}>{this.state.data}</div>);
        } else {
            data = (
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="editCellData">
                        <FormControl
                            type="text"
                            name="title"
                            value={this.state.cellData}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>
                    <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleClick}>Save</Button>
                </Form>
            );            
        }

        return (
            <td>{data}</td>
        );
    }
}


class ConsequencesTable extends Component {

    render() {

        let headers = this.props.objectives.map((objective) => 
            <th key={objective.id}>{objective.title}</th>
        );

        let scales = this.props.objectives.map((objective) => 
            // <td key={objective.id}><input type="text" value={objective.scale} className="form-control"/></td>
            <EditableCell key={objective.id} cellData={objective.scale} />
        );

        let minsMaxs = this.props.objectives.map((objective) => 
            <td key={objective.id}>{objective.minMax}</td>
        );

        let units = this.props.objectives.map((objective) => 
            <td key={objective.id}>{objective.unit}</td>
        );               

        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        {headers}    
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td><strong>Scale</strong></td>
                        {scales}
                    </tr>
                    <tr>
                        <td><strong>Min/Max</strong></td>
                        {minsMaxs}
                    </tr>
                    <tr>
                        <td><strong>Unit</strong></td>
                        {units}
                    </tr>
                </tbody>
            </Table>
        );
    }
}




class Consequences extends Component {

    render() {

        let table = <ConsequencesTable objectives={this.props.decision.objectives} />;

        return (
            <div>
                {table}
            </div>
        );
    }
}

export { Consequences };