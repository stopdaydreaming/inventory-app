import React from 'react';

const addNode = (index, e) => {
  const nodes = Object.assign([], this.state.nodes);
  nodes.push(index, 1);
  this.setState({nodes:nodes});
}

export default function StatusTable(props){
  return(
    <table>
    <thead>
      <tr>
        <th>Status</th>
        <th>Type</th>
        <th>IP Address</th>
      </tr>
    </thead>
    <tbody>
      {
        props.data.map(row => (
          <tr>
            <td>{row.status}</td>
            <td>{row.type}</td>
            <td>{row.ip}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
  )
}
