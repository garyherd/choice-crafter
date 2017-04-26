import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import Problem from './problem';



class Consequences extends Component {

    products = [];

    addProducts(quantity) {
        const startId = this.products.length;
        for (let i = 0; i < quantity; i++) {
            const id = startId + i;
            this.products.push({
            id: id,
            name: 'Item name ' + id,
            price: 2100 + i
            });
        }
    }

    render() {

        this.addProducts(5);

        return (
            <BootstrapTable data={ this.products }>
                <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export { Consequences };