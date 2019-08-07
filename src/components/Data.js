import React, { Component } from 'react';

export default class Data extends Component {
  state = {
    
  
 


  };
  
  render() {
    return (
      <>
      <tr>
    <td >{this.props.data.number}</td>
     <td >{this.props.data.name}</td>
     <td >{this.props.data.color}</td>
     <td >{this.props.data.Food}</td>
     <td >S:{this.props.data.location.S}-R:{this.props.data.location.S}</td>
     <td>
      <input type="text" name="section" onChange={this.props.func} />
      <input type="text" name="room" onChange={this.props.func} />
    <button  onClick={this.props.ch} >change location</button>
     </td>
     
    </tr>
      </ >
    );
  }
}
