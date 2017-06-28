import React, { Component } from 'react';
import CSSPanel from './CSSPanel';
import "./TextField.css";

export default class TextField extends Component {
  render() {
    return(
      <div>
        <div className="textfield">
          <input type='text' placeholder="click to show">
          </input> 
          <span className="callout">ToolsTip</span>
        </div>
        <CSSPanel cssString={this.props.cssString} />      
      </div>
    )
  }
}

export const defaultTextFieldCss = '.textfield {\n\
  position: relative;\n\
  overflow: visible;\n\
}\n\
\n\
.textfield input {\n\
  width: 100px;\n\
}\n\
\n\
.textfield input + .callout {\n\
  visibility: hidden;\n\
  display: none;\n\
}\n\
\n\
.textfield input:focus + .callout {\n\
  display: block;\n\
  width: 100px;\n\
  padding-left: 0.5em;\n\
  border-radius: 0.2em;\n\
  color: white;\n\
  background: black;\n\
  visibility: visible;\n\
  position: absolute;\n\
  top: 150%;\n\
  left: 0;\n\
}\n\
\n\
.textfield input + .callout::before {\n\
  visibility: visible;\n\
  content: " ";\n\
  position: absolute;\n\
  top: -50%;\n\
  left: 20%;\n\
  margin-right: -5px;\n\
  border-width: 5px;\n\
  border-style: solid;\n\
  border-color: transparent transparent black transparent;\n\}'
