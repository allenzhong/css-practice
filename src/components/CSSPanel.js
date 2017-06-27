import React, { Component } from 'react';
import Highlight from 'react-highlight';
import './CSSPanel.css';
import '../../node_modules/highlight.js/styles/ocean.css';

export default class CSSPanel extends Component {
  render() {
    let myString = '.textfield {\n\
      position: relative;\n\
      overflow: visible;\n\}'
    return(
      <div>
        <Highlight className='css'>
          {myString}
        </Highlight>
      </div> 
    )
  }
}
