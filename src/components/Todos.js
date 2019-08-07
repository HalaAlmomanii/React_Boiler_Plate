import React, { Component } from 'react';
import Data from './Data';

export default class Todos extends Component {
  state = {
  
  };

  
  
  render() {
    return (
      <>
     
      <table className="table " >
<thead>
    <tr>
      <th >#</th>
      <th >Name</th>
      <th >color</th>
      <th >food</th>
      <th >location</th>
      <th >update</th>
    </tr>
  </thead>
<tbody>
  
 {this.props.row.map(elem =>
<Data key={elem.number} data={elem} ch={this.props.fun} func={this.props.inp} /> ) }


</tbody>
     </table>
   

     </>
    );
  }
}
