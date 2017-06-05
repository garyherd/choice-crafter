import React, { Component } from 'react';

class TableHeaders extends Component {
    render() {
        const headers = this.props.objectArray.map(_object => {
            return <th key={_object.id}>{_object.title || "No title"}</th>;
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