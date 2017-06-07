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

class TableRows extends Component {
  render() {

    const rows = this.props.objectXarray.map(x =>
      <tr key={x.id}>
        <td><strong>{x.title}</strong></td>
        {this.props.objectYarray.map(y =>
          <td key={y.id}>{this.props.getConsequence(y.title, x.title).score}</td>
        )}
      </tr>
    )

     return <tbody>{rows}</tbody>
  }

 

}

export { TableHeaders, TableRows };