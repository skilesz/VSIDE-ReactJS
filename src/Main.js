import React, { Component } from 'react'
import logo from './logo.svg';

class Main extends Component{

  render(){
    if(this.props.number==="2") {
      return(
        <div className="Main">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      );
    } else {
      return(
        <div className="Main">
          Yo.
        </div>
      )
    }
  }
}
export default Main;