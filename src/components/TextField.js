import React, { Component } from 'react';
import "./TextField.css";

export default class TextField extends Component {
  render() {
    return(
      <div className="textfield">
        <input type='text' placeholder="click to show">
        </input> 
        <span className="callout">ToolsTip</span>
      </div>
    )
  }
}
