import React, { Component } from 'react';
import Todos from './components/Todos';


export default class App extends Component {
  state = {
 row:[
    {number:1,name:"hala",color:"red",Food:"pizza",location:{S:4,R:5}},
    {number:2,name:"Ahmad",color:"pink",Food:"tomato",location:{S:5,R:3}},
    {number:3,name:"Moh",color:"orange",Food:"pasta",location:{S:1,R:1}},
    {number:4,name:"rami",color:"black",Food:"rice",location:{S:2,R:7}},
 ],
 

  };

  changelocation=()=>{
 var  x=this.state.row.map((elem)=>{
elem.location.S=this.state.k
return elem})

this.setState({x})
 }



 
  

  changeinp=(e)=>{
 let z=e.target.value
 this.setState({k:z})
 console.log(z)
 
  }
  
  render() {
    return (
      <>
        <h1>Dragonz Zoo</h1>
       <Todos row={this.state.row} fun={this.changelocation} inp={this.changeinp}/>
         
    </ >
    );
  }
}
