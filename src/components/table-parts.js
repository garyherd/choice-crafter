import React, { Component } from 'react';

class TableHeaders extends Component {
    render() {
        const headers = this.props.objectArray.map(_object => {
            let title = _object.title ? _object.title : "No title";
            return <th key={_object.id}>{title}</th>;
        });

        return (
            <thead>
                <tr>
                    <th></th>
                    {headers}   
                </tr>
            </thead>
        );
    }
}

export { TableHeaders };